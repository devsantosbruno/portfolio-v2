import Image from "next/image";

import logo from "../../public/logo.svg";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-20 py-10 pointer-events-none">
      <Image src={logo} alt="Bruno's logo" height={32} />
    </header>
  );
}
