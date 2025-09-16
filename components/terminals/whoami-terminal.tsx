import TerminalWindow from '@/components/terminal-window'

export default function WhoamiTerminal({ animate, animationProps }: { animate?: boolean; animationProps?: any }) {
  return (
    <TerminalWindow
      title='whoami'
      width='lg'
      animate={animate}
      animationProps={animationProps}
    >
      <div className='space-y-4'>
        <div>
          <span className='text-green-400'>$</span> whoami
        </div>
        <div className='text-blue-400'>Sean Davis</div>
        <div className='text-muted-foreground'>Software Engineer with 4+ years of experience</div>
        <div className='mt-6'>
          <span className='text-green-400'>$</span> cat bio.txt
        </div>
        <div className='text-muted-foreground leading-relaxed'>
          I specialize in building scalable full-stack applications using TypeScript, Next.js, React, Node.js, Java,
          Postgres, and Supabase. At Legends, I led technical operations for a $100M+ annual revenue e-commerce platform
          serving global sports brands.
        </div>
        <div className='mt-4'>
          <span className='text-green-400'>$</span> ls achievements/
        </div>
        <div className='text-muted-foreground'>
          • Architected multi-tenant Next.js theme system (90% cost reduction)
          <br />
          • Implemented regression testing frameworks (95% fewer production issues)
          <br />
          • Managed team of 10 offshore developers
          <br />• Built high-performance APIs for 10K+ users
        </div>
      </div>
    </TerminalWindow>
  )
}
