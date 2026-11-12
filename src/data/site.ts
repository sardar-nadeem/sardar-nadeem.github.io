// Everything about you lives here. The pages read from this file.

export const site = {
  name: 'Sardar Wadan Nadeem',
  role: 'ICT & Software Engineer',
  location: 'Afghanistan',
  timezone: 'Asia/Kabul',
  email: 's.nadeem@acdo.org',
  available: true,
  cvFile: '',
  intro:
    'Motivated and detail-oriented ICT & Software Engineer with professional experience in ICT support, full-stack web development, digital data systems, education programming, community engagement, administration, and HR support. Experienced with Asia Community Development Organization (ACDO) in field coordination, Master Trainer responsibilities, and administrative functions. Strong technical background in Python, JavaScript, Vue.js, Laravel, Node.js, React, databases, APIs, Microsoft Office, Kobo Collect, and digital reporting tools. Confident in training staff, supporting field teams, solving technical problems, and working effectively in demanding environments.',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Are.na', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Read.cv', href: '#' },
  ],
  marquee: [
    'Full-stack development',
    'ICT & digital systems',
    'Education programming',
    'Field coordination',
    'Data & reporting',
    'Admin & HR support',
  ],
}

export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: string
  cover: string
  tint: string
  summary: string
  role: string[]
  deliverables: string[]
  link?: string
  body: string[]
  size: 'large' | 'small'
}

