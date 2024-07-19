import { CiUser } from 'react-icons/ci';
import './Layout.style.scss';
import { Header, Panel, Sidebar, Tab } from '@components/Layout';
import { Button } from '@components/Button';
import { GiBinoculars } from 'react-icons/gi';
import { FaAngleDown, FaPlus, FaVectorSquare } from 'react-icons/fa6';
import { LiaThListSolid } from 'react-icons/lia';
import { RiFileListLine } from 'react-icons/ri';
import { PiDotsThreeOutline } from 'react-icons/pi';
import { RequestManager } from '@components/RequestManager';

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
            <div className="layout--header layout--header__flex">
              <Button active small label="New" />
              <Button active small label="Import" />
            </div>
          </Header>
          <div className="layout__flex">
            <Sidebar />
            <Panel />
          </div>
        </div>
        <div className="layout--column layout--right">
          <Header secondary>
            <div className="layout__flex layout__hfull layout__mgap layout__items-center">
              <Tab active label="Overview" icon={<GiBinoculars />} />
              <div className="layout--divider" />
              <Tab label="Overview" icon={<GiBinoculars />} />
              <div className="layout--divider" />
              <i className="layout--header--button">
                <FaPlus />
              </i>
            </div>
            <div className="layout__flex layout__hfull layout__mgap layout__items-center">
              <i className="layout--header--button">
                <FaAngleDown />
              </i>
              <div className="layout--divider layout--divider__full" />
              <Button
                rightIcon={<FaAngleDown />}
                icon={<FaVectorSquare />}
                label={'No environments'}
              />
              <div className="layout--divider" />
              <i className="layout--header--button">
                <RiFileListLine />
              </i>
            </div>
          </Header>
          <div className="layout__hfull2">
            <RequestManager />
          </div>
        </div>
      </div>
    </>
  );
}
