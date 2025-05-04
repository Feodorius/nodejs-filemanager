import { consoleYellowColor } from "./constants.js";

const exitProgram = () => {
    console.log(consoleYellowColor,`Thank you for using File Manager, ${process.env.username}, goodbye!`);
    process.exit();
}
export default exitProgram;