
export const parseEnv = () => {
    for (let obj of Object.entries(process.env)) {
        if (obj[0].startsWith('RSS_')) {
          console.log(eobjnv[0] +'=' + obj[1]);
          
        }
      }
};

parseEnv();
