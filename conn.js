const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '127.o.o.1',
    user: 'root',
    password: '',
    database: 'cadastro'
})

connection.connect((err) => {
    if(err){
        console.log('erro ao conectar')
    }else{
        console.log('conectado no mysql')
        connection.query('select * from pessoas',(err , results) =>{
        console.log(err, results)
        connection.end()
        })
    } 
  })  