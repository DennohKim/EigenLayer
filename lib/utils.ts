import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(value) {
  // Check if the value is a number
  if (typeof value!== 'number') {
    throw new TypeError('Expected a number');
  }

  // Create a formatter with two decimal places
  const formatter = new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Format the number with commas and two decimal places
  const formattedValue = formatter.format(value);

  return formattedValue;
}

export function formatWholeNumberWithCommas(number) {
  // Remove decimal part
  const wholeNumber = Math.floor(number);

  // Convert the number to a string and add commas as thousands separators
  return wholeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
