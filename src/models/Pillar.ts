export type PillarColor = 'teal' | 'amber' | 'emerald' | 'sky' | 'violet'

export class Pillar {
  readonly id: string
  readonly name: string
  readonly arabicName: string
  readonly description: string
  readonly summary: string
  readonly icon: string
  readonly color: PillarColor
  readonly order: number

  constructor(
    id: string,
    name: string,
    arabicName: string,
    description: string,
    summary: string,
    icon: string,
    color: PillarColor,
    order: number,
  ) {
    this.id = id
    this.name = name
    this.arabicName = arabicName
    this.description = description
    this.summary = summary
    this.icon = icon
    this.color = color
    this.order = order
  }

  getFormattedSlug(): string {
    return this.name.toLowerCase().replace(/\s+/g, '-')
  }

  getBadgeColor(): string {
    const map: Record<PillarColor, string> = {
      teal: 'bg-teal-100 text-teal-800 border-teal-300',
      amber: 'bg-amber-100 text-amber-800 border-amber-300',
      emerald: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      sky: 'bg-sky-100 text-sky-800 border-sky-300',
      violet: 'bg-violet-100 text-violet-800 border-violet-300',
    }
    return map[this.color]
  }

  getIconBg(): string {
    const map: Record<PillarColor, string> = {
      teal: 'bg-teal-50 text-teal-600',
      amber: 'bg-amber-50 text-amber-600',
      emerald: 'bg-emerald-50 text-emerald-600',
      sky: 'bg-sky-50 text-sky-600',
      violet: 'bg-violet-50 text-violet-600',
    }
    return map[this.color]
  }

  getGradientBorder(): string {
    const map: Record<PillarColor, string> = {
      teal: 'hover:border-teal-400',
      amber: 'hover:border-amber-400',
      emerald: 'hover:border-emerald-400',
      sky: 'hover:border-sky-400',
      violet: 'hover:border-violet-400',
    }
    return map[this.color]
  }
}
