var XLSX = require("xlsx");

const axios = require('axios')

const api = axios.create({
  baseURL: "http://localhost:3001/",
  withCredentials: false
})

const worksheetFromArrayToWorkbook = (arrayOfArrays, sheetName) => {
  const workbook = XLSX.readFile("/Users/square/development/JS/controlCentral/helpers/inventory.xlsx", {type: 'binary'})
  var worksheet = XLSX.utils.aoa_to_sheet(arrayOfArrays);

  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  var wopts = { bookType:'xlsx', bookSST:false, type:'binary' };
  XLSX.writeFile( workbook, `inventory.xlsx`, wopts );
  
}

const saveDevCategoriesSheet = () =>{
  api.get("device-categories").then( ({data:devCategories}) => {
    let categoriesArray = [
      ["ID", "Title"],
      ...devCategories.map( category => [category.id, category.title])
    ]
    worksheetFromArrayToWorkbook(categoriesArray, "Category GUIDE")
    console.log(categoriesArray);
  });
}
  
const saveLocalsSheet = ()=> {
  api.get("locals").then(({data: locals}) => {
    console.log(locals)
    let localsArray = [
      ["ID", "Title", "Description", "Dept", "Location ID"],
      ...locals.map( local => [local.id, local.title, local.description, local.isDepartment, local.locationsId])
    ]
    worksheetFromArrayToWorkbook(localsArray, "Locals GUIDE")
  
  })
}

const saveAccountsSheet = ()=> {
  api.get("accounts").then(({data: accounts}) => {
    let accountsArray = [
      ["ID", "Address", "Service ID", "Service name", "Description", ],
      ...accounts.map( account => [account.id, account.address, account.serviceId, account.accountType?.name,  account.accountType?.description || " ",])
    ]
    worksheetFromArrayToWorkbook(accountsArray, "Accounts GUIDE")
    console.log(accountsArray)
  
  })
}

const saveServicesSheet = ()=> {
  api.get("accounts").then(({data: accounts}) => {
    console.log(accounts)
    let accountsArray = [
      ["ID", "Title", "Description", "Dept", "Location ID"],
      ...accounts.map( account => [account.id, account.address, account.description, account.isDepartment, account.locationsId])
    ]
    worksheetFromArrayToWorkbook(accountsArray, "accounts GUIDE")
  
  })
}

// saveDevCategoriesSheet();
// saveLocalsSheet();
// saveAccountsSheet()