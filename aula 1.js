/*

  VARIÁVEIS
   - let / const/ var( var foi descontinuado)
   const -> Toda vez que eu crio uma variável com const, eu não posso alterar depos de atribuído
   let -> Posso alterar o valor quantas vezes eu quiser

IF(SE) / ELSE(Se não)
   - Ajuda a ensinar nosso código a tomar decisões. condicional básica
if(condição, se for verdadeira){
faz isso
} else {
 se o if for falso, faça isso!
}
   

FUNÇÕES 
   - São um trecho de código, que só é excutado, quando é chamado

LOOPS
   - For: é como uma roda gigante, gira várias vezes e cada volta é um ciclo.
   - While: é uma repetição baseada em um condição, ou seja, enquanto for verdadeira continua rodando, se mudar para falsa, ela para.
   - ForEach: é mais limpo e específico para arrays. Ele já cuida da iteração para você e passa cada elemento para uma função callback.

EXTRAS
   - for...in: O que faz? Itera sobre as propriedades de um objeto ou os índices de um array.
               Quando usar? Use para objetos, não é ideal para arrays porque trabalha com índices.
EXEMPLO:
let pessoa = { nome: "Ana", idade: 33, profissão: "Desenvolvedora" };

for (let propriedade in pessoa) {
    console.log(`Propriedade: ${propriedade}, Valor: ${pessoa[propriedade]}`);
}
// Saída:
// Propriedade: nome, Valor: Ana
// Propriedade: idade, Valor: 33
// Propriedade: profissão, Valor: Desenvolvedora



   - for...of: O que faz? Itera diretamente sobre os valores de arrays ou outros objetos iteráveis.
               Quando usar? Use para arrays ou quando quer acessar os valores diretamente, sem se preocupar com os índices.

EXEMPLO:
Exemplo com array:

javascript
Copy code
let frutas = ["Maçã", "Banana", "Laranja"];

for (let fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
}
// Saída:
// Fruta: Maçã
// Fruta: Banana
// Fruta: Laranja

Exemplo com string:

javascript
Copy code
let palavra = "Ana";

for (let letra of palavra) {
    console.log(`Letra: ${letra}`);
}
// Saída:
// Letra: A
// Letra: n
// Letra: a

 Diferença Principal
for...in: Trabalha com índices (ou chaves) — ideal para objetos.
for...of: Trabalha com valores diretamente — ideal para arrays ou iteráveis.

Resumo Rápido com Analogias
Imagine que você tem uma lista de frutas:
for...in é como pedir para alguém contar as posições das frutas: "Qual o número dessa fruta?"
for...of é como pedir para alguém falar o nome das frutas: "Qual fruta está aqui?"

*/

