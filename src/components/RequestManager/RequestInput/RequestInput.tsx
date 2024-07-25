import { useState } from 'react';
import './RequestInput.style.scss';
import type { HTTP_METHODS } from '@lib/interfaces/HttpClient';
import { useDispatch } from 'react-redux';
import { set } from '../../../store/httpResponse';

export function RequestInput() {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState<HTTP_METHODS>('GET');
  const dispatch = useDispatch();

  async function sendRequest() {
    try {
      const res = await window.restman.http.request({
        endpoint: url,
        method: method,
      });

      dispatch(set(res.data));
    } catch (err) {
      console.log(err);
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
            type="text"
            id="input"
            placeholder="Enter url or paste text"
          />
        </div>
        <button onClick={sendRequest} type="button" id="input--button">
          Send
        </button>
      </div>
    </>
  );
}
