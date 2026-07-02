export type TestimonialCategory = 'member' | 'parent' | 'partner' | 'volunteer'

export class Testimonial {
  readonly id: string
  readonly name: string
  readonly role: string
  readonly category: TestimonialCategory
  readonly quote: string
  readonly imageUrl: string
  readonly highlight: boolean

  constructor(
    id: string,
    name: string,
    role: string,
    category: TestimonialCategory,
    quote: string,
    imageUrl: string,
    highlight: boolean,
  ) {
    this.id = id
    this.name = name
    this.role = role
    this.category = category
    this.quote = quote
    this.imageUrl = imageUrl
    this.highlight = highlight
  }

  getCategoryLabel(): string {
    const map: Record<TestimonialCategory, string> = {
      member: 'Youth Member',
      parent: 'Parent',
      partner: 'Community Partner',
      volunteer: 'Volunteer',
    }
    return map[this.category]
  }

  getCategoryColor(): string {
    const map: Record<TestimonialCategory, string> = {
      member: 'bg-teal-100 text-teal-700',
      parent: 'bg-amber-100 text-amber-700',
      partner: 'bg-emerald-100 text-emerald-700',
      volunteer: 'bg-violet-100 text-violet-700',
    }
    return map[this.category]
  }
}
