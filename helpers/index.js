var XLSX = require("xlsx");
const { devicesSheetToObjectsArray, cellphonesSheetToObjectsArray } = require('./handlers/sheetsToObject')

const workbook = XLSX.readFile("/Users/square/development/JS/controlCentral/helpers/databaseSeeder/inventory.xlsx", {type: 'binary'})
workbook.Sheets['Computadores e usuários']

// devicesSheetToObjectsArray(workbook);
cellphonesSheetToObjectsArray(workbook);