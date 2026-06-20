// Fetches the latest public repos for a GitHub user and writes them
// into README.md between the PROJECTS:START / PROJECTS:END markers.
// Runs inside GitHub Actions — no extra dependencies needed (uses Node's built-in fetch).

const fs = require("fs");

const USERNAME = "mobinert";
const README_PATH = "README.md";
const MAX_REPOS = 6;
const START_MARKER = "<!-- PROJECTS:START -->";
const END_MARKER = "<!-- PROJECTS:END -->";

async function main() {
  const res = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?sort=created&direction=desc&per_page=100`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": USERNAME,
        // GITHUB_TOKEN is auto-provided by Actions, raises the rate limit
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${await res.text()}`);
  }

  const repos = await res.json();

  const filtered = repos
    .filter((r) => !r.fork) // skip forks
    .filter((r) => r.name !== USERNAME) // skip the profile repo itself
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, MAX_REPOS);

  const lines = filtered.map((r) => {
    const desc = r.description ? r.description.replace(/\|/g, "-") : "No description yet";
    const lang = r.language || "—";
    return `| [${r.name}](${r.html_url}) | ${desc} | ${lang} | ⭐ ${r.stargazers_count} |`;
  });

  const table =
    filtered.length === 0
      ? "_No public projects yet — check back soon!_"
      : [
          "| Project | Description | Language | Stars |",
          "| ------- | ------------ | -------- | ----- |",
          ...lines,
        ].join("\n");

  const readme = fs.readFileSync(README_PATH, "utf8");
  const startIdx = readme.indexOf(START_MARKER);
  const endIdx = readme.indexOf(END_MARKER);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error("Markers not found in README.md — make sure PROJECTS:START / PROJECTS:END exist.");
  }

  const before = readme.slice(0, startIdx + START_MARKER.length);
  const after = readme.slice(endIdx);

  const updated = `${before}\n${table}\n${after}`;

  fs.writeFileSync(README_PATH, updated);
  console.log(`Updated README.md with ${filtered.length} project(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
