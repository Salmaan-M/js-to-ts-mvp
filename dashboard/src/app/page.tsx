export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>JS → TS Migration Dashboard</h1>

      <h3>Status</h3>
      <ul>
        <li>Legacy JS detected</li>
        <li>Migration executed by Cline</li>
        <li>TypeScript build successful</li>
        <li>PR reviewed by CodeRabbit</li>
        <li>Kestra decision flow defined</li>
        <li>Oumi RL logic executed</li>
      </ul>

      <h3>Architecture</h3>
      <p>
        Kestra → Decision Agent → Cline Automation → CodeRabbit PR → TypeScript Build
      </p>
    </main>
  );
}
