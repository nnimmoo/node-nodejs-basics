import { Transform} from 'stream';
export const transform = async () => {
    const trans = new Transform({
       transform(chunk,enc,cb){
           const temp = chunk.toString().trim();
           trans.push(temp.split('').reverse().join(''));
           cb();
       }
   });
   process.stdin.pipe(trans).pipe(process.stdout);
};
transform();
