import './Button.style.scss';

export type ButtonProps = {
  label: string;
  icon?: React.ReactNode;
  small?: boolean;
  active?: boolean;
  rightIcon?: React.ReactNode;
};

export function Button(props: ButtonProps) {
  return (
    <>
      <button
        type="button"
        className={`button ${props.active ? 'button__active' : ''} ${props.small ? 'button__small' : ''}`}
      >
        <div>
          {props.icon && <i>{props.icon}</i>}
          <span>{props.label}</span>
        </div>
        {props.rightIcon && (
          <i className="button--right-icon">{props.rightIcon}</i>
        )}
      </button>
    </>
  );
}
