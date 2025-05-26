import { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

type ConditionalLinkProps = Omit<LinkProps, 'href'> &
  PropsWithChildren<{
    href: string | null
  }>
export function ConditionalLink({ href, children, ...props }: ConditionalLinkProps) {
  if (!href) {
    return <span {...props}>{children}</span>
  }

  return (
    <a
      {...props}
      href={href}
    >
      {children}
    </a>
  )
}
