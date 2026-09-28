function SpeedLines({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-1.5 ${className}`}
      aria-hidden="true"
    >
      <span className="block h-1 w-8 -skew-x-45 rounded-full bg-primary" />
      <span className="block h-1 w-12 -skew-x-45 rounded-full bg-primary" />
      <span className="block h-1 w-16 -skew-x-45 rounded-full bg-primary" />
    </div>
  );
}
export default SpeedLines;