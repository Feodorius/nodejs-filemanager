import exitProgram from "../utils/exitProgram.js";
import ls from "./ls.js";
import up from "./up.js";

const handlersMap = new Map(Object.entries({
    ".exit": exitProgram,
    "up": up,
    // "cd": cd,
    "ls": ls,
    // "cat": cat,
    // "add": add,
    // "mkdir": mkdir,
    // "rn": rn,
    // "mv": mv,
    // "rm": rm,
    // "os": os,
    // "hash": hash,
    // "compress": compress,
    // "decompress": decompress
}));

export default handlersMap;
