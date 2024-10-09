// 1. Manipulação de Arrays para Ordenação
// ● Dado o array let numeros = [34, 7, 23, 32, 5, 62], faça as seguintes
// tarefas:
// ○ Adicione os números 9 e 12 ao final do array.
// ○ Adicione 1 ao início do array.
// ○ Ordene o array de forma crescente.
// ○ Inverta a ordem do array.
// ● No final, imprima o array resultante.

// let numeros = [34, 7, 23, 32, 5, 62];
// numeros.push(9,12);
// numeros.unshift(1);
// numeros.sort((a, b) => b - a); //ordena ordem crescente 
// //numeros.reverse(); // reverte em ordem descrescente
// console.log("Array resultado: ", numeros);
// numeros.sort((a, b) => a - b); //ordena ordem crescente 
// //numeros.reverse(); // reverte em ordem crescente
// console.log("Array resultado: ", numeros);


// 2. Concatenando e Formatando Strings
// ● Considere duas variáveis, let saudacao = "Olá" e let nome = "Mundo". Faça
// as seguintes tarefas:
// ○ Concatene essas duas variáveis em uma única string.
// ○ Transforme a string resultante para que todas as letras fiquem em maiúsculas.
// ○ Depois, extraia apenas a palavra "Mundo" da string concatenada.
// ● Por fim, imprima o resultado da extração.

// let saudacao = "Olá" 
// let nome = "Mundo"
// let arrayJuntos = saudacao.concat(nome);
// let letrasMaiusculas =  arrayJuntos.toUpperCase();
// console.log(letrasMaiusculas);
// let novoArray = letrasMaiusculas.slice(3, 8);
// console.log(novoArray);


// 3. Cálculo de Soma e Filtro de Números
// ● Dado o array de números let valores = [10, 25, 30, 45, 50, 60], execute
// as seguintes etapas:
// ○ Filtre apenas os números maiores que 30.
// ○ Some todos os números filtrados.
// ○ Verifique se o valor somado é um número (utilize isNaN()).
// ● Mostre no console o valor filtrado, somado e a confirmação de que é um número.

// let valores = [10, 25, 30, 45, 50, 60];
// let numerosMaiores = valores.filter(valor => valor > 30);
// console.log(numerosMaiores);
// let soma = numerosMaiores.reduce((acumulador, valorAtual) => {
//     return acumulador + valorAtual;},0);
// console.log(soma);
// console.log(typeof(soma));
//console.log(isNaN(soma)); // retorna false pois soma é um numero


// 4. Usando map() e reduce() para Dobrar e Somar Valores
// ● Dado o array let numeros = [1, 2, 3, 4, 5], faça o seguinte:
// ○ Use map() para criar um novo array que contenha o dobro de cada valor.
// ○ Reduza o novo array para obter a soma de todos os seus elementos.
// ● Imprima o array dobrado e o resultado da soma.

// let numeros = [1, 2, 3, 4, 5];
// let numerosDobrados = numeros.map(numero => numero * 2);
// let numerosSomados = numerosDobrados.reduce((acumulador, valor)=> {
//     return acumulador + valor;
// },0);
// console.log(`O novo Array é [${numerosDobrados}], e a soma de todos elementos é ${numerosSomados}`);


// 5. Contando Caracteres e Dividindo Frases
// ● Dada a string let frase = "A programação é divertida e desafiadora.",
// execute as seguintes tarefas:
// ○ Conte quantos caracteres essa frase possui (incluindo espaços).
// ○ Divida a frase em palavras separadas.
// ○ Converta todas as palavras para letras maiúsculas.
// ○ Junte essas palavras em uma nova string, separadas por hífens (-).
// ● Imprima a frase resultante.

// let frase = "A programação é divertida e desafiadora.";
// let numeroDeCaracteres = frase.length;
// console.log("A frase possui", numeroDeCaracteres, "caracteres.");
// let palavrasSeparadas = frase.split(" "); // Dividindo por espaços em branco
// console.log(palavrasSeparadas);
// let palavrasMaiusculas = frase.toUpperCase();
// console.log(palavrasMaiusculas)
// let palavrasJuntas = palavrasSeparadas.join('-');
// console.log(palavrasJuntas);


