import { motion } from 'framer-motion'
import type { BlogPost } from '@/models/BlogPost'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      className="group bg-white rounded-2xl border border-border overflow-hidden hover:border-primary-200 transition-colors"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
        <div className="text-primary-300 text-6xl font-display font-bold opacity-50">
          {post.title.charAt(0)}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${post.getCategoryBadge()}`}>
            {post.getCategoryLabel()}
          </span>
          <span className="text-xs text-text-muted">{post.readTime} min read</span>
        </div>
        <h3 className="font-display font-bold text-lg text-text-primary mb-2 group-hover:text-primary-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-muted">{post.author} &middot; {post.getFormattedDate()}</span>
          <span className="text-primary-600 text-sm font-semibold group-hover:underline decoration-primary-600 underline-offset-2 transition-all">
            Read More
          </span>
        </div>
      </div>
    </motion.article>
  )
}
