interface PhoneFrameProps {
  children: React.ReactNode
  className?: string
}

export function PhoneFrame({ children, className = '' }: PhoneFrameProps) {
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <div className="relative rounded-[2.5rem] p-[3px] shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_4px_24px_rgba(0,0,0,0.15)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-[22px] bg-bg-primary rounded-b-2xl z-10" />
        {/* Dynamic Island dot */}
        <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[20%] h-[8px] bg-bg-tertiary rounded-full z-20 opacity-80" />
        {/* Screen */}
        <div className="relative rounded-[2.2rem] overflow-hidden bg-bg-primary">
          {children}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-[30%] h-[4px] bg-border rounded-full opacity-60" />
      </div>
    </div>
  )
}

interface BrowserFrameProps {
  children: React.ReactNode
  className?: string
}

export function BrowserFrame({ children, className = '' }: BrowserFrameProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="rounded-lg overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_40px_rgba(0,0,0,0.5)]">
        {/* Browser chrome */}
        <div className="bg-bg-tertiary px-4 py-2.5 flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
          </div>
          {/* URL bar */}
          <div className="flex-1 bg-bg-secondary rounded-md px-3 py-1 mx-8">
            <div className="w-[60%] h-[8px] rounded bg-border" />
          </div>
        </div>
        {/* Content */}
        <div className="bg-black">
          {children}
        </div>
      </div>
    </div>
  )
}
