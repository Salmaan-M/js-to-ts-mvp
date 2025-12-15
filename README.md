# 🤖 Autonomous AI Migration AgentHI

> **"Our project implements an autonomous AI agent that observes a codebase, reasons about migration risk, executes refactoring actions via Cline, evaluates outcomes through builds, and improves future decisions using reinforcement learning."**

## 🎯 What This Is

A **fully autonomous AI agent** that migrates JavaScript codebases to TypeScript using the complete AI agent loop:

```
👀 OBSERVE → 🧠 DECIDE → ⚡ ACT → ✅ EVALUATE → 🧠 LEARN
```

## 🚀 Quick Start

### Run the Agent (CLI)

```bash
# Install dependencies
npm install

# Run agent on current directory
npm run agent

# Run agent on specific directory
npm run agent ./path/to/repo
```

### Run the Dashboard (Demo)

```bash
# Start Next.js dashboard
cd dashboard
npm install
npm run dev
```

Visit **http://localhost:3000** and click **"Run Agent"** to see it in action!

## 🤖 How It Works

### 1. **OBSERVE** (Perception)
The agent scans the repository:
```typescript
{
  "jsFiles": 3,
  "tsFiles": 0,
  "hasTests": true,
  "riskLevel": "low"
}
```

### 2. **DECIDE** (Reasoning)
Based on observations, the agent decides:
```typescript
{
  "action": "APPLY",
  "reason": "Tests are present and codebase is small, risk is low",
  "confidence": 0.9
}
```

**Decision Rules:**
- ✅ **APPLY** → Tests exist + Low risk
- 🔍 **DRY-RUN** → No tests OR Medium risk
- ⏭️ **SKIP** → No JS files OR Too large

### 3. **ACT** (Execution)
The agent executes migration:
- Renames `.js` → `.ts`
- Converts CommonJS → ES Modules
- Adds basic type annotations
- Commits changes (if APPLY)

### 4. **EVALUATE** (Validation)
The agent validates results:
```typescript
{
  "status": "SUCCESS",
  "build": "passed",
  "tests": "passed"
}
```

### 5. **LEARN** (Improvement)
The agent improves future decisions:
```typescript
{
  "updateStrategy": "increase_confidence",
  "insight": "APPLY strategy works well for small repos with tests"
}
```

## 🏗️ Architecture

```
Kestra → Decision Agent → Cline Automation → CodeRabbit → Vercel Dashboard
```

### Tech Stack
- **Cline**: Autonomous code execution
- **Kestra**: Workflow orchestration
- **CodeRabbit**: AI-powered PR review
- **Oumi**: Reinforcement learning logic
- **Vercel**: Live dashboard deployment

## 📁 Project Structure

```
.
├── agent/
│   ├── system.ts       # Core agent logic (Observe → Learn)
│   └── run.ts          # CLI runner
├── dashboard/          # Next.js demo dashboard
│   └── src/app/page.tsx
├── kestra/             # Workflow definitions
│   └── js_to_ts_flow.yml
├── oumi/               # RL training logic
│   └── rl_migration.py
└── README.md           # This file
```

## 🎮 Demo Commands

```bash
# Run agent with full output
npm run agent

# Run dashboard demo
cd dashboard && npm run dev

# Run RL training simulation
python oumi/rl_migration.py
```

## 🏆 Key Features

✅ **Fully Autonomous** - No human intervention needed  
✅ **Safe by Default** - Dry-run mode for risky migrations  
✅ **Self-Improving** - Learns from outcomes  
✅ **Observable** - Real-time logs and dashboard  
✅ **Production-Ready** - Handles real repositories  

## 🎯 Use Cases

1. **Legacy Codebases** - Safely migrate old JS to TS
2. **CI/CD Integration** - Automate migration in pipelines
3. **Team Productivity** - Save 100+ hours of manual work
4. **Code Quality** - Enforce type safety automatically

## 🧠 AI Agent Prompts

All prompts are defined in `agent/system.ts`:

- **System Prompt** - Agent identity
- **Observe Prompt** - Repository analysis
- **Decision Prompt** - Strategy selection
- **Action Prompt** - Execution steps
- **Evaluation Prompt** - Result validation
- **Learning Prompt** - Strategy improvement

## 🚀 Deployment

### Deploy Dashboard
```bash
cd dashboard
vercel --prod
```

### Run Agent in CI/CD
```yaml
# .github/workflows/migrate.yml
- name: Run Migration Agent
  run: npm run agent
```

## 📊 Demo Results

**Before:**
```javascript
function add(a, b) {
  return a + b;
}
```

**After:**
```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

## 🎯 Hackathon Impact

This project demonstrates:
- ✅ **Real AI Agent** (not just LLM chat)
- ✅ **Complete Agent Loop** (Observe → Learn)
- ✅ **Production Value** (solves real problem)
- ✅ **Technical Excellence** (proper agent architecture)

## 👥 Team

Built for **AI Agents Hackathon** by [Your Team Name]

## 📄 License

MIT