// 6. Manipulando Arrays com splice() e slice()
// ● Dado o array let frutas = ["Maçã", "Banana", "Laranja", "Manga",
// "Uva"]:
// ○ Remova "Laranja" do array e substitua por "Abacaxi".
// ○ Extraia apenas as primeiras três frutas do array usando slice().
// ○ Adicione "Melancia" ao final do novo array extraído.
// ● Imprima o array modificado e o array extraído.

// let frutas = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
// frutas.splice(2, 1, "Abacaxi");
// console.log(frutas);
// let novaArray = frutas.slice(0, 3);
// console.log(novaArray);
// novaArray.push("Melacia");
// console.log(novaArray);


// 7. Verificação de Índices e Modificação de Valores
// ● Considere o array let nomes = ["Ana", "Carlos", "João", "Maria"]:
// ○ Descubra o índice de "Carlos" no array.
// ○ Remova "João" usando splice() e substitua por "José".
// ○ Adicione "Fernanda" ao início e "Rafael" ao final do array.
// ● Imprima o índice de "Carlos" e o array resultante.

// let nomes = ["Ana", "Carlos", "João", "Maria"];
// console.log(nomes.indexOf("Carlos"));
// nomes.splice(nomes.indexOf("Joao")-1, 1, "Jose");
// console.log(nomes);
// nomes.unshift("Fernanda");
// nomes.push("Rafael");
// console.log(`Carlos está posiciondo na posição nº ${nomes.indexOf("Carlos")} no Array`);
// console.log(nomes);

// 8. Transformação de Arrays com map(), filter() e reduce()
// ● Dado o array de preços let precos = [15.5, 10.0, 20.75, 30.0, 8.0]:
// ○ Use map() para adicionar 10% a cada preço.
// ○ Filtre os preços que sejam maiores que 20.
// ○ Some todos os preços filtrados.
// ● Mostre o array com os preços aumentados, o array filtrado, e o total somado.

// let precos = [15.5, 10.0, 20.75, 30.0, 8.0];
// //math.round: Arredonda para o inteiro mais próximo.
// //Se a parte decimal for 0.5 ou maior, arredonda para cima; 
// let precosAumentados = precos.map(preco => Math.round(preco * 1.10));
// console.log(precosAumentados);
// let precosFiltrados = precosAumentados.filter(valor => valor > 20 );
// let soma = precosFiltrados.reduce((acumulador, valor) => acumulador + valor, 0);
// console.log(`O novo Array com aumento de 10% é [${precosAumentados}].`);
// console.log(`O novo Array com nnúmeros maiores que 20 é [${precosFiltrados}].`);
// console.log(`A soma do Array dos números maiores que 20 é [${soma}].`);



// 9. Analisando Números Aleatórios
// ● Gere 10 números aleatórios entre 0 e 100 usando Math.random() e Math.floor().
// Salve esses números em um array.
// ○ Use filter() para selecionar apenas os números maiores que 50.
// ○ Ordene o array filtrado de forma decrescente.
// ● Imprima o array original, o array filtrado e o array ordenado.

// const numerosAleatorios = [];
// for (let i = 0; i < 10; i++) {
//   numerosAleatorios.push(Math.floor(Math.random() * 101)); // * 101 para incluir o 100
// }
// // Filtrando os números maiores que 50
// const numerosMaioresQue50 = numerosAleatorios.filter(numero => numero > 50);

// // Ordenando de forma decrescente
// const numerosOrdenadosDecrescente = numerosMaioresQue50.sort((a, b) => b - a);

// console.log("Números aleatórios:", numerosAleatorios);
// console.log("Números maiores que 50:", numerosMaioresQue50);
// console.log("Números ordenados de forma decrescente:", numerosOrdenadosDecrescente);

// 10. Condicional para Calcular Média
// ● Dado o array let notas = [7.5, 8.0, 6.5, 9.0, 7.0]:
// ○ Calcule a média das notas usando reduce().
// ○ Verifique se a média é maior ou igual a 7 para decidir se o aluno foi aprovado ou
// reprovado.
// ● Imprima a média e o resultado ("Aprovado" ou "Reprovado").

