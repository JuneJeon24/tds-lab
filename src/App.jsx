import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  ExternalLink,
  FileText,
  Users,
  Microscope,
  Newspaper,
  BookOpen,
  GraduationCap,
} from "lucide-react";

/**
 * TDS Lab - single-page site template (Canvas-safe)
 * - ASCII-only text to avoid TSX parser issues
 * - No member photos (text-only People section)
 */

const TDSLogo = ({ className = "h-12 w-auto" }) => (
  <svg
    className={className}
    viewBox="0 0 520 150"
    role="img"
    aria-label="TDS Lab logo"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="tdsNavy" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#0B2436" />
        <stop offset="1" stopColor="#071A27" />
      </linearGradient>
    </defs>

    {/* Main wordmark */}
    <text
      x="0"
      y="78"
      fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
      fontSize="86"
      fontWeight="800"
      letterSpacing="-2"
      fill="url(#tdsNavy)"
    >
      TDS
    </text>

    <text
      x="10"
      y="122"
      fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
      fontSize="44"
      fontWeight="800"
      letterSpacing="1"
      fill="#C1272D"
    >
      LAB
    </text>

    {/* Three overlapping circles */}
    <g transform="translate(318,88)">
      <circle cx="0" cy="0" r="26" fill="url(#tdsNavy)" opacity="0.95" />
      <circle cx="30" cy="0" r="26" fill="#C1272D" opacity="0.85" />
      <circle cx="60" cy="0" r="26" fill="#D9D9D9" opacity="0.9" />
    </g>

    {/* Tagline */}
    <text
      x="0"
      y="147"
      fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
      fontSize="20"
      fontWeight="700"
      letterSpacing="3"
      fill="#111111"
    >
      {"THEORY - DATA - SOCIETY"}
    </text>
  </svg>
);

const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="scroll-mt-24 py-12">
    <div className="mx-auto max-w-6xl px-6">
      <div className="flex items-center gap-3">
        {Icon ? (
          <div className="rounded-2xl border bg-white/70 p-2 shadow-sm">
            <Icon className="h-5 w-5" />
          </div>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-sm shadow-sm">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-3xl border bg-white/80 p-6 shadow-sm backdrop-blur ${className}`}>
    {children}
  </div>
);

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-white hover:shadow-sm"
  >
    {children}
  </a>
);

