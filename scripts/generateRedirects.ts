import * as fs from "node:fs";
import * as path from "node:path";

import _repos from "../repos.json";

type PackageConfig = {
  description?: string;
  name: string;
  repo: string;
  defaultBranch?: string;
};

const REPOS: PackageConfig[] = _repos;

async function main() {
  const redirects: string[] = [];

  for (const repo of REPOS) {
    const defaultBranch = repo.defaultBranch || "main";

    if (repo.description) {
      redirects.push(`# ${repo.description}`);
    }

    redirects.push(
      `/${repo.name}/:version/:slug https://github.com/${repo.repo}/blob/:version/messages/:slug.md 302`
    );
    redirects.push(
      `/${repo.name}/:version https://github.com/${repo.repo}/blob/:version/messages 302`
    );
    redirects.push(
      `/${repo.name}/:slug https://github.com/${repo.repo}/blob/${defaultBranch}/messages/:slug.md 302`
    );
    redirects.push(
      `/${repo.name} https://github.com/${repo.repo}/blob/${defaultBranch}/messages 302`
    );

    redirects.push("");
  }

  const contents = redirects.join("\n");

  const outputDir = path.resolve(process.cwd(), "dist");
  const outputFile = path.resolve(outputDir, "_redirects");

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, contents);

  console.info(
    `Successfully wrote redirects to ${path.relative(
      process.cwd(),
      outputFile
    )}`
  );
}

main();
