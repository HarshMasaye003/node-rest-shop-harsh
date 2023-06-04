const fs = require("fs");

function writeDataToFile(filename, contents) {
  fs.writeFileSync(filename, JSON.stringify(contents), (err) => {
    console.log(err);
  });
}

function getPostData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  writeDataToFile,
  getPostData,
};