// let notas = [7.5, 8.0, 6.5, 9.0, 7.0];
// let mediaNotas = notas.reduce((total, nota)  => total + nota, 0)/2
// console.log(mediaNotas)
// for (let i = 0; i < notas.length; i++){
//     if (notas[i] >=  7) {
//         console.log(`o aluno tirou nota ${notas[i]} - foi Aprovado.`)
//     }else{
//         console.log(`o aluno tirou nota ${notas[i]} - foi Reprovado.`)  
//     }
//   }


// 11. Manipulação de String com Interpolação e Substituição
// ● Crie variáveis let cidade = "São Paulo" e let clima = "ensolarado":
// ○ Use Template Literals para criar uma frase como: "Hoje em São Paulo está
// ensolarado."
// ○ Substitua a palavra "ensolarado" por "chuvoso".
// ● Imprima a frase original e a frase modificada.

// let cidade = "São Paulo" , clima = "ensolarado";
// console.log(`"Hoje em ${cidade} está ${clima}."`)
// clima = "chuvoso";
// console.log(`"Hoje em ${cidade} está ${clima}."`)



// 12. Reversão e Capitalização de Palavras
// ● Dada a string let texto = "javascript é incrível":
// ○ Divida o texto em palavras separadas.
// ○ Inverta a ordem das palavras.
// ○ Converta a primeira letra de cada palavra para maiúscula.
// ● Imprima o texto resultante.

// let texto = "javascript é incrível";
// let palavrasSeparadas = texto.split(" ");
// console.log(palavrasSeparadas);
// palavrasInvertidas = palavrasSeparadas.reverse();
// console.log(palavrasInvertidas);

// //Converter a primeira letra de cada palavra para maiúscula

// const palavrasCapitalizadas = palavrasInvertidas.map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1));
// console.log(palavrasCapitalizadas);


// 13. Comparando Valores com switch e if
// ● Crie uma variável let mes = 6, representando um mês do ano:
// ○ Use switch para verificar qual é o mês (por exemplo, 6 = Junho) e imprimir o
// nome do mês.
// ○ Use if para verificar se o mês é parte do primeiro semestre (1-6) ou do segundo
// semestre (7-12).
// ● Mostre o nome do mês e a informação do semestre.

// let mes = 6;    ;
// switch (mes){
//     case 1:
//         console.log(`O mês ${mes} é o mês de "Janeiro."`);
//         break;
//     case 2:
//         console.log(`O mês ${mes} é o mês de "Fevereiro."`);
//         break;
//     case 3:
//     console.log(`O mês ${mes} é o mês de "Março."`);
//         break;
//     case 4:
//         console.log(`O mês ${mes} é o mês de "Abril."`);
//         break;
//     case 5:
//         console.log(`O mês ${mes} é o mês de "Maio."`);
//         break;
//     case 6:
//         console.log(`O mês ${mes} é o mês de "Junho."`);
//         break;
//     case 7:
//         console.log(`O mês ${mes} é o mês de "Julho."`);
//         break;
//     case 8:
//         console.log(`O mês ${mes} é o mês de "Agosto."`);
//         break;
//     case 9:
//         console.log(`O mês ${mes} é o mês de "Setembro."`);
//         break;
//     case 10:
//         console.log(`O mês ${mes} é o mês de "Outubro."`);
//         break;
//     case 11:
//         console.log(`O mês ${mes} é o mês de "Novembro."`);
//         break;
//     case 12:
//         console.log(`O mês ${mes} é o mês de "Dezembro."`);
//         break;  
//     default:
//         console.log(`O mês ${mes} não existe."`);
//         break;
// };
// if (mes > 0 && mes < 13){
//     if (mes > 0 && mes < 7){
//         console.log("Primeiro Semestre");
//     }else {
//         console.log("Segundo Semestre");
//     }
// };        

// 14. Manipulando Números com parseInt() e Math
// ● Considere a string let numeroStr = "45.67":
// ○ Converta a string para um número inteiro usando parseInt().
// ○ Arredonde o número para baixo usando Math.floor().
// ○ Arredonde o número para cima usando Math.ceil().
// ● Imprima todos os resultados.

