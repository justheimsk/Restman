import './Navbar.style.scss';

import { Avatar } from '@components/Avatar';
import { Search } from '@components/Navbar';
import { GoBell } from 'react-icons/go';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';

export function Navbar() {
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
            <GoBell />
          </i>
          <Avatar />
        </div>
      </nav>
    </>
  );
}
