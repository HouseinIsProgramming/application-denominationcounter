"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DenominationsDisplay from "@/components/denominationsDisplay";

export default function Home() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input === "") {
      setErrorMessage("");
      return;
    }
    const isValid = /^\d+(\.\d{1,2})?$/.test(input);
    setErrorMessage(
      isValid ? "" : "Bitte geben Sie einen gültigen Betrag ein."
    );
  };

  return (
    <div className="mx-auto grid overflow-x-hidden min-h-screen max-w-lg  grid-rows-[20px_1fr_20px] items-center justify-items-center  pb-20 font-[family-name:var(--font-geist-sans)] shadow-xl shadow-black/20">
      <main className=" w-full row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <div className="px-20 mx-auto">
          <h1 className="text-2xl lg:text-3xl">Euro-Wechselgeld-Rechner</h1>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label>Menge eingeben:</Label>
            <Input placeholder="€" onChange={handleInput} />
            {errorMessage && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
          </div>
        </div>
        <DenominationsDisplay />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
