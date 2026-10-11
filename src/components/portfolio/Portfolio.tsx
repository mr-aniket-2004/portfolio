import { useEffect, useRef, useState, type RefObject } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Database,
  Download,
  Github,
  Linkedin,
  MapPin,
  Menu,
  PanelsTopLeft,
  Server,
  X,
  Copy,
  Check,
  Send,
  Code2,
  Mail,
  ChevronLeft,
  ChevronRight,
  Plus,
  Workflow as WorkflowIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCss,
  SiDjango,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlalchemy,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { LuDatabase, LuWebhook } from "react-icons/lu";
import { content } from "@/data/content.js";
import { Button, ActionLink } from "./Button";
import { Terminal } from "./Terminal";
export function Section({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="label-divider">/</span>
      {label}
    </div>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#" className="logo" aria-label="Ani.dev home">
          Ani<span>.dev</span>
          <i />
        </a>
        <nav aria-label="Main navigation" className={open ? "main-nav is-open" : "main-nav"}>
          {content.nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={active === item.toLowerCase() ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <span className="header-status">
            <span className="status-dot" />
            {content.status}
          </span>
          <ActionLink href={content.resume} download variant="outline" className="resume-link">
            Resume <Download size={13} />
          </ActionLink>
          <Button
            variant="quiet"
            className="menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </div>
    </header>
  );
}
export function Hero() {
  return (
    <section className="hero page-width">
      <div className="hero-copy">
        <p className="hero-owner">{content.name}</p>
        <div className="hero-eyebrow">
          <span className="accent-rule" />
          {content.hero.label}
        </div>
        <h1>
          {content.hero.start}
          <br />
          <em>{content.hero.accent}</em> behind
          <br />
          web applications<span className="accent-period">.</span>
        </h1>
        <p className="hero-description">{content.hero.description}</p>
        <div className="hero-buttons">
          <ActionLink href="#projects">
            View projects <ArrowUpRight size={17} />
          </ActionLink>
          <ActionLink href={content.github} target="_blank" rel="noreferrer" variant="outline">
            <Github size={17} />
            GitHub profile
          </ActionLink>
        </div>
        <div className="metrics">
          {content.metrics.map((m) => (
            <div key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-terminal">
        <Terminal />
        <div className="terminal-caption">
          <span>
            <span className="status-dot" />
            {content.status}
          </span>
          <span>01 — PROFILE</span>
        </div>
      </div>
      <a href="#about" className="scroll-cue">
        <ArrowDown size={14} /> A little more about me
      </a>
    </section>
  );
}
export function About() {
  return (
    <section id="about" className="about-section section-border">
      <div className="page-width about-grid">
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <div className="portrait">
              {content.photo ? (
                <img src={content.photo} alt={content.name} loading="lazy" />
              ) : (
                <>
                  <div className="photo-symbol">
                    <Code2 size={37} strokeWidth={1} />
                  </div>
                  <span>[YOUR PHOTO]</span>
                </>
              )}
            </div>
            <span className="portrait-corner">AC</span>
          </div>
          <div className="portrait-caption">
            <MapPin size={13} />
            {content.location}
          </div>
        </div>
        <div className="about-copy">
          <Section number="01" label="ABOUT ME" />
          <h2>
            The person behind
            <br />
            the <em>endpoints.</em>
          </h2>
          <p>{content.about}</p>
          <dl className="profile-details">
            <div>
              <dt>NAME</dt>
              <dd>{content.name}</dd>
            </div>
            <div>
              <dt>FOCUS</dt>
              <dd>Backend & full-stack web applications</dd>
            </div>
            <div>
              <dt>CURRENTLY</dt>
              <dd>MCA · GHRSTU, Pune</dd>
            </div>
          </dl>
          <ActionLink href={content.resume} download variant="quiet">
            Download resume <Download size={15} />
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
type TechItem = {
  name: string;
  icon: IconType | null;
  isPrimary: boolean;
};

type StackCategory = {
  category: string;
  label: string;
  index: string;
  icon: LucideIcon;
  items: TechItem[];
};

const techIcons: Record<string, IconType> = {
  Python: SiPython,
  FastAPI: SiFastapi,
  "Django REST Framework": SiDjango,
  SQLAlchemy: SiSqlalchemy,
  "REST API design": LuWebhook,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  MySQL: SiMysql,
  SQL: LuDatabase,
  React: SiReact,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  HTML5: SiHtml5,
  CSS3: SiCss,
  Git: SiGit,
  "GitHub Actions (CI/CD)": SiGithubactions,
  "Google Gemini API": SiGooglegemini,
};

const categoryIcons: Record<string, LucideIcon> = {
  backend: Server,
  databases: Database,
  frontend: PanelsTopLeft,
  tooling_ai: WorkflowIcon,
};

const categoryLabels: Record<string, string> = {
  backend: "Backend",
  databases: "Databases",
  frontend: "Frontend",
  tooling_ai: "Tooling & AI",
};

const primaryTech = new Set(["Python", "FastAPI", "PostgreSQL"]);

const stackCategories: StackCategory[] = content.stack.map((stack, index) => ({
  category: categoryLabels[stack.key] ?? stack.label,
  label: `${stack.key}.py`,
  index: `0${index + 1}`,
  icon: categoryIcons[stack.key] ?? Code2,
  items: stack.items.map((name) => ({
    name,
    icon: techIcons[name] ?? null,
    isPrimary: primaryTech.has(name),
  })),
}));

function TechChip({ tech, index }: { tech: TechItem; index: number }) {
  const Icon = tech.icon;

  return (
    <li
      className={`tech-chip${tech.isPrimary ? " is-primary" : ""}`}
      title={tech.name}
      tabIndex={0}
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <span className="tech-logo-tile" aria-hidden="true">
        {Icon ? (
          <Icon className="tech-logo" size={tech.isPrimary ? 22 : 18} aria-hidden="true" />
        ) : (
          <span className="tech-logo-fallback">{tech.name.charAt(0)}</span>
        )}
      </span>
      <span className="tech-chip-label">{tech.name}</span>
    </li>
  );
}

function StackCard({ stack, isVisible }: { stack: StackCategory; isVisible: boolean }) {
  const CategoryIcon = stack.icon;

  return (
    <article
      className={`stack-card${isVisible ? " is-visible" : ""}`}
      data-stack-index={stack.index}
      aria-labelledby={`stack-${stack.index}`}
    >
      <div className="stack-card-header">
        <div className="stack-card-title">
          <CategoryIcon size={16} aria-hidden="true" />
          <span className="stack-card-file">{stack.label}</span>
          <span className="stack-card-index">{stack.index}</span>
        </div>
        <div className="stack-card-meta">
          <span className="stack-item-count">
            {String(stack.items.length).padStart(2, "0")} ITEMS
          </span>
          <div className="stack-avatars" aria-hidden="true">
            {stack.items.slice(0, 3).map((tech) => {
              const Icon = tech.icon;
              return (
                <span
                  className={`stack-avatar${tech.isPrimary ? " is-primary" : ""}`}
                  key={tech.name}
                >
                  {Icon ? (
                    <Icon size={12} aria-hidden="true" />
                  ) : (
                    <span>{tech.name.charAt(0)}</span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <h3 className="stack-card-heading" id={`stack-${stack.index}`}>
        {stack.category}
      </h3>
      <ul className="tech-list" aria-label={`${stack.category} technologies`}>
        {stack.items.map((tech, index) => (
          <TechChip key={tech.name} tech={tech} index={index} />
        ))}
      </ul>
    </article>
  );
}

export function Stack() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>(".stack-card");
    if (!("IntersectionObserver" in window)) {
      setVisibleCards(new Set(stackCategories.map((stack) => stack.index)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = (entry.target as HTMLElement).dataset["stackIndex"];
          if (index) setVisibleCards((visible) => new Set(visible).add(index));
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stack" className="section-border section-space">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <Section number="02" label="MY STACK" />
            <h2>
              Tools I <em>build with.</em>
            </h2>
          </div>
          <span className="section-note">FROM DATA MODEL TO INTERFACE</span>
        </div>
        <div className="stack-grid" ref={gridRef}>
          {stackCategories.map((stack) => (
            <StackCard key={stack.index} stack={stack} isVisible={visibleCards.has(stack.index)} />
          ))}
        </div>
      </div>
    </section>
  );
}
type ProjectData = {
  id: string;
  title: string;
  badge: string;
  category: string;
  description: string;
  architecture: string;
  image: string;
  techStack: string[];
  architectureSteps: string[];
  liveUrl: string | null;
  sourceUrl: string;
  live: boolean;
};

function ProjectThumbnail({ project, index }: { project: ProjectData; index: number }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className="project-thumbnail">
      {!loaded && <span className="project-thumbnail-skeleton" aria-hidden="true" />}
      {!failed && (
        <img
          src={project.image}
          alt={`${project.title} application screenshot`}
          loading="lazy"
          decoding="async"
          width={1280}
          height={800}
          onLoad={() => setLoaded(true)}
          onError={() => {
            setFailed(true);
            setLoaded(true);
          }}
          className={loaded ? "is-loaded" : ""}
        />
      )}
      <span className="project-thumbnail-index">{String(index + 1).padStart(2, "0")}</span>
      <span className="project-thumbnail-badge">
        {project.live && <span className="project-live-dot" aria-hidden="true" />}
        {project.badge}
        {project.live && <span className="project-live-label">· LIVE</span>}
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
  isVisible,
}: {
  project: ProjectData;
  index: number;
  onOpen: () => void;
  isVisible: boolean;
}) {
  const visibleTech = project.techStack.slice(0, 4);
  const remainingTechCount = project.techStack.length - visibleTech.length;

  return (
    <article
      className={`project-card${isVisible ? " is-visible" : ""}`}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} project details`}
      data-project-id={project.id}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
    >
      <ProjectThumbnail project={project} index={index} />
      <div className="project-card-content">
        <h3 className="project-card-title" title={project.title}>
          {project.title}
        </h3>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-bottom">
          <div className="project-card-tech" aria-label="Technologies">
            {visibleTech.map((tech) => (
              <span className="project-card-chip" key={tech} title={tech}>
                {tech}
              </span>
            ))}
            {remainingTechCount > 0 && (
              <span className="project-card-chip project-card-more">+{remainingTechCount}</span>
            )}
          </div>
          <span className="project-card-arrow" aria-hidden="true">
            <ArrowUpRight size={17} />
          </span>
        </div>
      </div>
    </article>
  );
}

function ProjectModal({
  project,
  index,
  projects,
  onClose,
  onNavigate,
  returnFocusRef,
}: {
  project: ProjectData | null;
  index: number;
  projects: ProjectData[];
  onClose: () => void;
  onNavigate: (index: number) => void;
  returnFocusRef: RefObject<HTMLElement | null>;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = project !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;

    const previousOverflow = document.body.style.overflow;
    const returnFocusElement = returnFocusRef.current;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      requestAnimationFrame(() => returnFocusElement?.focus());
    };
  }, [isOpen, returnFocusRef]);

  return (
    <dialog
      ref={dialogRef}
      className="project-modal"
      aria-labelledby="project-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="project-modal-panel">
          <header className="project-modal-header">
            <div>
              <span className="project-modal-kicker">
                {String(index + 1).padStart(2, "0")} / {project.category}
              </span>
              <h2 id="project-modal-title">{project.title}</h2>
            </div>
            <button
              type="button"
              className="project-modal-close"
              onClick={onClose}
              aria-label="Close project details"
              autoFocus
            >
              <X size={18} aria-hidden="true" />
            </button>
          </header>
          <div className="project-modal-body">
            <div className="project-modal-image">
              <img src={project.image} alt={`${project.title} application screenshot`} />
            </div>
            <p className="project-modal-description">{project.description}</p>
            <div className="project-modal-architecture">
              <div className="architecture-label">THE ARCHITECTURE</div>
              <p className="project-architecture">{project.architecture}</p>
              <ol className="project-stepper">
                {project.architectureSteps.map((step, stepIndex) => (
                  <li className="project-step" key={step}>
                    <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="project-modal-technologies">
              <div className="architecture-label">TECH STACK</div>
              <div className="project-modal-tech-list">
                {project.techStack.map((tech) => (
                  <span className="project-card-chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-modal-actions">
              {project.liveUrl && (
                <ActionLink href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live demo <ArrowUpRight size={15} />
                </ActionLink>
              )}
              <ActionLink
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
              >
                <Github size={16} /> View source
              </ActionLink>
            </div>
          </div>
          <footer className="project-modal-footer">
            <button
              type="button"
              className="project-modal-nav"
              onClick={() => onNavigate((index - 1 + projects.length) % projects.length)}
              aria-label="Previous project"
              disabled={projects.length < 2}
            >
              <ChevronLeft size={17} aria-hidden="true" />
              Previous
            </button>
            <span>
              {index + 1} / {projects.length}
            </span>
            <button
              type="button"
              className="project-modal-nav"
              onClick={() => onNavigate((index + 1) % projects.length)}
              aria-label="Next project"
              disabled={projects.length < 2}
            >
              Next
              <ChevronRight size={17} aria-hidden="true" />
            </button>
          </footer>
        </div>
      )}
    </dialog>
  );
}

export function Projects() {
  const projects = content.projects as ProjectData[];
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [visibleProjectIds, setVisibleProjectIds] = useState<Set<string>>(() => new Set());
  const projectListRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const selectedIndex = projects.findIndex((project) => project.id === selectedProjectId);
  const selectedProject = selectedIndex >= 0 ? (projects[selectedIndex] ?? null) : null;
  const visibleProjects = showAll ? projects : projects.slice(0, 6);
  const visibleProjectCount = visibleProjects.length;

  useEffect(() => {
    const list = projectListRef.current;
    if (!list) return;

    const cards = list.querySelectorAll<HTMLElement>(".project-card");
    if (!("IntersectionObserver" in window)) {
      setVisibleProjectIds(
        new Set(
          Array.from(cards)
            .map((card) => card.dataset["projectId"])
            .filter((id): id is string => Boolean(id)),
        ),
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = (entry.target as HTMLElement).dataset["projectId"];
          if (id) setVisibleProjectIds((visible) => new Set(visible).add(id));
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [visibleProjectCount]);

  function openProject(project: ProjectData) {
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    setSelectedProjectId(project.id);
  }

  return (
    <section id="projects" className="section-border section-space">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <Section number="03" label="SELECTED WORK" />
            <h2>
              Ideas, turned into <em>applications.</em>
            </h2>
          </div>
          {projects.length > 3 && (
            <button
              type="button"
              className="project-view-all"
              onClick={() => setShowAll((all) => !all)}
              aria-expanded={showAll}
              aria-controls="project-grid"
            >
              {showAll ? "Show fewer projects" : "View all projects"}
              <ArrowRight size={14} aria-hidden="true" />
            </button>
          )}
        </div>
        <div className="project-list" id="project-grid" ref={projectListRef}>
          {visibleProjects.map((project, index) => (
            <ProjectCard
              project={project}
              index={index}
              key={project.id}
              onOpen={() => openProject(project)}
              isVisible={visibleProjectIds.has(project.id)}
            />
          ))}
          {projects.length < 3 && (
            <aside className="project-card-placeholder" aria-label="More projects coming soon">
              <span className="project-placeholder-icon">
                <Plus size={18} aria-hidden="true" />
              </span>
              <span>More projects coming soon</span>
            </aside>
          )}
        </div>
        <ProjectModal
          project={selectedProject}
          index={selectedIndex}
          projects={projects}
          onClose={() => setSelectedProjectId(null)}
          onNavigate={(index) => setSelectedProjectId(projects[index]?.id ?? null)}
          returnFocusRef={returnFocusRef}
        />
      </div>
    </section>
  );
}
export function Workflow() {
  return (
    <section id="workflow" className="section-border section-space">
      <div className="page-width">
        <Section number="04" label="MY WORKFLOW" />
        <h2>
          From schema to <em>delivery.</em>
        </h2>
        <div className="workflow-grid">
          {content.workflow.map((w, i) => (
            <div className="workflow-step" key={w.title}>
              <div className="step-top">
                <span>0{i + 1}</span>
                {i < 3 && <ArrowRight size={16} />}
              </div>
              <h3>{w.title}</h3>
              <p>{w.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Education() {
  return (
    <section id="education" className="education-section">
      <svg
        className="band-edge top-edge"
        viewBox="0 0 1440 45"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 45 Q720 -25 1440 45 V45 H0Z" />
      </svg>
      <div className="page-width">
        <Section number="05" label="EDUCATION" />
        <h2>
          A foundation in <em>computer applications.</em>
        </h2>
        <div className="education-timeline">
          {content.education.map((e, i) => (
            <div className="education-entry" key={e.short}>
              <div className="timeline-date">
                <span className={i === 0 ? "timeline-dot current" : "timeline-dot"} />
                {e.date}
              </div>
              <h3>{e.title}</h3>
              <p>{e.school}</p>
              <span className="education-result">{e.detail}</span>
            </div>
          ))}
        </div>
        <div className="certifications">
          <span>CERTIFICATIONS</span>
          <div>
            {content.certifications.map((c) => (
              <p key={c}>
                <Check size={14} />
                {c}
              </p>
            ))}
          </div>
        </div>
      </div>
      <svg
        className="band-edge bottom-edge"
        viewBox="0 0 1440 45"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 0 Q720 70 1440 0 V0 H0Z" />
      </svg>
    </section>
  );
}
export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(content.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setError("Unable to copy. Please select the email address instead.");
    }
  }
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.website) {
      setState("success");
      return;
    }
    if (
      !form.name.trim() ||
      !form.message.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      setError("Please enter your name, a valid email and a message.");
      setState("error");
      return;
    }
    const endpoint = import.meta.env["VITE_CONTACT_ENDPOINT"];
    if (!endpoint) {
      setError("The contact form is not connected yet. Please email me directly.");
      setState("error");
      return;
    }
    setState("sending");
    setError("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setState("success");
      setForm({ name: "", email: "", message: "", website: "" });
    } catch {
      setState("error");
      setError("Your message could not be sent. Please try again or email me directly.");
    }
  }
  return (
    <section id="contact" className="contact-section">
      <div className="page-width contact-grid">
        <div>
          <Section number="06" label="GET IN TOUCH" />
          <h2>
            Hiring for a<br />
            backend role?
            <br />
            <em>Let’s talk.</em>
          </h2>
          <p>{content.contact.description}</p>
          <div className="contact-email">
            <a href={`mailto:${content.email}`}>
              {content.email}
              <ArrowUpRight size={17} />
            </a>
            <Button variant="quiet" onClick={copy} aria-label={copied ? "Copied" : "Copy email"}>
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? "Copied" : "Copy email"}
            </Button>
          </div>
          <div className="contact-location">
            <MapPin size={14} />
            {content.location}
          </div>
          <div className="contact-socials">
            <a href={content.github} target="_blank" rel="noreferrer">
              <Github size={17} />
              GitHub
              <ArrowUpRight size={13} />
            </a>
            <a href={content.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} />
              LinkedIn
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="form-heading">
            <Mail size={18} />
            <span>A message is a good place to start.</span>
          </div>
          <div className="field-row">
            <label>
              Name
              <input
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
          </div>
          <label>
            Message
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about the role or your project…"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>
          <div className="honeypot" aria-hidden="true">
            <label>
              Website
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
              />
            </label>
          </div>
          <Button type="submit" disabled={state === "sending"}>
            {state === "sending" ? "Sending…" : content.contact.button}
            <Send size={15} />
          </Button>
          <div
            aria-live="polite"
            className={`form-feedback ${state === "error" ? "is-error" : ""}`}
          >
            {state === "success" ? "Thank you. Your message has been sent." : error}
          </div>
        </form>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer page-width">
      <a className="logo" href="#">
        Ani<span>.dev</span>
        <i />
      </a>
      <span>
        © {content.year} {content.name}
      </span>
      <div>
        <a href={content.github} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={12} />
        </a>
        <a href={content.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <ArrowUpRight size={12} />
        </a>
        <a href={content.resume} download>
          Resume <Download size={12} />
        </a>
      </div>
      <a className="back-top" href="#" aria-label="Back to top">
        ↑
      </a>
    </footer>
  );
}
export function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Workflow />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
