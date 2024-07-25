import { FetchAdapter } from './adapters/http/fetch';
import { Events } from './events';
import type { HttpClient } from './interfaces/HttpClient';

declare global {
  interface Window {
    restman: {
      events: Events;
      http: HttpClient;
    };
  }
}

window.restman = {
  events: new Events(),
  http: new FetchAdapter(),
};
