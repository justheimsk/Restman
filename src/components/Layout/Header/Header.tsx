import './Header.style.scss';

export type HeaderProps = {
  children: React.ReactNode;
  secondary?: boolean;
  id?: string;
};

export function Header(props: HeaderProps) {
  return (
    <>
      <div
        id={props.id}
        className={`column--header ${props.secondary ? 'column--header__secondary' : ''}`}
      >
        {props.children}
      </div>
    </>
  );
}
