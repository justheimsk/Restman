import type { HTTP_METHODS } from '@lib/types/HTTP_METHODS';

export interface RequestOptions {
  method: HTTP_METHODS;
  endpoint: string;
  headers?: { [key: string]: string };
}

export interface HttpResponse {
  data: unknown;
  statusCode: number;
  statusText: string;
  headers: { [key: string]: string };
  size: number;
  elapsedTime: number;
}

export interface HttpClient {
  request: (options: RequestOptions) => Promise<HttpResponse>;
}
