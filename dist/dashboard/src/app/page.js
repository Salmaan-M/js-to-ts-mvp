import fs from "fs";
import path from "path";
export default function Home() {
    let data = null;
    try {
        const filePath = path.join(process.cwd(), "../agent/agent-output.json");
        const raw = fs.readFileSync(filePath, "utf-8");
        data = JSON.parse(raw);
    }
    catch {
        data = null;
    }
    return (<main style={{ padding: 40 }}>
      <h1>Autonomous JS → TS Migration Agent</h1>

      {!data && <p>No agent run yet.</p>}

      {data && (<>
          <p><b>Decision:</b> {data.decision}</p>
          <p><b>JS Files Found:</b> {data.jsFilesFound}</p>
          <p><b>Converted:</b> {data.convertedFiles.length}</p>
          <p><b>Build Status:</b> {data.buildStatus}</p>
          <p><b>Last Run:</b> {data.timestamp}</p>
        </>)}
    </main>);
}
