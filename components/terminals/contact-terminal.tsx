import TerminalWindow from '@/components/terminal-window'

export default function ContactTerminal({ animate, animationProps }: { animate?: boolean; animationProps?: any }) {
  return (
    <TerminalWindow
      title='contact.sh'
      width='lg'
      animate={animate}
      animationProps={animationProps}
    >
      <div className='space-y-4'>
        <div>
          <span className='text-green-400'>$</span> ./contact.sh
        </div>
        <div className='space-y-3'>
          <div className='flex items-center gap-3'>
            <span className='text-blue-400'>→</span>
            <span className='text-muted-foreground'>Email:</span>
            <a
              href='mailto:sean@example.com'
              className='text-blue-400 hover:underline'
            >
              sean@example.com
            </a>
          </div>
          <div className='flex items-center gap-3'>
            <span className='text-blue-400'>→</span>
            <span className='text-muted-foreground'>LinkedIn:</span>
            <a
              href='https://linkedin.com/in/seandavis'
              className='text-blue-400 hover:underline'
              target='_blank'
            >
              linkedin.com/in/seandavis
            </a>
          </div>
          <div className='flex items-center gap-3'>
            <span className='text-blue-400'>→</span>
            <span className='text-muted-foreground'>GitHub:</span>
            <a
              href='https://github.com/sdavisde'
              className='text-blue-400 hover:underline'
              target='_blank'
            >
              github.com/sdavisde
            </a>
          </div>
          <div className='flex items-center gap-3'>
            <span className='text-blue-400'>→</span>
            <span className='text-muted-foreground'>Location:</span>
            <span className='text-muted-foreground'>Remote / Available for relocation</span>
          </div>
        </div>
        <div className='mt-6'>
          <span className='text-green-400'>$</span> echo "Ready to collaborate on your next project!"
        </div>
        <div className='text-green-400'>Ready to collaborate on your next project!</div>
      </div>
    </TerminalWindow>
  )
}
