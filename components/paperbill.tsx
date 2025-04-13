"use client";
import { Badge } from "./ui/badge";

type BillProps = {
  billValue: 5 | 10 | 20 | 50 | 100 | 200 | 500;
  amountNeeded?: number;
};

const PaperBill = ({ billValue, amountNeeded }: BillProps) => {
  const billColors: { [key: number]: string } = {
    5: "bg-gray-200", // Grayish for 5€
    10: "bg-red-200", // Reddish for 10€
    20: "bg-blue-200", // Blueish for 20€
    50: "bg-orange-200", // Orangeish for 50€
    100: "bg-green-200", // Greenish for 100€
    200: "bg-yellow-200", // Yellowish for 200€
    500: "bg-purple-200", // Purplish for 500€
  };

  const billColor = billColors[billValue] || "bg-gray-200"; // Default to gray if denomination not found

  return (
    <div
      className={`rounded-lg w-32 h-20 flex items-center justify-center relative ${billColor}`}
    >
      <div className="rounded-lg w-28 h-16 text-3xl text-center flex items-center justify-center text-neutral-600 font-serif italic">
        {billValue + "€"}
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
};

export default PaperBill;
