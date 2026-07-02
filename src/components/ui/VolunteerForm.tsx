import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FormSubmissionService } from '@/services/FormSubmissionService'
import { NotificationService } from '@/services/NotificationService'
import { useLanguage } from '@/context/LanguageContext'

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
  const { t } = useLanguage()
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
      NotificationService.getInstance().success(t('contact.volunteer.success'))
      setData(initial)
    } catch {
      NotificationService.getInstance().error(t('contact.volunteer.error'))
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
          <label className="block text-sm font-semibold text-text-primary mb-1.5">{t('contact.volunteer.nameLabel')}</label>
          <input type="text" value={data.name} onChange={update('name')} required className={inputCls} placeholder={t('contact.volunteer.namePlaceholder')} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">{t('contact.volunteer.emailLabel')}</label>
          <input type="email" value={data.email} onChange={update('email')} required className={inputCls} placeholder={t('contact.volunteer.emailPlaceholder')} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">{t('contact.volunteer.phoneLabel')}</label>
          <input type="tel" value={data.phone} onChange={update('phone')} required className={inputCls} placeholder={t('contact.volunteer.phonePlaceholder')} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">{t('contact.volunteer.ageLabel')}</label>
          <input type="number" value={data.age} onChange={update('age')} required className={inputCls} min="12" max="40" placeholder={t('contact.volunteer.agePlaceholder')} />
        </div>
      </div>
      <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">{t('contact.volunteer.skillsLabel')}</label>
          <input type="text" value={data.skills} onChange={update('skills')} className={inputCls} placeholder={t('contact.volunteer.skillsPlaceholder')} />
      </div>
      <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">{t('contact.volunteer.availabilityLabel')}</label>
          <select value={data.availability} onChange={update('availability')} required className={inputCls}>
            <option value="">{t('contact.volunteer.availabilityPlaceholder')}</option>
            <option value="weekdays">{t('contact.volunteer.availabilityWeekdays')}</option>
            <option value="weekends">{t('contact.volunteer.availabilityWeekends')}</option>
            <option value="flexible">{t('contact.volunteer.availabilityFlexible')}</option>
            <option value="events">{t('contact.volunteer.availabilityEvents')}</option>
        </select>
      </div>
      <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">{t('contact.volunteer.motivationLabel')}</label>
          <textarea
            value={data.motivation}
            onChange={update('motivation')}
            required
            rows={4}
            className={`${inputCls} resize-none`}
            placeholder={t('contact.volunteer.motivationPlaceholder')}
          />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3.5 bg-accent-500 text-white font-semibold rounded-2xl hover:bg-accent-600 transition-colors disabled:opacity-50 cursor-pointer"
      >
        {loading ? t('contact.volunteer.submitting') : t('contact.volunteer.submit')}
      </button>
    </motion.form>
  )
}
