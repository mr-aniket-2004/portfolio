import { useEffect, useRef, useState, type RefObject } from "react";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { content } from "@/data/content.js";
import { ActionLink } from "./Button";

function Section({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="label-divider">/</span>
      {label}
    </div>
  );
}
type CertData = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
};

function CertModal({
  cert,
  index,
  certs,
  onClose,
  onNavigate,
  returnFocusRef,
}: {
  cert: CertData | null;
  index: number;
  certs: CertData[];
  onClose: () => void;
  onNavigate: (index: number) => void;
  returnFocusRef: RefObject<HTMLElement | null>;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = cert !== null;

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

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (certs.length < 2) return;
      if (e.key === "ArrowLeft") onNavigate((index - 1 + certs.length) % certs.length);
      if (e.key === "ArrowRight") onNavigate((index + 1) % certs.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, index, certs.length, onNavigate]);

  const hasLink = cert?.credentialUrl && cert.credentialUrl !== "#";

  return (
    <dialog
      ref={dialogRef}
      className="project-modal cert-modal"
      aria-labelledby="cert-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {cert && (
        <div className="project-modal-panel">
          <header className="project-modal-header">
            <div>
              <span className="project-modal-kicker">
                {String(index + 1).padStart(2, "0")} / CERTIFICATION
              </span>
              <h2 id="cert-modal-title">{cert.title}</h2>
            </div>
            <button
              type="button"
              className="project-modal-close"
              onClick={onClose}
              aria-label="Close certificate details"
              autoFocus
            >
              <X size={18} aria-hidden="true" />
            </button>
          </header>

          <div className="project-modal-body">
            <div className="cert-modal-image">
              <img src={cert.image} alt={`${cert.title} certificate`} />
            </div>

            <dl className="cert-modal-details">
              <div>
                <dt>ISSUER</dt>
                <dd>{cert.issuer}</dd>
              </div>
              <div>
                <dt>ISSUED</dt>
                <dd>{cert.date}</dd>
              </div>
            </dl>

            {cert.description && <p className="project-modal-description">{cert.description}</p>}

            {cert.skills && cert.skills.length > 0 && (
              <div className="project-modal-technologies">
                <div className="architecture-label">SKILLS COVERED</div>
                <div className="project-modal-tech-list">
                  {cert.skills.map((skill) => (
                    <span className="project-card-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="project-modal-actions">
              {hasLink && (
                <ActionLink href={cert.credentialUrl!} target="_blank" rel="noreferrer">
                  Verify credential <ArrowUpRight size={15} />
                </ActionLink>
              )}
              <ActionLink href={cert.image} target="_blank" rel="noreferrer" variant="outline">
                Open full image <ArrowUpRight size={15} />
              </ActionLink>
            </div>
          </div>

          <footer className="project-modal-footer">
            <button
              type="button"
              className="project-modal-nav"
              onClick={() => onNavigate((index - 1 + certs.length) % certs.length)}
              aria-label="Previous certificate"
              disabled={certs.length < 2}
            >
              <ChevronLeft size={17} aria-hidden="true" />
              Previous
            </button>
            <span>
              {index + 1} / {certs.length}
            </span>
            <button
              type="button"
              className="project-modal-nav"
              onClick={() => onNavigate((index + 1) % certs.length)}
              aria-label="Next certificate"
              disabled={certs.length < 2}
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

export function Certifications() {
  const certs = content.certifications as CertData[];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const selectedCert = selectedIndex !== null ? (certs[selectedIndex] ?? null) : null;

  function openCert(index: number) {
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    setSelectedIndex(index);
  }

  return (
    <section id="certifications" className="section-space">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <Section number="06" label="CERTIFICATIONS" />
            <h2>
              Verified <em>credentials.</em>
            </h2>
          </div>
          <span className="section-note">
            {String(certs.length).padStart(2, "0")} CERTIFICATES
          </span>
        </div>

        <p className="certs-intro">
          Certifications showcasing my skills across Python, backend development and digital
          technologies.
        </p>

        <div className="certs-grid">
          {certs.map((cert, i) => (
            <article
              className="certs-card"
              key={cert.title}
              role="button"
              tabIndex={0}
              aria-label={`View ${cert.title} certificate`}
              style={{ animationDelay: `${i * 70}ms` }}
              onClick={() => openCert(i)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openCert(i);
                }
              }}
            >
              <div className="certs-image">
                <img src={cert.image} alt={cert.title} loading="lazy" />
              </div>
              <div className="certs-info">
                <h3>{cert.title}</h3>
                <p>
                  {cert.issuer} · {cert.date}
                </p>
                <span className="certs-link">
                  View Certificate <ArrowRight size={14} aria-hidden="true" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <CertModal
          cert={selectedCert}
          index={selectedIndex ?? 0}
          certs={certs}
          onClose={() => setSelectedIndex(null)}
          onNavigate={setSelectedIndex}
          returnFocusRef={returnFocusRef}
        />
      </div>
    </section>
  );
}