import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { experience } from '../data/resume';

export default function Experience() {
  const job = experience[0];

  return (
    <section
      id="experience"
      className="relative z-10 py-32 md:py-40"
      style={{ background: 'rgba(28,25,22,0.18)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          num="02 / 06"
          path="~/src/components/Experience.tsx"
          label="experience"
          title={
            <>
              Where I've been{' '}
              <span style={{ color: 'var(--accent-2)', fontWeight: 400 }}>
                shipping.
              </span>
            </>
          }
        />

        <div className="max-w-3xl">
          {/* Timeline entry */}
          <div className="relative pl-6" style={{ borderLeft: '1px solid var(--border-hi)' }}>
            {/* Glowing dot */}
            <div
              className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full"
              style={{
                background: 'var(--accent)',
                boxShadow: '0 0 12px var(--accent)',
              }}
            />

            <div className="ml-4">
              {/* Period */}
              <div className="font-mono text-xs mb-2">
                <span style={{ color: 'var(--accent)' }}>{job.period.start}</span>
                <span className="text-muted"> — {job.period.end}</span>
              </div>

              {/* Company + title */}
              <div className="mb-5">
                <h3
                  className="font-display font-medium text-2xl md:text-3xl text-fg mb-1"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {job.company}
                </h3>
                <div
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: 'var(--accent)' }}
                >
                  {job.title}
                </div>
              </div>

              {/* Bullets */}
              <div className="space-y-3">
                {job.bullets.map((bullet, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    viewport={{ once: true }}
                  >
                    <span
                      className="font-mono text-xs flex-shrink-0 mt-0.5 tabular-nums"
                      style={{ color: 'var(--accent)', minWidth: '1.5rem' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p
                      className="font-body text-sm md:text-base leading-relaxed"
                      style={{ color: 'var(--fg)', opacity: 0.82 }}
                    >
                      {bullet}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
