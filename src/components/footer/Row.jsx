export function Row({ children, gap, onHoverScaleTo = 100 }) {
  return <div className={`flex items-center gap-${gap} hover:scale-${onHoverScaleTo}`}>{children}</div>;
}
