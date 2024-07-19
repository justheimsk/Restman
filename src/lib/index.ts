import { Events } from './events';

declare global {
  interface Window {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    restman: any;
  }
}

window.restman = {
  events: new Events(),
};
