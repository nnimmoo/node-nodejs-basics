import { appendFile, existsSync } from 'fs';


export const create = async () => {
    if (existsSync('./files/fresh.txt')) {
        console.log('FS operation failed');
    } else {
    appendFile('./files/fresh.txt', ' I am fresh and young', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    }
};

create();
