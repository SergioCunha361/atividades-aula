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
// numeros.sort((a, b) => a - b); //ordena ordem crescente 
// numeros.reverse(); // reverte em ordem descrecente
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


// 4. Usando map() e reduce() para Dobrar e Somar Valores
// ● Dado o array let numeros = [1, 2, 3, 4, 5], faça o seguinte:
// ○ Use map() para criar um novo array que contenha o dobro de cada valor.
// ○ Reduza o novo array para obter a soma de todos os seus elementos.
// ● Imprima o array dobrado e o resultado da soma.



// 5. Contando Caracteres e Dividindo Frases
// ● Dada a string let frase = "A programação é divertida e desafiadora.",
// execute as seguintes tarefas:
// ○ Conte quantos caracteres essa frase possui (incluindo espaços).
// ○ Divida a frase em palavras separadas.
// ○ Converta todas as palavras para letras maiúsculas.
// ○ Junte essas palavras em uma nova string, separadas por hífens (-).
// ● Imprima a frase resultante.

let frase = "A programação é divertida e desafiadora.";
let numeroDeCaracteres = frase.length;
console.log("A frase possui", numeroDeCaracteres, "caracteres.");
let palavras = frase.split(" "); // Dividindo por espaços em branco
console.log(palavras);
let palavrasMaiusculas = frase.toUpperCase();
console.log(palavrasMaiusculas)
let palavrasJuntas = palavras.join('-');
console.log(palavrasJuntas)


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

let precos = [15.5, 10.0, 20.75, 30.0, 8.0];
let novosPrecos = precos.map(preco => preco * 1.10);
console.log(novosPrecos);



