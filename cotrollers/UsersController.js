const { json } = require('express/lib/response');
const connection = require('../config/db')
const utils = require('../resources/utils')


const getUsers = (request,response) =>{
    connection.query(
        'SELECT id,nombres,apellidos,rut,numero_cliente, direccion FROM clientes ',
        function(err, results, fields) {
          response.json(results); 
        }
      );
}
const searchUser = (request,response) =>{
    connection.query(
        `SELECT id,nombres,apellidos FROM clientes where 
        nombres like "%${request.body.search}%" 
        or apellidos like "%${request.body.search}%"`,
        function(err, results, fields) {
          response.json(results); 
        }
      );
}
const getUserById = (request,response) =>{
  connection.query(
      'SELECT id,nombres,apellidos,rut,numero_cliente, direccion FROM clientes where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserNameById = (request,response) =>{
  connection.query(
      'SELECT  nombres FROM clientes where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserLastNameById = (request,response) =>{
  connection.query(
      'SELECT  apellidos FROM clientes where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserRutById  = (request,response) =>{
  connection.query(
      'SELECT rut FROM clientes where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserNumeroClienteById = (request,response) =>{
  connection.query(
      'SELECT  numero_cliente FROM clientes where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserDataById = (request,response) =>{
  const opc = ['id', 'nombres', 'apellidos', 'rut', 'numero_cliente', 'direccion']
  connection.query(
      `SELECT  ${opc[request.body.field]} FROM users where id = ${request.body.id} `,
      function(err, results, fields) {
        response.json(results[0]); 
      }
    );
}
const createUser = (request,response) =>{
  connection.query(
      'insert into clientes(nombres,apellidos,rut,numero_cliente,direccion) values (?,?,?,?,?) ',
      [
        request.body.nombres  ,
        request.body.apellidos,
        request.body.rut,
        request.body.numero_cliente,
        request.body.direccion,
      ],
      function(err, results, fields) {
        if (err){
          response.json({message:err})
        }else{
          response.json({message:"Exito!"})
        }
      }
    );
}

const deleteUser = (request,response) =>{
  connection.query(
    'DELETE FROM clientes where id = '+request.body.id,
    function(err, results, fields) {
      response.json(results); 
     
    }
  );
}

const updateUser = (request,response) =>{
  connection.query(
    'UPDATE clientes(nombres,apellidos,rut,numero_cliente,direccion) values (?,?,?,?,?) ',
    [
      request.body.nombres  ,
      request.body.apellidos,
      request.body.rut,
      request.body.numero_cliente,
      request.body.direccion,
    ],
  );
}



module.exports = {
    getUsers,
    searchUser,
    getUserById,
    createUser,
    getUserNameById,
    getUserLastNameById,
    getUserRutById,
    getUserNumeroClienteById,
    getUserDataById,
    deleteUser,
    updateUser,
}
