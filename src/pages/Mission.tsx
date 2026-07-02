import { PageHero } from '@/components/layout/PageHero'
import { Section, SectionTitle, FadeIn, StaggerFadeIn, StaggerItem } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Timeline } from '@/components/ui/Timeline'
import { useLanguage } from '@/context/LanguageContext'

export function Mission() {
  const { t } = useLanguage()
  return (
    <>
      <PageHero
        title={t('mission.hero.title')}
        subtitle={t('mission.hero.subtitle')}
        badge={t('mission.hero.badge')}
      />

      <Section>
        <FadeIn>
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-10 md:p-14 text-white text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t('mission.header.title')}
            </h2>
            <p className="text-primary-100 text-lg max-w-3xl mx-auto leading-relaxed">
              {t('mission.header.description')}
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <SectionTitle
          title={t('mission.tracks.title')}
          subtitle={t('mission.tracks.subtitle')}
        />
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="bg-white rounded-2xl border border-border p-8 hover:border-emerald-200 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-text-primary mb-3">
                {t('mission.tracks.dawah.title')}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                {t('mission.tracks.dawah.description')}
              </p>
              <ul className="space-y-2">
                {t('mission.tracks.dawah.items').split('|').map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-white rounded-2xl border border-border p-8 hover:border-teal-200 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-text-primary mb-3">
                {t('mission.tracks.community.title')}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                {t('mission.tracks.community.description')}
              </p>
              <ul className="space-y-2">
                {t('mission.tracks.community.items').split('|').map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-primary-50 to-white">
        <SectionTitle
          title={t('mission.timeline.title')}
          subtitle={t('mission.timeline.subtitle')}
        />
        <Timeline steps={Array.from({ length: 4 }, (_, i) => ({
          number: i + 1,
          title: t(`mission.timeline.steps.${i}.title`),
          description: t(`mission.timeline.steps.${i}.description`),
          icon: ['search', 'book', 'users', 'chart'][i],
        }))} />
      </Section>

      <Section>
        <SectionTitle
          title={t('mission.benefits.title')}
          subtitle={t('mission.benefits.subtitle')}
        />
        <StaggerFadeIn className="grid md:grid-cols-3 gap-6">
          {[
            {
              titleKey: 'mission.benefits.items.0.title',
              descKey: 'mission.benefits.items.0.description',
              icon: 'user',
              color: 'text-emerald-600 bg-emerald-50',
            },
            {
              titleKey: 'mission.benefits.items.1.title',
              descKey: 'mission.benefits.items.1.description',
              icon: 'home',
              color: 'text-teal-600 bg-teal-50',
            },
            {
              titleKey: 'mission.benefits.items.2.title',
              descKey: 'mission.benefits.items.2.description',
              icon: 'globe',
              color: 'text-amber-600 bg-amber-50',
            },
          ].map((benefit, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-2xl border border-border p-8 text-center hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mx-auto mb-4`}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {benefit.icon === 'user' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    )}
                    {benefit.icon === 'home' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    )}
                    {benefit.icon === 'globe' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-text-primary mb-3">{t(benefit.titleKey)}</h3>
                <p className="text-text-secondary leading-relaxed">{t(benefit.descKey)}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerFadeIn>
      </Section>

      <Section className="bg-gradient-to-br from-primary-600 to-primary-800">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t('mission.cta.title')}
            </h2>
            <p className="text-primary-100 text-lg mb-8 leading-relaxed">
              {t('mission.cta.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="https://wa.me/923253019374" external variant="accent" size="lg">
                {t('mission.cta.joinBtn')}
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                {t('mission.cta.contactBtn')}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
