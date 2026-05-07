import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-14"
      style={{ background: 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-12 gap-6 items-center">

          {/* Left column: text */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-6 py-16 lg:py-0">

            {/* Breadcrumb bar */}
            <div className="font-mono text-xs flex items-center gap-3 flex-wrap">
              <span className="text-muted">~/src/components/</span>
              <span className="text-fg">Hero.tsx</span>
              <div className="h-px flex-1 bg-white/5 hidden sm:block" />
              <span className="flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'var(--status)', boxShadow: '0 0 5px var(--status)' }}
                />
                <span style={{ color: 'var(--status)' }}>● main</span>
              </span>
            </div>

            {/* Prompt */}
            <div className="font-mono text-sm flex items-center gap-2">
              <span className="text-accent">➜</span>
              <span className="text-muted">~</span>
              <span className="text-fg ml-1">whoami</span>
            </div>

            {/* Preamble */}
            <div className="font-mono text-xs tracking-[0.18em] uppercase">
              <span className="text-muted">HI — I'M </span>
              <span className="text-fg">MALEK FERJANI</span>
            </div>

            {/* Headline */}
            <div>
              <h1
                className="font-display font-medium leading-[0.92]"
                style={{
                  fontSize: 'clamp(3.5rem, 8.5vw, 8.5vw)',
                  letterSpacing: '-0.035em',
                }}
              >
                <span className="block text-fg">Full-Stack</span>
                <span
                  className="block"
                  style={{ color: 'var(--accent-2)', fontWeight: 400 }}
                >
                  Engineer.
                </span>
              </h1>
            </div>

            {/* Lead */}
            <p
              className="font-body text-base md:text-lg leading-relaxed max-w-[48ch]"
              style={{ opacity: 0.82, color: 'var(--fg)' }}
            >
              Building Java backends, OSLC integrations, and cloud-native services around{' '}
              <span className="font-mono" style={{ color: 'var(--accent-2)' }}>
                IBM Maximo
              </span>
              . 3+ years shipping production systems for enterprise clients from Tunis.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="font-mono text-sm px-5 py-2.5 rounded transition-all min-h-[44px] flex items-center"
                style={{
                  background: 'var(--accent)',
                  color: '#0A0908',
                  fontWeight: 500,
                }}
              >
                $ view_work
              </a>
              <a
                href="#contact"
                className="font-mono text-sm px-5 py-2.5 rounded transition-all min-h-[44px] flex items-center"
                style={{
                  border: '1px solid var(--border-hi)',
                  color: 'var(--fg)',
                }}
              >
                $ init_contact
              </a>
            </div>
          </div>

          {/* Right column: code panel */}
          <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="w-full max-w-md rounded-lg overflow-hidden"
              style={{
                background: 'rgba(28,25,22,0.65)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Panel top bar */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <span className="w-3 h-3 rounded-full" style={{ background: 'var(--status)', opacity: 0.7 }} />
                </div>
                <span className="font-mono text-xs text-muted">const malek.ts</span>
              </div>

              {/* Code body */}
              <div className="px-0 py-4">
                {[
                  { n: 1,  content: <><span style={{color:'var(--accent-2)'}}>const</span> <span style={{color:'var(--accent)'}}>malek</span> <span className="text-fg">= {'{'}</span></> },
                  { n: 2,  content: <><span className="text-dim pl-0 select-none" /><span className="ml-4" style={{color:'var(--accent)'}}>role</span><span className="text-fg">: </span><span className="text-fg">"Full-Stack Engineer"</span><span className="text-muted">,</span></> },
                  { n: 3,  content: <><span className="ml-4" style={{color:'var(--accent)'}}>focus</span><span className="text-fg">: [</span><span className="text-fg">"Java"</span><span className="text-muted">, </span><span className="text-fg">"Maximo"</span><span className="text-muted">, </span><span className="text-fg">"AWS"</span><span className="text-fg">]</span><span className="text-muted">,</span></> },
                  { n: 4,  content: <><span className="ml-4" style={{color:'var(--accent)'}}>location</span><span className="text-fg">: </span><span className="text-fg">"Tunis, TN"</span><span className="text-muted">,</span></> },
                  { n: 5,  content: <><span className="ml-4" style={{color:'var(--accent)'}}>timezone</span><span className="text-fg">: </span><span className="text-fg">"UTC+1"</span><span className="text-muted">,</span></> },
                  { n: 6,  content: <><span className="ml-4" style={{color:'var(--accent)'}}>status</span><span className="text-fg">: </span><span style={{color:'var(--status)'}}>"available"</span><span className="text-muted">,</span></> },
                  { n: 7,  content: <><span className="ml-4" style={{color:'var(--accent)'}}>coffee</span><span className="text-fg">: </span><span style={{color:'var(--accent-2)'}}>Infinity</span><span className="text-muted">,</span></> },
                  { n: 8,  content: <span className="text-fg">{'}'}</span> },
                ].map(({ n, content }) => (
                  <div key={n} className="flex items-start gap-0 px-3 py-0.5 hover:bg-white/[0.02] transition-colors">
                    <span
                      className="font-mono text-xs w-7 text-right flex-shrink-0 select-none leading-6"
                      style={{ color: 'var(--fg-dim)' }}
                    >
                      {n}
                    </span>
                    <span className="font-mono text-sm ml-4 leading-6">{content}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-3 pb-8 mt-8 lg:mt-0">
          <span className="font-mono text-xs text-muted tracking-[0.3em]">SCROLL TO EXPLORE</span>
          <div
            className="w-px h-12 relative overflow-hidden rounded"
            style={{ background: 'var(--border)' }}
          >
            <motion.div
              className="absolute top-0 left-0 right-0 rounded"
              style={{ background: 'var(--accent)', height: '40%' }}
              animate={{ y: ['0%', '160%'] }}
              transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
