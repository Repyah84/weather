export function parsToString<T>(value: T): string {
  try {
    return JSON.stringify(value);
  } catch {
    throw new Error('Error JSON stringify');
  }
}
