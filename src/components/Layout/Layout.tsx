import { CiUser } from 'react-icons/ci';
import './Layout.style.scss';
import { Button } from '@components/Button';
import { Header, Panel, Sidebar, Tab } from '@components/Layout';
import { RequestManager } from '@components/RequestManager';
import { useEffect } from 'react';
import React from 'react';
import { FaAngleDown, FaPlus, FaVectorSquare } from 'react-icons/fa6';
import { GiBinoculars, GiHamburgerMenu } from 'react-icons/gi';
import { RiFileListLine } from 'react-icons/ri';
import { useAppSelector } from '../../hooks';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../store/layoutSlice';

export function Layout() {
  const tabs = useAppSelector((state) => state.layout.tabs);
  const endpoints = useAppSelector((state) => state.layout.endpoints);
  const menuState = useAppSelector((state) => state.layout.menuState);
  const dispatch = useDispatch();

  function scrollX(e: React.WheelEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    e.preventDefault();

    el.scrollTo({
      left: el.scrollLeft - e.deltaY,
      behavior: 'auto',
    });
  }

  useEffect(() => {
    window.restman.client.registerAllEndpoints(true);
  }, []);

  return (
    <>
      <div id="layout--container">
        <div className="layout__flex">
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
          </div>
          <div className="layout--column layout--right">
            <Header secondary>
              <div
                onWheel={scrollX}
                className="layout__flex layout--tabs layout__hfull layout__mgap layout__items-center"
              >
                {tabs.map((tab) => (
                  <React.Fragment key={tab.id}>
                    <Tab
                      label={
                        endpoints.find((e) => e.id === tab.endpointId)?.name ||
                        ''
                      }
                      active={
                        endpoints.find((e) => e.id === tab.endpointId)?.active
                      }
                      icon={<GiBinoculars />}
                      onClick={() =>
                        window.restman.client.activateEndpoint(tab.endpointId)
                      }
                    />
                    <div className="layout--divider" />
                  </React.Fragment>
                ))}
                <i className="layout--header--button">
                  <FaPlus />
                </i>
              </div>
              <div className="layout__flex layout__hfull layout__mgap min-w layout__items-center">
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
          </div>
        </div>
        <div className="layout__flex">
          <div className="layout__flex">
            <Sidebar />
            <Panel active={menuState} />
          </div>
          <div className="layout__hfull2">
            <RequestManager />
          </div>
        </div>
      </div>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div onClick={() => dispatch(toggleMenu())} id="mobile-menu-toggle">
        <GiHamburgerMenu />
      </div>
    </>
  );
}
