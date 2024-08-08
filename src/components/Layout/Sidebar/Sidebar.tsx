import { FaVectorSquare } from 'react-icons/fa';
import './Sidebar.style.scss';
import { SidebarButton } from '@components/Layout';
import { GoHistory } from 'react-icons/go';
import { MdOutlineInbox } from 'react-icons/md';
import { TbCategoryPlus } from 'react-icons/tb';

export function Sidebar() {
  return (
    <>
      <div id="layout--sidebar">
        <SidebarButton active icon={<MdOutlineInbox />} label="Collections" />
        <SidebarButton icon={<FaVectorSquare />} label="Environments" />
        <SidebarButton icon={<GoHistory />} label="History" />
        <div className="layout--sidebar--divider" />
        <SidebarButton icon={<TbCategoryPlus />} />
      </div>
    </>
  );
}
