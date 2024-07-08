import './Navbar.style.scss';

import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { SlBell } from 'react-icons/sl';
import { Search } from '@components/Navbar';

export default function Navbar() {
  return (
    <>
      <nav id="navbar">
        <div id="navbar--menu">
          <span>Home</span>
          <span>Workspaces</span>
          <span>API Network</span>
        </div>
        <Search />
        <div id="navbar--actions">
          <i>
            <HiOutlineCog6Tooth />
          </i>
          <i>
            <SlBell />
          </i>
          <div id="account">Conta</div>
        </div>
      </nav>
    </>
  );
}
