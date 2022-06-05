import {createGunzip} from "zlib";
import { createReadStream, createWriteStream} from "fs";

export const decompress = async () => {
    const gzip = createGunzip();
    
    const input = createReadStream("./files/archive.gz");
    const output = createWriteStream("./files/fileToCompress.txt");

    input.pipe(gzip).pipe(output);
};
