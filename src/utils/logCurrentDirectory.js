import { consoleGreenColor, consoleResetColor } from "./constants.js";

const logCurrentDirectory = () => {
    const currentDirectory = process.cwd();
    console.log(consoleGreenColor, `You are currently in ${currentDirectory}`, consoleResetColor);
}

export default logCurrentDirectory;