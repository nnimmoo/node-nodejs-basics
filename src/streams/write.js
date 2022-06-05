import { createWriteStream} from 'fs';
export const write = async () => {
    process.stdin.on('data', data =>{
        createWriteStream("./files/fileToWrite.txt").write(data.toString());
        process.exit;
    });

};

write();
