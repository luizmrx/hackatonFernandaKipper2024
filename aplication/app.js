


function dados(){
    const readXlsxFile = require('read-excel-file/node');

//Realizando leitura dos dados
readXlsxFile('./files/dados.xlsx').then(linhas => {
  console.log(linhas);
});
}