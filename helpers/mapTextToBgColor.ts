const colorSet = new Map<string, string>([
  ["Pink", "#f595cb"],
  ["Green", "#8df0a6"],
  ["Red", "#e34334"],
  ["Black", "#000"],
  ["Gray", "#b5b5b5"],
]);

export default function mapTextToBgColor(color: string): string | null {
  const bgColor = colorSet.get(color);
  if (bgColor === undefined) return null;
  return bgColor;
}
