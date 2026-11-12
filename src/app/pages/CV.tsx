import { Download } from 'lucide-react'
import type { ReactNode } from 'react'

import {
  coreCompetencies,
  education,
  educationNote,
  experience,
  languages,
  projects,
  references,
  site,
  skillGroups,
} from '../../data/site'

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-[12px] uppercase tracking-[0.14em] text-faint">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

export function CV() {
  const download = () => {
    if (site.cvFile) {
      window.location.href = site.cvFile
      return
    }
    window.print()
  }

  return (
    <article className="cv mx-auto max-w-[860px] px-5 pt-28 pb-20 sm:px-8 sm:pt-36">
      <header className="border-b border-line pb-8">
        <h1 className="font-display text-[clamp(38px,6.5vw,68px)]">{site.name}</h1>
        <p className="mt-3 text-[17px] text-muted">{site.role}</p>
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
          <li>
            <a href={`mailto:${site.email}`} className="link-draw">
              {site.email}
            </a>
          </li>
          <li className="text-muted">{site.location}</li>
        </ul>
      </header>

      <div className="no-print mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={download}
          className="inline-flex h-11 items-center gap-2 rounded-[12px] bg-fg px-5 text-[14px] font-medium text-bg transition-colors hover:bg-[#2b2925]"
        >
          <Download className="size-4" />
          {site.cvFile ? 'Download CV' : 'Download as PDF'}
        </button>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex h-11 items-center rounded-[12px] border border-line-strong px-5 text-[14px] font-medium transition-colors hover:border-fg"
        >
          Contact me
        </a>
      </div>

      <Section title="Professional profile">
        <p className="max-w-2xl text-[16px] leading-relaxed text-fg/85">{site.intro}</p>
      </Section>

      <Section title="Professional experience">
        <ol className="divide-y divide-line border-y border-line">
          {experience.map((e) => (
            <li key={e.title + e.period} className="grid gap-2 py-6 sm:grid-cols-[170px_1fr]">
              <span className="text-[14px] leading-relaxed text-faint">{e.period}</span>
              <span>
                <span className="block text-[16.5px] font-medium">{e.title}</span>
                <span className="mt-0.5 block text-[14px] text-muted">{e.org}</span>
                <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-[14.5px] leading-relaxed text-fg/80">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Full-stack development & technical expertise">
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-[16px] border border-line p-5">
              <h3 className="text-[15px] font-medium">{g.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="rounded-[8px] bg-surface-2/70 px-2.5 py-1 text-[13px] text-fg/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Core competencies">
        <ul className="flex flex-wrap gap-2">
          {coreCompetencies.map((c) => (
            <li key={c} className="rounded-[10px] border border-line px-3 py-1.5 text-[14px] text-fg/80">
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Education & qualifications">
        <ol className="divide-y divide-line border-y border-line">
          {education.map((e) => (
            <li key={e.title + e.period} className="grid gap-1 py-5 sm:grid-cols-[170px_1fr]">
              <span className="text-[14px] text-faint">{e.period}</span>
              <span>
                <span className="block text-[16px] font-medium">{e.title}</span>
                <span className="block text-[14.5px] leading-relaxed text-muted">{e.detail}</span>
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-[14px] leading-relaxed text-muted">{educationNote}</p>
      </Section>

      <Section title="Languages">
        <ul className="grid gap-3 sm:grid-cols-3">
          {languages.map((l) => (
            <li key={l.name} className="rounded-[14px] border border-line p-4">
              <p className="text-[15px] font-medium">{l.name}</p>
              <p className="mt-1 text-[13.5px] text-muted">{l.level}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Selected projects">
        <ul className="divide-y divide-line border-y border-line">
          {projects.map((p) => (
            <li key={p.slug} className="grid gap-1 py-4 sm:grid-cols-[170px_1fr]">
              <span className="text-[14px] text-faint">{p.year}</span>
              <span>
                <span className="block text-[15.5px] font-medium">{p.title}</span>
                <span className="mt-0.5 block text-[14px] leading-relaxed text-muted">
                  {p.client} — {p.summary}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="References">
        <ul className="grid gap-4 sm:grid-cols-2">
          {references.map((r) => (
            <li key={r.email} className="rounded-[16px] border border-line p-5">
              <p className="text-[16px] font-medium">{r.name}</p>
              <p className="mt-1 text-[14px] text-muted">{r.role}</p>
              <p className="mt-3 flex flex-col gap-1 text-[14px]">
                <a href={`mailto:${r.email}`} className="link-draw w-fit text-fg/85">
                  {r.email}
                </a>
                <a href={`tel:${r.phone}`} className="w-fit text-muted hover:text-fg">
                  {r.phone}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <p className="mt-12 border-t border-line pt-6 text-[14px] text-muted">
        Certificates available on request —{' '}
        <a href={`mailto:${site.email}`} className="link-draw text-fg">
          {site.email}
        </a>
      </p>
    </article>
  )
}
