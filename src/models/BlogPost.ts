export type BlogCategory = 'inspiration' | 'community' | 'events' | 'education' | 'dawah'

export class BlogPost {
  readonly id: string
  readonly title: string
  readonly excerpt: string
  readonly author: string
  readonly date: Date
  readonly category: BlogCategory
  readonly imageUrl: string
  readonly readTime: number
  readonly featured: boolean

  constructor(
    id: string,
    title: string,
    excerpt: string,
    author: string,
    date: Date,
    category: BlogCategory,
    imageUrl: string,
    readTime: number,
    featured: boolean,
  ) {
    this.id = id
    this.title = title
    this.excerpt = excerpt
    this.author = author
    this.date = date
    this.category = category
    this.imageUrl = imageUrl
    this.readTime = readTime
    this.featured = featured
  }

  getFormattedDate(): string {
    return this.date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  getCategoryLabel(): string {
    const map: Record<BlogCategory, string> = {
      inspiration: 'Inspiration',
      community: 'Community',
      events: 'Events',
      education: 'Education',
      dawah: 'Dawah',
    }
    return map[this.category]
  }

  getCategoryBadge(): string {
    const map: Record<BlogCategory, string> = {
      inspiration: 'bg-amber-100 text-amber-800',
      community: 'bg-teal-100 text-teal-800',
      events: 'bg-violet-100 text-violet-800',
      education: 'bg-sky-100 text-sky-800',
      dawah: 'bg-emerald-100 text-emerald-800',
    }
    return map[this.category]
  }
}
