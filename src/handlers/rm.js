import { unlink } from "fs/promises";
import { resolve } from "path";

const rm = async (filePath) => {
    const path = resolve(filePath);
    await unlink(path);
    console.log("File was successfully deleted!");
};

export default rm;