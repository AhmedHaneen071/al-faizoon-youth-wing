import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Section, SectionTitle, FadeIn, StaggerFadeIn, StaggerItem } from '@/components/ui/Section'
import { PillarCard } from '@/components/ui/PillarCard'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { BlogCard } from '@/components/ui/BlogCard'
import { NewsletterForm } from '@/components/ui/NewsletterForm'
import { ContentRepositoryService } from '@/services/ContentRepositoryService'

export function Home() {
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
                Al-Faizoon Youth Wing Hyderabad
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary leading-[1.1]">
                Grooming Triumphant{' '}
                <span className="text-primary-600">Youth</span>
                <br />
                for <span className="text-accent-500">Deen</span> &amp;{' '}
                <span className="text-accent-500">Society</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed">
                Empowering the next generation of Muslim leaders through faith-based character development, community service, and transformative mentorship.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="https://wa.me/923253019374" external variant="accent" size="lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Join Us on WhatsApp
                </Button>
                <Button to="/about" variant="outline" size="lg">
                  Learn More
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
                    <div className="w-20 h-20 rounded-2xl bg-primary-600 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-display font-bold text-3xl">AF</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-text-primary">Al-Faizoon</h3>
                    <p className="text-text-muted text-sm">Youth Wing Hyderabad</p>
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

      {/* Features */}
      <Section>
        <SectionTitle
          title="What We Do"
          subtitle="Three core pillars driving our mission to build triumphant youth ready to serve Deen and society."
        />
        <StaggerFadeIn className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map(feature => (
            <StaggerItem key={feature.id}>
              <FeatureCard feature={feature} />
            </StaggerItem>
          ))}
        </StaggerFadeIn>
      </Section>

      {/* 5 Pillars */}
      <Section dark className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <SectionTitle
          title="Our 5 Pillars"
          subtitle="The foundational values that shape every member's character and guide all our initiatives."
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

      {/* Testimonials */}
      <Section>
        <SectionTitle
          title="Voices of Impact"
          subtitle="Hear from the youth, parents, and partners whose lives have been touched by Al-Faizoon."
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

      {/* Asymmetric CTA */}
      <Section className="bg-gradient-to-br from-primary-50 to-accent-50/30">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center bg-white rounded-3xl border border-border p-10 md:p-14 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-accent-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
              Join Our Community
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Be part of the journey—grow with us! Connect with fellow youth on WhatsApp and start making a difference today.
            </p>
            <Button href="https://wa.me/923253019374" external variant="accent" size="lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Join Us on WhatsApp
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Newsletter */}
      <Section>
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
              Stay Connected
            </h2>
            <p className="text-text-secondary mb-8">
              Subscribe to our newsletter for updates on events, programs, and inspiring stories from the youth wing.
            </p>
            <NewsletterForm />
          </div>
        </FadeIn>
      </Section>

      {/* Blog */}
      <Section>
        <SectionTitle
          title="Latest Resources & Stories"
          subtitle="Insights, stories, and updates from the Al-Faizoon community."
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
