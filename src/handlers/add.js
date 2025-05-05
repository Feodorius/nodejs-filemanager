import { writeFile } from "fs/promises";
import { resolve } from "path";
import { cwd } from "process";

const add = async (filename) => {
    const filePath = resolve(cwd(), filename);
    await writeFile(filePath, "", { flag: "wx" });
    console.log(`The file ${filename} was added successfully.`);
};

export default add;