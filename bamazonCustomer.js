const mysql = require('mysql');
const columifly = require('columnify');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Lakers19950928',
  database: 'bamazon'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
  showProduct()
});

function showProduct(){
    connection.query("SELECT * FROM products", function(error, result){
        if (error){
            console.log(error)
        }
        console.log(columifly(result, {
            columnSpliter: ' | '
        }))
    });
}
