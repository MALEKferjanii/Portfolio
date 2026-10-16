import { motion } from 'framer-motion';

const specs = [
  { label: 'Primary Stack', value: 'Java · Spring Boot · Angular',      color: 'var(--accent)' },
  { label: 'Specialty',     value: 'IBM Maximo · WebSphere · OSLC',     color: 'var(--accent-2)' },
  { label: 'Cloud',         value: 'AWS · Docker · Terraform',           color: 'var(--accent)' },
  { label: 'CI/CD',         value: 'GitLab · Azure DevOps · GH Actions', color: 'var(--accent-2)' },
  { label: 'Databases',     value: 'PostgreSQL · MySQL · MongoDB',        color: 'var(--accent)' },
  { label: 'Soft Skills',   value: 'Technico-functional consulting',      color: 'var(--fg-muted)' },
] as const;

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 40px', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Section label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.25em' }}>
          <span style={{ color: 'var(--accent)' }}>03 /</span>
          <div style={{ width: 48, height: 1, background: 'var(--fg-dim)' }} />
          <span style={{ color: 'var(--fg-muted)' }}>About</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '5fr 4fr', gap: 64, marginTop: 48 }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,4.5vw,60px)',
              fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--fg)', marginBottom: 28,
            }}>
              The engineer<br />behind the{' '}
              <span style={{ color: 'var(--accent)' }}>integrations.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: 1.8, color: 'var(--fg)', opacity: 0.8, marginBottom: 20 }}>
              Backend-leaning full-stack engineer based in Tunis, specializing in enterprise system
              integration. Three years shipping IBM Maximo customizations, OSLC APIs, and cloud-native
              Java services used in production by industrial companies.
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: 1.8, color: 'var(--fg)', opacity: 0.8 }}>
              Currently at <strong style={{ color: 'var(--accent)', fontWeight: 600 }}>Sinorfi</strong> as
              Full-Stack Engineer and Maximo Technical Consultant, while finishing an Engineering degree
              in Cloud &amp; Cybersecurity at ESPRIT. I'm the person teams reach for when the
              integration is brittle, the deployment is fragile, or the API spec doesn't match reality.
            </p>
          </motion.div>

          {/* Right: spec list */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: 3 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {specs.map(({ label, value, color }) => (
              <div
                key={label}
                style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 18px', background: 'var(--surface)', border: '1px solid var(--border)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                <span style={{ fontSize: 10, color: 'var(--fg-muted)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{label}</span>
                <span style={{ fontSize: 12, color, textAlign: 'right', maxWidth: '55%' }}>{value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
