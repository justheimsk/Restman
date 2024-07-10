import './Button.style.scss';

export type ButtonProps = {
  label: string;
};

export function Button(props: ButtonProps) {
  return (
    <>
      <button type="button" className="button">
        {props.label}
      </button>
    </>
  );
}
