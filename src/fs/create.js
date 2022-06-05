import fs from "fs";

const filePath = "src/fs/files/fresh.txt";
const text = "I am fresh and young";

export const create = async () => {
  fs.access(filePath, (error) => {
    if (error) {
      fs.writeFile(filePath, text, (err) => {
        if (err) throw new Error(err);
      });
    } else {
      throw new Error('FS operation failed');
    }
  });
};

create();