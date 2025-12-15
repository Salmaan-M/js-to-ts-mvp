export const metadata = {
  title: "Autonomous JS → TS Migration Agent",
  description: "CLI-first AI agent for JavaScript to TypeScript migration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
