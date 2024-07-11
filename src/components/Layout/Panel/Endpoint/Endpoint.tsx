import { FaAngleDown } from 'react-icons/fa6';
import './Endpoint.style.scss';
import { PiDotsThreeOutline } from 'react-icons/pi';
import {
  TbHttpDelete,
  TbHttpGet,
  TbHttpPatch,
  TbHttpPost,
  TbHttpPut,
} from 'react-icons/tb';
import { useState } from 'react';

export type EndpointProps = {
  label: string;
  type: 'folder' | 'endpoint';
  method?: 'get' | 'post' | 'put' | 'patch' | 'delete';
  children?: React.ReactNode;
};

export function Endpoint(props: EndpointProps) {
  const [closed, setClosed] = useState(false);

  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        onClick={() => setClosed(!closed)}
        className={`panel--endpoint ${closed ? 'panel--endpoint__closed' : ''}`}
      >
        <div className="panel--endpoint--infos">
          <div>
            {props.type === 'endpoint' ? (
              <i className={`panel--endpoint--${props.method}`}>
                {props.method === 'get' ? (
                  <TbHttpGet />
                ) : props.method === 'post' ? (
                  <TbHttpPost />
                ) : props.method === 'delete' ? (
                  <TbHttpDelete />
                ) : props.method === 'put' ? (
                  <TbHttpPut />
                ) : (
                  <TbHttpPatch />
                )}
              </i>
            ) : (
              <i className="panel--endpoint--angle--icon">
                <FaAngleDown />
              </i>
            )}
            <span>{props.label}</span>
          </div>
          <div className="panel--endpoint--actions">
            <i>
              <PiDotsThreeOutline />
            </i>
          </div>
        </div>
        {props.type === 'folder' && (
          <div className="panel--endpoint--endpoints">{props.children}</div>
        )}
      </div>
    </>
  );
}
