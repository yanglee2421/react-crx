export function timeout(timeout: number) {
  return new Promise((res) => setTimeout(res, timeout));
}
