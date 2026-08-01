/* ============================================================
   SITE DATA — the only file you need to edit for content.
   Every section reads from here. No component holds content.
   ============================================================ */

export const profile = {
  name: 'Syed Anas Faaiz',
  /* The typing headline cycles through these. Keep them short. */
  roles: [
    'Full-Stack Engineer',
    'Automation Builder',
    'Data & AI Tinkerer',
  ],
  blurb:
    'Final-year CS student who ships. I build full-stack apps, wire up automation that removes the boring parts, and put LLMs to work on problems that actually need them.',
  status: 'Open to internships and junior roles · Remote friendly',
  resume: '/Syed%20Anas%20Faaiz_Resume.pdf',
  photo: '/profile.jpeg',
  email: 'syed.anasfaaiz@gmail.com',
  github: 'https://github.com/AnasFaaiz',
  githubUser: 'AnasFaaiz',
  linkedin: 'https://linkedin.com/in/anasfaaiz',
  x: 'https://twitter.com/anasfaaiz',
  discord: 'https://discord.com/users/anasfaaiz',
};

/* ------------------------------------------------------------
   PROJECTS
   `repo` must match the GitHub repo name exactly — the section
   uses it to pull live star/fork counts.

   `image` is intentionally empty. An empty string renders the
   typographic fallback plate (project name on a gradient), which
   looks deliberate and costs nothing. When you have a real
   screenshot, drop a 16:9 file (1200x675) in /public/projects/
   and set the path here, e.g. image: '/projects/tracevault.png'.
   Only fill one in once the file actually exists — a wrong path
   is a 404 on every page load.
   ------------------------------------------------------------ */
export const projects = [
  {
    title: 'TraceVault',
    repo: 'TraceVault',
    blurb:
      'Self-hosted vault for tracking anything you want to keep a record of, with a typed API and a dashboard that stays fast as the dataset grows.',
    image: '',
    tech: ['NestJS', 'Next.js', 'Prisma', 'PostgreSQL', 'Docker'],
    live: '',
    code: 'https://github.com/AnasFaaiz/TraceVault',
    featured: true,
  },
  {
    title: 'Academigo',
    repo: 'academigo',
    blurb:
      'AI learning assistant that answers from your own course material. Django backend talks to a hosted Langflow flow; React front end streams the responses.',
    image: '',
    tech: ['Django', 'React', 'Vite', 'Langflow', 'Astra DB'],
    live: '',
    code: 'https://github.com/AnasFaaiz/academigo',
    featured: true,
  },
  {
    title: 'BugStory',
    repo: 'BugStory-IBM-Bob-hacakthon',
    blurb:
      'Paste a stack trace, get the autopsy. Retrieval over past incidents plus WatsonX turns a raw error into a readable cause-and-fix write-up.',
    image: '',
    tech: ['FastAPI', 'Next.js', 'WatsonX', 'RAG'],
    live: '',
    code: 'https://github.com/AnasFaaiz/BugStory-IBM-Bob-hacakthon',
    featured: true,
  },
  {
    title: 'Shorts Factory',
    repo: 'shorts-factory',
    blurb:
      'Local pipeline that watches a long video, finds the moments worth clipping, cuts them vertical and captions them. Runs entirely on my own machine.',
    image: '',
    tech: ['n8n', 'Ollama', 'Whisper', 'FFmpeg'],
    live: '',
    code: 'https://github.com/AnasFaaiz',
    featured: false,
  },
  {
    title: 'LearnSphere AI',
    repo: 'LearnSphere-AI',
    blurb:
      'Tutoring app that grounds every answer in the syllabus it was given, so students get explanations instead of confident guesses.',
    image: '',
    tech: ['Next.js', 'RAG', 'Vector Search'],
    live: '',
    code: 'https://github.com/AnasFaaiz/LearnSphere-AI',
    featured: false,
  },
  {
    title: 'ACE',
    repo: 'ACE',
    blurb:
      'A portable assistant built on fine-tuned Gemma models — small enough to run locally, tuned on the way I actually work.',
    image: '',
    tech: ['Python', 'Gemma', 'LoRA', 'PyTorch'],
    live: '',
    code: 'https://github.com/AnasFaaiz',
    featured: false,
  },
];

/* ------------------------------------------------------------
   SKILLS — three rails. Row 1 and 3 scroll left, row 2 right.
   Add or remove freely; the marquee re-measures itself.
   ------------------------------------------------------------ */