// 9. Analisando Números Aleatórios
// ● Gere 10 números aleatórios entre 0 e 100 usando Math.random() e Math.floor().
// Salve esses números em um array.
// ○ Use filter() para selecionar apenas os números maiores que 50.
// ○ Ordene o array filtrado de forma decrescente.
// ● Imprima o array original, o array filtrado e o array ordenado.
// 10. Condicional para Calcular Média
// ● Dado o array let notas = [7.5, 8.0, 6.5, 9.0, 7.0]:
// ○ Calcule a média das notas usando reduce().
// ○ Verifique se a média é maior ou igual a 7 para decidir se o aluno foi aprovado ou
// reprovado.
// ● Imprima a média e o resultado ("Aprovado" ou "Reprovado").
// 11. Manipulação de String com Interpolação e Substituição
// ● Crie variáveis let cidade = "São Paulo" e let clima = "ensolarado":
// ○ Use Template Literals para criar uma frase como: "Hoje em São Paulo está
// ensolarado."
// ○ Substitua a palavra "ensolarado" por "chuvoso".
// ● Imprima a frase original e a frase modificada.
// 12. Reversão e Capitalização de Palavras
// ● Dada a string let texto = "javascript é incrível":
// ○ Divida o texto em palavras separadas.
// ○ Inverta a ordem das palavras.
// ○ Converta a primeira letra de cada palavra para maiúscula.
// ● Imprima o texto resultante.
// 13. Comparando Valores com switch e if
// ● Crie uma variável let mes = 6, representando um mês do ano:
// ○ Use switch para verificar qual é o mês (por exemplo, 6 = Junho) e imprimir o
// nome do mês.
// ○ Use if para verificar se o mês é parte do primeiro semestre (1-6) ou do segundo
// semestre (7-12).
// ● Mostre o nome do mês e a informação do semestre.
// 14. Manipulando Números com parseInt() e Math
// ● Considere a string let numeroStr = "45.67":
// ○ Converta a string para um número inteiro usando parseInt().
// ○ Arredonde o número para baixo usando Math.floor().
// ○ Arredonde o número para cima usando Math.ceil().
// ● Imprima todos os resultados.
// 15. Encontrando Caracteres em uma String
// ● Dada a string let palavra = "programador":
// ○ Use charAt() para encontrar o terceiro caractere.
// ○ Use indexOf() para encontrar a posição do caractere "a".
// ○ Extraia a primeira metade da palavra usando slice().
// ● Imprima todos os resultados.
// 16. Uso de for para Contagem de Caracteres
// ● Dada a string let frase = "Estudar programação é ótimo!":
// ○ Conte quantas vezes a letra "a" aparece na frase usando um loop for.
// ○ Imprima o resultado.
// 17. Manipulação de Arrays com join() e reverse()
// ● Considere o array let letras = ["a", "b", "c", "d", "e"]:
// ○ Inverta a ordem das letras.
// ○ Junte as letras em uma única string, separadas por vírgulas.
// ● Imprima o array invertido e a string resultante.
// 18. Criação e Verificação de Arrays
// ● Crie um array de 5 números inteiros, como let numeros = [5, 12, 8, 130,
// 44].
// ○ Filtre os números que sejam maiores que 10.
// ○ Some todos os números do array original.
// ○ Verifique se o array possui exatamente 5 elementos.
// ● Imprima o array filtrado, a soma e a verificação de tamanho.
// 19. Operações com Strings e Condicionais
// ● Considere a string let nome = "Alice":
// ○ Converta o nome para letras minúsculas.
// ○ Verifique se o nome convertido é igual a "alice".
// ○ Caso seja igual, exiba uma mensagem de "Nome reconhecido".
// ● Imprima o resultado.
// 20. Manipulando Números e Arrays com Math e push()
// ● Crie um array vazio let numeros = []:
// ○ Gere 5 números aleatórios entre 1 e 20 e adicione-os ao array usando push().
// ○ Arredonde cada número para o inteiro mais próximo usando Math.round().
// ● Imprima o array de números arredondados.
// 21. Manipulação de String com split() e length
// ● Dada a frase let frase = "Aprender JavaScript é divertido e
// recompensador":
// ○ Divida a frase em palavras.
// ○ Conte o número total de palavras.
// ○ Verifique se a frase possui mais de 5 palavras.
// ● Imprima a lista de palavras, o número de palavras, e a verificação de quantidade.
// 22. Validação de Input com prompt() e confirm()
// ● Use prompt() para perguntar ao usuário seu nome.
// ○ Use confirm() para verificar se o nome inserido está correto.
// ○ Caso esteja correto, exiba uma saudação com alert().
// ● Mostre a sequência completa de ações.
// 23. Contando Caracteres com length e for
// ● Considere o texto let texto = "JavaScript":
// ○ Conte quantos caracteres "a" existem no texto usando um loop for.
// ○ Imprima a quantidade de caracteres "a".
// 24. Manipulação de Arrays com Adição e Remoção
// ● Dado o array let cores = ["Vermelho", "Verde", "Azul"]:
// ○ Adicione "Amarelo" ao final.
// ○ Remova "Verde".
// ○ Adicione "Roxo" ao início.
// ● Imprima o array final.
// 25. Comparando Strings com toLowerCase() e toUpperCase()
// ● Considere duas strings let str1 = "casa" e let str2 = "CASA":
// ○ Converta ambas para minúsculas e verifique se são iguais.
// ○ Converta ambas para maiúsculas e verifique se são iguais.
// ● Imprima os resultados das comparações.
// 26. Trabalhando com Math.random() e sort()
// ● Crie um array com 5 números aleatórios entre 1 e 50.
// ○ Ordene esses números de forma crescente.
// ○ Ordene os mesmos números de forma decrescente.
// ● Imprima o array em ambas as ordens.
// 27. Manipulando Objetos com Arrays
// ● Crie um array de objetos representando carros, com propriedades como marca,
// modelo, e ano.
// ○ Filtre os carros que sejam de uma marca específica.
// ○ Extraia os modelos desses carros em um novo array.
// ● Imprima o array filtrado e o array de modelos.
// 28. Trabalhando com splice() para Modificar Arrays
// ● Dado o array let animais = ["Cachorro", "Gato", "Leão", "Tigre"]:
// ○ Remova "Leão" e substitua por "Panda".
// ○ Adicione "Coelho" após "Gato".
// ● Imprima o array final.
// 29. Ordenando Arrays com Números Mistos
// ● Considere o array let numeros = [10, 5, 15, 7, 20]:
// ○ Ordene o array de forma crescente.
// ○ Adicione um novo número ao início do array.
// ○ Verifique se o array possui exatamente 6 elementos.
// ● Imprima o array ordenado e a verificação de tamanho.
// 30. Operações Mistas com concat(), reverse(), e join()
// ● Considere duas variáveis let part1 = "Aprender" e let part2 =
// "Programação":
// ○ Concatene as duas strings.
// ○ Inverta a ordem das letras da string resultante.
// ○ Junte as letras em uma nova string separadas por um ponto (.).
// ● Imprima o resultado final.