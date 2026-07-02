import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FormSubmissionService } from '@/services/FormSubmissionService'
import { NotificationService } from '@/services/NotificationService'

interface VolunteerData {
  [key: string]: string | number | boolean | string[]
  name: string
  email: string
  phone: string
  age: string
  skills: string
  availability: string
  motivation: string
}

const initial: VolunteerData = { name: '', email: '', phone: '', age: '', skills: '', availability: '', motivation: '' }

export function VolunteerForm() {
  const [data, setData] = useState<VolunteerData>(initial)
  const [loading, setLoading] = useState(false)

  const update = (field: keyof VolunteerData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setData(prev => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const formService = FormSubmissionService.getInstance()
      await formService.submit('volunteer', data)
      NotificationService.getInstance().success('Jazakallahukhair! Your application has been submitted.')
      setData(initial)
    } catch {
      NotificationService.getInstance().error('Submission failed. Please try again.')
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
          <input type="text" value={data.name} onChange={update('name')} required className={inputCls} placeholder="Your full name" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">Email Address</label>
          <input type="email" value={data.email} onChange={update('email')} required className={inputCls} placeholder="your@email.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">Phone Number</label>
          <input type="tel" value={data.phone} onChange={update('phone')} required className={inputCls} placeholder="+92 XXX XXXXXXX" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">Age</label>
          <input type="number" value={data.age} onChange={update('age')} required className={inputCls} min="12" max="40" placeholder="Your age" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-text-primary mb-1.5">Skills & Talents</label>
        <input type="text" value={data.skills} onChange={update('skills')} className={inputCls} placeholder="e.g., graphic design, teaching, event planning" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-text-primary mb-1.5">Availability</label>
        <select value={data.availability} onChange={update('availability')} required className={inputCls}>
          <option value="">Select availability</option>
          <option value="weekdays">Weekdays (Afternoon/Evening)</option>
          <option value="weekends">Weekends</option>
          <option value="flexible">Flexible</option>
          <option value="events">Only for events</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-text-primary mb-1.5">Why do you want to volunteer?</label>
        <textarea
          value={data.motivation}
          onChange={update('motivation')}
          required
          rows={4}
          className={`${inputCls} resize-none`}
          placeholder="Share your motivation for joining Al-Faizoon..."
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3.5 bg-accent-500 text-white font-semibold rounded-2xl hover:bg-accent-600 transition-colors disabled:opacity-50 cursor-pointer"
      >
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>
    </motion.form>
  )
}
