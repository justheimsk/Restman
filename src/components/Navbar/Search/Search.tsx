import './Search.style.scss';

import { SlMagnifier } from 'react-icons/sl';

export function Search() {
  return (
    <>
      <div id="search--container">
        <i id="search--icon">
          <SlMagnifier />
        </i>
        <input type="text" placeholder="Search Restman" id="navbar--search" />
      </div>
    </>
  );
}