// let numero = 45.67;
// let numeroStr = "45.67";
// let numeroInteiro = parseInt(numeroStr);
// let numeroArredondado1 = Math.floor(numero); //arredodando para baixo
// let numeroArredondado2 = Math.ceil(numero); // arredodando para cima
// console.log(numero, numeroInteiro, numeroArredondado1, numeroArredondado2);

// 15. Encontrando Caracteres em uma String
// ● Dada a string let palavra = "programador":
// ○ Use charAt() para encontrar o terceiro caractere.
// ○ Use indexOf() para encontrar a posição do caractere "a".
// ○ Extraia a primeira metade da palavra usando slice().
// ● Imprima todos os resultados.


// let palavra = "programador";
// let terceiroCaracter = palavra.charAt(2);
// let localizaA = palavra.indexOf("a");
// let metadePalavra = palavra.slice(0, parseInt(palavra.length / 2));  
// console.log(terceiroCaracter);
// console.log(localizaA,);
// console.log(metadePalavra);

// 16. Uso de for para Contagem de Caracteres
// ● Dada a string let frase = "Estudar programação é ótimo!":
// ○ Conte quantas vezes a letra "a" aparece na frase usando um loop for.
// ○ Imprima o resultado.

// let frase = "Estudar programação é ótimo!";
// let quantA = 0;
// for (let i = 0; i < frase.length ; i++){
//    if (frase[i] === "a"){
//         quantA = quantA + 1;       
//    }
// }
// console.log(`A letra "a" aparece na string frase ${quantA} vezes.`);


// 17. Manipulação de Arrays com join() e reverse()
// ● Considere o array let letras = ["a", "b", "c", "d", "e"]:
// ○ Inverta a ordem das letras.
// ○ Junte as letras em uma única string, separadas por vírgulas.
// ● Imprima o array invertido e a string resultante.

// let letras = ["a", "b", "c", "d", "e"];
// let letrasInvertida = letras.reverse();
// let letrasJuntas = letras.join(",");
// console.log(letrasInvertida);
// console.log(letrasJuntas);


// 18. Criação e Verificação de Arrays
// ● Crie um array de 5 números inteiros, como let numeros = [5, 12, 8, 130,
// 44].
// ○ Filtre os números que sejam maiores que 10.
// ○ Some todos os números do array original.
// ○ Verifique se o array possui exatamente 5 elementos.
// ● Imprima o array filtrado, a soma e a verificação de tamanho.

// let numeros = [5, 12, 8, 130, 44];
// let numerosMaior10 = numeros.filter(numero => numero >10);
// let soma = numeros.reduce((total, valor) => total + valor , 0);
// console.log(numerosMaior10);
// console.log(`A soma de array original é ${soma}.`)
// if (numeros.length === 5){
//     console.log("O array números possui exatamente 5 elementos")
//    }else{
//     console.log("O array números nao possui exatamente 5 elementos")
// }


// 19. Operações com Strings e Condicionais
// ● Considere a string let nome = "Alice":
// ○ Converta o nome para letras minúsculas.
// ○ Verifique se o nome convertido é igual a "alice".
// ○ Caso seja igual, exiba uma mensagem de "Nome reconhecido".
// ● Imprima o resultado.

// let nome = "Alice";
// let nomeMaiusculo = nome.toUpperCase();

// //se colocar só um igual na comparação o sistema atribui nomeMaiusculo a varialvel nome
// //ficando as duas maiusculas

// if (nome == nomeMaiusculo){
//    console.log("Nomes reconhecido - iguais"); 
// }else {
//    console.log("Nomes desconhecidos - Desiguais");
// }
// console.log(nome, '  -  ',nomeMaiusculo);


// 20. Manipulando Números e Arrays com Math e push()
// ● Crie um array vazio let numeros = []:
// ○ Gere 5 números aleatórios entre 1 e 20 e adicione-os ao array usando push().
// ○ Arredonde cada número para o inteiro mais próximo usando Math.round().
// ● Imprima o array de números arredondados.

