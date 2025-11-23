export type Params<T = unknown> = Promise<Record<string, string | undefined> & T>;

export type SearchParams<T = unknown> = Promise<Record<string, string | string[] | undefined> & T>;

export type PageContext<TParams = unknown, TSearchParams = unknown> = {
  params: Params<TParams>;
  searchParams: SearchParams<TSearchParams>;
};