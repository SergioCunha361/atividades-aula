let livros = [
    {titulo: "Um aaray no pedaço1", quantidade: "8"},
    {titulo: "Um aaray no pedaço2", quantidade: "9"},
    {titulo: "Um aaray no pedaço3", quantidade: "1"},
    {titulo: "Um aaray no pedaço4", quantidade: "10"},
    {titulo: "Um aaray no pedaço1", quantidade: "9"},
];
function livrosComEstoqueSuficiente(livros){
    let resultado = [];
<<<<<<< HEAD
    // for let = 0; i < livros.length(livros); i++){
    //     if (livros[i].qunatidade >= 10){
    //         resultado.push(livros[i]);
    //     }
    // }
    livros.forEach(livros => {
        if(livros.qunatidade >= 9){
            resultado.push(livros)
        }    
    })
=======
    for (let i = 0; i < livros.length; i++){
      if (livros[i].quantidade >= 09){
          resultado.push(livros[i]);
      };
    };
    //----------------------------------
    // ou usando funçao forEach
    // livros.forEach(livro => {
    //     if(livro.quantidade >= 09){
    //         resultado.push(livro)
    //     }    
    // });
    //-------------------------------------
>>>>>>> 5e6107ab90c7ccbcc771b5689a3190a6317e34c5
    if (resultado.length > 0){
        return resultado;
    } else {
        return "Nenhum livro com quantidade maior ou igual a 09";
    };
}
console.table(livrosComEstoqueSuficiente(livros));