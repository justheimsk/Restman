import { FaBox, FaClock, FaCog } from 'react-icons/fa';
import './Sidebar.style.scss';
import { SidebarButton } from '@components/Layout';

export function Sidebar() {
  return (
    <>
      <div id="layout--sidebar">
        <SidebarButton active icon={<FaBox />} label="Collections" />
        <SidebarButton icon={<FaCog />} label="Environments" />
        <SidebarButton icon={<FaClock />} label="History" />
      </div>
    </>
  );
}
