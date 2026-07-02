import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FormSubmissionService } from '@/services/FormSubmissionService'
import { NotificationService } from '@/services/NotificationService'
import { useLanguage } from '@/context/LanguageContext'

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
  const { t } = useLanguage()
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
      NotificationService.getInstance().success(t('contact.form.success'))
      setData(initial)
    } catch {
      NotificationService.getInstance().error(t('contact.form.error'))
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
          <label className="block text-sm font-semibold text-text-primary mb-1.5">{t('contact.form.nameLabel')}</label>
          <input type="text" value={data.name} onChange={update('name')} required className={inputCls} placeholder={t('contact.form.namePlaceholder')} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">{t('contact.form.emailLabel')}</label>
          <input type="email" value={data.email} onChange={update('email')} required className={inputCls} placeholder={t('contact.form.emailPlaceholder')} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">{t('contact.form.phoneLabel')}</label>
          <input type="tel" value={data.phone} onChange={update('phone')} className={inputCls} placeholder={t('contact.form.phonePlaceholder')} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">{t('contact.form.subjectLabel')}</label>
          <select value={data.subject} onChange={update('subject')} required className={inputCls}>
            <option value="">{t('contact.form.subjectPlaceholder')}</option>
            <option value="general">{t('contact.form.subjectGeneral')}</option>
            <option value="program">{t('contact.form.subjectProgram')}</option>
            <option value="partnership">{t('contact.form.subjectPartnership')}</option>
            <option value="volunteer">{t('contact.form.subjectVolunteer')}</option>
            <option value="other">{t('contact.form.subjectOther')}</option>
          </select>
        </div>
      </div>
      <div>
          <label className="block text-sm font-semibold text-text-primary mb-1.5">{t('contact.form.messageLabel')}</label>
          <textarea
            value={data.message}
            onChange={update('message')}
            required
            rows={5}
            className={`${inputCls} resize-none`}
            placeholder={t('contact.form.messagePlaceholder')}
          />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3.5 bg-primary-600 text-white font-semibold rounded-2xl hover:bg-primary-700 transition-colors disabled:opacity-50 cursor-pointer"
      >
        {loading ? t('contact.form.submitting') : t('contact.form.submit')}
      </button>
    </motion.form>
  )
}
