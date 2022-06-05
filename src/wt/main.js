import { Worker } from 'worker_threads';
export const performCalculations = async () => {
    
    var num =10;

    for (let index = 0; index < 4; index++) {
    
    const worker = new Worker("./worker.js", {workerData: {num: num}});

    worker.once("message", result => {
        console.log({status: "resolved", data:result});
    });
    worker.on("error", error => {
        console.log({status: "error", data:null });
    });
   
    num++;
}
};

performCalculations();
