export type EventType = 'workshop' | 'dawah' | 'community' | 'social' | 'fundraiser' | 'seminar'
export type EventStatus = 'upcoming' | 'ongoing' | 'completed'

export class Event {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly date: Date
  readonly type: EventType
  readonly status: EventStatus
  readonly location: string
  readonly imageUrl: string
  readonly registrationLink?: string

  constructor(
    id: string,
    title: string,
    description: string,
    date: Date,
    type: EventType,
    status: EventStatus,
    location: string,
    imageUrl: string,
    registrationLink?: string,
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.date = date
    this.type = type
    this.status = status
    this.location = location
    this.imageUrl = imageUrl
    this.registrationLink = registrationLink
  }

  getFormattedDate(): string {
    return this.date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  getTypeBadge(): string {
    const map: Record<EventType, string> = {
      workshop: 'bg-teal-100 text-teal-800',
      dawah: 'bg-emerald-100 text-emerald-800',
      community: 'bg-amber-100 text-amber-800',
      social: 'bg-sky-100 text-sky-800',
      fundraiser: 'bg-violet-100 text-violet-800',
      seminar: 'bg-rose-100 text-rose-800',
    }
    return map[this.type]
  }

  getStatusBadge(): string {
    const map: Record<EventStatus, string> = {
      upcoming: 'bg-blue-100 text-blue-800',
      ongoing: 'bg-green-100 text-green-800',
      completed: 'bg-gray-100 text-gray-600',
    }
    return map[this.status]
  }

  getTypeLabel(): string {
    const map: Record<EventType, string> = {
      workshop: 'Workshop',
      dawah: 'Dawah Session',
      community: 'Community Service',
      social: 'Social Event',
      fundraiser: 'Fundraiser',
      seminar: 'Seminar',
    }
    return map[this.type]
  }
}
