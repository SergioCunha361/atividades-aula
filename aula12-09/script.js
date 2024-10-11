let livros = [
    {titulo: "Um aaray no pedaço1", quantidade: "8"},
    {titulo: "Um aaray no pedaço2", quantidade: "9"},
    {titulo: "Um aaray no pedaço3", quantidade: "1"},
    {titulo: "Um aaray no pedaço4", quantidade: "10"},
    {titulo: "Um aaray no pedaço1", quantidade: "9"},
];
function livrosComEstoqueSuficiente(livros){
    let resultado = [];
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
    if (resultado.length > 0){
        return resultado;
    } else {
        return "Nenhum livro com quantidade maior ou igual a 09";
    };
}
console.table(livrosComEstoqueSuficiente(livros));