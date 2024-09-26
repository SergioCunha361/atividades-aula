let livros = [
    {"titulo": "Um aaray no pedaço1", "qunatidade": "8"},
    {"titulo": "Um aaray no pedaço2", "qunatidade": "9"},
    {"titulo": "Um aaray no pedaço3", "qunatidade": "1"},
    {"titulo": "Um aaray no pedaço4", "qunatidade": "10"},
    {"titulo": "Um aaray no pedaço1", "qunatidade": "9"}
]
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
        return "Nenhum livro com quantidade maior ou igual a 10"
    }
}
console.log(livrosComEstoqueSuficiente(livros));