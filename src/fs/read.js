import { readFile, existsSync } from 'fs';

export const read = async () => {
    if (!existsSync('./files/fileToRead.txt')) {
        console.log('FS operation failed');
    } else {
        readFile('./files/fileToRead.txt', function (err, data) {
        if (err) throw err;
        console.log(data.toString());
      });
    }
};

read();
