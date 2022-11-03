export default function getQuantityLabel(
  baseLabel: "friend" | "profession",
  quantity: number,
) {
  // TODO adapt using i18next quantity
  if (quantity === 0) return `No ${baseLabel}s ☹️`;
  if (quantity > 1) return `${quantity} ${baseLabel}s`;
  return `1 ${baseLabel}`;
}
