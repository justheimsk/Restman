import { useState } from 'react';
import './RequestInput.style.scss';
import type { HTTP_METHODS } from '@lib/interfaces/HttpClient';
import { set } from '../../../store/httpResponse';
import { useAppDispatch } from '../../../hooks';
import { Loader } from '@components/Loader/Loader';

export function RequestInput() {
  const [url, setUrl] = useState(
    'https://jsonplaceholder.typicode.com/todos/1',
  );
  const [method, setMethod] = useState<HTTP_METHODS>('GET');
  const [requestLoading, setRequestLoading] = useState(false);
  const dispatch = useAppDispatch();

  async function sendRequest() {
    try {
      setRequestLoading(true);

      const res = await window.restman.http.request({
        endpoint: url,
        method: method,
      });
      dispatch(set(res.data));
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
            onChange={(e) => setUrl(e.target.value)}
            value={url}
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
