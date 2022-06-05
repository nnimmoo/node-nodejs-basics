import { readdir, existsSync} from 'fs';
export const list = async () => {
    if (!existsSync('./files')) {
        console.log('FS operation failed');
    } else {
    readdir('./files', function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        var arr = [];
        files.forEach(function (file) {
            arr.push(file);
        }
        ); 
        console.log(arr.toString()); 
    });
}
};

list();
