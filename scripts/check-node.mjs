const min = 18;
const major = Number(process.versions.node.split('.')[0]);

if (major < min) {
	console.error(
		`\nNode.js ${min}+ is required (you have v${process.versions.node}).\n` +
			`Run: nvm use\n`
	);
	process.exit(1);
}
