"use client";

import { Badge } from "./ui/badge";

type CoinProps = {
  coinValue: 1 | 2;
  amountNeeded?: number;
};

const Coin = ({ coinValue, amountNeeded }: CoinProps) => (
  <div className="rounded-full bg-neutral-200 w-20 h-20 outline-2 flex items-center justify-center relative">
    <div className="outline-2 bg-amber-200 rounded-full w-16 h-16 text-5xl text-center flex items-center justify-center text-neutral-400 font-serif italic">
      {coinValue + "€"}
      {typeof amountNeeded === "number" && amountNeeded >= 1 && (
        <Badge
          variant="secondary"
          className="absolute text-lg font-sans -inset-y-1 -right-2 w-fit h-6"
        >
          x{amountNeeded}
        </Badge>
      )}
    </div>
  </div>
);

export default Coin;
