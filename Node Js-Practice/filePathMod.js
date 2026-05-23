//Path Module

const path = require('path');

const filePath = "D:\Web Dev\Node Js\files\sample.txt";

//dirname
// console.log(path.dirname(filePath)); //or
// console.log(__dirname);
// //basename
// console.log(path.basename(filePath)); //or
// console.log(__filename);
// //extension
// console.log(path.extname(filePath));

// const sampleFile = "sample.txt";
// console.log(path.join(path.dirname(filePath), sampleFile));

// File System Module

const fs = require('fs');
//console.log(fs);

// Reading from a file
// fs.readFile(filePath,"utf-8", (err, data) => {
//     if (err) {
//         throw new Error("Something went wrong!");
//     }
//     console.log(data);
// });

// try{
//     const data = fs.readFileSync(
//         path.join(__dirname, "files", "sample.txt"),
//         "utf-8"
//     );
//     console.log(data);
// }catch(err){
//     console.log(err);
// }

// const fileReading = async () => {
//     try{
//         const data = await fs.promises.readfile(filePath, {encoding: "utf-8"});
//         console.log("FS PROMISES: ",data);
//     }catch(err){
//         console.log(err);
//     }
// }

// fileReading();

//Writing to a file

const txtFile = path.join(__dirname, "files", "text.txt");
const content = "I love this node js tutorial series!";
fs.writeFile(txtFile, content, "utf-8", (err) => {
    if (err) {
        throw new Error("Something went wrong!");
    }
    console.log("File written successfully!");
});

