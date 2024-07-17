import { useState } from 'react';
import './RequestOptions.style.scss';

const options = [
  {
    id: 0,
    label: 'Params',
  },
  {
    id: 1,
    label: 'Authorization',
  },
  {
    id: 2,
    label: 'Headers',
  },
  {
    id: 3,
    label: 'Body',
  },
];

export function RequestOptions() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div id="request-options">
        <div>
          {options.map((opt) => (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <span
              className={`${active === opt.id ? 'option__active' : ''}`}
              onClick={() => setActive(opt.id)}
              key={opt.id}
            >
              {opt.label}
            </span>
          ))}
        </div>
        <span id="request--cookies">Cookies</span>
      </div>
      <div id="request-options-table">
        <table>
          <thead>
            <tr>
              <td>Key</td>
              <td>Value</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" placeholder="Key" />
              </td>
              <td>
                <input type="text" placeholder="Value" />
              </td>
              <td>
                <input type="text" placeholder="Description" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
