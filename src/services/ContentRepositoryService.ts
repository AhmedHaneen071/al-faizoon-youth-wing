import type { Pillar } from '@/models/Pillar'
import type { Member } from '@/models/Member'
import type { Testimonial } from '@/models/Testimonial'
import type { Event } from '@/models/Event'
import type { BlogPost } from '@/models/BlogPost'
import type { FeatureCardModel } from '@/models/FeatureCard'
import type { SocialMediaPost, ContentWorkflowStep } from '@/models/SocialMediaPost'
import { pillars } from '@/data/pillars'
import { members } from '@/data/members'
import { testimonials } from '@/data/testimonials'
import { events } from '@/data/events'
import { blogPosts } from '@/data/blogPosts'
import { featureCards } from '@/data/featureCards'
import { socialMediaPosts, contentWorkflowSteps } from '@/data/socialMedia'

export class ContentRepositoryService {
  private static _instance: ContentRepositoryService

  private constructor() {}

  static getInstance(): ContentRepositoryService {
    if (!ContentRepositoryService._instance) {
      ContentRepositoryService._instance = new ContentRepositoryService()
    }
    return ContentRepositoryService._instance
  }

  getPillars(): Pillar[] {
    return pillars
  }

  getPillarBySlug(slug: string): Pillar | undefined {
    return pillars.find(p => p.getFormattedSlug() === slug)
  }

  getMembers(): Member[] {
    return members
  }

  getMembersByDepartment(department: string): Member[] {
    return members.filter(m => m.department === department)
  }

  getTestimonials(): Testimonial[] {
    return testimonials
  }

  getHighlightedTestimonials(): Testimonial[] {
    return testimonials.filter(t => t.highlight)
  }

  getEvents(): Event[] {
    return events
  }

  getUpcomingEvents(): Event[] {
    return events.filter(e => e.status === 'upcoming')
  }

  getBlogPosts(): BlogPost[] {
    return blogPosts
  }

  getFeaturedPosts(): BlogPost[] {
    return blogPosts.filter(p => p.featured)
  }

  getFeatureCards(): FeatureCardModel[] {
    return featureCards
  }

  getSocialMediaPosts(): SocialMediaPost[] {
    return socialMediaPosts
  }

  getContentWorkflowSteps(): ContentWorkflowStep[] {
    return contentWorkflowSteps
  }

  getStats() {
    return {
      youthMentored: 500,
      communityProjects: 48,
      outreachEvents: 120,
      neighborhoodsServed: 15,
    }
  }
}
