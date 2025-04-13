"use client";

import Label from "./ui/label.tsx";

type CoinProps = {
  amount: 1 | 2;
};

const Coin = ({ amount }: CoinProps) => (
  <div className="rounded-full bg-neutral-200 w-20 h-20 outline-2 flex items-center justify-center">
    <div className="outline-2 bg-amber-200 rounded-full w-16 h-16 text-5xl text-center flex items-center justify-center text-neutral-400 font-serif italic">
      {amount + "€"}
      <Label</Label>
    </div>
  </div>
);

export default Coin;
