import { Button } from '@/components/ui/button'
import { ConditionalLink } from '@/components/conditional-link'
import { LinkProps } from 'next/link'

type LinkButtonProps = React.ComponentPropsWithoutRef<typeof Button> & {
  href: string | null
  linkProps?: Omit<LinkProps, 'href'> & {
    target?: string
    rel?: string
  }
}
export function LinkButton({ href, linkProps, ...props }: LinkButtonProps) {
  return (
    <ConditionalLink
      href={href}
      {...linkProps}
    >
      <Button {...props} />
    </ConditionalLink>
  )
}
