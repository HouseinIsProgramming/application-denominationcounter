"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DenominationsDisplay from "@/components/denominationsDisplay";
import {
  calculateDenominations,
  totalDenominations,
} from "@/components/util/amountNeededCalc";
import { Send, Github, Globe } from "lucide-react";

export default function Home() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [denominations, setDenominations] = useState<null | {
    [key: number]: number;
    change?: number;
  }>(null);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input === "") {
      setErrorMessage("");
      setDenominations(null);
      return;
    }

    // weil Deutsch spaS macht
    const formattedInput = input.replace(",", ".");

    const isValid = /^\d+(\.\d{1,2})?$/.test(formattedInput);
    if (!isValid) {
      setErrorMessage("Bitte geben Sie einen gültigen Betrag ein.");
      setDenominations(null);
      return;
    }

    const amount = parseFloat(formattedInput);
    if (amount >= 20000) {
      setErrorMessage(
        "Darf ich fragen, warum Sie so eine große Summe bar bei Ihnen haben?"
      );
    } else {
      setErrorMessage("");
    }

    setDenominations(calculateDenominations(amount));
  };

  const totalAmount = totalDenominations(denominations || {});
  return (
    <div className="mx-auto mt-12 flex flex-col justify-center overflow-x-hidden min-h-screen max-w-lg   font-[family-name:var(--font-geist-sans)] shadow-xl shadow-black/20">
      <main className=" w-full row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <div className="px-20 space-y-4 mx-auto">
          <h1 className="text-2xl lg:text-3xl">Banknoten/Münzen Rechner</h1>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label>Menge eingeben:</Label>
            <Input placeholder="€" onChange={handleInput} />
            <p className="text-red-500 max-w-[270px] mb-4 text-center mx-auto text-sm mt-1 h-16">
              {errorMessage}
              <br />
              <span className="text-green-500 block">
                {denominations && totalAmount > 0
                  ? `Sie benötigen ${totalAmount} Scheinen und/oder Münzen.`
                  : ""}
              </span>
            </p>
          </div>
        </div>
        <DenominationsDisplay denominationsNeeded={denominations} />
      </main>
      <footer className="my-12 text-center px-6 flex flex-wrap items-center justify-center gap-4">
        <a
          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
          href="mailto:housein.aboshaar@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send size={16} />
          E-Mail
        </a>
        <a
          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
          href="https://github.com/HouseinIsProgramming/application-denominationcounter.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={16} />
          GitHub Repo
        </a>
        <a
          className="flex items-center gap-1 flex-wrap hover:underline hover:underline-offset-4"
          href="https://www.houseinaboshaar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe size={16} />
          Meine Webseite
        </a>
      </footer>
    </div>
  );
}
