import { argv } from "process";

const args = argv.slice(2).reduce((prev, arg
) => {
    const [key, value] = arg.split("=");
    return { ...prev, [key]: value };
}, {});

console.log(`Welcome to the File Manager, ${args["--username"] || "stranger"}!`);