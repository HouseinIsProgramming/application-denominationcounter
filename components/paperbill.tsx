"use client";
import { Badge } from "./ui/badge";
import clsx from "clsx";

type BillProps = {
  billValue: 5 | 10 | 20 | 50 | 100 | 200 | 500 | "change";
  amountNeeded?: number;
  right?: boolean;
};

const PaperBill = ({ billValue, amountNeeded, right }: BillProps) => {
  const billColors: { [key: string | number]: string } = {
    5: "bg-gray-200", // Grayish for 5€
    10: "bg-red-200", // Reddish for 10€
    20: "bg-blue-200", // Blueish for 20€
    50: "bg-orange-200", // Orangeish for 50€
    100: "bg-green-200", // Greenish for 100€
    200: "bg-yellow-200", // Yellowish for 200€
    500: "bg-purple-200", // Purplish for 500€
    change: "bg-white border-2 border-gray-300", // White with outline for change
  };

  const billColor = billColors[billValue] || "bg-gray-200"; // Default to gray if denomination not found

  // und wenn man viel Geld hat....
  const formatAmount = (num: number): string => {
    if (num > 1e9) {
      return num.toExponential(2);
    }
    return parseFloat(num.toFixed(3)).toString();
  };

  const formattedAmount =
    typeof amountNeeded === "number" ? formatAmount(amountNeeded) : "";

  // Display text based on bill type
  const displayText = billValue === "change" ? "Rest" : billValue + "€";

  return (
    <div
      className={`rounded-lg w-32 h-20 flex items-center justify-center relative ${billColor}`}
    >
      <div
        className={clsx(
          "rounded-lg w-28 h-16 text-3xl flex items-center text-neutral-600 font-serif italic",
          right ? "justify-start items-end" : "justify-end mr-10"
        )}
      >
        {displayText}
        {typeof amountNeeded === "number" &&
          ((billValue === "change" && amountNeeded > 0) ||
            (billValue !== "change" && amountNeeded >= 1)) && (
            <Badge
              variant="secondary"
              className={clsx(
                "absolute text-lg font-sans -inset-y-1 w-fit h-6",
                right ? "right-24 text-right" : "-right-4"
              )}
            >
              {billValue === "change"
                ? formattedAmount + "€"
                : "x" + formattedAmount}
            </Badge>
          )}
      </div>
    </div>
  );
};

export default PaperBill;
