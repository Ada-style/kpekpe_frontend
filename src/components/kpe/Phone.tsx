import { ReactNode } from "react";
import { Signal, Battery, Wifi } from "lucide-react";

interface PhoneProps {
  children: ReactNode;
}

export function Phone({ children }: PhoneProps) {
  return (
    <div className="kpe-phone-shell bg-background flex flex-col">
      {/* Status bar */}
      <div className="flex items-center justify-between px-6 pt-3 pb-1">
        <span className="font-display text-sm font-semibold text-foreground">9:41</span>
        <div className="flex items-center gap-1.5">
          <Signal size={14} className="text-foreground" />
          <Wifi size={14} className="text-foreground" />
          <Battery size={14} className="text-foreground" />
        </div>
      </div>
      <div className="flex-1 overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  );
}
