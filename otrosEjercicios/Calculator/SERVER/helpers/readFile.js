const fs = require("fs");
// const data = './app/models/numbersMemory.json'

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (error, content) => {
            if (error) {
                reject(error);
            } else {
                if (content.trim() === "") {
                        reject(new Error("El archivo JSON está vacío."));
                }
                // console.log("**********CONTENT EN READFILE:", content)
                resolve(content);
            }
        });
    });
}

// function readFile(filePath, callback) {
//   fs.readFile(filePath, 'utf8', (error, content) => {
//     if (error) {
//       callback(error,);
//       return;
//     }
//     callback(null, content);
//   });
// }

module.exports = readFile;
