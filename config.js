const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',     // Endereço do servidor MySQL
  user: 'root',   // Nome de usuário do MySQL
  password: '', // Senha do MySQL
  database: 'formulario-joao'  // Nome do banco de dados
});
connection.connect((error) => {
    if (error) {
      console.error('Erro ao conectar ao MySQL: ', error);
    } else {
      console.log('Conexão bem-sucedida ao MySQL!');
    }
  });
  connection.query('SELECT * FROM tabela', (error, results, fields) => {
    if (error) {
      console.error('Erro ao executar a consulta: ', error);
    } else {
      console.log('Resultados da consulta: ', results);
    }
  });
    