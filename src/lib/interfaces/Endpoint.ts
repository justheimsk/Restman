import type { HTTP_METHODS } from '@lib/types/HTTP_METHODS';

export interface IEndpoint {
  id: string;
  name: string;
  url: string;
  method: HTTP_METHODS;
  active: boolean;
}
