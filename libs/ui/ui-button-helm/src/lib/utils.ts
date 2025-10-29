export function hlm(...classes: any[]): string {
  return classes
    .flat(Infinity)
    .filter(c => typeof c === 'string' || typeof c === 'number')
    .join(' ');
}
