export const parseArgs = () => {
    const myArgs = process.argv.slice(2);
    for (let i = 0; i < myArgs.length; i=i+2) {
    console.log (myArgs[i].slice(2)+' is '+ myArgs[i+1]);
    }
};
