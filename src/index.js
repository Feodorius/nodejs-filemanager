import { homedir } from "os";
import { chdir, stdin, stdout } from "process";
import getArguments from "./utils/getArguments.js";
import readline from "readline";
import exitProgram from "./utils/exitProgram.js";
import handlersMap from "./handlers/handlersMap.js";
import logCurrentDirectory from "./utils/logCurrentDirectory.js";
import { consoleRedColor, consoleYellowColor } from "./utils/constants.js";

chdir(homedir());

const args = getArguments();
const username = args["--username"] || "Anonymous User";
process.env.username = username;

console.log(consoleYellowColor, `Welcome to the File Manager, ${username}!`);
logCurrentDirectory();

const rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

rl.prompt();
rl.on("line", async (input) => {
    const [handlerKey, ...commandArgs] = input.trim().split(" ");

    try {
        if (handlersMap.has(handlerKey)) {
            const handler = handlersMap.get(handlerKey);
            await handler(...commandArgs);
        } else {
            console.log(consoleRedColor, 'Invalid input');
        }

    } catch (error) {
        console.log(consoleRedColor, 'Operation failed');
    }
    logCurrentDirectory();
    rl.prompt();
});

rl.on('SIGINT', exitProgram);