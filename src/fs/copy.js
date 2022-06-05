import fs from "fs";

const filePath = "src/fs/files";
const filePathCopy = "src/fs/files_copy";

export const copy = async () => {
    fs.access(filePath, (err) => {
        if (err) {
            console.log(err);
        } else {
            fs.access(filePathCopy, (error) => {
                if (error) {
                    //fs.copy 
                }
            })
        }
    })
};

copy();