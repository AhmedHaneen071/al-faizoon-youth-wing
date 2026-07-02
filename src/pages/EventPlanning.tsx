import { PageHero } from '@/components/layout/PageHero'
import { Section, SectionTitle, FadeIn } from '@/components/ui/Section'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { NewsletterForm } from '@/components/ui/NewsletterForm'

const faqItems = [
  {
    question: 'How do I propose a new event idea?',
    answer: 'Share your event idea through our WhatsApp group or contact any leadership team member. Your idea will be reviewed during our weekly planning meeting. We welcome all suggestions that align with our mission and pillars.',
  },
  {
    question: 'What types of events does Al-Faizoon organize?',
    answer: 'We organize community clean-ups, free health camps, Dawah sessions, youth workshops, study circles, sports events, fundraising drives, and social gatherings. Each event is designed to serve our dual mission of Islamic outreach and community service.',
  },
  {
    question: 'Who can participate in events?',
    answer: 'All events are open to youth (ages 12–35) from Hyderabad and surrounding areas. Some events may have specific age or registration requirements, which will be clearly communicated in advance.',
  },
  {
    question: 'How are events funded?',
    answer: 'Events are funded through member contributions, community donations, and partnerships with local businesses and organizations. We maintain full transparency on all financial matters.',
  },
  {
    question: 'Can I volunteer to help organize events?',
    answer: 'Absolutely! We are always looking for dedicated volunteers to help with event planning, logistics, promotion, and execution. Fill out the volunteer form on our Contact page to get involved.',
  },
]

const eventTypes = [
  {
    title: 'Community Clean-Ups',
    description: 'Organized drives to clean and beautify public spaces, parks, and neighborhoods across Hyderabad.',
    icon: 'sparkles',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Health & Medical Camps',
    description: 'Free health checkup camps in partnership with local doctors and healthcare professionals serving underserved areas.',
    icon: 'heart',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    title: 'Dawah & Islamic Sessions',
    description: 'Open sessions, study circles, and events designed to share Islamic knowledge and build spiritual connection.',
    icon: 'book',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    title: 'Youth Workshops',
    description: 'Skill-building workshops covering leadership, public speaking, team management, and personal development.',
    icon: 'lightbulb',
    color: 'bg-amber-100 text-amber-600',
  },
]

export function EventPlanning() {
  return (
    <>
      <PageHero
        title="Community Event Planning"
        subtitle="How Al-Faizoon coordinates impactful social work — from idea to execution, every step is intentional."
        badge="Operations"
      />

      {/* Event Types */}
      <Section>
        <SectionTitle
          title="Our Event Categories"
          subtitle="We organize a diverse range of events that serve our community and fulfill our mission."
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

      {/* Event Flow */}
      <Section className="bg-gradient-to-br from-primary-50 to-white">
        <SectionTitle
          title="From Idea to Impact"
          subtitle="Every event follows a proven framework to ensure meaningful community impact."
        />
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {[
              { step: '01', title: 'Idea Submission', desc: 'Any member can submit an event idea aligned with our mission and pillars.' },
              { step: '02', title: 'Planning & Approval', desc: 'The leadership team reviews the proposal, allocates resources, and sets a timeline.' },
              { step: '03', title: 'Team Formation', desc: 'Volunteers are organized into committees for logistics, promotion, and execution.' },
              { step: '04', title: 'Execution', desc: 'The event is carried out with full coordination, community engagement, and Islamic values.' },
              { step: '05', title: 'Review & Report', desc: 'A post-event review captures lessons learned, impact metrics, and community feedback.' },
            ].map((item, i) => (
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

      {/* FAQ */}
      <Section>
        <SectionTitle
          title="Event FAQ"
          subtitle="Common questions about event planning, participation, and volunteering."
        />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      {/* Newsletter */}
      <Section className="bg-gradient-to-br from-primary-50 to-white">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
              Stay Updated on Events
            </h2>
            <p className="text-text-secondary mb-8">
              Subscribe to receive notifications about upcoming events, volunteer opportunities, and community initiatives.
            </p>
            <NewsletterForm />
          </div>
        </FadeIn>
      </Section>
    </>
  )
}
