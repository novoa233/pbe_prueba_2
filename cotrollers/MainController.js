const utils = require('../resources/utils')

const helloWorld = (request , response)=>{
    response.send('Hello  wolrd!!!')
}

const getName = (request , response)=>{
    response.json({
        nombre: "Antonio Salinas",
        direccion: "Mi Casa 3344",
        ciudad: "Valparaíso"
    })
}
const getFullName=(request , response)=>{
    response.json({
        nombre: "Antonio Javier Salinas Rodríguez",
        direccion: "Mi Casa 3344",
        ciudad: "Valparaíso"
    })
}
const sumarDosNumeros =(request , response)=>{
    const suma = request.body.numero1+request.body.numero2
    response.json({suma})
}
const putName = (request , response)=>{
     response.json(request.body)
}
const patchName =(request , response)=>{
    response.json({
       nombre: "Antonio Javier Salinas Rodríguez",
       direccion: "Mi Casa 3344",
       ciudad: "Valparaíso"
   })
}
const deleteName =(request , response)=>{
    response.json({
       nombre: "Antonio Javier Salinas Rodríguez",
       direccion: "Mi Casa 3344",
       ciudad: "Valparaíso"
   })
}
const reverse = (request , response)=>{
    const reverse = utils.reverseString(request.body.palabra)
    response.json({reverse})
}

module.exports = {
    helloWorld,
    getName,
    getFullName,
    sumarDosNumeros,
    putName,
    patchName,
    deleteName,
    reverse,
}