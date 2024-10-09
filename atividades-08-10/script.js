// 1. Adicionar e Remover Elementos de um Array
// ● Dado o array let frutas = ["Maçã", "Banana", "Laranja"], adicione
// "Manga" ao final, "Uva" ao início e remova "Laranja". Imprima o array resultante.
// let frutas = ["Maçã", "Banana", "Laranja"];
// frutas.push("Manga");
// frutas.unshift("Uva");
// console.log(frutas);

// 2. Concatenar Strings com Template Literals
// ● Crie duas variáveis saudacao = "Olá" e nome = "Maria". Concatene essas
// variáveis usando template literals e imprima a mensagem "Olá, Maria!".
// let saudacao = "Olá" ; nome = "Maria";
// novoNome = saudacao + " " + nome
// console.log(novoNome)


// 3. Verificar se um Número é Par
// ● Dada a variável let numero = 10, verifique se o número é par ou ímpar. Imprima
// let numero = 11;
// if (numero % 2 === 0){
//     console.log("Número Par");
// }else{
//     console.log("Número Impar");
// }

// 4. Filtrar Números Maiores que um Valor
// ● Dado o array let numeros = [5, 12, 8, 130, 44], filtre os números maiores
// que 10 e imprima o array filtrado.
// let numeros = [5, 12, 8, 130, 44];
// let novosNumeros = numeros.filter(numero => numero > 10);
// console.log(novosNumeros);

// 5. Somar Valores de um Array
// ● Dado o array let valores = [10, 20, 30, 40], some todos os valores e imprima
// o resultado.
// let valores = [10, 20, 30, 40];
// let soma = valores.reduce((acc, valor) => acc + valor ,0);
// console.log(soma);

// 6. Transformar Strings para Maiúsculas
// ● Dada a string let texto = "javascript é legal", converta todas as letras para
// maiúsculas e imprima o resultado.
// let texto = "javascript é legal";
// let novoTexto = texto.toUpperCase();
// console.log(novoTexto);

// 7. Verificar se um Nome Contém Letras
// ● Dada a string let nome = "Carlos", verifique se o nome contém a letra "a". Imprima
// true ou false conforme o resultado.
// let nome = "Carlos";
// console.log(nome.includes("a")); // Output: true ou false


// 8. Remover Itens de um Array
// ● Dado o array let cores = ["Azul", "Verde", "Amarelo", "Roxo"], remova
// "Verde" e "Amarelo" usando splice() e imprima o array modificado.
// let cores = ["Azul", "Verde", "Amarelo", "Roxo"];
// cores.splice(1,2);
// console.log(cores);

// 9. Adicionar e Remover Elementos ao Início e Final do Array
// ● Dado o array let numeros = [10, 20, 30], adicione "5" ao início e "40" ao final, e
// depois remova o primeiro e último elemento. Imprima o array final.
// let numeros = [10, 20, 30];
// numeros.unshift(5);
// numeros.push(40);
// console.log(numeros);


// 10. Contar Caracteres em uma String
// ● Dada a string let frase = "Programação é divertida", conte quantos
// caracteres a string possui (incluindo espaços) e imprima o total.
// let frase = "Programação é divertida";
// console.log(frase.length);

// 11. Dividir String em Palavras
// ● Dada a string let frase = "Aprender JavaScript é muito bom", divida a
// frase em palavras e imprima o array resultante.
// let frase = "Aprender JavaScript é muito bom";
// let palavras  = frase.split("");
// console.log(palavras);

// 12. Reverter a Ordem das Palavras em uma String
// ● Dada a string let texto = "Eu gosto de JavaScript", inverta a ordem das
// palavras e imprima a string resultante.
// let texto = "Eu gosto de JavaScript";
// let textoInvertido = texto.split("").reverse().join("");
// console.log(textoInvertido);

// 13. Usar map() para Dobrar Valores de um Array
// ● Dado o array let numeros = [1, 2, 3, 4, 5], use map() para criar um novo
// array com os valores dobrados e imprima o resultado.
// let numeros = [1, 2, 3, 4, 5];
// let numerosDobrados = numeros.map(numero => numero * 2);
// console.log(numerosDobrados);

// 14. Filtrar Números Maiores que 50 em um Array Aleatório
// ● Gere um array com 10 números aleatórios entre 1 e 100. Filtre os números maiores que
// 50 e imprima o array filtrado.
// let numeros = [];
// for (let i = 0; i < 10; i++){
//    numeros.push(Math.floor(Math.random()* 101));
// }
// let numeros50 = numeros.filter(numero => numero > 50) ;
// console.log(numeros);
// console.log(numeros50);

