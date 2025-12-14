export default function Home() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>JS → TS Migration Dashboard</h1>
        <p style={styles.subtitle}>
          Autonomous codebase migration powered by AI agents
        </p>
      </header>

      <section style={styles.grid}>
        <Card
          title="Cline Automation"
          description="Autonomously migrated legacy JavaScript to TypeScript, executed builds, and committed changes."
          status="Completed"
        />

        <Card
          title="CodeRabbit Review"
          description="AI-powered PR review ensured code quality and best practices."
          status="Reviewed"
        />

        <Card
          title="Kestra Decision Agent"
          description="Analyzed repository structure and decided whether to apply or dry-run migration."
          status="Defined"
        />

        <Card
          title="Oumi RL Logic"
          description="Reinforcement learning logic used to improve migration decisions over time."
          status="Executed"
        />

        <Card
          title="Vercel Deployment"
          description="Live dashboard deployed with Next.js App Router."
          status="Live"
        />
      </section>

      <section style={styles.arch}>
        <h2>Architecture Flow</h2>
        <p>
          Kestra → Decision Agent → Cline Automation → CodeRabbit PR →
          TypeScript Build → Vercel Dashboard
        </p>
      </section>

      <footer style={styles.footer}>
        <span>Hackathon MVP • Built in hours 🚀</span>
      </footer>
    </main>
  );
}

/* ---------- Small helper components ---------- */

function Card({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: string;
}) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span style={styles.badge}>{status}</span>
    </div>
  );
}

/* ---------- Styles ---------- */

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
    color: "#ffffff",
    padding: "40px",
    fontFamily: "Inter, Arial, sans-serif",
  },
  header: {
    marginBottom: "40px",
  },
  title: {
    fontSize: "40px",
    marginBottom: "8px",
  },
  subtitle: {
    color: "#a1a1aa",
    fontSize: "16px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  card: {
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: "12px",
    padding: "20px",
  },
  badge: {
    display: "inline-block",
    marginTop: "12px",
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    background: "#2563eb",
  },
  arch: {
    background: "#020617",
    border: "1px solid #1f2937",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "40px",
  },
  footer: {
    textAlign: "center",
    color: "#71717a",
    fontSize: "14px",
  },
};
