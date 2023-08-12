export function jsonPars<T>(value: string): T {
  try {
    return JSON.parse(value);
  } catch {
    throw new Error('Error JSON pars');
  }
}
