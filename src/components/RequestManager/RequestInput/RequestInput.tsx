import { useState } from 'react';
import './RequestInput.style.scss';
import { Loader } from '@components/Loader/Loader';
import type { HTTP_METHODS } from '@lib/types/HTTP_METHODS';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { set } from '../../../store/httpResponse';

export function RequestInput() {
  const [method, setMethod] = useState<HTTP_METHODS>('get');
  const [requestLoading, setRequestLoading] = useState(false);
  const endpoint = useAppSelector((state) =>
    state.layout.endpoints.find((e) => e.active),
  );
  const dispatch = useAppDispatch();

  async function sendRequest() {
    try {
      setRequestLoading(true);

      const res = await window.restman.http.request({
        endpoint: endpoint?.url || '',
        method: method,
      });

      dispatch(set(res));
    } catch (err) {
      console.log(err);
    } finally {
      setRequestLoading(false);
    }
  }

  return (
    <>
      <div id="input--container">
        <div id="input--inner-container">
          <select
            onChange={(e) => setMethod(e.target.value as HTTP_METHODS)}
            name="method"
            id="input--method-select"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
          </select>
          <input
            onChange={(e) =>
              endpoint
                ? window.restman.client.updateEndpoint(
                    endpoint.id,
                    e.target.value,
                  )
                : {}
            }
            value={endpoint?.url}
            type="text"
            id="input"
            placeholder="Enter url or paste text"
          />
        </div>
        <button
          disabled={requestLoading}
          onClick={sendRequest}
          type="button"
          id="input--button"
        >
          {requestLoading ? <Loader /> : <span>Send</span>}
        </button>
      </div>
    </>
  );
}
