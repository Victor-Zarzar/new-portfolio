export type CacheOptions<T> = {
  key: string;
  ttl?: number;
  fetcher: () => Promise<T>;
};
