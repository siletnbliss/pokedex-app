import { useQuery, UseQueryResult } from 'react-query';

import { API_HOST } from '../utils/constants';

interface Config {
  api?: 'pokemon' | 'blank';
}

export type Map<From, To> = (r: From) => To;

const fetcher = async <R, M>(url: string, map?: Map<M, R>): Promise<R> => {
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

type HookResponse<R, E> = UseQueryResult<R, E>;

export function useFetcher<R, M = unknown, E = Error>(
  key: string,
  config: Config = {
    api: 'pokemon',
  },
  map?: Map<M, R>
): HookResponse<R, E> {
  let baseUrl: string;
  if (!key.startsWith('/') && config.api !== 'blank') key = '/' + key;

  switch (config.api) {
    case 'pokemon':
      baseUrl = API_HOST;
      break;
    case 'blank':
      baseUrl = '';
      break;
    default:
      baseUrl = API_HOST;
  }
  const url = baseUrl + key;
  const info = useQuery<R, E>(url, async () => fetcher<R, M>(url, map));

  return {
    ...info,
  };
}
