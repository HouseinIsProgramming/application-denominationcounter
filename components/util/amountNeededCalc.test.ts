"use client";

import { calculateDenominations } from "./amountNeededCalc";

describe("calculateDenominations", () => {
  test("returns empty object for zero amount", () => {
    expect(calculateDenominations(0)).toEqual({});
  });

  test("returns empty object for negative amount", () => {
    expect(calculateDenominations(-100)).toEqual({});
  });

  test("handles small amount correctly", () => {
    expect(calculateDenominations(6)).toEqual({
      5: 1,
      1: 1,
    });
  });

  test("handles larger amount with multiple denominations", () => {
    expect(calculateDenominations(578)).toEqual({
      500: 1,
      50: 1,
      20: 1,
      5: 1,
      2: 1,
      1: 1,
    });
  });

  test("handles amount that can be represented by one denomination", () => {
    expect(calculateDenominations(100)).toEqual({
      100: 1,
    });
  });

  test("handles amount that requires multiple of the same denomination", () => {
    expect(calculateDenominations(1000)).toEqual({
      500: 2,
    });
  });

  test("handles float amount and returns change", () => {
    expect(calculateDenominations(5.75)).toEqual({
      5: 1,
      1: 1,
      change: 0.25,
    });
  });

  test("handles float amount with rounding up to whole number", () => {
    expect(calculateDenominations(10.01)).toEqual({
      10: 1,
      1: 1,
      change: 0.99,
    });
  });

  test("handles float amount that rounds to exact denomination", () => {
    expect(calculateDenominations(19.95)).toEqual({
      20: 1,
      change: 0.05,
    });
  });
});
