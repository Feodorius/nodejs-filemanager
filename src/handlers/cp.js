import { createReadStream, createWriteStream } from "fs";
import { parse, resolve } from "path";
import { pipeline } from "stream/promises";

const cp = async (filePath, newDirectoryPath) => {
    const oldPath = resolve(filePath);
    const { base } = parse(oldPath);
    const newPath = resolve(newDirectoryPath, base);

    const readable = createReadStream(oldPath);
    const writable = createWriteStream(newPath);
    await pipeline(readable, writable);
    console.log("File was successfully copied!");
};

export default cp;