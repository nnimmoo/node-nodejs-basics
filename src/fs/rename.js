import { renameSync, existsSync } from 'fs';
export const rename = async () => {
    if (!existsSync('./files/wrongFilename.txt') ||existsSync('./files/properFilename.md')){
        console.log('FS operation failed');
    } else {
        renameSync('./files/wrongFilename.txt', './files/properFilename.md', function (err) {
        if (err) throw err;
        console.log('Renamed!');
      });
    }
};

rename();
