import './Header.style.scss';

export type HeaderProps = {
  children: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <>
      <div className="column--header">{children}</div>
    </>
  );
}
