import type {
  HttpClient,
  HttpResponse,
  RequestOptions,
} from '@lib/interfaces/HttpClient';

export class FetchAdapter implements HttpClient {
  public request(options: RequestOptions): Promise<HttpResponse> {
    return new Promise((resolve, reject) => {
      const initialTime = Date.now();

      fetch(options.endpoint, {
        method: options.method,
        headers: {
          accept: 'application/json',
        },
      })
        .then(async (res) => {
          const json = await res.json();
          const headers: HttpResponse['headers'] = {};

          res.headers.forEach((value, name) => {
            headers[name] = value;
          });

          resolve({
            statusCode: res.status,
            statusText: res.statusText,
            headers: headers,
            data: json,
            size: new Blob([JSON.stringify(json), JSON.stringify(headers)], {
              type: 'application/json',
            }).size,
            elapsedTime: Date.now() - initialTime,
          });
        })
        .catch(reject);
    });
  }
}
