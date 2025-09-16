import TerminalWindow from '@/components/terminal-window'

export default function ProjectsTerminal({ animate, animationProps }: { animate?: boolean; animationProps?: any }) {
  return (
    <TerminalWindow
      title='projects.md'
      width='lg'
      animate={animate}
      animationProps={animationProps}
    >
      <div className='space-y-6'>
        <div>
          <span className='text-green-400'>$</span> cat projects.md
        </div>
        <div className='space-y-6'>
          <div className='border-l-2 border-blue-400 pl-4'>
            <div className='text-blue-400 font-semibold'>Real Madrid Official Store</div>
            <div className='text-muted-foreground text-sm mb-2'>E-commerce platform for global sports brand</div>
            <div className='text-muted-foreground'>
              Led frontend development handling millions of global fans with seamless checkout flows and multilingual
              support.
            </div>
            <div className='text-xs text-muted-foreground mt-1'>Tech: Next.js, TypeScript, Stripe, Contentful</div>
          </div>
          <div className='border-l-2 border-green-400 pl-4'>
            <div className='text-green-400 font-semibold'>QueryBase</div>
            <div className='text-muted-foreground text-sm mb-2'>AI-powered knowledge base</div>
            <div className='text-muted-foreground'>
              AI-powered knowledge base for creating developer documentation and FAQs.
            </div>
            <div className='text-xs text-muted-foreground mt-1'>Tech: AI, Next.js, Supabase, Tailwind</div>
          </div>
          <div className='border-l-2 border-purple-400 pl-4'>
            <div className='text-purple-400 font-semibold'>Worklog</div>
            <div className='text-muted-foreground text-sm mb-2'>Rust-based AI KPI tracking CLI</div>
            <div className='text-muted-foreground'>
              Command-line tool for tracking KPIs and productivity metrics with AI insights.
            </div>
            <div className='text-xs text-muted-foreground mt-1'>Tech: Rust, AI, CLI, Performance</div>
          </div>
          <div className='border-l-2 border-yellow-400 pl-4'>
            <div className='text-yellow-400 font-semibold'>Dusty Trails Tres Dias</div>
            <div className='text-muted-foreground text-sm mb-2'>Full-stack nonprofit management portal</div>
            <div className='text-muted-foreground'>
              Complete management system for nonprofit organization with user management, events, and donations.
            </div>
            <div className='text-xs text-muted-foreground mt-1'>Tech: Full-stack, Database, Auth, Management</div>
          </div>
        </div>
      </div>
    </TerminalWindow>
  )
}
