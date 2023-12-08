import {
  useInfiniteQuery,
  useMutation,
  useQueries,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query';
import axios from 'axios';

import { API_HOST, AUTH_HOST } from '../utils/constants';

type APIs = 'pokemon' | 'blank' | 'auth';
interface Config<Result, Raw = Result> {
  api?: APIs;
  map?: Map<Raw, Result>;
}

export type Map<From, To> = (r: From) => To;
type ExtendedQueryKey = string | number | Record<string, any>;

interface FetcherConfig {
  method?: 'post' | 'get' | 'put' | 'delete';
}

export const fetcher = async <R, M>(
  url: string,
  map?: Map<M, R>,
  config: FetcherConfig = { method: 'get' }
): Promise<R> => {
  try {
    const res = await fetch(url, { method: config.method });

    if (!res.ok) {
      throw new Error('Fetch error');
    }
    const data = await res.json();
    if (map) {
      return map(data);
    }
    return data as R;
  } catch (error) {
    throw error;
  }
};

const reduceKey = (k: ExtendedQueryKey[]): string => {
  let params = '?';

  let reduced = k.reduce<string>((prev, curr) => {
    if (typeof curr === 'string') {
      return prev + '/' + curr;
    } else {
      if (typeof curr === 'object') {
        Object.entries(curr).forEach(([key, value]) => {
          params += `${key}=${value}&`;
        });
      }
      return prev;
    }
  }, '');

  reduced = reduced.slice(1);

  return params.length > 1 ? reduced + params.slice(0, -1) : reduced;
};

const parseKey = (k: ExtendedQueryKey[], api?: APIs) => {
  let baseUrl: string;
  let reduced = reduceKey(k);
  if (!reduced.startsWith('/') && api !== 'blank') reduced = '/' + reduced;
  switch (api) {
    case 'pokemon':
      baseUrl = API_HOST;
      break;
    case 'auth':
      baseUrl = AUTH_HOST;
      break;
    case 'blank':
      baseUrl = '';
      break;
    default:
      baseUrl = API_HOST;
  }
  return baseUrl + reduced;
};

const DEFAULT_OPTIONS = {
  refetchOnMount: false,
  refetchOnReconnect: false,
  staleTime: Infinity,
};

export function useFetcherList<R, M = R, E = Error>(
  key: ExtendedQueryKey[][],
  { api, map }: Config<R, M>
) {
  const queries = key.map<UseQueryOptions<R, E, R, ExtendedQueryKey[]>>((k) => {
    return { queryKey: k, queryFn: () => fetcher(parseKey(k, api), map), ...DEFAULT_OPTIONS };
  });
  const results = useQueries({ queries: queries.length ? queries : [] });
  const isLoading = results.some((q) => q.isLoading);
  const isError = results.some((q) => q.isError);

  return { results, isLoading, isError };
}

export function useFetcher<Result, Mapped = Result, Err = Error>(
  key: ExtendedQueryKey[],
  { api, map }: Config<Result, Mapped>
) {
  const url = parseKey(key, api);
  const info = useQuery<Result, Err, Result, ExtendedQueryKey[]>({
    queryKey: key,
    queryFn: async () => fetcher<Result, Mapped>(url, map),
    ...DEFAULT_OPTIONS,
  });
  return {
    ...info,
  };
}

type KeyExtractor<R> = (k: R) => ExtendedQueryKey | undefined;

interface InfiniteConfig<R, M> extends Config<R, M> {
  keyExtractors: { next: KeyExtractor<R>; previous?: KeyExtractor<R> };
  maxPages?: number;
}

export function useInfiniteFetcher<Result, Mapped = Result>(
  key: ExtendedQueryKey[],
  { api, map, keyExtractors, maxPages }: InfiniteConfig<Result, Mapped>
) {
  const result = useInfiniteQuery({
    queryKey: key,
    initialPageParam: {},
    ...DEFAULT_OPTIONS,
    queryFn: ({ pageParam }) => {
      return fetcher<Result, Mapped>(parseKey([...key, pageParam], api), map);
    },
    getNextPageParam: (lastPage, pages) => {
      return keyExtractors.next(lastPage);
    },
    getPreviousPageParam: (page, pages) => {
      if (!keyExtractors.previous) return;
      return keyExtractors.previous(page);
    },
    maxPages,
  });

  return { ...result };
}

type MutatorConfig<Result> = Omit<Config<Result>, 'map'> & FetcherConfig;
type MutationMethod = 'post' | 'put';

export const useMutator = <Result, Param>(
  key: ExtendedQueryKey[],
  { method = 'post', api }: MutatorConfig<Result>
) => {
  const url = parseKey(key, api);
  const mutation = useMutation({
    mutationFn: async (dto: Param) => {
      const res = await axios[method as MutationMethod](url, dto);
      return res.data as Result;
    },
  });
  return { ...mutation };
};
