import {
  RequestInput,
  RequestOptions,
  RequestResponse,
} from '@components/RequestManager';
import './RequestManager.style.scss';

export function RequestManager() {
  return (
    <>
      <div id="request">
        <div className="layout__pm">
          <RequestInput />
          <RequestOptions />
        </div>
        <RequestResponse />
      </div>
    </>
  );
}
