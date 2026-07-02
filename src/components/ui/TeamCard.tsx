import { motion } from 'framer-motion'
import type { Member } from '@/models/Member'

interface TeamCardProps {
  member: Member
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl border border-border p-6 text-center hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center mx-auto mb-4">
        <span className="font-display font-bold text-2xl text-primary-600">
          {member.getInitials()}
        </span>
      </div>
      <h3 className="font-display font-bold text-lg text-text-primary">{member.name}</h3>
      <p className="text-primary-600 font-medium text-sm mb-2">{member.role}</p>
      <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold ${member.getDepartmentBadge()} mb-3`}>
        {member.department}
      </span>
      <p className="text-text-secondary text-sm leading-relaxed">
        {member.shortBio}
      </p>
    </motion.div>
  )
}
