import { PageHero } from '@/components/layout/PageHero'
import { Section, SectionTitle, FadeIn } from '@/components/ui/Section'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { NewsletterForm } from '@/components/ui/NewsletterForm'
import { useLanguage } from '@/context/LanguageContext'

export function EventPlanning() {
  const { t } = useLanguage()

  const faqItems = Array.from({ length: 5 }, (_, i) => ({
    question: t(`eventPlanning.faq.items.${i}.question`),
    answer: t(`eventPlanning.faq.items.${i}.answer`),
  }))

  const eventTypes = Array.from({ length: 4 }, (_, i) => ({
    title: t(`eventPlanning.categories.items.${i}.title`),
    description: t(`eventPlanning.categories.items.${i}.description`),
    icon: ['sparkles', 'heart', 'book', 'lightbulb'][i],
    color: ['bg-emerald-100 text-emerald-600', 'bg-rose-100 text-rose-600', 'bg-primary-100 text-primary-600', 'bg-amber-100 text-amber-600'][i],
  }))
  return (
    <>
      <PageHero
        title={t('eventPlanning.hero.title')}
        subtitle={t('eventPlanning.hero.subtitle')}
        badge={t('eventPlanning.hero.badge')}
      />

      <Section>
        <SectionTitle
          title={t('eventPlanning.categories.title')}
          subtitle={t('eventPlanning.categories.subtitle')}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((event, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-border p-6 text-center hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${event.color} flex items-center justify-center mx-auto mb-3`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {event.icon === 'sparkles' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    )}
                    {event.icon === 'heart' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    )}
                    {event.icon === 'book' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    )}
                    {event.icon === 'lightbulb' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    )}
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-base text-text-primary">{event.title}</h3>
                <p className="text-text-secondary text-sm mt-1 leading-relaxed">{event.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-primary-50 to-white">
        <SectionTitle
          title={t('eventPlanning.flow.title')}
          subtitle={t('eventPlanning.flow.subtitle')}
        />
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {Array.from({ length: 5 }, (_, i) => ({
              step: `0${i + 1}`,
              title: t(`eventPlanning.flow.steps.${i}.title`),
              desc: t(`eventPlanning.flow.steps.${i}.desc`),
            })).map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex items-start gap-5 bg-white rounded-2xl border border-border p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-display font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-text-primary">{item.title}</h3>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle
          title={t('eventPlanning.faq.title')}
          subtitle={t('eventPlanning.faq.subtitle')}
        />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-primary-50 to-white">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
              {t('eventPlanning.newsletter.title')}
            </h2>
            <p className="text-text-secondary mb-8">
              {t('eventPlanning.newsletter.description')}
            </p>
            <NewsletterForm />
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
