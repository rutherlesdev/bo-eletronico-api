export const cleanDirectory = (archive) => {
    const folder = path.resolve(archive);
    const time = 2000;
  
    setTimeout(() => {
      fs.unlink(folder);
    }, time);
  };
  