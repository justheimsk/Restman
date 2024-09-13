import './SidebarButton.style.scss';

export type SidebarButtonProps = {
  label?: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: React.HTMLAttributes<HTMLDivElement>["onClick"];
};

export function SidebarButton(props: SidebarButtonProps) {
  return (
    <>
      <div
        onClick={props.onClick}
        className={`sidebar-button ${props.active ? 'sidebar-button__active' : ''}`}
      >
        <i>{props.icon}</i>
        {props.label && <span>{props.label}</span>}
      </div>
    </>
  );
}