// let numerosAleatorios = [];
// for (let i = 0; i < 5; i++){
//     numerosAleatorios.push(Math.round(Math.random() * 20)); // * 20 para incluir o 20
// }
// console.log(numerosAleatorios);


// 21. Manipulação de String com split() e length
// ● Dada a frase let frase = "Aprender JavaScript é divertido e
// recompensador":
// ○ Divida a frase em palavras.
// ○ Conte o número total de palavras.
// ○ Verifique se a frase possui mais de 5 palavras.
// ● Imprima a lista de palavras, o número de palavras, e a verificação de quantidade.

// let frase = "Aprender JavaScript é divertido e recompensador";
// let fraseDividida = frase.split(" ");
// console.log(frase);
// console.log(fraseDividida);
// console.log(`A nova frase tem ${fraseDividida.length} palavras.`);

// 22. Validação de Input com prompt() e confirm()
// ● Use prompt() para perguntar ao usuário seu nome.
// ○ Use confirm() para verificar se o nome inserido está correto.
// ○ Caso esteja correto, exiba uma saudação com alert().
// ● Mostre a sequência completa de ações.

// let nome = prompt("Qual é o seu nome: ");
// let nomeConfirmo = confirm("Seu nome é Sérgio? ")
// if (nomeConfirmo === true){
//     alert("Nome confirmado!");
// } else {
//     alert("Nome não confirmado.");
// }


// 23. Contando Caracteres com length e for
// ● Considere o texto let texto = "JavaScript":
// ○ Conte quantos caracteres "a" existem no texto usando um loop for.
// ○ Imprima a quantidade de caracteres "a".

// let texto = "JavaScript";
// let contA = 0;
// for (let i = 0; i < texto.length; i++){
//     if (texto[i] === "a"){
//         contA = contA + 1
//     }
// }
// console.log(`Existem ${contA} letras "a" na string texto.`);

// 24. Manipulação de Arrays com Adição e Remoção
// ● Dado o array let cores = ["Vermelho", "Verde", "Azul"]:
// ○ Adicione "Amarelo" ao final.
// ○ Remova "Verde".
// ○ Adicione "Roxo" ao início.
// ● Imprima o array final.

// let cores = ["Vermelho", "Verde", "Azul"];
// cores.push("Amarelo");
// cores.splice(1,1);
// cores.unshift("Roxo");
// console.log(cores);

// 25. Comparando Strings com toLowerCase() e toUpperCase()
// ● Considere duas strings let str1 = "casa" e let str2 = "CASA":
// ○ Converta ambas para minúsculas e verifique se são iguais.
// ○ Converta ambas para maiúsculas e verifique se são iguais.
// ● Imprima os resultados das comparações.

// let str1 = "casa";
// let str2 = "CASA";

// // Comparando as strings em minúsculas
// let minusculaStr1 = str1.toLowerCase();
// let minusculaStr2 = str2.toLowerCase();
// let compMinuscula = minusculaStr1 === minusculaStr2;

// // Comparando as strings em maiúsculas
// let maiusculaStr1 = str1.toUpperCase();
// let maiusculaStr2 = str2.toUpperCase();
// let compMaiuscula = maiusculaStr1 === maiusculaStr2;

// // Imprimindo os resultados
// console.log(`Comparação em minúsculas: ${minusculaStr1} === ${minusculaStr2} -> ${compMinuscula}`);
// console.log(`Comparação em maiúsculas: ${maiusculaStr1} === ${maiusculaStr2} -> ${compMaiuscula}`);

// //comaparando com === (um maiusculo e outro minusculo)

// // Comparando as strings em minúsculas - ele não compara e sim atribui
// //let comp1igual = str1 = str2; o resultado seria comp1igual = CASA

// // Comparando com == (um minsuculo e outro maiusculo);
// let comp2igual = str1 == str2;

// // Comparando com === (um minsuculo e outro maiusculo);
// let comp3igual = str1 == str2;


