//requiring path and fs modules
const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");

//joining path of directory
const directoryPath = path.join(__dirname, "letters/test");
let noFiles = 0;
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  console.log("we have ", files.length, " files");
  noFiles = files.length;
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    //console.log(file);

    const str = file;
    console.log("my fullname of file ", file);
    //console.log("the length of ", str, " is :", str.split("-").length - 1);

    let lastItem = str.split("-");
    let copy = `./letters/test/${file}`
  

    const srcDir = `./letters/test/`;
   
    lastItem = lastItem.pop();
    
    let fullname = lastItem.trim();
    //console.log("last item value ", fullname);
    lastItem = lastItem.replace(/\..+$/, "");
    lastItem = lastItem.trim();
    //console.log("name is : ", lastItem);

    var dir = `./letters/test/applicants/${lastItem}`;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    // To copy a folder or file
    const src = `./letters/test/${file}`
    const dest = `./letters/test/applicants/${lastItem}/${file}`
    
    // With a callback:
    fse.copy(src, dest, err => {
      if (err){
        console.log("Cannot copy ",file);
        return console.error(err)
      } 
      else{
        console.log('success created !', lastItem)
      }
    })
  });
});
