"use client";
import Coin from "@/components/Coin";
import PaperBill from "@/components/paperbill";
import { motion } from "framer-motion";

interface DenominationsDisplayProps {
  readonly denominationsNeeded: {
    [key: number]: number;
    change?: number;
  } | null;
}

// Define valid coin and bill values to match component props
type CoinValue = 1 | 2;
type BillValue = 5 | 10 | 20 | 50 | 100 | 200 | 500 | "change";

interface DenominationItem {
  value: CoinValue | BillValue | "change";
  type: "coin" | "bill";
}

// Animation variants
const leftItemVariants = {
  visible: {
    x: -10,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  hidden: {
    x: -60,
    opacity: 0.5,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const rightItemVariants = {
  visible: {
    x: 10,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  hidden: {
    x: 60,
    opacity: 0.5,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

function DenominationsDisplay({
  denominationsNeeded,
}: DenominationsDisplayProps) {
  // First column: coins and small bills
  const leftColumn: DenominationItem[] = [
    { value: 20, type: "bill" },
    { value: 10, type: "bill" },
    { value: 5, type: "bill" },
    { value: 2, type: "coin" },
    { value: 1, type: "coin" },
  ];

  // Second column: larger bills
  const rightColumn: DenominationItem[] = [
    { value: 500, type: "bill" },
    { value: 200, type: "bill" },
    { value: 100, type: "bill" },
    { value: 50, type: "bill" },
    { value: "change", type: "bill" },
  ];

  // Function to safely check if a denomination has a value > 0
  const hasDenomination = (value: number | string): boolean => {
    if (!denominationsNeeded) return false;
    if (value === "change") return (denominationsNeeded.change ?? 0) > 0;
    return (denominationsNeeded[value as number] ?? 0) > 0;
  };

  return (
    <div className="grid grid-cols-2 w-full  mx-auto">
      <div className="mr-auto gap-4 h-full flex-col flex justify-between">
        {leftColumn.map((item) => (
          <motion.div
            key={`left-${item.value}`}
            variants={leftItemVariants}
            animate={hasDenomination(item.value) ? "visible" : "hidden"}
            initial="hidden"
          >
            {item.type === "coin" ? (
              <Coin
                amountNeeded={denominationsNeeded?.[item.value as number]}
                coinValue={item.value as CoinValue}
              />
            ) : (
              <PaperBill
                amountNeeded={denominationsNeeded?.[item.value as number]}
                billValue={item.value as BillValue}
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className="ml-auto h-full flex-col flex justify-between">
        {rightColumn.map((item) => (
          <motion.div
            key={`right-${item.value}`}
            variants={rightItemVariants}
            animate={hasDenomination(item.value) ? "visible" : "hidden"}
            initial="hidden"
          >
            {item.value === "change" ? (
              <PaperBill
                amountNeeded={denominationsNeeded?.change}
                billValue="change"
                right={true}
              />
            ) : (
              <PaperBill
                amountNeeded={denominationsNeeded?.[item.value as number]}
                billValue={item.value as BillValue}
                right={true}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default DenominationsDisplay;
