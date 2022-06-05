import {createReadStream} from 'fs';
export const read = async () => {
    createReadStream('./files/fileToRead.txt', {encoding: "utf8"}).on('data', (piece)=>{
        process.stdout.write(piece);
    });
};

read();