// // Imprimindo os resultados
// console.log("comparando dom '=' - '==' - '==='");
// console.log(`Comparação em minúsculas e maiuscula: ${str1} "=" ${str2} ->');
// console.log('não pode acontecer porque ele não compara e sim atribui a todos CASA maiuscula.`);
// console.log(`Comparação em minúsculas e maiuscula: ${str1} "==" ${str2} -> ${comp2igual}`);
// console.log(`Comparação em minúsculas e maiuscula: ${str1} "===" ${str2} -> ${comp3igual}`);

// 26. Trabalhando com Math.random() e sort()
// ● Crie um array com 5 números aleatórios entre 1 e 50.
// ○ Ordene esses números de forma crescente.
// ○ Ordene os mesmos números de forma decrescente.
// ● Imprima o array em ambas as ordens.


let numerosAleatorios =[];
for (let i = 0; i < 5; i++){
    numerosAleatorios.push(Math.floor(Math.random() * 50)+1);
}
console.log(numerosAleatorios);
const crescente = numerosAleatorios
const decrescente = numerosAleatorios
crescente.sort((a, b) => a - b);

// se for a ordenaçao nessa nao da certo;
//decrescente.sort((a, b) => b - a);
console.log(crescente);
decrescente.sort((a, b) => b - a);
console.log(decrescente);

// 27. Manipulando Objetos com Arrays
// ● Crie um array de objetos representando carros, com propriedades como marca,
// modelo, e ano.
// ○ Filtre os carros que sejam de uma marca específica.
// ○ Extraia os modelos desses carros em um novo array.
// ● Imprima o array filtrado e o array de modelos.

// Criando um array de objetos representando carros
// let carros = [
//     { marca: 'Toyota', modelo: 'Corolla', ano: 2020 },
//     { marca: 'Honda', modelo: 'Civic', ano: 2019 },
//     { marca: 'Ford', modelo: 'Fiesta', ano: 2018 },
//     { marca: 'Toyota', modelo: 'Camry', ano: 2021 },
//     { marca: 'Chevrolet', modelo: 'Onix', ano: 2022 }
// ];

// // Marca que queremos filtrar
// const marcaEspecifica = 'Toyota';

// // Filtrando os carros da marca específica
// const carrosFiltrados = carros.filter(carro => carro.marca === marcaEspecifica);

// // Extraindo os modelos dos carros filtrados em um novo array
// const modelosFiltrados = carrosFiltrados.map(carro => carro.modelo);

// // Imprimindo o array filtrado e o array de modelos
// console.log('Carros filtrados:', carrosFiltrados);
// console.log('Modelos filtrados:', modelosFiltrados);


// 28. Trabalhando com splice() para Modificar Arrays
// ● Dado o array let animais = ["Cachorro", "Gato", "Leão", "Tigre"]:
// ○ Remova "Leão" e substitua por "Panda".
// ○ Adicione "Coelho" após "Gato".
// ● Imprima o array final.

// let animais = ["Cachorro", "Gato", "Leão", "Tigre"];
// animais.splice(2,1,"Panda");
// animais.splice(2,0,"Coelho");
// console.log(animais);


// 29. Ordenando Arrays com Números Mistos
// ● Considere o array let numeros = [10, 5, 15, 7, 20]:
// ○ Ordene o array de forma crescente.
// ○ Adicione um novo número ao início do array.
// ○ Verifique se o array possui exatamente 6 elementos.
// ● Imprima o array ordenado e a verificação de tamanho.

// let numeros = [10, 5, 15, 7, 20];
// numeros.sort((a , b) => a - b);
// numeros.push(1);
// let quant = numeros.length;
// console.log(`O array [${numeros}] tem ${quant} elementos.`)


// 30. Operações Mistas com concat(), reverse(), e join()
// ● Considere duas variáveis let part1 = "Aprender" e let part2 =
// "Programação":
// ○ Concatene as duas strings.
// ○ Inverta a ordem das letras da string resultante.
// ○ Junte as letras em uma nova string separadas por um ponto (.).
// ● Imprima o resultado final.

// let part1 = "Aprender" , part2 = "Programação";
// let part3 = part1.concat(part2);
// console.log(part3);
// let invertida = part3.split('').reverse().join('.');
// console.log(invertida);
