import { readdir } from "fs/promises";
import { resolve } from "path";
import { cwd } from "process"

const ls = async () => {
    const currentDirectory = resolve(cwd());
    const files = await readdir(currentDirectory, { withFileTypes: true });
    const table = files.map(file => {
        return {
            name: file.name,
            type: file.isDirectory() ? "directory" : "file"
        }
    });
    console.table(table);
};

export default ls;