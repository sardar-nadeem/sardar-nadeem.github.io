import { ArrowUpRight } from 'lucide-react'

import { coreCompetencies, education, educationNote, experience, languages, site, skills } from '../../data/site'
import { Lines, Parallax, Reveal } from '../components/motion'

export function About() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Lines
        as="h1"
        className="font-display text-balance text-[clamp(44px,7.5vw,112px)]"
        lines={['ICT & software engineer,', 'full-stack developer,', 'master trainer']}
      />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <Reveal>
          <Parallax src="/images/portrait.jpg" alt={site.name} className="aspect-[3/4] rounded-image" strength={6} />
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="link-draw inline-flex items-center gap-1 text-muted hover:text-fg">
                  {s.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <div>
          <Reveal className="text-pretty text-[19px] leading-relaxed sm:text-[22px]">
            <p>{site.intro}</p>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <h2 className="text-[14px] text-muted">Experience</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {experience.map((e) => (
                <li key={e.title + e.period} className="grid gap-2 py-5 sm:grid-cols-[170px_1fr]">
                  <span className="text-[14px] tabular-nums leading-relaxed text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{e.title}</span>
                    <span className="block text-[14px] text-muted">{e.org}</span>
                    <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-[14px] leading-relaxed text-muted">
                      {e.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.2} className="mt-16">
            <h2 className="text-[14px] text-muted">Skills</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill} className="rounded-[10px] border border-line px-3 py-1.5 text-[14px] text-fg/80">
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25} className="mt-16">
            <h2 className="text-[14px] text-muted">Core competencies</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {coreCompetencies.map((c) => (
                <li key={c} className="rounded-[10px] border border-line px-3 py-1.5 text-[14px] text-fg/80">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3} className="mt-16">
            <h2 className="text-[14px] text-muted">Education & qualifications</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {education.map((e) => (
                <li key={e.title + e.period} className="grid gap-1 py-5 sm:grid-cols-[170px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{e.title}</span>
                    <span className="block text-[14.5px] text-muted">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-[14px] leading-relaxed text-muted">{educationNote}</p>
          </Reveal>

          <Reveal delay={0.35} className="mt-16">
            <h2 className="text-[14px] text-muted">Languages</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {languages.map((l) => (
                <li key={l.name} className="rounded-[14px] border border-line p-4">
                  <p className="text-[15px] font-medium">{l.name}</p>
                  <p className="mt-1 text-[13.5px] text-muted">{l.level}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </article>
  )
}
