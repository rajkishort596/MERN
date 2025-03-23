const path = require("path");
//Assigning a path to the myPath variable
const myPath = `/mnt/c/Desktop/Node js/path.js`;
const pathInfo = {
  fileName: path.basename(myPath),
  folderName: path.dirname(myPath),
  filExtension: path.extname(myPath),
  absoluteOrNot: path.isAbsolute(myPath),
  detailInfo: path.parse(myPath),
};
console.log(pathInfo);
