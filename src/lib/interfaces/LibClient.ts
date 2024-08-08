import type { HTTP_METHODS } from '@lib/types/HTTP_METHODS';

export interface LibClient {
  createEndpoint: (name: string, method: HTTP_METHODS) => Promise<string>;
  activateEndpoint: (id: string) => Promise<void>;
  registerAllEndpoints: (createInitialEndpoint: boolean) => Promise<void>;
  updateEndpoint: (id: string, url: string) => Promise<void>;
}
