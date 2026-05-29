import { cn } from '../../utils/cn'

interface PhoneFrameProps {
  children: React.ReactNode
  className?: string
}

export function PhoneFrame({ children, className }: PhoneFrameProps) {
  return (
    <div className={cn('inline-flex flex-col items-center', className)}>
      <div className="relative bg-[#1a1a1a] rounded-[2rem] p-[4px] shadow-[0_0_0_1px_rgba(0,0,0,0.15),0_8px_40px_rgba(0,0,0,0.2)]" style={{ width: 'clamp(210px, 70vw, 320px)' }}>
        {/* Dynamic Island */}
        <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[22%] h-[6px] bg-[#000] rounded-full z-20" />
        {/* Screen */}
        <div className="relative rounded-[1.8rem] overflow-hidden bg-black">
          {children}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-[28%] h-[3px] bg-[#444] rounded-full" />
      </div>
    </div>
  )
}

interface BrowserFrameProps {
  children: React.ReactNode
  className?: string
}

export function BrowserFrame({ children, className }: BrowserFrameProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <div className="rounded-lg overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_8px_40px_rgba(0,0,0,0.2)]">
        {/* Browser chrome */}
        <div className="bg-[#2d2d2d] px-4 py-2.5 flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
          </div>
          {/* URL bar */}
          <div className="flex-1 bg-[#1a1a1a] rounded-md px-3 py-1 mx-8">
            <div className="w-[60%] h-[8px] rounded bg-[#444]" />
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
