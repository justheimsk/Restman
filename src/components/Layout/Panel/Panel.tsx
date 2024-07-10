import { FaPlus } from 'react-icons/fa6';
import { Folder } from '@components/Layout';
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
          <Folder label="Unnamed" />
          <Folder label="Unnamed" />
        </div>
      </div>
    </>
  );
}
