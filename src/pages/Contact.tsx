import { PageHero } from '@/components/layout/PageHero'
import { Section, FadeIn } from '@/components/ui/Section'
import { ContactForm } from '@/components/ui/ContactForm'
import { VolunteerForm } from '@/components/ui/VolunteerForm'
import { useLanguage } from '@/context/LanguageContext'

export function Contact() {
  const { t } = useLanguage()
  return (
    <>
      <PageHero
        title={t('contact.hero.title')}
        subtitle={t('contact.hero.subtitle')}
        badge={t('contact.hero.badge')}
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              titleKey: 'contact.cards.whatsapp.title',
              value: '+92 325 3019374',
              descKey: 'contact.cards.whatsapp.desc',
              href: 'https://wa.me/923253019374',
              icon: 'chat',
              color: 'bg-emerald-100 text-emerald-600',
            },
            {
              titleKey: 'contact.cards.email.title',
              value: 'info.alfaizoonyouthwing@gmail.com',
              descKey: 'contact.cards.email.desc',
              href: 'mailto:info.alfaizoonyouthwing@gmail.com',
              icon: 'mail',
              color: 'bg-primary-100 text-primary-600',
            },
            {
              titleKey: 'contact.cards.headquarters.title',
              value: t('contact.cards.headquarters.value'),
              descKey: 'contact.cards.headquarters.desc',
              icon: 'location',
              color: 'bg-amber-100 text-amber-600',
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-border p-6 text-center hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mx-auto mb-3`}>
                  {item.icon === 'chat' && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )}
                  {item.icon === 'mail' && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {item.icon === 'location' && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-display font-semibold text-lg text-text-primary">{t(item.titleKey)}</h3>
                {item.href ? (
                  <a href={item.href} className="text-primary-600 hover:text-primary-700 font-medium text-sm block mt-1" target="_blank" rel="noopener noreferrer">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-text-secondary font-medium text-sm mt-1">{item.value}</p>
                )}
                <p className="text-text-muted text-xs mt-1">{t(item.descKey)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-primary-50 to-white">
        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-2">
                {t('contact.form.title')}
              </h2>
              <p className="text-text-secondary mb-6">
                {t('contact.form.description')}
              </p>
              <ContactForm />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-2">
                {t('contact.volunteer.title')}
              </h2>
              <p className="text-text-secondary mb-6">
                {t('contact.volunteer.description')}
              </p>
              <div className="bg-white rounded-3xl border border-border p-6 md:p-8">
                <VolunteerForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary text-center mb-2">
              {t('contact.location.title')}
            </h2>
            <p className="text-text-secondary text-center mb-8">
              {t('contact.location.description')}
            </p>
            <div className="bg-white rounded-3xl border border-border overflow-hidden">
              <div className="h-64 md:h-80 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display font-bold text-xl text-text-primary">{t('contact.location.name')}</p>
                  <p className="text-text-muted mt-1">{t('contact.location.address')}</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
