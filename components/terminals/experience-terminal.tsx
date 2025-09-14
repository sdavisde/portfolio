import TerminalWindow from '@/components/terminal-window'

export default function ExperienceTerminal() {
  return (
    <TerminalWindow
      title='experience.log'
      width='lg'
    >
      <div className='space-y-6'>
        <div>
          <span className='text-green-400'>$</span> cat experience.log
        </div>
        <div className='space-y-4'>
          <div className='border-l-2 border-blue-400 pl-4'>
            <div className='text-blue-400 font-semibold'>Legends - Senior Software Engineer</div>
            <div className='text-muted-foreground text-sm'>2022 - Present</div>
            <div className='text-muted-foreground mt-2'>
              • Led technical operations for $100M+ annual revenue e-commerce platform
              <br />
              • Architected multi-tenant Next.js theme system reducing maintenance costs by 90%
              <br />
              • Implemented regression testing frameworks cutting production issues by 95%
              <br />
              • Managed team of 10 offshore developers
              <br />• Served global sports brands including Real Madrid, Borussia Dortmund
            </div>
          </div>
          <div className='border-l-2 border-green-400 pl-4'>
            <div className='text-green-400 font-semibold'>Reynolds and Reynolds - Software Engineer</div>
            <div className='text-muted-foreground text-sm'>2020 - 2022</div>
            <div className='text-muted-foreground mt-2'>
              • Built high-performance APIs and responsive interfaces
              <br />
              • Developed accessibility-compliant systems for 10K+ users
              <br />
              • Implemented modern React patterns and TypeScript best practices
              <br />• Collaborated on automotive industry solutions
            </div>
          </div>
        </div>
      </div>
    </TerminalWindow>
  )
}
