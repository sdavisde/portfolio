import TerminalWindow from '@/components/terminal-window'

export default function SkillsTerminal({ animate, animationProps }: { animate?: boolean; animationProps?: any }) {
  return (
    <TerminalWindow
      title='skills.sh'
      width='lg'
      animate={animate}
      animationProps={animationProps}
    >
      <div className='space-y-4'>
        <div>
          <span className='text-green-400'>$</span> ./skills.sh
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <div className='text-blue-400 font-semibold mb-2'>Frontend Mastery</div>
            <div className='text-muted-foreground text-sm space-y-1'>
              <div>• Next.js - 15+ production apps, 95+ Lighthouse scores</div>
              <div>• TypeScript - 100% type coverage, zero runtime errors</div>
              <div>• React - 5+ years, component libraries</div>
              <div>• Tailwind CSS - Utility-first styling</div>
            </div>
          </div>
          <div>
            <div className='text-green-400 font-semibold mb-2'>Backend & Database</div>
            <div className='text-muted-foreground text-sm space-y-1'>
              <div>• Node.js - RESTful & GraphQL APIs</div>
              <div>• PostgreSQL - Optimized queries, migrations</div>
              <div>• Supabase - Real-time, auth, storage</div>
              <div>• Java - Enterprise applications</div>
            </div>
          </div>
          <div>
            <div className='text-purple-400 font-semibold mb-2'>E-commerce & Payments</div>
            <div className='text-muted-foreground text-sm space-y-1'>
              <div>• Stripe, PayPal, Apple Pay integration</div>
              <div>• Global commerce (15+ languages, RTL)</div>
              <div>• Performance optimization (sub-2s load times)</div>
              <div>• 99.9% uptime maintenance</div>
            </div>
          </div>
          <div>
            <div className='text-yellow-400 font-semibold mb-2'>DevOps & Tools</div>
            <div className='text-muted-foreground text-sm space-y-1'>
              <div>• CI/CD pipelines (Vercel, AWS)</div>
              <div>• Docker containerization</div>
              <div>• Git version control</div>
              <div>• Testing frameworks (Jest, Cypress)</div>
            </div>
          </div>
        </div>
      </div>
    </TerminalWindow>
  )
}
