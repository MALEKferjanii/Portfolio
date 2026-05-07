import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { skills } from '../data/resume';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 py-32 md:py-40"
      style={{ background: 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          num="03 / 06"
          path="~/src/components/Skills.tsx"
          label="skills"
          title={
            <>
              Tools of{' '}
              <span style={{ color: 'var(--accent-2)', fontWeight: 400 }}>
                the trade.
              </span>
            </>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              className="rounded-lg p-5 transition-all duration-200 group"
              style={{
                border: '1px solid var(--border)',
                background: 'rgba(28,25,22,0.35)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hi)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: 'var(--accent)' }}
                >
                  {skill.id} — {skill.label}
                </span>
                <span
                  className="font-mono text-xs"
                  style={{ color: 'var(--fg-dim)' }}
                >
                  {skill.file}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <span
                    key={item}
                    className="font-mono text-[10.5px] px-2 py-1 rounded"
                    style={{
                      background: 'rgba(137,180,250,0.04)',
                      border: '1px solid rgba(137,180,250,0.14)',
                      color: 'var(--fg)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
