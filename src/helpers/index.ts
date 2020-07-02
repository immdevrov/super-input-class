function decTohex (dec: number): string {
  return dec < 10
    ? '0' + String(dec)
    : dec.toString(16)
}

function generateHashString (length: number): string {
  const arr = new Uint8Array((length || 40) / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, decTohex).join('')
}

export function randomHash (length = 20): string {
  return generateHashString(length)
}
