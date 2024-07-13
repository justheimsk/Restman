import './Header.style.scss';

export type HeaderProps = {
  children: React.ReactNode;
  secondary?: boolean;
};

export function Header(props: HeaderProps) {
  return (
    <>
      <div
        className={`column--header ${props.secondary ? 'column--header__secondary' : ''}`}
      >
        {props.children}
      </div>
    </>
  );
}
