import { FaTimes } from 'react-icons/fa';
import './Tab.style.scss';

export type TabProps = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

export function Tab(props: TabProps) {
  return (
    <>
      <div
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
