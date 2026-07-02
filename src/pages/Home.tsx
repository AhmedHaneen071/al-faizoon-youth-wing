import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Section, SectionTitle, FadeIn, StaggerFadeIn, StaggerItem } from '@/components/ui/Section'
import logoSvg from '@/Logo-01.svg'
import { useLanguage } from '@/context/LanguageContext'
import { PillarCard } from '@/components/ui/PillarCard'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { BlogCard } from '@/components/ui/BlogCard'
import { NewsletterForm } from '@/components/ui/NewsletterForm'
import { ContentRepositoryService } from '@/services/ContentRepositoryService'

export function Home() {
  const { t } = useLanguage()
  const repo = ContentRepositoryService.getInstance()
  const pillars = repo.getPillars()
  const testimonials = repo.getTestimonials()
  const features = repo.getFeatureCards()
  const blogs = repo.getBlogPosts()
  const featuredTestimonials = repo.getHighlightedTestimonials()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-white via-primary-50/20 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #0d9488 2px, transparent 2px), radial-gradient(circle at 80% 20%, #0d9488 2px, transparent 2px), radial-gradient(circle at 40% 80%, #f59e0b 2px, transparent 2px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-5">
                {t('home.hero.badge')}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary leading-[1.1]">
                {t('home.hero.heading')}{' '}
                <span className="text-primary-600">{t('home.hero.headingHighlight')}</span>
                <br />
                {t('home.hero.headingFor')} <span className="text-accent-500">{t('home.hero.headingDeen')}</span> {t('home.hero.headingAnd')}{' '}
                <span className="text-accent-500">{t('home.hero.headingSociety')}</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed">
                {t('home.hero.description')}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="https://wa.me/923253019374" external variant="accent" size="lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  {t('home.hero.joinBtn')}
                </Button>
                <Button to="/about" variant="outline" size="lg">
                  {t('home.hero.learnBtn')}
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 to-accent-200/20 rounded-[3rem] rotate-6" />
                <div className="absolute inset-4 bg-white rounded-[2.5rem] shadow-xl border border-border flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="flex justify-center mb-4">
                      <img src={logoSvg} alt="Al-Faizoon Youth Wing" className="h-28 w-auto" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-text-primary">{t('home.heroCard.title')}</h3>
                    <p className="text-text-muted text-sm">{t('home.heroCard.subtitle')}</p>
                    <div className="mt-6 space-y-2">
                      {['Amanat', 'Sadaqat', 'Diyanat', "Sama'at", "Ita'at"].map(p => (
                        <div key={p} className="flex items-center gap-2 text-sm text-text-secondary">
                          <div className="w-2 h-2 rounded-full bg-primary-500" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Section>
        <SectionTitle
          title={t('home.features.title')}
          subtitle={t('home.features.subtitle')}
        />
        <StaggerFadeIn className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map(feature => (
            <StaggerItem key={feature.id}>
              <FeatureCard feature={feature} />
            </StaggerItem>
          ))}
        </StaggerFadeIn>
      </Section>

      <Section dark className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <SectionTitle
          title={t('home.pillars.title')}
          subtitle={t('home.pillars.subtitle')}
          light
        />
        <StaggerFadeIn className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {pillars.map(pillar => (
            <StaggerItem key={pillar.id}>
              <PillarCard pillar={pillar} />
            </StaggerItem>
          ))}
        </StaggerFadeIn>
      </Section>

      <Section>
        <SectionTitle
          title={t('home.testimonials.title')}
          subtitle={t('home.testimonials.subtitle')}
        />
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featuredTestimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t} featured />
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.filter(t => !t.highlight).slice(0, 3).map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-primary-50 to-accent-50/30">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center bg-white rounded-3xl border border-border p-10 md:p-14 shadow-sm">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
              {t('home.cta.title')}
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              {t('home.cta.description')}
            </p>
            <Button href="https://wa.me/923253019374" external variant="accent" size="lg">
              {t('home.cta.button')}
            </Button>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
              {t('home.newsletter.title')}
            </h2>
            <p className="text-text-secondary mb-8">
              {t('home.newsletter.description')}
            </p>
            <NewsletterForm />
          </div>
        </FadeIn>
      </Section>

      <Section>
        <SectionTitle
          title={t('home.blog.title')}
          subtitle={t('home.blog.subtitle')}
        />
        <StaggerFadeIn className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.slice(0, 3).map(post => (
            <StaggerItem key={post.id}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerFadeIn>
      </Section>
    </>
  )
}
