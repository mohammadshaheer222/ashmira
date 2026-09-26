import { HeaderLogo, HeaderNav, HeaderActions } from "./index";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full max-w-7xl h-full m-auto sm-lap:max-w-full">
      <div className="bg-bg-card shadow-card rounded-xl">
        <div className="relative flex items-center justify-between h-14 p-5">
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
