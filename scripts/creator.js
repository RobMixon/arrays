//makes the Object

const makeObj = (companyName, addressFullStreet, addressCity, addressStateCode, 
    addressZipCode) => { 
            const newObj = {
        name:companyName,
        addressStreet:addressFullStreet,
        addressCity:addressCity,
        addressStateCode:addressStateCode,
        addressZipCode:addressZipCode
          }
    return newObj;
}