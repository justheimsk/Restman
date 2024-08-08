import { LocalStorageClientAdapter } from './adapters/client/LocalStorageClientAdapter';
import { FetchAdapter } from './adapters/http/fetch';
import { Events } from './events';
import type { HttpClient } from './interfaces/HttpClient';
import type { LibClient } from './interfaces/LibClient';

declare global {
  interface Window {
    restman: {
      events: Events;
      http: HttpClient;
      client: LibClient;
    };
  }
}

window.restman = {
  events: new Events(),
  http: new FetchAdapter(),
  client: new LocalStorageClientAdapter(),
};
