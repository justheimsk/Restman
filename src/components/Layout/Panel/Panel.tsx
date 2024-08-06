import { FaPlus } from 'react-icons/fa6';
import { Endpoint } from '@components/Layout';
import './Panel.style.scss';
import { PiDotsThreeOutline } from 'react-icons/pi';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { activateEndpoint, pushEndpoint } from '../../../store/layoutSlice';

export function Panel() {
  const endpoints = useAppSelector((state) => state.layout.endpoints);
  const dispatch = useAppDispatch();

  function addEndpoint() {
    const id = `${Math.floor(Math.random() * 999)}`;
    dispatch(
      pushEndpoint({
        name: 'Unnamed request',
        id,
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        active: false,
      }),
    );
    dispatch(activateEndpoint(id));
  }

  return (
    <>
      <div id="layout--panel">
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
              onClick={() => dispatch(activateEndpoint(e.id))}
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
