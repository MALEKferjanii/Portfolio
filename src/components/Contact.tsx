import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Languages, ArrowUpRight, Sparkles } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { personal } from '../data/resume';

const contactRows = [
  {
    icon: Mail,
    label: '.email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    label: '.phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
  },
  {
    icon: MapPin,
    label: '.location',
    value: personal.location,
    href: null,
  },
  {
    icon: Languages,
    label: '.speaks',
    value: 'AR · FR · EN',
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 py-32 md:py-40"
      style={{ background: 'rgba(28,25,22,0.18)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          num="06 / 06"
          path="~/src/components/Contact.tsx"
          label="start_a_project"
          title={
            <>
              Ready to ship /{' '}
              <span style={{ color: 'var(--accent-2)', fontWeight: 400 }}>
                something great?
              </span>
            </>
          }
        />

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Left: contact info */}
          <motion.div
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p
              className="font-body text-base md:text-lg leading-relaxed mb-10 max-w-[52ch]"
              style={{ color: 'var(--fg)', opacity: 0.82 }}
            >
              I'm currently open to senior full-stack and Maximo consulting work.
              Remote-first, async-friendly, Tunis time zone. Let's talk.
            </p>

            <div className="space-y-4">
              {contactRows.map(({ icon: Icon, label, value, href }, i) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-5 group"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Icon size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <span
                    className="font-mono text-xs tracking-widest w-20 flex-shrink-0"
                    style={{ color: 'var(--fg-muted)' }}
                  >
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="font-body text-sm text-fg hover:text-accent transition-colors flex items-center gap-1.5 group/link"
                      aria-label={`${label.slice(1)}: ${value}`}
                    >
                      {value}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover/link:opacity-100 transition-opacity translate-y-px"
                      />
                    </a>
                  ) : (
                    <span className="font-body text-sm text-fg">{value}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: status card */}
          <motion.div
            className="col-span-12 lg:col-span-4 lg:col-start-9"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-lg p-6 h-full flex flex-col justify-between"
              style={{
                border: '1px solid rgba(34,197,94,0.32)',
                background: 'rgba(34,197,94,0.04)',
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={14} style={{ color: 'var(--status)' }} />
                  <span
                    className="font-mono text-xs tracking-widest uppercase"
                    style={{ color: 'var(--status)' }}
                  >
                    STATUS
                  </span>
                </div>

                <h4
                  className="font-display font-medium text-lg text-fg mb-3"
                  style={{ letterSpacing: '-0.015em' }}
                >
                  Available for new projects — Q2 2026.
                </h4>

                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--fg)', opacity: 0.7 }}
                >
                  Best fit: Java / Spring backends, Maximo integrations, AWS deployments.
                </p>
              </div>

              <div className="flex items-center gap-2 mt-6 pt-4" style={{ borderTop: '1px solid rgba(34,197,94,0.16)' }}>
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    background: 'var(--status)',
                    boxShadow: '0 0 8px var(--status)',
                    animation: 'pulse-green 2s ease-in-out infinite',
                  }}
                />
                <span
                  className="font-mono text-xs tracking-widest"
                  style={{ color: 'var(--status)' }}
                >
                  RESPONSE &lt; 24H
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-green {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px var(--status); }
          50% { opacity: 0.5; box-shadow: 0 0 3px var(--status); }
        }
      `}</style>
    </section>
  );
}
