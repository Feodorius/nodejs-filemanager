import { arch, cpus, EOL, homedir, userInfo } from "os";

const os = async (osParameter) => {
    switch (osParameter) {
        case "--EOL":
            console.log(JSON.stringify(EOL));
            break;
        case "--cpus":
            console.log(getCPUInfo());
            break;
        case "--homedir":
            console.log(homedir());
            break;
        case "--username":
            console.log(userInfo().username);
            break;
        case "--architecture":
            console.log(arch());
            break
        default:
            throw new Error();
    }
};

export default os;

const getCPUInfo = () => cpus().map(({ model, speed }) => ({
    model,
    speed: `${speed / 1000}GHz`
}));
;