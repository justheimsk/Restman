import { FaAngleDown } from 'react-icons/fa6';
import './RequestResponse.style.scss';
import { useState } from 'react';

export function RequestResponse() {
  const [active, setActive] = useState(true);

  return (
    <>
      <div id="response" className={`${active ? 'response__active' : ''}`}>
        <div id="response--header">
          <span>Response</span>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <i onClick={() => setActive(!active)}>
            <FaAngleDown />
          </i>
        </div>
      </div>
    </>
  );
}
