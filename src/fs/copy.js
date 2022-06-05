import{mkdirSync,readdirSync,lstatSync,copyFileSync,existsSync} from 'fs';
import { join } from 'path';

export const copy = async () => {
    if (!existsSync('./files')||existsSync('./files_copy')) {
        console.log('FS operation failed');
    } else {
    mkdirSync('./files_copy');
    readdirSync('./files').forEach(element => {
        if (lstatSync(join('./files', element)).isFile()) {
            copyFileSync(join('./files', element), join("./files_copy", element));
        } else {
            copyFolderSync(join('./files', element), join('./files_copy', element));
        }
    });
}};
copy();
