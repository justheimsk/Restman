import './OptionTab.style.scss';

export type OptionTabProps = {
  label: string;
  id: number;
  active: boolean;
  onClick?: (id: number) => void;
};

export function OptionTab(props: OptionTabProps) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <span
      className={`option-tab ${props.active ? 'option-tab__active' : ''}`}
      onClick={() => props.onClick?.(props.id)}
      key={props.id}
    >
      {props.label}
    </span>
  );
}
