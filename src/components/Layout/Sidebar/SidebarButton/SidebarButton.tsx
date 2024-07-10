import './SidebarButton.style.scss';

export type SidebarButtonProps = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

export function SidebarButton(props: SidebarButtonProps) {
  return (
    <>
      <div
        className={`sidebar-button ${props.active ? 'sidebar-button__active' : ''}`}
      >
        <i>{props.icon}</i>
        <span>{props.label}</span>
      </div>
    </>
  );
}
