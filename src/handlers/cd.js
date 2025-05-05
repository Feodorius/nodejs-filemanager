import { chdir } from "process"

const cd = async (filepath) => chdir(filepath);

export default cd;