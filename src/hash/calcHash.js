import {createHash} from "crypto";
import { readFileSync } from "fs";

export const calculateHash = async () => {
    const fileBuffer = readFileSync("./files/fileToCalculateHashFor.txt")

    const hash = createHash("sha256");
    const finalHex = hash.update(fileBuffer).digest('hex');

    console.log(finalHex);
};

calculateHash();
