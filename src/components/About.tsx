import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import StatCard from './ui/StatCard';

const stats = [
  { label: 'years', value: '3+' },
  { label: 'primary', value: 'Java · Angular · AWS' },
  { label: 'specialty', value: 'IBM Maximo' },
  { label: 'languages', value: 'AR · FR · EN' },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 py-32 md:py-40"
      style={{ background: 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          num="01 / 06"
          path="~/src/components/About.tsx"
          label="about"
          title={
            <>
              Building digital /{' '}
              <span style={{ color: 'var(--accent-2)', fontWeight: 400 }}>
                systems that ship.
              </span>
            </>
          }
        />

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left: paragraphs */}
          <motion.div
            className="col-span-12 lg:col-span-7 space-y-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: 'var(--fg)', opacity: 0.82 }}>
              I'm a backend-leaning full-stack engineer with deep roots in enterprise Java and IBM Maximo.
              Over 3+ years at Sinorfi I've built MBO customizations, authored OSLC and REST integrations,
              tuned WebSphere production environments, and shipped CI/CD pipelines that keep deployments boring —
              which is exactly how they should be.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: 'var(--fg)', opacity: 0.82 }}>
              When I'm not in Maximo territory, I'm studying Cloud & Cybersecurity at{' '}
              <span className="font-mono" style={{ color: 'var(--accent-2)' }}>ESPRIT</span>{' '}
              and expanding my cloud-native toolkit with AWS, Terraform, and microservices patterns — all while
              keeping things practical for the real-world client work we do at{' '}
              <span className="font-mono" style={{ color: 'var(--accent)' }}>Sinorfi</span>.
            </p>
          </motion.div>

          {/* Right: stat cards */}
          <motion.div
            className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col gap-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {stats.map(s => (
              <StatCard key={s.label} label={s.label} value={s.value} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
