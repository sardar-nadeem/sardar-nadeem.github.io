import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

import { site } from '../../data/site'
import { Lines, Magnetic, Reveal } from './motion'
import { useLocalTime } from './Nav'

export function Footer() {
  const time = useLocalTime()

  return (
    <footer id="contact" className="mt-32 border-t border-line sm:mt-44">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <div>
            <Lines as="h2" className="font-display text-[clamp(48px,8vw,120px)]" lines={['Have a project?', <>Let’s <span className="text-accent">talk</span></>]} />
            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Magnetic>
                <a href={`mailto:${site.email}`} className="inline-flex h-14 items-center gap-2 rounded-[16px] bg-fg px-7 text-[16px] font-medium text-bg transition-colors hover:bg-[#2b2925]">
                  {site.email}
                  <ArrowUpRight className="size-4" />
                </a>
              </Magnetic>
              <p className="text-[14px] text-muted">
                {site.available ? 'Open to projects and full-time roles' : 'Not available at the moment'}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="flex h-full min-h-[320px] flex-col justify-center rounded-card bg-surface-2/60 p-8">
              <p className="font-display text-[34px] leading-tight">Say hello</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                A project, a role, or a question about the work — email reaches me directly and I reply to everything I can help with.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-7 inline-flex h-13 items-center justify-center gap-2 rounded-[14px] bg-fg px-6 text-[15px] font-medium text-bg transition-colors hover:bg-[#2b2925]"
              >
                Email me
                <ArrowUpRight className="size-4" />
              </a>
              <Link
                to="/cv"
                className="mt-3 inline-flex h-13 items-center justify-center gap-2 rounded-[14px] border border-line-strong text-[15px] font-medium transition-colors hover:border-fg"
              >
                View and download my CV
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-8 border-t border-line pt-8 text-[14px] sm:grid-cols-3">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="link-draw text-muted transition-colors hover:text-fg">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-faint sm:text-center">
            {site.location}, {time}
          </p>
          <p className="text-faint sm:text-right">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </div>
    </footer>
  )
}
