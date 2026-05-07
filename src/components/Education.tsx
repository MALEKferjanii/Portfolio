import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { education } from '../data/resume';

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-10 py-32 md:py-40"
      style={{ background: 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          num="05 / 06"
          path="~/src/components/Education.tsx"
          label="education"
          title={
            <>
              Foundations &{' '}
              <span style={{ color: 'var(--accent-2)', fontWeight: 400 }}>
                theory.
              </span>
            </>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              className="rounded-lg p-6"
              style={{
                border: '1px solid var(--border)',
                background: 'rgba(28,25,22,0.35)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-mono text-xs tracking-widest"
                  style={{ color: 'var(--accent)' }}
                >
                  {edu.id}
                </span>
                {edu.status === 'in_progress' ? (
                  <span
                    className="font-mono text-[10px] px-2 py-0.5 rounded"
                    style={{
                      color: 'var(--status)',
                      border: '1px solid rgba(34,197,94,0.32)',
                      background: 'rgba(34,197,94,0.06)',
                    }}
                  >
                    in_progress
                  </span>
                ) : (
                  <span
                    className="font-mono text-[10px] px-2 py-0.5 rounded"
                    style={{
                      color: 'var(--fg-muted)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    completed
                  </span>
                )}
              </div>

              <h3
                className="font-display font-medium text-lg text-fg mb-0.5"
                style={{ letterSpacing: '-0.015em' }}
              >
                {edu.degree}
              </h3>
              {edu.field && (
                <p className="font-body text-sm mb-3" style={{ color: 'var(--fg)', opacity: 0.65 }}>
                  {edu.field}
                </p>
              )}
              <p className="font-body text-sm mb-2" style={{ color: 'var(--fg)', opacity: 0.7 }}>
                {edu.school}
              </p>
              <p className="font-mono text-xs text-muted">{edu.years}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
