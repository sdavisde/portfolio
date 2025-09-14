import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
  width?: "full" | "lg" | "md" | "sm";
}

export default function TerminalWindow({
  title = "Terminal",
  className,
  children,
  width = "full",
}: TerminalWindowProps) {
  const widthClasses = {
    full: "w-full",
    lg: "w-full max-w-4xl",
    md: "w-full max-w-2xl",
    sm: "w-full max-w-lg",
  };

  return (
    <div
      className={cn(
        "bg-card border border-card-border rounded-lg shadow-lg overflow-hidden",
        widthClasses[width],
        className,
      )}
      data-testid="terminal-window"
    >
      {/* Terminal Header */}
      <div className="bg-muted border-b border-card-border px-4 py-3 flex items-center gap-3">
        {/* Traffic Light Buttons */}
        <div className="flex gap-2" data-testid="terminal-traffic-lights">
          <div
            className="w-3 h-3 rounded-full bg-red-500"
            data-testid="button-close"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-yellow-500"
            data-testid="button-minimize"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-green-500"
            data-testid="button-maximize"
          ></div>
        </div>

        {/* Terminal Title */}
        <div
          className="text-sm text-muted-foreground font-mono"
          data-testid="terminal-title"
        >
          {title}
        </div>
      </div>

      {/* Terminal Content */}
      <div className="bg-background text-foreground p-4 md:p-6 font-mono text-sm md:text-base leading-relaxed min-h-[200px]">
        {children}
      </div>
    </div>
  );
}
