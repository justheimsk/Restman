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
import type { HTTP_METHODS } from '@lib/types/HTTP_METHODS';

export type EndpointProps = {
  label: string;
  type: 'folder' | 'endpoint';
  method?: HTTP_METHODS;
  children?: React.ReactNode;
  active?: boolean;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  onClick?: (...args: any) => void;
};

export function Endpoint(props: EndpointProps) {
  const [closed, setClosed] = useState(false);

  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        onClick={props.onClick}
        className={`panel--endpoint ${props.active ? 'panel--endpoint__active' : ''} ${closed ? 'panel--endpoint__closed' : ''}`}
      >
        <div className="panel--endpoint--infos">
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div onClick={() => setClosed(!closed)}>
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
