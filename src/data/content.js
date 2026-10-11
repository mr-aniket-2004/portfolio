import profileAsset from "@/assets/profile.jpg";
import secscanPreview from "@/assets/secscan-preview.jpg";
import gurukulPreview from "@/assets/gurukul-preview.jpg";

export const content = {
  name: "Aniket Chandiwade",
  logo: "Ani.dev",
  role: "Python Backend Developer",
  location: "Pune, Maharashtra, India",
  status: "Open to Backend and Full-Stack roles",
  email: "aniketchandiwade2004@gmail.com",
  github: "https://github.com/mr-aniket-2004",
  linkedin: "https://www.linkedin.com/in/aniket-chandiwade-74802a269/",
  resume: "/resume.pdf",
  photo: profileAsset,
  nav: ["About", "Stack", "Projects", "Workflow", "Education", "Contact"],
  hero: {
    start: "I build the",
    accent: "backend",
    end: "behind web applications.",
    description: "Python, FastAPI and PostgreSQL, with React on top.",
    label: "PYTHON BACKEND DEVELOPER · PUNE, INDIA",
  },
  metrics: [
    { value: "02", label: "projects built" },
    { value: "01", label: "live deployment" },
    { value: "9.21", label: "CGPA (BBA-CA)" },
  ],
  about:
    "Python backend developer from Pune, currently completing an MCA. I like turning data models and APIs into products people can use. My MCA thesis project, SecScan, is a GitHub security and dependency auditor with AI-assisted fixes.",
  stack: [
    {
      key: "backend",
      label: "Backend",
      items: ["Python", "FastAPI", "Django REST Framework", "SQLAlchemy", "REST API design"],
    },
    { key: "databases", label: "Databases", items: ["PostgreSQL", "Supabase", "MySQL", "SQL"] },
    {
      key: "frontend",
      label: "Frontend",
      items: ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
    },
    {
      key: "tooling_ai",
      label: "Tooling and AI",
      items: ["Git", "GitHub Actions (CI/CD)", "Google Gemini API"],
    },
  ],
  projects: [
    {
      id: "secscan",
      title: "SecScan",
      category: "SECURITY & DEPENDENCY AUDITOR",
      badge: "MCA Thesis",
      live: true,
      image: secscanPreview,
      description:
        "Checking repositories for insecure code and vulnerable dependencies by hand is slow and easy to miss.",
      architecture:
        "React dashboard → FastAPI REST API → Supabase / PostgreSQL → Gemini AI for vulnerability analysis and remediation suggestions. GitHub Actions for automated tests and CI/CD.",
      techStack: ["React", "FastAPI", "PostgreSQL", "Gemini AI", "GitHub Actions"],
      liveUrl: "https://secure-scan-beta.vercel.app/",
      sourceUrl: "https://github.com/mr-aniket-2004/SecureScan",
      architectureSteps: ["GitHub repository", "FastAPI", "Security analysis", "AI-assisted fixes"],
    },
    {
      id: "gurukul",
      title: "Gurukul",
      category: "E-LEARNING PLATFORM",
      badge: "Full-stack",
      live: false,
      image: gurukulPreview,
      description:
        "Learners need one platform with secure sign-in, course access and online payment.",
      architecture:
        "Django REST Framework APIs, authentication with role-based access (multiple roles), SQL database, Razorpay payment integration, JavaScript and Bootstrap front end.",
      techStack: ["Django REST Framework", "SQL", "Razorpay", "JavaScript", "Bootstrap"],
      liveUrl: null,
      sourceUrl: "https://github.com/mr-aniket-2004/Sem_5_project",
      architectureSteps: [
        "Learner / educator",
        "Authentication",
        "Course access",
        "Razorpay payments",
      ],
    },
  ],
  workflow: [
    {
      title: "Schema & API design",
      description: "Data modeling, REST endpoints and FastAPI auto-generated docs.",
    },
    { title: "Core development", description: "Business logic, ORM, routes and controllers." },
    {
      title: "Security & validation",
      description: "Authentication, input validation and automated tests.",
    },
    { title: "Delivery", description: "GitHub Actions CI/CD pipeline." },
  ],
  education: [
    {
      date: "IN PROGRESS",
      title: "Master of Computer Applications",
      short: "MCA",
      school: "GHRSTU, Pune",
      detail: "Thesis project: SecScan",
    },
    {
      date: "2025",
      title: "B.B.A (Computer Applications)",
      short: "BBA-CA",
      school: "Garware College of Commerce, Pune",
      detail: "CGPA 9.21 / 10",
    },
    {
      date: "2022",
      title: "Higher Secondary Certificate",
      short: "HSC",
      school: "Garware College of Commerce, Pune",
      detail: "76%",
    },
  ],
  certifications: [
    "Python Programming Certification Course",
    "Digital Marketing Certification · Google Digital Garage",
  ],
  contact: {
    start: "Hiring for a backend role?",
    end: "Let’s talk.",
    description: "Open to Backend and Full-Stack roles.",
    button: "Send message",
  },
  year: 2026,
  seo: {
    title: "Aniket Chandiwade — Python Backend Developer",
    description:
      "Python backend developer in Pune building with FastAPI, Django REST Framework and PostgreSQL. Explore SecScan, Gurukul and get in touch.",
  },
};
