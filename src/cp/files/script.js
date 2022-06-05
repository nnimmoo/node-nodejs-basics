const args = process.argv.slice(2);

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);

const echoInput = (chunk) => {
    const chunkStringified = chunk.toString();
    if (chunkStringified.includes('CLOSE')) process.exit(0);
    process.stdout.write(`Received from master process: ${chunk.toString()}\n`)
};
//transforms all inputs from terminal
process.on("message", data=>{
    for (let index = 0; index < data.length; index++) {
        echoInput(data[index]);
        
    }
});;
process.stdin.on('data', echoInput);

