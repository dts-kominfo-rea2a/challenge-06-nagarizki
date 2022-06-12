// TODO: import module bila dibutuhkan di sini
const fs = require("fs");
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let hasilData = [];
  fs.readFile(file1, "utf8", (err, data) => {
    if (err) {
      return fnCallback(err, null);
    }

    let parseJson = JSON.parse(data);
    let kataData = parseJson.message.split(" ");
    hasilData.push(kataData[1]);
    fs.readFile(file2, "utf-8", (err, data) => {
      if (err) {
        return fnCallback(err, null);
      }

      let parseJson2 = JSON.parse(data);
      hasilData.push(parseJson2[0].message.split("halo ").join(""));

      fs.readFile(file3, "utf-8", (err, data) => {
      if (err) {
        return fnCallback(err, null);
      }

      let parseJson3 = JSON.parse(data);
      hasilData.push(parseJson3[0]["data"].message.split("halo ").join(""));
      fnCallback(null, hasilData);
      });
    });
  });
};



// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
