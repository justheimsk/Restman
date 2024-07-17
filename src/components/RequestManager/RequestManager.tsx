import { RequestInput, RequestOptions } from '@components/RequestManager';
import './RequestManager.style.scss';

export function RequestManager() {
  return (
    <>
      <RequestInput />
      <RequestOptions />
    </>
  );
}