export const skills = [
  ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'Bash'],
  ['Next.js', 'React', 'NestJS', 'FastAPI', 'Django', 'Tailwind CSS', 'Prisma'],
  ['Docker', 'Kubernetes', 'AWS', 'PostgreSQL', 'MongoDB', 'n8n', 'Git', 'Linux'],
];

/* ------------------------------------------------------------
   EXPERIENCE
   ------------------------------------------------------------ */
export const experience = [
  {
    role: 'Full-Stack Developer Intern',
    org: 'NoDevBuild',
    period: 'Jan 2026 — Mar 2026',
    points: [
      'Built and shipped features across the stack on a live product.',
      'Worked in a small team where the same person owns the API and the screen that calls it.',
    ],
    tech: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    role: 'B.Tech, Computer Science (Data Engineering with AI)',
    org: 'KL University, Hyderabad',
    period: 'Jul 2023 — May 2027',
    points: [
      'CGPA 9.52 / 10.',
      'Core member of Guild Club and FOSS Club KLH; volunteered at a Red Hat hackathon helping teams debug.',
    ],
    tech: ['Data Engineering', 'Machine Learning', 'Distributed Systems'],
  },
];

/* ------------------------------------------------------------
   CERTIFICATIONS
   ------------------------------------------------------------ */
export const certifications = {
  professional: [
    {
      title: 'MongoDB Associate Developer',
      issuer: 'MongoDB',
      date: 'Dec 2025',
      imageUrl: '/certificates/mongodb_developer.png',
      credentialUrl:
        'https://www.credly.com/badges/1396cd97-3132-4da4-b27c-36989191fbf2/public_url',
    },
    {
      title: 'AWS Academy Graduate — Data Engineering',
      issuer: 'AWS',
      date: 'Aug 2024',
      imageUrl: '/certificates/aws_DE.png',
      credentialUrl:
        'https://www.credly.com/badges/101f56b5-9d66-4b13-b3ed-81d299f55f12/public_url',
    },
    {
      title: 'AWS Academy Graduate — Machine Learning Foundations',
      issuer: 'AWS',
      date: 'Jul 2025',
      imageUrl: '/certificates/aws_ML.png',
      credentialUrl:
        'https://www.credly.com/badges/fb20d0cd-9a6f-48ad-beb4-94766892d09b/public_url',
    },
    {
      title: 'GitHub Foundations',
      issuer: 'GitHub',
      date: 'May 2025',
      imageUrl: '/certificates/GitHub_Foundations.png',
      credentialUrl:
        'https://www.credly.com/badges/2ec59f92-4680-496b-ae44-5703ca0d2bf9/public_url',
    },
    {
      title: 'Advanced Automation (RPA)',
      issuer: 'Automation Anywhere',
      date: 'Jul 2025',
      imageUrl: '/certificates/RPA_advanced_certificate.png',
      credentialUrl:
        'https://certificates.automationanywhere.com/dc4840a2-3703-48bb-871a-fcd3e080ac00',
    },
  ],
  learning: [
    {
      title: 'LLMs & Prompt Engineering',
      issuer: 'NVIDIA',
      date: '2025',
      imageUrl: '/certificates/nvidia_building_llm.jpeg',
      credentialUrl: '#',
    },
    {
      title: 'Artificial Intelligence Fundamentals',
      issuer: 'IBM SkillsBuild',
      date: 'Nov 2024',
      imageUrl: '/certificates/IBM_AIML.png',
      credentialUrl:
        'https://www.credly.com/badges/da1c8193-6b27-4a1e-9530-e28e582d798a/public_url',
    },
    {
      title: 'Essentials Automation',
      issuer: 'Automation Anywhere',
      date: 'Mar 2025',
      imageUrl: '/certificates/essentials_rpa.png',
      credentialUrl:
        'https://certificates.automationanywhere.com/916e9a6e-1cc8-488c-b125-c853e68175f4',
    },
    {
      title: 'Red Hat Academy — Program Learner',
      issuer: 'Red Hat',
      date: 'Dec 2024',
      imageUrl: '/certificates/redhat_learner.png',
      credentialUrl:
        'https://www.credly.com/badges/d28b2393-4670-48c9-a076-caa2948b2d66/public_url',
    },
  ],
};

/* Navigation — order here is the order on screen. */
export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'path', label: 'Path' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];
