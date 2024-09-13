import { Endpoint } from '@components/Layout';
import { FaPlus } from 'react-icons/fa6';
import './Panel.style.scss';
import { PiDotsThreeOutline } from 'react-icons/pi';
import { useAppSelector } from '../../../hooks';

export interface PanelProps {
  active?: boolean;
}

export function Panel(props: PanelProps) {
  const endpoints = useAppSelector((state) => state.layout.endpoints);

  function addEndpoint() {
    window.restman.client.createEndpoint('Unnamed request', 'get');
  }

  return (
    <>
      <div
        id="layout--panel"
        className={`${props.active ? 'layout--panel__active' : ''}`}
      >
        <div id="layout--panel--actions">
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <i onClick={() => addEndpoint()}>
            <FaPlus />
          </i>
          <div id="panel--actions--search">
            <input type="text" />
          </div>
          <i>
            <PiDotsThreeOutline />
          </i>
        </div>
        <div id="layout--panel--folders" className="scrollbar">
          {endpoints.map((e) => (
            <Endpoint
              onClick={() => window.restman.client.activateEndpoint(e.id)}
              label={e.name}
              method={e.method}
              type="endpoint"
              key={e.id}
              active={e.active}
            />
          ))}
        </div>
      </div>
    </>
  );
}
