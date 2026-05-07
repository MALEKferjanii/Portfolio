import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { projects } from '../data/resume';

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 py-32 md:py-40"
      style={{ background: 'rgba(28,25,22,0.18)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          num="04 / 06"
          path="~/src/components/Projects.tsx"
          label="projects"
          title={
            <>
              Selected{' '}
              <span style={{ color: 'var(--accent-2)', fontWeight: 400 }}>
                work.
              </span>
            </>
          }
        />

        <div className="divide-y" style={{ borderTop: '1px solid var(--border)', borderColor: 'var(--border)' }}>
          {projects.map((project, i) => {
            const accentColor = project.accent === 'accent-2' ? 'var(--accent-2)' : 'var(--accent)';
            return (
              <motion.div
                key={project.num}
                className="group grid grid-cols-12 gap-4 md:gap-6 py-6 md:py-8 items-start cursor-pointer"
                style={{ borderColor: 'var(--border)' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                {/* Number */}
                <div className="col-span-1">
                  <span
                    className="font-mono text-sm tabular-nums"
                    style={{ color: accentColor }}
                  >
                    {project.num}/
                  </span>
                </div>

                {/* Title + blurb */}
                <div className="col-span-11 md:col-span-6">
                  <div className="font-mono text-xs text-muted mb-2">
                    ~/projects/{project.slug}
                  </div>
                  <h3
                    className="font-display font-medium text-lg md:text-xl text-fg mb-2 group-hover:text-white transition-colors"
                    style={{ letterSpacing: '-0.015em' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: 'var(--fg)', opacity: 0.7 }}
                  >
                    {project.blurb}
                  </p>
                </div>

                {/* Tags */}
                <div className="col-span-10 md:col-span-4 flex flex-wrap gap-2 md:justify-end">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-1 rounded"
                      style={{
                        background: 'rgba(137,180,250,0.04)',
                        border: '1px solid rgba(137,180,250,0.14)',
                        color: 'var(--fg-muted)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="col-span-2 md:col-span-1 flex justify-end">
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded transition-all group-hover:border-accent"
                    style={{
                      border: '1px solid var(--border)',
                      color: 'var(--fg-muted)',
                    }}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
