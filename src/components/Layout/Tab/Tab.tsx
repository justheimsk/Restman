import { FaTimes } from 'react-icons/fa';
import './Tab.style.scss';

export type TabProps = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  onClick?: (...args: any) => void;
};

export function Tab(props: TabProps) {
  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        onClick={props.onClick}
        className={`column--tab ${props.active ? 'column--tab__active' : ''}`}
      >
        <i>{props.icon}</i>
        <span>{props.label}</span>
        <i className="column--tab--close-button">
          <FaTimes />
        </i>
      </div>
    </>
  );
}
