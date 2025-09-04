const fs = require("fs");

// const notesRead = fs.readFile("notes.txt", "utf-8"); 

let notesRead = fs.readFileSync("notes.txt", "utf-8");


console.log("original file: ",notesRead);

let newNotesRead = fs.appendFileSync("notes.txt", "\n Learning fs module.");

console.log("updated file: ",newNotesRead);

console.log(fs.rmSync("notes.txt"), "file deleted");