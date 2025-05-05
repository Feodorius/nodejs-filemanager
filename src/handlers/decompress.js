import { createReadStream, createWriteStream } from "fs";
import { parse, resolve } from "path";
import { pipeline } from "stream/promises";
import { createBrotliDecompress } from "zlib";

const decompress = async (filePath, destinationPath) => {
    const path = resolve(filePath);
    const { name } = parse(path);
    const directoryPath = resolve(destinationPath, name);

    const readable = createReadStream(path);
    const writable = createWriteStream(directoryPath);
    const brotliDeCompress = createBrotliDecompress();

    await pipeline(readable, brotliDeCompress, writable);
    console.log("The file was successfully decompressed!");
};

export default decompress;


