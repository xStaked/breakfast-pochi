/** Formato de precios en pesos colombianos: "$60.000 COP". */

const copNumber = new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 });

export function formatCOP(value: number): string {
  return `$${copNumber.format(value)}\u00A0COP`;
}
