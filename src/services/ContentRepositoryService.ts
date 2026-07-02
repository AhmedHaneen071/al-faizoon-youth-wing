import type { PillarColor } from '@/models/Pillar'
import type { TestimonialCategory } from '@/models/Testimonial'
import type { Event } from '@/models/Event'
import type { PostCategory, ContentStep } from '@/models/SocialMediaPost'
import type { MemberRole, MemberDepartment } from '@/models/Member'
import { pillars as rawPillars } from '@/data/pillars'
import { members as rawMembers } from '@/data/members'
import { testimonials as rawTestimonials } from '@/data/testimonials'
import { events } from '@/data/events'
import { blogPosts as rawBlogPosts } from '@/data/blogPosts'
import { featureCards as rawFeatureCards } from '@/data/featureCards'
import { socialMediaPosts as rawSocialMediaPosts, contentWorkflowSteps as rawWorkflowSteps } from '@/data/socialMedia'
import { en } from '@/data/translations/en'
import { ur } from '@/data/translations/ur'
import type { Language } from '@/context/LanguageContext'
import { Pillar } from '@/models/Pillar'
import { FeatureCardModel } from '@/models/FeatureCard'
import { Testimonial } from '@/models/Testimonial'
import { Member } from '@/models/Member'
import { BlogPost } from '@/models/BlogPost'
import { SocialMediaPost } from '@/models/SocialMediaPost'
import { ContentWorkflowStep } from '@/models/SocialMediaPost'

function resolve(obj: Record<string, any>, path: string): string {
  const keys = path.split('.')
  let current: any = obj
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return path
    current = current[key]
  }
  return typeof current === 'string' ? current : path
}

export class ContentRepositoryService {
  private static _instance: ContentRepositoryService
  private _lang: Language = 'en'

  private constructor() {}

  static getInstance(): ContentRepositoryService {
    if (!ContentRepositoryService._instance) {
      ContentRepositoryService._instance = new ContentRepositoryService()
    }
    return ContentRepositoryService._instance
  }

  setLanguage(lang: Language) {
    this._lang = lang
  }

  private t(path: string): string {
    const dict = this._lang === 'en' ? en : ur
    return resolve(dict as Record<string, any>, path)
  }

  getPillars(): Pillar[] {
    return rawPillars.map(p => {
      const id = p.id
      return new Pillar(
        id,
        this.t(`data.pillars.${id}.name`) || p.name,
        p.arabicName,
        this.t(`data.pillars.${id}.description`) || p.description,
        this.t(`data.pillars.${id}.summary`) || p.summary,
        p.icon,
        p.color as PillarColor,
        p.order,
      )
    })
  }

  getPillarBySlug(slug: string): Pillar | undefined {
    return this.getPillars().find(p => p.getFormattedSlug() === slug)
  }

  getMembers(): Member[] {
    return rawMembers.map(m => {
      const id = m.id
      return new Member(
        id,
        this.t(`data.members.${id}.name`) || m.name,
        (this.t(`data.members.${id}.role`) || m.role) as MemberRole,
        m.department as MemberDepartment,
        m.bio,
        this.t(`data.members.${id}.shortBio`) || m.shortBio,
        m.imageUrl,
        m.joinDate,
      )
    })
  }

  getMembersByDepartment(department: string): Member[] {
    return this.getMembers().filter(m => m.department === department)
  }

  getTestimonials(): Testimonial[] {
    return rawTestimonials.map(t => {
      const id = t.id
      return new Testimonial(
        id,
        this.t(`data.testimonials.${id}.name`) || t.name,
        this.t(`data.testimonials.${id}.role`) || t.role,
        t.category as TestimonialCategory,
        this.t(`data.testimonials.${id}.quote`) || t.quote,
        t.imageUrl,
        t.highlight,
      )
    })
  }

  getHighlightedTestimonials(): Testimonial[] {
    return this.getTestimonials().filter(t => t.highlight)
  }

  getEvents(): Event[] {
    return events
  }

  getUpcomingEvents(): Event[] {
    return events.filter(e => e.status === 'upcoming')
  }

  getBlogPosts(): BlogPost[] {
    return rawBlogPosts.map(b => {
      const id = b.id
      return new BlogPost(
        id,
        this.t(`data.blogPosts.${id}.title`) || b.title,
        this.t(`data.blogPosts.${id}.excerpt`) || b.excerpt,
        this.t(`data.blogPosts.${id}.author`) || b.author,
        b.date,
        b.category,
        b.imageUrl,
        b.readTime,
        b.featured,
      )
    })
  }

  getFeaturedPosts(): BlogPost[] {
    return this.getBlogPosts().filter(p => p.featured)
  }

  getFeatureCards(): FeatureCardModel[] {
    return rawFeatureCards.map(f => {
      const id = f.id
      return new FeatureCardModel(
        id,
        this.t(`data.features.${id}.title`) || f.title,
        this.t(`data.features.${id}.description`) || f.description,
        f.icon,
        f.accentColor,
        f.order,
      )
    })
  }

  getSocialMediaPosts(): SocialMediaPost[] {
    return rawSocialMediaPosts.map(p => {
      const id = p.id
      return new SocialMediaPost(
        id,
        this.t(`data.socialMediaPosts.${id}.title`) || p.title,
        this.t(`data.socialMediaPosts.${id}.description`) || p.description,
        p.category as PostCategory,
        p.imageUrl,
        p.tags,
      )
    })
  }

  getContentWorkflowSteps(): ContentWorkflowStep[] {
    return rawWorkflowSteps.map(s => {
      const id = s.id
      return new ContentWorkflowStep(
        id as ContentStep,
        this.t(`data.workflowSteps.${id}.title`) || s.title,
        this.t(`data.workflowSteps.${id}.description`) || s.description,
        s.order,
      )
    })
  }

  getStats() {
    return {
      youthMentored: 500,
      communityProjects: 48,
      outreachEvents: 120,
      neighborhoodsServed: 15,
    }
  }

  getCategoryLabel(type: 'testimonial' | 'socialMedia', key: string): string {
    return this.t(`data.categories.${type}.${key}`) || key
  }
}
