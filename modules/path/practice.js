const path = require("path");

const files = [
    "photo.png",
    "doc.pdf",
    "text.txt",
    "presentation.pptx",
    "report.docx"
]

files.forEach(f => {
    console.log(`File names: ${path.basename(f, path.extname(f))}`);
})

files.forEach(f=> {
    console.log(`File extensions: ${path.extname(f)}`);
})

files.forEach(f => {
    const savingPath = path.join(__dirname, "uploads", f);
    console.log(`Saving ${f} to ${savingPath}`);
})


    