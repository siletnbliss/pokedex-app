import { QueryKey, useQueries, useQuery, UseQueryOptions } from 'react-query';

import { API_HOST } from '../utils/constants';

type APIs = 'pokemon' | 'blank';
interface Config {
  api?: APIs;
}

export type Map<From, To> = (r: From) => To;
type ExtendedQueryKey = QueryKey | Record<string, any>;

export const fetcher = async <R, M>(url: string, map?: Map<M, R>): Promise<R> => {
  try {
    const res = await fetch(url);

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
  if (k.length === 1) {
    reduced = reduced.slice(1);
  }
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
    case 'blank':
      baseUrl = '';
      break;
    default:
      baseUrl = API_HOST;
  }
  return baseUrl + reduced;
};

export function useFetcherList<R, M = R, E = Error>(
  key: ExtendedQueryKey[][],
  config: Config = { api: 'pokemon' },
  map?: Map<M, R>
) {
  const queries = key.map<UseQueryOptions<R, E, R, ExtendedQueryKey[]>>((k) => {
    return { queryKey: k, queryFn: () => fetcher(parseKey(k, config.api), map) };
  });
  const results = useQueries(queries.length ? queries : []);
  const isLoading = results.some((q) => q.isLoading);
  const isError = results.some((q) => q.isError);
  return { results, isLoading, isError };
}

export function useFetcher<Result, Mapped = Result, Err = Error>(
  key: ExtendedQueryKey[],
  config: Config = { api: 'pokemon' },
  map?: Map<Mapped, Result>
) {
  const url = parseKey(key, config.api);
  const info = useQuery<Result, Err, Result, ExtendedQueryKey[]>(key, async () =>
    fetcher<Result, Mapped>(url, map)
  );
  return {
    ...info,
  };
}
