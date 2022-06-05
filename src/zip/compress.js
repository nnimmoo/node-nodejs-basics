import {createGzip} from "zlib";
import { createReadStream, createWriteStream} from "fs";

export const compress = async () => {
    const gzip = createGzip();
    
    const input = createReadStream("./files/fileToCompress.txt");
    const output = createWriteStream("./files/archive.gz");

    input.pipe(gzip).pipe(output);
};

compress();
