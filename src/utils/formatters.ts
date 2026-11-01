/**
 * Formats a number to Indian Rupee representation (e.g. 7000 -> ₹7,000)
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Strips non-digits from a phone number for tel: or wa.me links
 */
export function cleanPhoneNumber(phone: string): string {
  return phone.replace(/[^0-9]/g, '');
}

/**
 * Truncate text cleanly
 */
export function truncate(text: string, length = 120): string {
  if (text.length <= length) return text;
  return `${text.slice(0, length)}...`;
}

