import { argv } from "process";

const getArguments = () => argv
    .slice(2)
    .reduce((prev, arg
    ) => {
        const [key, value] = arg.split("=");
        return { ...prev, [key]: value };
    }, {});

export default getArguments;