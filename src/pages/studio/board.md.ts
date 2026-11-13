import board from "../../data/studio-board.json";

type Agents = Record<string, { name: string; role: string }>;

export function GET() {
  const agents = board.agents as Agents;
  const who = (ids: string[]) => ids.map((a) => agents[a]?.name ?? a).join(", ");
  const lines: string[] = [
    `# ${board.title}`,
    ``,
    `Repo: ${board.repo} · snapshot ${board.snapshot} · main @ ${board.main_commit}`,
    `Versi JSON: https://www.3mh4ysn.com/studio/board.json`,
    ``,
    `## Mandat (${board.mandate.period})`,
    ...board.mandate.kpis.map((k) => `- ${k.label}: ${k.value} / ${k.target}`),
    ``,
    `Status: ${board.mandate.verdict}`,
    ``,
    `## Langkah berikutnya`,
    ...board.next_steps.map((s, i) => `${i + 1}. ${s.text} (${s.who})`),
    ``,
  ];
  for (const col of board.columns) {
    lines.push(`## ${col.title} (${col.cards.length})`, ``);
    for (const c of col.cards) {
      const tags = c.tags.map((t) => t[0]).join(", ");
      lines.push(`- **${c.title}** [${who(c.agents)}] ${tags ? `{${tags}}` : ""}`.trimEnd());
      lines.push(`  ${c.body}`);
      lines.push(`  ref: \`${c.ref}\``);
    }
    lines.push(``);
  }
  lines.push(`## Riwayat`, ...board.timeline.map(([d, t]) => `- ${d}: ${t}`), ``, `Cara update: ${board.how_to_update}`, ``);
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
