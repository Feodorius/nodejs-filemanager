import { rename } from "fs/promises";
import { dirname, join, resolve } from "path"

const rn = async (filepath, newName) => {
    const path = resolve(filepath);
    const directory = dirname(path);
    const newPath = join(directory, newName);
    await rename(path, newPath);
    console.log(`File was successfully renamed to ${newName}`)

};

export default rn;