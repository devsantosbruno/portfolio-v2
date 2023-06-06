import Image from "next/image";

import logo from "../../public/logo.svg";
import numberZero from "../../public/number-0.svg";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-20 py-10 flex items-center justify-between pointer-events-none">
      <Image src={logo} alt="Bruno's logo" height={32} />

      <button className="pointer-events-auto rounded-full">
        <Image src={numberZero} alt="Button for open menu" height={32} />
      </button>
    </header>
  );
}
