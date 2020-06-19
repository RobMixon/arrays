const domHTML = (newObj) => {
    const domElement = `
    <p>${newObj.companyName}</p>
    <p>${newObj.addressFullStreet}</p>
    <p>${newObj.addressCity},${newObj.addressStateCode }${newObj.addressZipCode}</p>
    `
    return domElement
}

export default domHTML;