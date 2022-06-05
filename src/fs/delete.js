
import { unlink,existsSync } from 'fs';


export const remove = async () => {
    if (existsSync('./files/fileToRemove.txt')) {
        unlink('./files/fileToRemove.txt', function (err) {
            if (err) throw err;
            console.log('File deleted!');
        });
    }
    else {
        console.log('FS operation failed');
    }
};

remove();
