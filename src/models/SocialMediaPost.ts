export type PostCategory = 'inspirational' | 'impact' | 'event'

export class SocialMediaPost {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly category: PostCategory
  readonly imageUrl: string
  readonly tags: string[]

  constructor(
    id: string,
    title: string,
    description: string,
    category: PostCategory,
    imageUrl: string,
    tags: string[],
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.category = category
    this.imageUrl = imageUrl
    this.tags = tags
  }

  getCategoryLabel(): string {
    const map: Record<PostCategory, string> = {
      inspirational: 'Inspirational Quotes (Quran & Hadith)',
      impact: 'Community Impact Highlights',
      event: 'Event Announcements',
    }
    return map[this.category]
  }

  getCategoryBadge(): string {
    const map: Record<PostCategory, string> = {
      inspirational: 'bg-amber-100 text-amber-800',
      impact: 'bg-emerald-100 text-emerald-800',
      event: 'bg-teal-100 text-teal-800',
    }
    return map[this.category]
  }
}

export type ContentStep = 'brainstorm' | 'align' | 'brand' | 'approve'

export class ContentWorkflowStep {
  readonly id: ContentStep
  readonly title: string
  readonly description: string
  readonly order: number

  constructor(
    id: ContentStep,
    title: string,
    description: string,
    order: number,
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.order = order
  }

  getIconBg(): string {
    const map: Record<ContentStep, string> = {
      brainstorm: 'bg-violet-100 text-violet-700',
      align: 'bg-amber-100 text-amber-700',
      brand: 'bg-teal-100 text-teal-700',
      approve: 'bg-emerald-100 text-emerald-700',
    }
    return map[this.id]
  }
}
