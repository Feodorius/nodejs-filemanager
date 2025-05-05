import { createReadStream } from "fs";
import { resolve } from "path";
import { Writable } from "stream";
import { pipeline } from "stream/promises";

const cat = async (...args) => {
    const joinedPath = args.join(" ");
    const filePath = resolve(joinedPath);
    const readable = createReadStream(filePath, 'utf-8');
    const writable = new Writable({
        write(chunk, encoding, callback) {
            console.log(chunk.toString());
            callback();
        }
    });
    await pipeline(readable, writable);
};

export default cat;