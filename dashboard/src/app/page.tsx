import fs from "fs";
import path from "path";

export default function Home() {
  let data: any = null;

  try {
    const filePath = path.join(
      process.cwd(),
      "../agent/agent-output.json"
    );
    const raw = fs.readFileSync(filePath, "utf-8");
    data = JSON.parse(raw);
  } catch {
    data = null;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "16px",
          padding: "32px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
          🤖 Autonomous JS → TS Migration Agent
        </h1>

        <p style={{ opacity: 0.9, marginBottom: "24px" }}>
          CLI-first AI agent that observes, decides, migrates, and validates
          JavaScript → TypeScript automatically.
        </p>

        {!data && (
          <div
            style={{
              padding: "16px",
              background: "#ffcccb",
              borderRadius: "8px",
              color: "#300",
            }}
          >
            No agent run detected yet.
          </div>
        )}

        {data && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginTop: "16px",
            }}
          >
            <Card title="Decision" value={data.decision} />
            <Card title="JS Files Found" value={data.jsFilesFound} />
            <Card title="Converted Files" value={data.convertedFiles.length} />
            <Card title="Build Status" value={data.buildStatus} />
          </div>
        )}

        {data && (
          <p style={{ marginTop: "24px", opacity: 0.8 }}>
            Last run: {new Date(data.timestamp).toLocaleString()}
          </p>
        )}
      </div>
    </main>
  );
}

function Card({ title, value }: { title: string; value: any }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.15)",
        padding: "16px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "14px", opacity: 0.8 }}>{title}</p>
      <h2 style={{ fontSize: "24px", marginTop: "8px" }}>{value}</h2>
    </div>
  );
}
