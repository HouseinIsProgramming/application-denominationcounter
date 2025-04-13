"use client";

export const calculateDenominations = (
  amount: number
): { [key: number]: number; change?: number } => {
  if (amount <= 0) {
    return {};
  }

  const roundedAmount = Math.ceil(amount);
  const change = roundedAmount - amount;

  const denominations: number[] = [500, 200, 100, 50, 20, 10, 5, 2, 1];
  const result: { [key: number]: number; change?: number } = {};
  let remainingAmount = roundedAmount;

  for (const denom of denominations) {
    if (remainingAmount >= denom) {
      const count = Math.floor(remainingAmount / denom);
      result[denom] = count;
      remainingAmount %= denom;
    }
    if (remainingAmount === 0) {
      break;
    }
  }

  if (change > 0) {
    result.change = parseFloat(change.toFixed(2));
  }

  return result;
};

export const totalDenominations = (denominations: {
  [key: number]: number;
}): number => {
  return Object.entries(denominations)
    .filter(([key]) => key !== "change")
    .reduce((total, value) => {
      return total + value[1];
    }, 0);
};
