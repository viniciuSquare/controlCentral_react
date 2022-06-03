var XLSX = require("xlsx");

const consoleHeadIdx = (rowObject) => console.log(rowObject[0].map((head,idx)=> [idx, head]))

function computersSheetToObjectsArray(workbook) {
  let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets['Computadores e usuários'], {header:1, defval:""});
  
  // consoleHeadIdx(rowObject);

  let computersData = rowObject.map( (sheetRowArray, idx) => {
    if(idx==1) return
    let computer = {
      ip: ((sheetRowArray[4] != "" && sheetRowArray[4] != "-") ? sheetRowArray[4] : sheetRowArray[3]),
      user: sheetRowArray[6],
      hostname: sheetRowArray[5],
      model: sheetRowArray[9],
      cpu: sheetRowArray[10],
      specification: `- RAM: ${sheetRowArray[12]}, - OS: ${sheetRowArray[14]}, LICENCE: ${sheetRowArray[29]}`,
      servicetag: sheetRowArray[21],
      purchaseDate: sheetRowArray[22],
      state: sheetRowArray[13]
    }

    return computer;
  })

  // console.log(computersData);
  return computersData;
}

function cellphonesSheetToObjectsArray(workbook) {
  let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets['Celulares'], {header:1, defval:""});
  
  consoleHeadIdx(rowObject);

  let cellphonesData = rowObject.map( (sheetRowArray, idx) => {
    if(idx==1 || sheetRowArray[2] == "") return
    let computer = {
      ip: sheetRowArray[2],
      user: sheetRowArray[1],
      state: sheetRowArray[3],
      model: sheetRowArray[4],
      category: 1,
      accounts: [ sheetRowArray[5], sheetRowArray[6], sheetRowArray[7] ]
    }

    return computer;
  })

  console.log(cellphonesData);
  return cellphonesData;
}

module.exports = {
  computersSheetToObjectsArray,
  cellphonesSheetToObjectsArray
}