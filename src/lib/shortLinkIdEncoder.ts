import { BASE, CHARACTER_SET } from '@/lib/constants'

export default function shortLinkIdEncoder(num: bigint) {
  let encoded = ''

  while (num > 0) {
    const base62Digit = num % BASE
    num = BigInt(Math.floor(Number(num / BASE)))
    encoded = CHARACTER_SET.charAt(Number(base62Digit)) + encoded
  }

  return encoded
}