export const projects: Project[] = [
  {
    slug: 'risk-mitigation-training',
    title: 'Risk Mitigation Training',
    client: 'UNFPA and War Child Canada',
    category: 'Training and facilitation',
    year: 'Recent',
    cover: '/images/work-1.jpg',
    tint: '#efe0d4',
    summary:
      'Delivering a protection and risk-mitigation training for partner staff, and closing the programme with certificates for every participant.',
    role: ['Master trainer', 'Facilitation', 'Reporting'],
    deliverables: ['Training sessions', 'Participant assessment', 'Certificate ceremony'],
    body: [
      'Training days bring staff from several organisations into one room, with different levels of experience and very different day jobs. The work is as much about keeping the room talking as it is about the content.',
      'The programme covered risk mitigation and protection practice, with sessions built around the situations participants meet in the field rather than around slides. Each day ended with a short review so the next one could start where the group actually was.',
      'The certificate at the end matters less than what people do on the Monday after, but it is the moment everyone photographs.',
    ],
    size: 'large',
  },
  {
    slug: 'field-monitoring-visit',
    title: 'Field Monitoring',
    client: 'Asia Community Development Organization (ACDO)',
    category: 'Field monitoring',
    year: 'Recent',
    cover: '/images/work-3.jpg',
    tint: '#e2e7dc',
    summary:
      'Monitoring visits with beneficiary households, recording feedback on site and turning it into reporting the programme team can act on.',
    role: ['Field monitor', 'Data collection', 'Reporting'],
    deliverables: ['Household interviews', 'Site verification', 'Monitoring reports'],
    body: [
      'Monitoring happens where the work is: a field, a compound wall, a solar array, a conversation that takes as long as it takes. The phone and the notebook in this photograph are the whole toolkit.',
      'Each visit combines a structured checklist with an open conversation, because the numbers tell you whether something was delivered and the conversation tells you whether it was useful.',
      'Findings go back to the programme team as short reports with photographs attached, so problems are fixed in the next round rather than the next quarter.',
    ],
    size: 'small',
  },
  {
    slug: 'catch-up-teacher-training',
    title: 'Catch-up Teacher Training',
    client: 'Asia Community Development Organization (ACDO)',
    category: 'Teacher training',
    year: 'Recent',
    cover: '/images/work-4.jpg',
    tint: '#e6e3ef',
    summary:
      'A refresher programme for catch-up class teachers covering quality, core methodologies and multi-grade teaching approaches.',
    role: ['Master trainer', 'Curriculum delivery', 'Assessment'],
    deliverables: ['Refresher sessions', 'Multi-grade methodology', 'Certification'],
    body: [
      'Catch-up classes serve children who have missed years of schooling, which means one teacher is often working across several grade levels at once. Multi-grade methodology is not a theory in that room, it is the job.',
      'The refresher covered core teaching approaches, classroom quality and the practical routines that make a mixed class workable, with time for teachers to compare what has and has not worked since the last round.',
      'Sessions ran in the local language, with materials left behind so teachers could keep using them after the training ended.',
    ],
    size: 'small',
  },
  {
    slug: 'classroom-delivery',
    title: 'Classroom Delivery',
    client: 'Asia Community Development Organization (ACDO)',
    category: 'Education delivery',
    year: 'Recent',
    cover: '/images/work-5.jpg',
    tint: '#efe6d8',
    summary:
      'Teaching sessions with children in community classrooms, where the room is the floor and the wall charts are the curriculum.',
    role: ['Teaching', 'Classroom support', 'Materials'],
    deliverables: ['Lesson delivery', 'Learning materials', 'Classroom observation'],
    body: [
      'Community classrooms are improvised and unmistakable: hand-drawn charts on the wall, posters from three different programmes, children sitting wherever there is space. The teaching adapts to the room rather than the other way around.',
      'Sessions mix whole-class work with small groups, so stronger readers can help the ones still sounding out letters while the teacher works with a third group.',
      'Observing these classes is also how the training programme finds out which methods are actually being used, and which need another round.',
    ],
    size: 'large',
  },
  {
    slug: 'school-bag-distribution',
    title: 'School Bag Distribution',
    client: 'UNICEF',
    category: 'Field monitoring',
    year: 'Recent',
    cover: '/images/work-2.jpg',
    tint: '#dbe4ef',
    summary:
      'Distribution of school bags and learning supplies to children in a remote district, organised with the local education team and monitored in the field.',
    role: ['Field monitor', 'Distribution', 'Coordination', 'Record keeping'],
    deliverables: ['Supply distribution', 'Beneficiary lists', 'Distribution report'],
    body: [
      'The distribution itself takes an hour. Getting the lists right, the supplies to the site and the right children in front of the camera takes considerably longer.',
      'Bags are handed over against a beneficiary list, counted before and after, and photographed so the record matches what was delivered. In places where the nearest school is a long walk away, a bag with the basics in it is often the difference between enrolling and not.',
      'Working with the local education team means the follow-up happens after the team has left: attendance is checked in the weeks that follow, not on the day of the photograph.',
    ],
    size: 'small',
  },
  {
    slug: 'freelancing-web-development-course',
    title: 'Freelancing and Web Development Course',
    client: 'Professional development',
    category: 'Training and development',
    year: 'Recent',
    cover: '/images/freelancing.jpg',
    tint: '#e8e4dc',
    summary:
      'Freelancing and web development course focused on practical skills for building and delivering web projects for clients.',
    role: ['Participant', 'Web development', 'Freelancing practice'],
    deliverables: ['Course completion', 'Practical web projects', 'Client delivery skills'],
    body: [
      'The course focused on turning web development skills into client-ready work: scoping projects, building practical solutions, and communicating clearly with clients.',
      'Hands-on exercises covered modern web development practices and the habits that make freelance work reliable, from clear requirements to delivery and follow-up.',
    ],
    size: 'small',
  },
]

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const services = [
  {
    title: 'Training and facilitation',
    body: 'Designing and delivering training for teachers, partner staff and community teams: refresher courses, multi-grade methodology, risk mitigation and computer science, with materials participants can keep using afterwards.',
  },
  {
    title: 'Monitoring and reporting',
    body: 'Field monitoring visits, classroom and household observation, beneficiary verification, and the short reports that turn what you saw into a decision.',
  },
  {
    title: 'ICT support and web development',
    body: 'Hardware and software support, data entry and reporting systems, and websites built and maintained end to end.',
  },
  {
    title: 'Admin and HR support',
    body: 'Records, scheduling, documentation and the day-to-day administration that keeps a programme office running.',
  },
]

export const certificates = [
  {
    title: 'Risk Mitigation Training',
    org: 'UNFPA and War Child Canada — certificate of participation',
    year: 'Recent',
  },
  {
    title: 'Refresher Training for Catch-up Teachers',
    org: 'ACDO — quality, core methodologies and multi-grade teaching approaches',
    year: 'Recent',
  },
]

export const skillGroups = [
  {
    title: 'Full-stack & programming',
    items: ['Python', 'JavaScript', 'Vue.js', 'React', 'Laravel', 'Node.js', 'HTML/CSS', 'REST APIs', 'Git-based development workflows'],
  },
  {
    title: 'Data & databases',
    items: ['Database management', 'Structured data handling', 'CRUD operations', 'APIs', 'Data collection', 'Reporting', 'Dashboards'],
  },
  {
    title: 'ICT & office',
    items: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Kobo Collect', 'ICT troubleshooting', 'Backups', 'Secure data handling', 'Professional email systems', 'Digital reporting tools'],
  },
  {
    title: 'Education & training',
    items: ['Master Training', 'TLS education', 'Accelerated learning', 'Multigrade teaching', 'Lesson planning', 'Classroom management', 'Facilitation'],
  },
  {
    title: 'Field & administration',
    items: ['Community mobilization', 'Monitoring & field coordination', 'HR support', 'Administration', 'Staff records & attendance', 'Recruitment coordination'],
  },
  {
    title: 'Other',
    items: ['Professional photography', '3-Month Photography Course'],
  },
]

