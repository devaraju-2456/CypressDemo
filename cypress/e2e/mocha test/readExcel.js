const xlsx = require('xlsx');

function readExcelRows(filePath, sheetName) {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];
  const range = xlsx.utils.decode_range(sheet['!ref']);
  const rows = [];

  for (let rowNum = range.s.r + 1; rowNum <= range.e.r; rowNum++) {
    const row = [];
    for (let colNum = range.s.c; colNum <= range.e.c; colNum++) {
      const cellAddress = { c: colNum, r: rowNum };
      const cellRef = xlsx.utils.encode_cell(cellAddress);
      const cell = sheet[cellRef];
      row.push(cell ? cell.v : null);
    }
    rows.push(row);
  }

  return rows;
}

module.exports = { readExcelRows };
