import { FaAngleDown } from 'react-icons/fa6';
import './Folder.style.scss';
import { PiDotsThreeOutline } from 'react-icons/pi';

export type FolderProps = {
  label: string;
};

export function Folder(props: FolderProps) {
  return (
    <>
      <div className="panel--folder">
        <div>
          <i>
            <FaAngleDown />
          </i>
          <span>{props.label}</span>
        </div>
        <div className="panel--folder--actions">
          <i>
            <PiDotsThreeOutline />
          </i>
        </div>
      </div>
    </>
  );
}
