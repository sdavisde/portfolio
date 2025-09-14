import { Github, Linkedin, Mail } from 'lucide-react'

type SocialMediaType = 'github' | 'linkedin' | 'email'

export type SocialMediaConfig = {
  type: SocialMediaType
  icon: React.ReactNode
  href: string
}

export const socialMediaConfig: SocialMediaConfig[] = [
  {
    type: 'github',
    icon: <Github />,
    href: 'https://github.com/sdavisde',
  },
  {
    type: 'linkedin',
    icon: <Linkedin />,
    href: 'https://www.linkedin.com/in/sean-davis-dan/',
  },
  {
    type: 'email',
    icon: <Mail />,
    href: 'mailto:sdavisde@gmail.com',
  },
]
