import { createReadStream, createWriteStream } from "fs";
import { unlink } from "fs/promises";
import { parse, resolve } from "path";
import { pipeline } from "stream/promises";

const mv = async (filePath, newDirectoryPath) => {
    const oldPath = resolve(filePath);
    const { base } = parse(oldPath);
    const newPath = resolve(newDirectoryPath, base);

    const readable = createReadStream(oldPath);
    const writable = createWriteStream(newPath);
    await pipeline(readable, writable);
    await unlink(oldPath);
    console.log("File was successfully moved!");
};

export default mv;