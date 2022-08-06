const fs = require("fs");
let text = fs.readFileSync("deep54.txt", "utf-8");
text = text.replace("trial", "new");
console.log(text);
fs.writeFileSync("deep54replace.txt", text);