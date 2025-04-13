"use client";
import Coin from "@/components/Coin";
import PaperBill from "@/components/paperbill";

interface DenominationsDisplayProps {
  readonly denominationsNeeded: {
    [key: number]: number;
    change?: number;
  } | null;
}

function DenominationsDisplay({
  denominationsNeeded,
}: DenominationsDisplayProps) {
  return (
    <div className="grid grid-cols-2 w-full outline-amber-500 outline mx-auto">
      <div className="mr-auto gap-4 h-full flex-col flex justify-between">
        <Coin amountNeeded={denominationsNeeded?.[1]} coinValue={1} />
        <Coin amountNeeded={denominationsNeeded?.[2]} coinValue={2} />
        <PaperBill amountNeeded={denominationsNeeded?.[20]} billValue={20} />
        <PaperBill amountNeeded={denominationsNeeded?.[10]} billValue={10} />
        <PaperBill amountNeeded={denominationsNeeded?.[5]} billValue={5} />
      </div>
      <div className="ml-auto h-full flex-col flex justify-between">
        <PaperBill amountNeeded={denominationsNeeded?.[500]} billValue={500} />
        <PaperBill amountNeeded={denominationsNeeded?.[200]} billValue={200} />
        <PaperBill amountNeeded={denominationsNeeded?.[100]} billValue={100} />
        <PaperBill amountNeeded={denominationsNeeded?.[50]} billValue={50} />
      </div>
    </div>
  );
}

export default DenominationsDisplay;
