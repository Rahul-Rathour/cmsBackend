// backend/utils/fileUpload.js
const path = require('path');
const fs = require('fs');

const uploadFile = async (file) => {
  const filePath = path.join(__dirname, '..', 'uploads', file.filename);
  fs.writeFileSync(filePath, file.buffer);
  return filePath;
};

module.exports = uploadFile;
