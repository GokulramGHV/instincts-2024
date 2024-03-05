export function Row({ children, gap, onHoverScaleTo = 100 }) {
  return <div className={`flex justify-center lg:justify-normal items-center gap-${gap} hover:scale-${onHoverScaleTo}`}>{children}</div>;
}
