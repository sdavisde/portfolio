import TerminalWindow from '@/components/terminal-window'

export default function AboutTerminal() {
  return (
    <TerminalWindow
      title='about.txt'
      width='lg'
    >
      <div className='space-y-4'>
        <div>
          <span className='text-green-400'>$</span> cat about.txt
        </div>
        <div className='text-muted-foreground leading-relaxed space-y-4'>
          <p>
            I'm a software engineer passionate about building scalable, efficient, and human-centered applications. With
            over 4 years of experience, I've worked on everything from high-traffic e-commerce platforms to personal
            projects that solve real-world problems.
          </p>
          <p>
            My approach focuses on clarity, efficiency, and human-centered design. I believe in writing clean,
            maintainable code and creating experiences that users love. Whether it's optimizing a checkout flow for
            millions of users or building a simple CLI tool, I bring the same attention to detail and commitment to
            quality.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or
            working on personal initiatives that combine my technical skills with my interests in AI, productivity
            tools, and community impact.
          </p>
        </div>
        <div className='mt-6'>
          <span className='text-green-400'>$</span> echo "Let's build something amazing together!"
        </div>
        <div className='text-blue-400'>Let's build something amazing together!</div>
      </div>
    </TerminalWindow>
  )
}
