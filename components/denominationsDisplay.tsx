import Coin from "@/components/Coin";
import PaperBill from "@/components/paperbill";

function DenominationsDisplay() {
  return (
    <div className="grid grid-cols-2 w-full outline-amber-500 outline mx-auto">
      <div className="mr-auto gap-4 h-full flex-col flex justify-between">
        <Coin coinValue={2} />
        <Coin coinValue={1} />
        <PaperBill billValue={20} />
        <PaperBill billValue={10} />
        <PaperBill billValue={5} />
      </div>
      <div className="ml-auto h-full flex-col flex justify-between">
        <PaperBill billValue={500} />
        <PaperBill billValue={200} />
        <PaperBill billValue={100} />
        <PaperBill billValue={50} />
      </div>
    </div>
  );
}

export default DenominationsDisplay;
