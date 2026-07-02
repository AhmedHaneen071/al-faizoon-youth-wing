import { PageHero } from '@/components/layout/PageHero'
import { Section, SectionTitle, FadeIn, StaggerFadeIn, StaggerItem } from '@/components/ui/Section'
import { PillarCard } from '@/components/ui/PillarCard'
import { TeamCard } from '@/components/ui/TeamCard'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { StatsCounter } from '@/components/ui/StatsCounter'
import { ContentRepositoryService } from '@/services/ContentRepositoryService'
import { useLanguage } from '@/context/LanguageContext'

export function About() {
  const { t } = useLanguage()
  const repo = ContentRepositoryService.getInstance()
  const pillars = repo.getPillars()
  const members = repo.getMembers()
  const testimonials = repo.getTestimonials()
  const stats = repo.getStats()

  return (
    <>
      <PageHero
        title={t('about.hero.title')}
        subtitle={t('about.hero.subtitle')}
        badge={t('about.hero.badge')}
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-3">
                {t('about.intro.badge')}
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
                {t('about.intro.title')}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                {t('about.intro.p1')}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {t('about.intro.p2')}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl p-8 border border-primary-200">
              <div className="text-center">
                <h3 className="font-display font-bold text-2xl text-primary-800">{t('about.intro.cardTitle')}</h3>
                <p className="text-primary-600 mt-2">{t('about.intro.cardLocation')}</p>
                <div className="mt-6 text-left text-primary-700 text-sm leading-relaxed space-y-2">
                  <p>{t('about.intro.cardQuote')}</p>
                  <p className="text-primary-600">{t('about.intro.cardFounded')}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-primary-50 to-white">
        <SectionTitle
          title={t('about.pillars.title')}
          subtitle={t('about.pillars.subtitle')}
        />
        <StaggerFadeIn className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pillars.map(pillar => (
            <StaggerItem key={pillar.id}>
              <PillarCard pillar={pillar} expanded />
            </StaggerItem>
          ))}
        </StaggerFadeIn>
      </Section>

      <Section dark className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <SectionTitle
          title={t('about.stats.title')}
          subtitle={t('about.stats.subtitle')}
          light
        />
        <StatsCounter
          stats={[
            { value: stats.youthMentored, label: t('about.stats.youthMentored') },
            { value: stats.communityProjects, label: t('about.stats.communityProjects') },
            { value: stats.outreachEvents, label: t('about.stats.outreachEvents') },
            { value: stats.neighborhoodsServed, label: t('about.stats.neighborhoodsServed') },
          ]}
        />
      </Section>

      <Section>
        <SectionTitle
          title={t('about.leadership.title')}
          subtitle={t('about.leadership.subtitle')}
        />
        <StaggerFadeIn className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map(member => (
            <StaggerItem key={member.id}>
              <TeamCard member={member} />
            </StaggerItem>
          ))}
        </StaggerFadeIn>
      </Section>

      <Section className="bg-gradient-to-br from-primary-50 to-white">
        <SectionTitle
          title={t('about.community.title')}
          subtitle={t('about.community.subtitle')}
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
