import { createReadStream, createWriteStream } from "fs";
import { parse, resolve } from "path";
import { pipeline } from "stream/promises";
import { createBrotliCompress } from "zlib";

const compress = async (filePath, destinationPath) => {
    const path = resolve(filePath);
    const { name } = parse(path);
    const directoryPath = resolve(destinationPath, `${name}.br`);

    const readable = createReadStream(path);
    const writable = createWriteStream(directoryPath);
    const brotliCompress = createBrotliCompress();

    await pipeline(readable, brotliCompress, writable);
    console.log("The file was successfully compressed!");
};

export default compress;


