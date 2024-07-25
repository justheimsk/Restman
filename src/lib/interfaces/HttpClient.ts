export type HTTP_METHODS = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export interface RequestOptions {
  method: HTTP_METHODS;
  endpoint: string;
  headers?: { [key: string]: string };
}

export interface HttpResponse {
  data: unknown;
  status: number;
  headers: { [key: string]: string };
}

export interface HttpClient {
  request: (options: RequestOptions) => Promise<HttpResponse>;
}
