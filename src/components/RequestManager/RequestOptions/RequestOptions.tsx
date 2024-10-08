import { useEffect, useState } from 'react';
import './RequestOptions.style.scss';
import { Table } from '@components/Table';
import { OptionTab } from '../OptionsTab/OptionTab';

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

  useEffect(() => {
    function calcMaxHeight() {
      const el = document.getElementById('request-options-table');
      const response = document.getElementById('response');
      const request = document.getElementById('request');
      const input = document.getElementById('input--container');

      if (!el || !response || !request || !input) return;
      const maxHeight =
        window.innerHeight -
        40 -
        48 -
        response.offsetHeight -
        input.offsetHeight -
        75;

      el.style.maxHeight = `${maxHeight}px`;
      el.scroll({ top: Number.MAX_SAFE_INTEGER, behavior: 'smooth' });
    }

    window.restman.events.optionsMaxHeight.subscribe(() => {
      setTimeout(() => calcMaxHeight());
    });
  }, []);

  return (
    <>
      <div id="request-options">
        <div>
          {options.map((opt) => (
            <OptionTab
              key={opt.id}
              label={opt.label}
              id={opt.id}
              active={active === opt.id}
              onClick={() => setActive(opt.id)}
            />
          ))}
        </div>
        <span id="request--cookies">Cookies</span>
      </div>
      <div id="request-options-table" className="scrollbar">
        <Table
          onRowCreation={() => window.restman.events.optionsMaxHeight.notify()}
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
