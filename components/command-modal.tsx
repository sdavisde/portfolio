'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface CommandModalProps {
  isOpen: boolean
  onClose: () => void
  command: string
  content: CommandContent
}

interface CommandContent {
  title: string
  sections: ContentSection[]
}

interface ContentSection {
  type: 'text' | 'list' | 'grid' | 'contact'
  title?: string
  content: string | string[] | ContactItem[] | GridItem[]
}

interface ContactItem {
  label: string
  value: string
  link?: string
}

interface GridItem {
  title: string
  subtitle?: string
  description: string
  tech?: string
}

export default function CommandModal({ isOpen, onClose, command, content }: CommandModalProps) {

  const renderSection = (section: ContentSection, index: number) => {
    switch (section.type) {
      case 'text':
        return (
          <div key={index} className="mb-6">
            {section.title && (
              <h3 className="text-lg font-semibold text-white mb-3">{section.title}</h3>
            )}
            <div className="text-muted-foreground leading-relaxed">
              {Array.isArray(section.content)
                ? (section.content as string[]).map((paragraph, i) => (
                    <p key={i} className="mb-3">{paragraph}</p>
                  ))
                : <p>{section.content as string}</p>
              }
            </div>
          </div>
        )

      case 'list':
        return (
          <div key={index} className="mb-6">
            {section.title && (
              <h3 className="text-lg font-semibold text-white mb-3">{section.title}</h3>
            )}
            <ul className="space-y-2">
              {(section.content as string[]).map((item, i) => (
                <li key={i} className="text-muted-foreground flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )

      case 'grid':
        return (
          <div key={index} className="mb-6">
            {section.title && (
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
            )}
            <div className="grid gap-6 md:grid-cols-2">
              {(section.content as GridItem[]).map((item, i) => (
                <div key={i} className="border border-border rounded-lg p-4 bg-card/50">
                  <h4 className="text-white font-medium mb-1">{item.title}</h4>
                  {item.subtitle && (
                    <p className="text-sm text-muted-foreground mb-2">{item.subtitle}</p>
                  )}
                  <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                  {item.tech && (
                    <p className="text-xs text-primary font-mono">{item.tech}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )

      case 'contact':
        return (
          <div key={index} className="mb-6">
            {section.title && (
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
            )}
            <div className="space-y-3">
              {(section.content as ContactItem[]).map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <span className="text-muted-foreground min-w-[80px]">{item.label}:</span>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-primary hover:underline"
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] w-[calc(100vw-2rem)] overflow-hidden bg-background border-border">
        <DialogHeader className="border-b border-border pb-4">
          <DialogTitle className="flex items-center space-x-3 text-xl">
            <span className="font-mono text-primary">$</span>
            <span className="text-white">{command}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="overflow-y-auto max-h-[calc(90vh-8rem)] p-1">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-white">{content.title}</h1>
            {content.sections.map((section, index) => renderSection(section, index))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}