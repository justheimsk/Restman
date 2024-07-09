import { CiUser } from 'react-icons/ci';
import './Layout.style.scss';
import { Header, Panel, Sidebar } from '@components/Layout';

export function Layout() {
  return (
    <>
      <div id="layout--container">
        <div className="layout--column layout--left">
          <Header>
            <div className="layout--header layout--header__flex layout--header__hover-color">
              <i className="layout--header--decoicon">
                <CiUser />
              </i>
              <span>My Workspace</span>
            </div>
          </Header>
          <div className="layout__flex">
            <Sidebar />
            <Panel />
          </div>
        </div>
        <div className="layout--column layout--right">a</div>
      </div>
    </>
  );
}