// 15. Somar Números Aleatórios e Verificar Tipo
// ● Gere um array com 5 números aleatórios entre 1 e 100, some todos os números e
// verifique se o resultado é um número usando isNaN(). Imprima o valor somado e o
// resultado da verificação.
// let numeros = [];
// for (let i = 0; i < 5; i++){
//    numeros.push(Math.floor(Math.random()* 101));
// }
// console.log(numeros);
// let soma = numeros.reduce((acc, valor)  => acc + valor, 0);
// console.log(!isNaN(soma));
// console.log(soma);

// 16. Substituir Palavras em uma String
// ● Dada a string let frase = "O clima está ensolarado", substitua a palavra
// "ensolarado" por "chuvoso" e imprima a string resultante.
// let frase = "O clima está ensolarado";
// let novaFrase = frase.replace("ensolarado", "chuvoso");
// console.log(novaFrase);


// 17. Ordenar um Array de Números
// ● Dado o array let numeros = [40, 10, 30, 20, 50], ordene os números de
// forma crescente e imprima o array ordenado.
// let numeros = [40, 10, 30, 20, 50];
// numeros.sort((a, b) => a - b);
// console.log(numeros);

// 18. Calcular Média de Notas
// ● Dado o array let notas = [7.5, 8.0, 6.5, 9.0, 7.0], calcule a média das
// notas e verifique se o aluno foi aprovado (média >= 7). Imprima a média e o resultado
// ("Aprovado" ou "Reprovado").
// let notas = [7.5, 8.0, 6.5, 9.0, 7.0];
// let media = notas.reduce((acc, valor) => acc + valor ,0)/notas.length;
// let resultado = media >= 7 ? 'aprovado' : 'reprovado';
// console.log(`A média do aluno é: ${media}`);
// console.log(`O aluno foi ${resultado}`);

// 19. Arredondar um Número
// ● Dada a string let numeroStr = "45.67", converta a string em número inteiro,
// arredonde para baixo e depois para cima usando Math.floor() e Math.ceil().
// Imprima os resultados.
// let numeroStr = "45.67";
// let numInteiro = parseInt(numeroStr);
// let numeArreBaixo = Math.floor(Number(numeroStr));
// let numeArreCima  = Math.ceil(Number(numeroStr));
// console.log(`A string ${numeroStr} convertida em um numero inteiro é ${numInteiro}.`);
// console.log(`A string ${numeroStr} convertida em número e arredondda para Baixo é ${numeArreBaixo}.`);
// console.log(`A string ${numeroStr} convertida em número e arredondada para cima é ${numeArreCima}.`);
    
