import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(value: number) {
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

export function formatWholeNumberWithCommas(number: number) {
  // Remove decimal part
  const wholeNumber = Math.floor(number);

  // Convert the number to a string and add commas as thousands separators
  return wholeNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function firstTwoLower(str: string) {
  // Check if the string is not empty and has at least two characters
  if (str && str.length >= 2) {
    // Get the first two characters and convert them to lowercase
    return str.slice(0, 2).toLowerCase();
  }
  // If the string is empty or shorter than two characters, return an empty string
  return '';
}



export const truncateAddr = (address?: string, separator: string = '…') => {
  if (!address) return '';

  const match = address.match(
    /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/
  );

  if (!match) return address;
  return `${match[1]}${separator}${match[2]}`;
};

