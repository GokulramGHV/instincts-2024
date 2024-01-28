export function Row({ children, gap }) {
  return <div className={`flex items-center gap-${gap}`}>{children}</div>;
}
