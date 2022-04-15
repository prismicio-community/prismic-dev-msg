import * as fs from "node:fs";
import * as path from "node:path";

async function main() {
	const reposRaw = fs.readFileSync(
		new URL("../src/repos.json", import.meta.url),
		"utf8",
	);
	const repos = JSON.parse(reposRaw);

	const redirects = [];

	for (const repo of repos) {
		if (repo.description) {
			redirects.push(`# ${repo.description}`);
		}

		redirects.push(
			`/msg/${repo.name}/v:version/:slug https://github.com/${repo.repo}/blob/v:version/messages/:slug.md 302`,
		);
		redirects.push(
			`/msg/${repo.name}/v:version https://github.com/${repo.repo}/blob/v:version/messages 302`,
		);
		redirects.push(
			`/msg/${repo.name}/:slug https://github.com/${repo.repo}/blob/HEAD/messages/:slug.md 302`,
		);
		redirects.push(
			`/msg/${repo.name} https://github.com/${repo.repo}/blob/HEAD/messages 302`,
		);

		redirects.push("");
	}

	const contents = redirects.join("\n");

	const outputDir = path.resolve(process.cwd(), "dist");
	const outputFile = path.resolve(outputDir, "_redirects");

	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}

	const baseRedirects = fs.readFileSync(
		new URL("../src/_redirects", import.meta.url),
		"utf8",
	);

	fs.writeFileSync(outputFile, `${contents}\n${baseRedirects}`);

	console.info(
		`Successfully wrote redirects to ${path.relative(
			process.cwd(),
			outputFile,
		)}`,
	);
}

main();
