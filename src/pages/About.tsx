import { PageHero } from '@/components/layout/PageHero'
import { Section, SectionTitle, FadeIn, StaggerFadeIn, StaggerItem } from '@/components/ui/Section'
import { PillarCard } from '@/components/ui/PillarCard'
import { TeamCard } from '@/components/ui/TeamCard'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { StatsCounter } from '@/components/ui/StatsCounter'
import { ContentRepositoryService } from '@/services/ContentRepositoryService'

export function About() {
  const repo = ContentRepositoryService.getInstance()
  const pillars = repo.getPillars()
  const members = repo.getMembers()
  const testimonials = repo.getTestimonials()
  const stats = repo.getStats()

  return (
    <>
      <PageHero
        title="About Al-Faizoon Youth Wing"
        subtitle="Discover our story, our values, and the passionate youth leading the charge for positive change in Hyderabad."
        badge="Who We Are"
      />

      {/* Introduction */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-3">
                Our Identity
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
                A Faith-Based Youth Movement
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Al-Faizoon Youth Wing Hyderabad is a dynamic, faith-based youth organization dedicated to grooming triumphant youth who excel in both Deen (faith) and society. Founded by passionate young Muslims, we provide a structured platform for character development, community service, and Islamic learning.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Our approach combines traditional Islamic values with modern youth engagement strategies, creating an environment where young Muslims can thrive spiritually, socially, and personally. We believe that today's youth are tomorrow's leaders, and we are committed to preparing them for that responsibility.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl p-8 border border-primary-200">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-display font-bold text-3xl">AF</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-primary-800">Al-Faizoon Youth Wing</h3>
                <p className="text-primary-600 mt-2">Hyderabad, Sindh, Pakistan</p>
                <div className="mt-6 text-left text-primary-700 text-sm leading-relaxed space-y-2">
                  <p>&ldquo;Grooming Triumphant Youth for Deen &amp; Society&rdquo;</p>
                  <p className="text-primary-600">Founded: 2020 &middot; Youth-led &amp; Community-focused</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* 5 Pillars Breakdown */}
      <Section className="bg-gradient-to-br from-primary-50 to-white">
        <SectionTitle
          title="Our 5 Core Pillars"
          subtitle="These five pillars form the character framework that every Al-Faizoon member strives to embody."
        />
        <StaggerFadeIn className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pillars.map(pillar => (
            <StaggerItem key={pillar.id}>
              <PillarCard pillar={pillar} expanded />
            </StaggerItem>
          ))}
        </StaggerFadeIn>
      </Section>

      {/* Impact Stats */}
      <Section dark className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <SectionTitle
          title="Our Impact in Numbers"
          subtitle="Since our founding, we have been tirelessly serving the youth and communities of Hyderabad."
          light
        />
        <StatsCounter
          stats={[
            { value: stats.youthMentored, label: 'Youth Mentored' },
            { value: stats.communityProjects, label: 'Community Projects' },
            { value: stats.outreachEvents, label: 'Outreach Events' },
            { value: stats.neighborhoodsServed, label: 'Neighborhoods Served' },
          ]}
        />
      </Section>

      {/* Leadership */}
      <Section>
        <SectionTitle
          title="Meet Our Leadership"
          subtitle="Dedicated youth leaders and mentors driving the vision of Al-Faizoon Youth Wing Hyderabad."
        />
        <StaggerFadeIn className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map(member => (
            <StaggerItem key={member.id}>
              <TeamCard member={member} />
            </StaggerItem>
          ))}
        </StaggerFadeIn>
      </Section>

      {/* Community Testimonials */}
      <Section className="bg-gradient-to-br from-primary-50 to-white">
        <SectionTitle
          title="Community Voices"
          subtitle="Hear from those who have witnessed the transformation firsthand."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </Section>
    </>
  )
}
