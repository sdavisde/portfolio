import Image from 'next/image'
import InteractiveTerminal from '@/components/interactive-terminal'

export default function Portfolio() {
  return (
    <main className='min-h-screen bg-background text-white'>
      {/* Hero Section */}
      <section className='min-h-screen flex items-center justify-center px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col lg:flex-row gap-12 items-center'>
            <div className='flex-shrink-0'>
              <div className='hud-corner-brackets hud-glow'>
                <div className='hud-corner-tl'></div>
                <div className='hud-corner-tr'></div>
                <div className='hud-corner-bl'></div>
                <div className='hud-corner-br'></div>
                <Image
                  src='/sean-davis.JPEG'
                  alt='Sean Davis'
                  width={350}
                  height={450}
                  className='rounded-lg'
                  style={{
                    filter: 'grayscale(50%)',
                  }}
                />
              </div>
            </div>
            <div className='flex-1 text-center lg:text-left'>
              <h1 className='text-4xl lg:text-6xl font-bold mb-6'>Sean Davis</h1>
              <p className='italic text-muted-foreground mb-2'>Try typing "help" to see available commands</p>
              <div className='bg-black/40 border border-primary/20 rounded-lg p-6 backdrop-blur-sm w-full max-w-[600px] mx-auto lg:mx-0'>
                <InteractiveTerminal />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
