import { Container } from "@/components/Container";
import { Inter } from "next/font/google";
import arrowLeft from "../../public/symbol-arrow-left.svg";
import arrowRight from "../../public/symbol-arrow-right.svg";
import dotAndComma from "../../public/symbol-dot-comma.svg";
import slash from "../../public/symbol-slash.svg";

const inter = Inter({ weight: "400", subsets: ["latin"] });

import Image from "next/image";

export default function Home() {
  return (
    <main className={inter.className}>
      <section className="bg-firstSection bg-cover h-screen w-screen flex items-center">
        <Container>
          <h1 className="text-9xl text-white">
            <span className="flex items-baseline gap-2">
              <span>your idea</span>
              <Image src={dotAndComma} alt="rwr" height={80} />
            </span>
            <span className="flex items-baseline gap-2">
              <span>your dream</span>
              <Image src={dotAndComma} alt="rwr" height={80} />
            </span>
            <span className="flex items-baseline gap-5">
              <span className="flex items-baseline gap-2">
                <Image src={arrowLeft} alt="rwr" height={75} />
                <span>my dev</span>
              </span>
              <span className="flex items-baseline gap-2">
                <Image src={slash} alt="rwr" height={75} />
                <Image src={arrowRight} alt="rwr" height={75} />
              </span>
            </span>
          </h1>
        </Container>
      </section>

      <section className="h-screen w-screen bg-[#242424]"></section>

      <div className="fixed bottom-6 left-10 right-10 flex justify-center">
        <div className="bg-black px-8 py-1">
          <h2 className="text-white text-xl">I am Bruno</h2>
        </div>
      </div>
    </main>
  );
}
