import type {
  HttpClient,
  RequestOptions,
  HttpResponse,
} from '@lib/interfaces/HttpClient';

export class FetchAdapter implements HttpClient {
  public request(options: RequestOptions): Promise<HttpResponse> {
    return new Promise((resolve, reject) => {
      fetch(options.endpoint, {
        method: options.method,
        headers: {
          accept: 'application/json',
        },
      })
        .then(async (res) => {
          resolve({
            status: res.status,
            headers: {},
            data: await res.json(),
          });
        })
        .catch(reject);
    });
  }
}
