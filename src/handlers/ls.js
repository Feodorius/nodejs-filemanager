import { readdir } from "fs/promises";
import { resolve } from "path";
import { cwd } from "process"

const ls = async () => {
    const currentDirectory = resolve(cwd());
    const files = await readdir(currentDirectory, { withFileTypes: true });
    const table = files.map(file => {
        return {
            name: file.name,
            type: getFileType(file)
        }
    });
    const sortedTable = table.toSorted(
        (a, b) => {
            if (a.type === "directory" && b.type !== "directory") {
                return -1;
            }
            if (a.type !== "directory" && b.type === "directory") {
                return 1;
            }
            return a.type.localeCompare(b.type);
        }
    );
    console.table(sortedTable);
}
export default ls;

function getFileType(dirent) {
    if (dirent.isFile()) {
        return "file";
    } else if (dirent.isDirectory()) {
        return "directory";
    } else if (dirent.isSymbolicLink()) {
        return "symbolic link";
    } else if (dirent.isBlockDevice()) {
        return "block device";
    } else if (dirent.isCharacterDevice()) {
        return "character device";
    } else if (dirent.isFIFO()) {
        return "FIFO";
    } else if (dirent.isSocket()) {
        return "socket";
    } else {
        return "unknown";
    }
}