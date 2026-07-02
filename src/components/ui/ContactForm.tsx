import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FormSubmissionService } from '@/services/FormSubmissionService'
import { NotificationService } from '@/services/NotificationService'

interface ContactFormData {
  [key: string]: string | number | boolean | string[]
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const initial: ContactFormData = { name: '', email: '', phone: '', subject: '', message: '' }

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initial)
  const [loading, setLoading] = useState(false)

  const update = (field: keyof ContactFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setData(prev => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const formService = FormSubmissionService.getInstance()
      await formService.submit('contact', data)
      NotificationService.getInstance().success('Message sent successfully! We will get back to you soon.')
      setData(initial)
    } catch {
      NotificationService.getInstance().error('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputCls = 'w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-text-primary outline-none transition-all duration-200 focus:border-primary-500 focus:shadow-lg focus:shadow-primary-500/10 text-sm'

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">Full Name</label>
          <input type="text" value={data.name} onChange={update('name')} required className={inputCls} placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">Email Address</label>
          <input type="email" value={data.email} onChange={update('email')} required className={inputCls} placeholder="your@email.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">Phone Number</label>
          <input type="tel" value={data.phone} onChange={update('phone')} className={inputCls} placeholder="+92 XXX XXXXXXX" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">Subject</label>
          <select value={data.subject} onChange={update('subject')} required className={inputCls}>
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="program">Program Information</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="volunteer">Volunteer Interest</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-text-primary mb-1.5">Message</label>
        <textarea
          value={data.message}
          onChange={update('message')}
          required
          rows={5}
          className={`${inputCls} resize-none`}
          placeholder="Write your message here..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3.5 bg-primary-600 text-white font-semibold rounded-2xl hover:bg-primary-700 transition-colors disabled:opacity-50 cursor-pointer"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </motion.form>
  )
}
