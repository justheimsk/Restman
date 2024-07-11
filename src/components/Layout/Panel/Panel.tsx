import { FaPlus } from 'react-icons/fa6';
import { Endpoint } from '@components/Layout';
import './Panel.style.scss';
import { PiDotsThreeOutline } from 'react-icons/pi';

export function Panel() {
  return (
    <>
      <div id="layout--panel">
        <div id="layout--panel--actions">
          <i>
            <FaPlus />
          </i>
          <div id="panel--actions--search">
            <input type="text" />
          </div>
          <i>
            <PiDotsThreeOutline />
          </i>
        </div>
        <div id="layout--panel--folders">
          <Endpoint type="folder" label="Unnamed">
            <Endpoint label="Unnamed request" type="endpoint" method="get" />
            <Endpoint label="Unnamed request" type="endpoint" method="post" />
            <Endpoint label="Unnamed request" type="endpoint" method="delete" />
            <Endpoint label="Unnamed request" type="endpoint" method="patch" />
          </Endpoint>
          <Endpoint type="folder" label="Unnamed" />
        </div>
      </div>
    </>
  );
}
