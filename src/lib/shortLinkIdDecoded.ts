import { BASE, CHARACTER_SET } from '@/lib/constants'

export default function shortLinkIdDecoded(base62Text: string): bigint {
  let resultado = 0

  for (let i = 0; i < base62Text.length; i++) {
    const character = base62Text.charAt(i)
    const characterValue = CHARACTER_SET.indexOf(character)
    resultado = resultado * Number(BASE) + characterValue
  }

  return BigInt(resultado)
}