// 20. Contar Caracteres Específicos em uma Stringconsole.log(`A string ${numeroStr} convertida em um numero inteiro é ${numInteiro}.`)console.log(`A string ${numeroStr} convertida em um numero inteiro é ${numInteiro}.`)
// ● Dada a string let palavra = "programador", conte quantas vezes a letra "a"
// aparece na palavra. Imprima o resultado.
// 21. Verificar Se Duas Strings São Iguais Ignorando Maiúsculas
// ● Dadas as strings let str1 = "casa" e let str2 = "CASA", verifique se elas são
// iguais ignorando maiúsculas e minúsculas. Imprima true ou false.
// 22. Verificar Se Todos os Elementos de um Array São Maiores que 10
// ● Dado o array let numeros = [15, 20, 25, 30], verifique se todos os elementos
// são maiores que 10 usando every(). Imprima true ou false.
// 23. Verificar Se Algum Elemento de um Array É Menor que 5
// ● Dado o array let numeros = [5, 8, 12, 3], verifique se algum elemento é menor
// que 5 usando some(). Imprima true ou false.
// 24. Remover Espaços Extras em uma String
// ● Dada a string let frase = " JavaScript é divertido! ", remova os espaços
// extras no início e no final da string e imprima o resultado.
// 25. Comparar Números com Condicionais
// ● Dada a variável let numero = 7, verifique se o número é maior que 10. Se for,
// imprima "Maior que 10", caso contrário, imprima "Menor ou igual a 10".
// 26. Transformar um Array de Strings em uma String
// ● Dado o array let palavras = ["Eu", "amo", "JavaScript"], transforme o
// array em uma única string separada por espaços e imprima o resultado.
// 27. Converter Uma String em um Array de Caracteres
// ● Dada a string let palavra = "JavaScript", converta a string em um array de
// caracteres e imprima o array resultante.
// 28. Verificar Se Um Número Está Dentro de um Intervalo
// ● Dada a variável let numero = 25, verifique se o número está entre 10 e 50. Imprima
// "Dentro do intervalo" ou "Fora do intervalo".
// 29. Multiplicar Todos os Elementos de um Array
// ● Dado o array let numeros = [2, 4, 6], multiplique todos os elementos por 3
// usando map() e imprima o array resultante.
// 30. Comparar Duas Strings com case-insensitive
// ● Dadas as variáveis let str1 = "João" e let str2 = "joão", verifique se as
// strings são iguais ignorando maiúsculas e minúsculas. Imprima true ou false.
// 31. Adicionar um Novo Item ao Início de um Array
// ● Dado o array let nomes = ["Pedro", "Maria", "José"], adicione o nome
// "Ana" ao início do array e imprima o array resultante.
// 32. Remover o Último Elemento de um Array
// ● Dado o array let cidades = ["Natal", "Recife", "Fortaleza"], remova o
// último elemento e imprima o array resultante.
// 33. Verificar Se Um Número é Positivo ou Negativo
// ● Dada a variável let numero = -8, verifique se o número é positivo ou negativo.
// Imprima "Positivo" ou "Negativo".
// 34. Converter uma String para Maiúsculas e Minúsculas
// ● Dada a string let nome = "JavaScript", imprima a string toda em maiúsculas e
// depois em minúsculas.
// 35. Multiplicar Números em um Array
// ● Dado o array let numeros = [2, 4, 6, 8], multiplique todos os elementos por 2
// e imprima o array resultante.
// 36. Remover Todos os Espaços de uma String
// ● Dada a string let texto = "JavaScript é divertido", remova todos os
// espaços e imprima a string resultante.
// 37. Calcular a Raiz Quadrada de um Número
// ● Dada a variável let numero = 16, calcule a raiz quadrada usando Math.sqrt() e
// imprima o resultado.
// 38. Verificar Se Um Array Está Vazio
// ● Dado o array let itens = [], verifique se o array está vazio. Imprima true ou
// false.
// 39. Calcular o Fatorial de Um Número
// ● Dada a variável let numero = 5, calcule o fatorial de 5 e imprima o resultado.
// 40. Multiplicar e Somar Valores de Um Array
// ● Dado o array let valores = [1, 2, 3, 4, 5], multiplique todos os valores por 2
// e, em seguida, some todos os valores usando reduce(). Imprima a soma total.
// 41. Dividir uma String em Caracteres
// ● Dada a string let texto = "JavaScript", divida-a em caracteres e imprima o
// array resultante.
// 42. Concatenar Duas Strings
// ● Dadas as strings let parte1 = "Olá, " e let parte2 = "mundo!",
// concatene-as e imprima a string resultante.
// 43. Converter uma String em um Número
// ● Dada a string let numeroStr = "25", converta-a em número inteiro usando
// parseInt() e imprima o resultado.
// 44. Remover um Item Específico de um Array
// ● Dado o array let cores = ["Vermelho", "Verde", "Azul"], remova a cor
// "Verde" e imprima o array resultante.
// 45. Obter o Comprimento de uma String
// ● Dada a string let palavra = "JavaScript", imprima o número de caracteres na
// string.
// 46. Multiplicar Dois Números e Verificar o Resultado
// ● Dadas as variáveis let a = 5 e let b = 7, multiplique os dois números e verifique
// se o resultado é maior que 30. Imprima "Maior que 30" ou "Menor ou igual a 30".
// 47. Dividir e Reverter uma String
// ● Dada a string let palavra = "JavaScript", divida-a em caracteres, inverta a
// ordem e imprima o resultado.
// 48. Remover o Primeiro Elemento de um Array
// ● Dado o array let cidades = ["Natal", "Recife", "Fortaleza"], remova o
// primeiro elemento e imprima o array resultante.
// 49. Verificar Se Um Número é Ímpar
// ● Dada a variável let numero = 9, verifique se o número é ímpar. Imprima "Ímpar" ou
// "Par" conforme o caso.
// 50. Multiplicar Todos os Elementos de um Array por 10
// ● Dado o array let numeros = [1, 2, 3, 4, 5], multiplique todos os elementos
// por 10 usando map() e imprima o array resultante.