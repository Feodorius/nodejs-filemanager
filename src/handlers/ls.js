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
    const sortedTable = table.toSorted(
        (a, b) => {
            if (a.type === b.type) {
              return a.name.localeCompare(b.name);
            }
            return a.type === 'directory' ? -1 : 1;
          }
    );
    console.table(sortedTable);
}
export default ls;