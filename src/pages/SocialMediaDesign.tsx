import { PageHero } from '@/components/layout/PageHero'
import { Section, SectionTitle, FadeIn, StaggerFadeIn, StaggerItem } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ContentRepositoryService } from '@/services/ContentRepositoryService'

export function SocialMediaDesign() {
  const repo = ContentRepositoryService.getInstance()
  const posts = repo.getSocialMediaPosts()
  const steps = repo.getContentWorkflowSteps()

  return (
    <>
      <PageHero
        title="Social Media Post Design"
        subtitle="Our brand content engine — creating impactful, values-driven social media content that inspires and informs."
        badge="Operations"
      />

      {/* Categories */}
      <Section>
        <SectionTitle
          title="Content Categories"
          subtitle="Our social media content falls into three distinct categories, each serving a unique purpose."
        />
        <StaggerFadeIn className="grid md:grid-cols-3 gap-6 md:gap-8">
          {posts.map(post => (
            <StaggerItem key={post.id}>
              <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-md transition-shadow">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${post.getCategoryBadge()} mb-3`}>
                  {post.getCategoryLabel()}
                </span>
                <h3 className="font-display font-bold text-lg text-text-primary mb-2">{post.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">{post.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerFadeIn>
      </Section>

      {/* Workflow */}
      <Section className="bg-gradient-to-br from-primary-50 to-white">
        <SectionTitle
          title="Content Submission Workflow"
          subtitle="A streamlined process ensuring every piece of content aligns with our pillars and brand identity."
        />
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.id} delay={i * 0.1}>
              <div className="relative bg-white rounded-2xl border border-border p-6 text-center">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-display font-bold text-sm">
                  {step.order}
                </div>
                <div className={`w-12 h-12 rounded-xl ${step.getIconBg()} flex items-center justify-center mx-auto mb-3`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {step.id === 'brainstorm' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    )}
                    {step.id === 'align' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                    {step.id === 'brand' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    )}
                    {step.id === 'approve' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                  </svg>
                </div>
                <h3 className="font-display font-bold text-base text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center bg-white rounded-3xl border border-border p-10 md:p-14 shadow-sm">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
              Contribute Your Content
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Have an idea for a post? Share it with us on WhatsApp and help amplify our message.
            </p>
            <Button href="https://wa.me/923253019374" external variant="accent" size="lg">
              Submit on WhatsApp
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
