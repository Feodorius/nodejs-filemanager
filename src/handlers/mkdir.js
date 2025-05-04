import { resolve } from "path"
import { cwd } from "process";
import { access, mkdir as mkdirPromise } from "fs/promises"

const mkdir = async (folderName) => {
    const newPath = resolve(cwd(), folderName);
    try {
        await access(newPath);
        console.error(`Directory "${folderName}" already exists.`);
    } catch (error) {
        if (error.code === "ENOENT") {
            await mkdirPromise(newPath, { recursive: true });
            console.log(`The directory ${folderName} was added successfully.`);
        } else {
            throw error;
        }

    }
};

export default mkdir;