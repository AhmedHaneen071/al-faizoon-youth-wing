export type MemberRole = 'Chairman' | 'Vice Chairman' | 'General Secretary' | 'Finance Secretary' | 'Event Coordinator' | 'Media Lead' | 'Volunteer' | 'Mentor'

export type MemberDepartment = 'dawah' | 'community' | 'media' | 'finance' | 'events' | 'mentorship'

export class Member {
  readonly id: string
  readonly name: string
  readonly role: MemberRole
  readonly department: MemberDepartment
  readonly bio: string
  readonly shortBio: string
  readonly imageUrl: string
  readonly joinDate: Date
  readonly linkedIn?: string

  constructor(
    id: string,
    name: string,
    role: MemberRole,
    department: MemberDepartment,
    bio: string,
    shortBio: string,
    imageUrl: string,
    joinDate: Date,
    linkedIn?: string,
  ) {
    this.id = id
    this.name = name
    this.role = role
    this.department = department
    this.bio = bio
    this.shortBio = shortBio
    this.imageUrl = imageUrl
    this.joinDate = joinDate
    this.linkedIn = linkedIn
  }

  getMemberSince(): string {
    return this.joinDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
  }

  getDepartmentBadge(): string {
    const map: Record<MemberDepartment, string> = {
      dawah: 'bg-emerald-100 text-emerald-800',
      community: 'bg-teal-100 text-teal-800',
      media: 'bg-sky-100 text-sky-800',
      finance: 'bg-amber-100 text-amber-800',
      events: 'bg-violet-100 text-violet-800',
      mentorship: 'bg-rose-100 text-rose-800',
    }
    return map[this.department]
  }

  getInitials(): string {
    return this.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }
}
