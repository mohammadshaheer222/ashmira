import { HeaderLogo, HeaderNav, HeaderActions } from "./index";

export default function Header() {
  return (
    <header className="sticky top-5 mob-land:top-3 z-50 w-full max-w-7xl m-auto sm-lap:max-w-full">
      <div className="bg-bg-card shadow-card rounded-xl">
        <div className="relative flex items-center justify-between h-14 px-5">
          <HeaderLogo />
          <div className="desk-only absolute left-1/2 -translate-x-1/2">
            <HeaderNav />
          </div>
          <div className="flex items-center ml-auto">
            <HeaderActions />
          </div>
        </div>
      </div>
    </header>
  );
}
