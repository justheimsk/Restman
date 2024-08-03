export type HTTP_METHODS = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

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
