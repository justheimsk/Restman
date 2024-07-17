import { useState } from 'react';
import './RequestOptions.style.scss';
import { Table } from '@components/Table';

const options = [
  {
    id: 0,
    label: 'Params',
  },
  {
    id: 1,
    label: 'Headers',
  },
  {
    id: 2,
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
        <Table
          head={['Key', 'Value', 'Description']}
          body={[
            {
              id: `${Math.random() * 999}`,
              fields: ['Key', 'Value', 'Description'],
            },
          ]}
        />
      </div>
    </>
  );
}
