import type { IEndpoint } from '@lib/interfaces/Endpoint';
import type { LibClient } from '@lib/interfaces/LibClient';
import type { HTTP_METHODS } from '@lib/types/HTTP_METHODS';
import {
  activateEndpoint,
  pushEndpoint,
  setUrl,
} from '../../../store/layoutSlice';
import store from '../../../store/store';

export class LocalStorageClientAdapter implements LibClient {
  private static localStorageKey = 'endpoints';

  private _readEndpoints(): IEndpoint[] {
    const endpoints = localStorage.getItem(
      LocalStorageClientAdapter.localStorageKey,
    );
    if (endpoints) {
      return JSON.parse(endpoints);
    }

    return [];
  }

  private _writeEndpoints(endpoint: IEndpoint) {
    const endpoints = this._readEndpoints();
    endpoints.push(endpoint);

    localStorage.setItem(
      LocalStorageClientAdapter.localStorageKey,
      JSON.stringify(endpoints),
    );
  }

  private _overwriteEndpoints(endpoints: IEndpoint[]) {
    localStorage.setItem(
      LocalStorageClientAdapter.localStorageKey,
      JSON.stringify(endpoints),
    );
  }

  public async createEndpoint(name: string, method: HTTP_METHODS) {
    if (!name || !method) throw new Error('Missing name or method');

    const id = `${Math.floor(Math.random() * 999999)}`;
    const endpoint: IEndpoint = {
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      name,
      id,
      method,
      active: false,
    };

    store.dispatch(pushEndpoint([endpoint]));
    this._writeEndpoints(endpoint);

    return id;
  }

  public async activateEndpoint(id: string) {
    const endpoints = this._readEndpoints();
    if (endpoints.length) {
      const endp = endpoints.find((e) => e.id === id);
      if (endp) {
        const actives = endpoints.filter((e) => e.active);
        for (const act of actives) {
          act.active = false;
        }

        endp.active = true;
        this._overwriteEndpoints(endpoints);
        store.dispatch(activateEndpoint(id));
      }
    }
  }

  public async registerAllEndpoints(createInitialEndpoint = true) {
    const endpoints = this._readEndpoints();
    if (endpoints.length) {
      store.dispatch(pushEndpoint(endpoints));

      const active = endpoints.find((e) => e.active);
      if (active) store.dispatch(activateEndpoint(active.id));
    } else if (createInitialEndpoint) {
      await this.activateEndpoint(
        await this.createEndpoint('Unnamed endpoint', 'get'),
      );
    }
  }

  public async updateEndpoint(id: string, url: string) {
    const endpoints = this._readEndpoints();
    if (endpoints.length) {
      const endp = endpoints.find((e) => e.id === id);
      if (endp) {
        endp.url = url;
        store.dispatch(setUrl({ id, url }));
        this._overwriteEndpoints(endpoints);
      }
    }
  }
}
