import {fork} from 'child_process';
export const spawnChildProcess = async (args) => {

  const child = fork("./files/script.js", args);

  child.send(args);

};
//gets array of inputs from terminal
spawnChildProcess(process.argv.slice(2));
