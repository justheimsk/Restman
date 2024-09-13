import { FaVectorSquare } from 'react-icons/fa';
import './Sidebar.style.scss';
import { SidebarButton } from '@components/Layout';
import { GoHistory } from 'react-icons/go';
import { MdOutlineInbox } from 'react-icons/md';
import { TbCategoryPlus } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks';
import { toggleMenu } from '../../../store/layoutSlice';

export function Sidebar() {
  const dispatch = useDispatch();
  const menuState = useAppSelector((state) => state.layout.menuState);

  return (
    <>
      <div id="layout--sidebar">
        <SidebarButton onClick={() => dispatch(toggleMenu())} active={menuState} icon={<MdOutlineInbox />} label="Collections" />
        <SidebarButton icon={<FaVectorSquare />} label="Environments" />
        <SidebarButton icon={<GoHistory />} label="History" />
        <div className="layout--sidebar--divider" />
        <SidebarButton icon={<TbCategoryPlus />} />
      </div>
    </>
  );
}
