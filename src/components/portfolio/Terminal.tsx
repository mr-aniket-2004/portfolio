import { useEffect, useRef, useState } from "react";
import { CornerDownLeft } from "lucide-react";
import { content } from "@/data/content.js";
const profile = JSON.stringify(
  {
    name: content.name,
    role: content.role,
    stack: ["Python", "FastAPI", "PostgreSQL", "React"],
    education: "MCA · in progress",
    open_to: "Backend & Full-Stack roles",
  },
  null,
  2,
);
export function Terminal() {
  const [typed, setTyped] = useState("");
  const [ready, setReady] = useState(false);
  const [history, setHistory] = useState<{ command: string; output: string }[]>([]);
  const [command, setCommand] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const text = "cat profile.json";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(text);
      setReady(true);
      return;
    }
    let i = 0;
    const timer = window.setInterval(() => {
      i++;
      setTyped(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(timer);
        setReady(true);
      }
    }, 65);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);
  function run() {
    const cmd = command.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setHistory([]);
      setReady(false);
      setTyped("");
      setCommand("");
      return;
    }
    const responses: Record<string, string> = {
      help: "Available commands: help, about, stack, projects, education, contact, clear",
      about: content.about,
      stack: content.stack.map((s) => `${s.label}: ${s.items.join(", ")}`).join("\n"),
      projects: content.projects
        .map((p) => `${p.title}\n${p.sourceUrl}${p.liveUrl ? `\n${p.liveUrl}` : ""}`)
        .join("\n\n"),
      education: content.education
        .map((e) => `${e.short} · ${e.school} · ${e.date}\n${e.detail}`)
        .join("\n\n"),
      contact: `${content.email}\n${content.location}\n${content.status}`,
    };
    setHistory((h) => [
      ...h,
      {
        command: command.trim(),
        output: responses[cmd] ?? `command not found: ${command.trim()}. Type help`,
      },
    ]);
    setCommand("");
  }
  return (
    <div className="terminal">
      <div className="terminal-bar">
        <span className="terminal-dots">
          <i />
          <i />
          <i />
        </span>
        <span>aniket@pune: ~</span>
        <span className="terminal-shell">zsh</span>
      </div>
      <div className="terminal-body" ref={scrollRef}>
        {typed && (
          <div className="terminal-command">
            <span>❯</span> {typed}
            {!ready && <span className="cursor">▍</span>}
          </div>
        )}
        {ready && (
          <pre className="profile-output">
            <span className="code-punctuation">{"{\n"}</span>
            {profile
              .split("\n")
              .slice(1, -1)
              .map((line, index) => {
                const colon = line.indexOf(":");
                if (colon < 0)
                  return (
                    <span key={index} className="code-value">
                      {line}
                      {"\n"}
                    </span>
                  );
                return (
                  <span key={index}>
                    <span className="code-key">{line.slice(0, colon)}</span>
                    <span className="code-punctuation">:</span>
                    <span className="code-value">{line.slice(colon + 1)}</span>
                    {"\n"}
                  </span>
                );
              })}
            <span className="code-punctuation">{"}"}</span>
          </pre>
        )}
        {history.map((item, i) => (
          <div className="terminal-entry" key={i}>
            <div className="terminal-command">
              <span>❯</span> {item.command}
            </div>
            <pre>{item.output}</pre>
          </div>
        ))}
        <form
          className="terminal-input"
          onSubmit={(e) => {
            e.preventDefault();
            run();
          }}
        >
          <span aria-hidden="true">❯</span>
          <input
            aria-label="Terminal command"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="Type help to get started"
            autoComplete="off"
            spellCheck={false}
          />
          <CornerDownLeft size={14} aria-hidden="true" />
        </form>
      </div>
      <div className="terminal-footer">
        <span className="status-dot" /> interactive shell<span>UTF-8</span>
      </div>
    </div>
  );
}
