import { createHash } from "crypto";
import { createReadStream } from "fs";
import { resolve } from "path";
import { Writable } from "stream";
import { pipeline } from "stream/promises";

const hash = async (filePath) => {
    const path = resolve(filePath);
    const hashObject = createHash("sha256");
    hashObject.setEncoding("hex");
    
    const writable = new Writable({
        write(chunk, encoding, callback) {
            console.log(chunk.toString());
            callback();
        }
    });
    const readable = createReadStream(path);
    await pipeline(readable, hashObject, writable);
};

export default hash;