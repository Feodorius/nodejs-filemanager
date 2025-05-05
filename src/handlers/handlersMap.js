import exitProgram from "../utils/exitProgram.js";
import add from "./add.js";
import cat from "./cat.js";
import cd from "./cd.js";
import compress from "./compress.js";
import cp from "./cp.js";
import decompress from "./decompress.js";
import ls from "./ls.js";
import mkdir from "./mkdir.js";
import mv from "./mv.js";
import os from "./os.js";
import rm from "./rm.js";
import rn from "./rn.js";
import up from "./up.js";

const handlersMap = new Map(Object.entries({
    ".exit": exitProgram,
    "up": up,
    "cd": cd,
    "ls": ls,
    "cat": cat,
    "add": add,
    "mkdir": mkdir,
    "rn": rn,
    "cp": cp,
    "mv": mv,
    "rm": rm,
    "os": os,
    // "hash": hash,
    "compress": compress,
    "decompress": decompress
}));

export default handlersMap;