export default function TDSLabSite() {
  const [open, setOpen] = useState(false);

  const nav = useMemo(
    () => [
      { href: "#about", label: "About" },
      { href: "#research", label: "Research" },
      { href: "#people", label: "People" },
      { href: "#publications", label: "Publications" },
      { href: "#news", label: "News" },
      { href: "#join", label: "Join" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  const researchAreas = [
    {
      title: "Sociology of Science and Technology (STS)",
      desc: "How scientific knowledge, institutions, and power co-evolve, and how politics becomes (in)visible in everyday scientific work.",
      tags: ["boundary-work", "knowledge politics", "ignorance"],
    },
    {
      title: "Theory x Data x Method",
      desc: "Building sociological theory with computational social science while remaining attentive to what digital traces omit.",
      tags: ["computational social science", "mixed methods", "theory-building"],
    },
    {
      title: "AI, Ethics, and Society",
      desc: "Institutionally grounded research ethics and the social implications of generative AI for knowledge labor and governance.",
      tags: ["AI ethics", "accountability", "institutions"],
    },
    {
      title: "Environment, Energy, and Policy",
      desc: "Macro-micro perspectives on sustainability transitions, policy agendas, and scientific fields over time.",
      tags: ["renewable energy", "policy", "semantic change"],
    },
    {
      title: "Knowledge Inequality and Global/Local Academia",
      desc: "Relational landscapes of scholarly production across linguistic and geopolitical boundaries.",
      tags: ["science of science", "inequality", "global-local"],
    },
  ];

  const selectedPubs = [
    {
      year: "2025",
      title:
        "The ethics of generative AI in social science research: A qualitative approach for institutionally grounded AI research ethics",
      venue: "Technology in Society, 81, 102836",
      links: [{ label: "PDF/DOI", href: "#" }],
    },
    {
      year: "2025",
      title:
        "Has higher education become more interdisciplinary? a longitudinal analysis of syllabi using natural language processing",
      venue: "Humanities and Social Sciences Communications, 12, 1841",
      links: [
        { label: "Nature", href: "https://www.nature.com/articles/s41599-025-06126-7" },
        { label: "DOI", href: "https://doi.org/10.1057/s41599-025-06126-7" },
      ],
    },
    {
      year: "2024",
      title:
        "I Don't Care Who Rules in the White House: Boundary-Work between Science and Politics as an Everyday Politics of Knowledge",
      venue: "The Sociological Quarterly (Online First)",
      links: [{ label: "Publisher", href: "#" }],
    },
    {
      year: "2021",
      title:
        "A Critical Appraisal of Diversity in Digital Knowledge Production: A Segregated Inclusion of Knowledge Producers Community on YouTube",
      venue: "New Media and Society",
      links: [{ label: "DOI", href: "https://doi.org/10.1177/14614448211034846" }],
    },
    {
      year: "2019",
      title: "Invisibilizing Politics: Accepting and Legitimating Ignorance in Environmental Sciences",
      venue: "Social Studies of Science, 49(4): 839-862",
      links: [{ label: "DOI", href: "https://doi.org/10.1177/0306312719872823" }],
    },
    {
      year: "2019",
      title:
        "Rethinking Scientific Habitus: Toward a Theory of Embodiment, Institutions, and Stratification of Science",
      venue: "Engaging Science, Technology, and Society, 5: 160-172",
      links: [{ label: "Link", href: "https://doi.org/10.17351/ests2019.303" }],
    },
  ];

  const people = {
    pi: {
      name: "June Jeon",
      role: "Assistant Professor of Sociology, KAIST",
      email: "junejeon@kaist.ac.kr",
      tags: ["STS", "Environment", "Qualitative Methods", "Computational Social Science"],
      scholar: "https://scholar.google.com/citations?user=URGxapsAAAAJ&hl=en",
    },
    postdoc: [
      {
        name: "Taekho You",
        role:
          "Research Assistant Professor, KAIST (Center for Digital Humanities and Computational Social Sciences)",
        links: [
          { label: "Profile (DHCSS)", href: "https://dhcss.kaist.ac.kr/boards/lists/board_research_en" },
          { label: "Email", href: "mailto:taekho.you@kaist.ac.kr" },
        ],
      },
      {
        name: "Eunrang Kwon",
        role:
          "Post-Doctoral Researcher, KAIST (Center for Digital Humanities and Computational Social Sciences)",
        links: [
          { label: "Profile (DHCSS)", href: "https://dhcss.kaist.ac.kr/boards/lists/board_research_en" },
          { label: "Email", href: "mailto:eunrang_kwon@kaist.ac.kr" },
        ],
      },
    ],
    graduate: [
      {
        name: "Somin Lee",
        role: "Master's Student, KAIST",
        links: [{ label: "Profile (GHSS)", href: "https://ghss.kaist.ac.kr/pages/sub/sub02_03" }],
      },
      {
        name: "Songeun Chae",
        role: "Master's Student, KAIST",
        links: [
          { label: "Profile (GHSS)", href: "https://ghss.kaist.ac.kr/pages/sub/sub02_03" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/songeun-chae-b63348354/" },
        ],
      },
      {
        name: "Sunwoo Ahn",
        role: "Master's Student, KAIST",
        links: [{ label: "Profile (GHSS)", href: "https://ghss.kaist.ac.kr/pages/sub/sub02_03" }],
      },
    ],
  };

  const news = [
    {
      date: "2024-2027",
      title:
        "Center for AI-Society Co-evolution (National Research Foundation of Korea) - collaborative research program",
      href: "#",
    },
    {
      date: "2023",
      title:
        "Summer Institute in Computational Social Science-Korea (KAIST-KDI-CNU) - organized panels and training",
      href: "#",
    },
    {
      date: "Ongoing",
      title: "Open calls for student researchers and collaborators (see Join section)",
      href: "#join",
    },
  ];

  const fade = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50 text-neutral-900">
      {/* Top bar */}
      <div className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-3">
            <TDSLogo className="h-14 w-auto" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Theory, Data, and Society Lab</div>
              <div className="text-xs text-neutral-600">TDS Lab - KAIST</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <NavLink key={n.href} href={n.href}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-2xl border bg-white px-3 py-2 text-sm shadow-sm"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        {open ? (
          <div className="md:hidden border-t bg-white/80 backdrop-blur">
            <div className="mx-auto max-w-6xl px-6 py-3">
              <div className="grid grid-cols-2 gap-2">
                {nav.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border bg-white px-3 py-2 text-sm font-medium shadow-sm"
                  >
                    {n.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-6xl px-6 pt-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          className="grid gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm shadow-sm">
              <Microscope className="h-4 w-4" />
              <span>Computational Social Science - Qualitative Methods - Social Theory</span>
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Building sociological theory with data, without losing the world behind the data.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-700">
              The Theory, Data, and Society Lab (TDS Lab) studies how science, technology, and institutions shape
              social life, using mixed methods that connect qualitative insight with computational evidence.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>STS</Pill>
              <Pill>AI and Society</Pill>
              <Pill>Knowledge Inequality</Pill>
              <Pill>Environment and Policy</Pill>
              <Pill>Mixed Methods</Pill>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#join"
                className="rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
              >
                Join / Collaborate
              </a>
              <a
                href="#publications"
                className="rounded-2xl border bg-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-neutral-50"
              >
                Explore Publications
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Card>
                <div className="text-xs font-semibold text-neutral-600">Focus</div>
                <div className="mt-2 text-sm">
                  Science, AI, environment, and inequality in socio-technical systems.
                </div>
              </Card>
              <Card>
                <div className="text-xs font-semibold text-neutral-600">Approach</div>
                <div className="mt-2 text-sm">
                  Theory-driven mixed methods: ethnography, interviews, text analysis, and networks.
                </div>
              </Card>
              <Card>
                <div className="text-xs font-semibold text-neutral-600">Output</div>
                <div className="mt-2 text-sm">Peer-reviewed papers, open code, and public-facing knowledge.</div>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-4">
            <Card className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-neutral-600">Lab Updates</div>
                  <div className="mt-1 text-lg font-semibold">What's happening</div>
                </div>
                <Newspaper className="h-5 w-5 text-neutral-700" />
              </div>
              <div className="mt-4 space-y-3">
                {news.map((n) => (
                  <a
                    key={n.title}
                    href={n.href}
                    className="block rounded-2xl border bg-white p-4 shadow-sm hover:bg-neutral-50"
                  >
                    <div className="text-xs font-semibold text-neutral-600">{n.date}</div>
                    <div className="mt-1 text-sm font-medium">{n.title}</div>
                  </a>
                ))}
              </div>
            </Card>

            <div className="mt-6 rounded-3xl border bg-white/60 p-6 shadow-sm">
              <div className="text-sm font-semibold">Affiliation</div>
              <div className="mt-2 text-sm text-neutral-700">
                KAIST - School of Digital Humanities and Computational Social Sciences
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Daejeon</Pill>
                <Pill>Republic of Korea</Pill>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      <main>
        <Section id="about" title="About" icon={FileText}>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <div className="text-sm font-semibold">Mission</div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                TDS Lab develops sociological explanations for socio-technical change. We build research designs
                where concepts, data sources, and analytic strategies co-evolve.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold">Why "Theory, Data, and Society"?</div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Digital traces are powerful, but they can flatten lived realities. We connect computational evidence
                with qualitative insight to make strong explanations that remain grounded in context.
              </p>
            </Card>
            <Card>
              <div className="text-sm font-semibold">Methods</div>
              <ul className="mt-2 space-y-2 text-sm text-neutral-700">
                <li>- Ethnography and in-depth interviews</li>
                <li>- Text analysis (topic models, embeddings, LLM-assisted coding)</li>
                <li>- Network analysis and science-of-science methods</li>
                <li>- Mixed-method research design and research ethics</li>
              </ul>
            </Card>
          </div>
        </Section>

        <Section id="research" title="Research" icon={Microscope}>
          <div className="grid gap-6 md:grid-cols-2">
            {researchAreas.map((r) => (
              <Card key={r.title}>
                <div className="text-lg font-semibold">{r.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{r.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="people" title="People" icon={Users}>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <div className="text-sm font-semibold">Principal Investigator</div>
              <div className="mt-4">
                <div className="text-base font-semibold">{people.pi.name}</div>
                <div className="text-sm text-neutral-700">{people.pi.role}</div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {people.pi.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-neutral-700">
                <Mail className="h-4 w-4" />
                <a className="hover:underline" href={`mailto:${people.pi.email}`}>
                  {people.pi.email}
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={people.pi.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border bg-white px-3 py-2 text-sm shadow-sm hover:bg-neutral-50"
                >
                  <ExternalLink className="h-4 w-4" />
                  Google Scholar
                </a>
              </div>
            </Card>

            <Card>
              <div className="text-sm font-semibold">Members</div>
              <div className="mt-4 space-y-5">
                <div>
                  <div className="text-xs font-semibold text-neutral-600">Postdocs</div>
                  <div className="mt-3 space-y-3">
                    {people.postdoc.map((m) => (
                      <div key={m.name} className="rounded-2xl border bg-white p-4 shadow-sm">
                        <div className="text-sm font-semibold">{m.name}</div>
                        <div className="mt-0.5 text-sm text-neutral-600">{m.role}</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {m.links.map((l) => (
                            <a
                              key={l.label}
                              href={l.href}
                              className="inline-flex items-center gap-2 rounded-2xl border bg-white px-3 py-2 text-sm shadow-sm hover:bg-neutral-50"
                            >
                              <ExternalLink className="h-4 w-4" />
                              {l.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-neutral-600">Graduate Students</div>
                  <div className="mt-3 space-y-3">
                    {people.graduate.map((m) => (
                      <div key={m.name} className="rounded-2xl border bg-white p-4 shadow-sm">
                        <div className="text-sm font-semibold">{m.name}</div>
                        <div className="mt-0.5 text-sm text-neutral-600">{m.role}</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {m.links.map((l) => (
                            <a
                              key={l.label}
                              href={l.href}
                              className="inline-flex items-center gap-2 rounded-2xl border bg-white px-3 py-2 text-sm shadow-sm hover:bg-neutral-50"
                            >
                              <ExternalLink className="h-4 w-4" />
                              {l.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="text-sm font-semibold">Collaborators</div>
              <p className="mt-2 text-sm text-neutral-700">
                Add local/international collaborators, partner labs, and affiliated researchers.
              </p>
              <div className="mt-4 space-y-2 text-sm text-neutral-700">
                <div className="rounded-2xl border bg-white p-4 shadow-sm">(Collaborator - Institution)</div>
                <div className="rounded-2xl border bg-white p-4 shadow-sm">(Collaborator - Institution)</div>
              </div>
            </Card>
          </div>
        </Section>

        <Section id="publications" title="Publications" icon={BookOpen}>
          <div className="grid gap-6 lg:grid-cols-2">
            {selectedPubs.map((p) => (
              <Card key={p.title}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold text-neutral-600">{p.year}</div>
                    <div className="mt-1 text-base font-semibold">{p.title}</div>
                    <div className="mt-2 text-sm text-neutral-700">{p.venue}</div>
                  </div>
                  <FileText className="h-5 w-5 text-neutral-700" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="inline-flex items-center gap-2 rounded-2xl border bg-white px-3 py-2 text-sm shadow-sm hover:bg-neutral-50"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {l.label}
                    </a>
                  ))}
                  <a
                    href={people.pi.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border bg-white px-3 py-2 text-sm shadow-sm hover:bg-neutral-50"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View all on Google Scholar
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="news" title="News" icon={Newspaper}>
          <div className="grid gap-4">
            {news.map((n) => (
              <div key={n.title} className="rounded-3xl border bg-white/80 p-5 shadow-sm">
                <div className="text-xs font-semibold text-neutral-600">{n.date}</div>
                <div className="mt-1 text-sm font-medium">{n.title}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="join" title="Join the Lab" icon={GraduationCap}>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <div className="text-sm font-semibold">We're looking for</div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li>- Students interested in STS, AI and society, and mixed methods</li>
                <li>- Researchers comfortable moving between theory and empirical work</li>
                <li>- Collaborators in computational methods, qualitative inquiry, and research ethics</li>
              </ul>
              <div className="mt-5 rounded-2xl border bg-white p-4 text-sm text-neutral-700 shadow-sm">
                <div className="font-semibold">How to apply</div>
                <div className="mt-1">
                  Email a short introduction, CV, and a paragraph describing your research interests (and/or a GitHub
                  link if relevant).
                </div>
              </div>
            </Card>

            <Card>
              <div className="text-sm font-semibold">What you can work on</div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Text and discourse", desc: "LLMs, embeddings, and interpretive coding" },
                  { title: "Networks", desc: "Science-of-science and socio-technical ties" },
                  { title: "Fieldwork", desc: "Ethnography, interviews, reflexive methods" },
                  { title: "Ethics", desc: "Institutional governance and responsible AI" },
                ].map((x) => (
                  <div key={x.title} className="rounded-2xl border bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold">{x.title}</div>
                    <div className="mt-1 text-sm text-neutral-600">{x.desc}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Section>

        <Section id="contact" title="Contact" icon={MapPin}>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <div className="text-sm font-semibold">Email</div>
              <div className="mt-2 flex items-center gap-2 text-sm text-neutral-700">
                <Mail className="h-4 w-4" />
                <a className="hover:underline" href="mailto:junejeon@kaist.ac.kr">
                  junejeon@kaist.ac.kr
                </a>
              </div>
              <div className="mt-4 text-xs text-neutral-600">Replace with a lab admin email if you prefer.</div>
            </Card>

            <Card>
              <div className="text-sm font-semibold">Location</div>
              <div className="mt-2 flex items-start gap-2 text-sm text-neutral-700">
                <MapPin className="mt-0.5 h-4 w-4" />
                <div>
                  <div>KAIST, Daejeon, Republic of Korea</div>
                  <div className="text-neutral-600">School of Digital Humanities and Computational Social Sciences</div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="text-sm font-semibold">Links</div>
              <div className="mt-3 space-y-2">
                {[
                  "Google Scholar",
                  "GitHub",
                  "Open Science / OSF",
                  "Lab Handbook",
                ].map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="flex items-center justify-between rounded-2xl border bg-white px-4 py-3 text-sm shadow-sm hover:bg-neutral-50"
                  >
                    <span>{l}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </Section>
      </main>

      <footer className="border-t bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm font-semibold">Theory, Data, and Society Lab (TDS Lab)</div>
            <div className="text-sm text-neutral-600">(c) {new Date().getFullYear()} - KAIST</div>
          </div>
          <div className="mt-3 text-xs text-neutral-600">
            This template is designed for easy editing. Update text, links, and members; optionally split into
            multiple pages later.
          </div>
        </div>
      </footer>
    </div>
  );
}