export const skills = skillGroups.flatMap((g) => g.items)

export const coreCompetencies = [
  'Master Training & Facilitation',
  'Leadership & Teamwork',
  'Community Mobilization',
  'Project Monitoring & Field Coordination',
  'HR & Administrative Support',
  'Problem Solving & ICT Support',
]

export const languages = [
  { name: 'Dari', level: 'Native' },
  { name: 'Pashto', level: 'Native' },
  { name: 'English', level: 'Fluent — excellent reading and writing' },
]

export const experience = [
  {
    period: '1 July 2026 – 30 December 2026',
    title: 'Master Trainer – TLS Education Project',
    org: 'Asia Community Development Organization (ACDO), Farah Province',
    points: [
      'Delivered and facilitated refresher and capacity-building training sessions for TLS teachers and education staff.',
      'Trained teachers on accelerated learning approaches and covering one academic year within an accelerated four-month cycle.',
      'Facilitated practical sessions on attendance sheets, Taraq Taleem, lesson planning, classroom management, and other teaching tools.',
      'Provided guidance on multigrade teaching approaches and practical classroom methodologies suitable for TLS learning environments.',
      'Supported teachers through practical exercises, demonstrations, discussion, and follow-up coordination with project staff.',
    ],
  },
  {
    period: '2026 – Present',
    title: 'Admin & HR Focal Point',
    org: 'Asia Community Development Organization (ACDO), Farah Province',
    points: [
      'Managed HR documentation, staff records, attendance tracking, filing, and administrative reporting.',
      'Supported recruitment, shortlisting, interview coordination, payroll preparation, and timesheet verification.',
      'Maintained employee databases and supported office operations, logistics, and compliance with organizational procedures.',
    ],
  },
  {
    period: 'Sep 2025 – January 2026',
    title: 'District Community Mobilizer (DCM) & IT Assistant',
    org: 'Asia Community Development Organization (ACDO), Farah Province',
    points: [
      'Coordinated community outreach and supported emergency-response programs in rural districts.',
      'Conducted rapid community assessments and supported WASH, education, and community awareness activities.',
      'Managed project data and reports using Microsoft Excel and other MS Office tools.',
      'Maintained databases of beneficiaries, teachers, and students and provided IT and digital reporting support.',
    ],
  },
  {
    period: 'January 2023 – January 2025',
    title: 'ICT & Frontend Developer',
    org: 'Elite Valley Software Company, Afghanistan',
    points: [
      'Provided first-line ICT support for field and office staff, resolving hardware, software, and network issues.',
      'Supported surveys, monitoring, accountability activities, digital tools, data entry, and reporting.',
      'Developed and maintained web applications and dashboards using Vue.js, Laravel, and APIs.',
      'Designed user-friendly systems for survey data, reporting, and accountability mechanisms.',
      'Conducted staff training on Microsoft Office, Kobo Collect, email systems, and secure data handling.',
    ],
  },
]

export const education = [
  {
    period: '2021–2025',
    title: 'Bachelor of Computer Science',
    detail: 'Kabul University, Kabul — First Division',
  },
  {
    period: '2009–2021',
    title: 'Baccalaureate High School',
    detail: 'Kawsar Noor Private High School, Farah — First Division',
  },
  {
    period: '2020–2021',
    title: 'Diploma in English Language',
    detail: 'Afghan Training Center, Farah — First Division',
  },
  {
    period: '2022–2023',
    title: 'Diploma in English Language',
    detail: 'Muslim English Language Institute — First Division',
  },
  {
    period: '3 Months',
    title: 'Photography Course',
    detail: '3-Month Professional Photography Course — Completed',
  },
]

export const educationNote =
  'Bachelor’s Degree in Computer Science (Software Engineering), Kabul University — graduated in 2025; official degree/diploma issuance was pending at the time of the source CV.'

export const references = [
  {
    name: 'Nazir Ahmad Zafar',
    role: 'Project Manager, ACDO',
    email: 'n.zafar@acdo.org',
    phone: '0766662017',
  },
  {
    name: 'Nasir Ahmad Nadeem',
    role: 'Education Cluster Coordinator, UNICEF, Western Region, Afghanistan',
    email: 'nasir1nadeem@gmail.com',
    phone: '+93 784228187',
  },
  {
    name: 'Sayed Nujmuddin Sadaat',
    role: 'Lecturer, Kabul University',
    email: 'sayed.najmuddin@gmail.com',
    phone: '+93 78 933 3078',
  },
]
