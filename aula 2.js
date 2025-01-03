/*Dia 2: Controle de Fluxo e Funções

1. Estruturas de Controle de Fluxo
Condicionais (if, else if, else):

IF(SE) / ELSE(Se não)
   - Ajuda a ensinar nosso código a tomar decisões. condicional básica
if(condição, se for verdadeira){
faz isso
} else {
 se o if for falso, faça isso!
}

Condicionais (if, else if, else):
 Exemplo:
        let age = 18;
        if (age >= 18) {
            console.log("Você é maior de idade.");
        } else {
            console.log("Você é menor de idade.");
        }

Operador Ternário:
Exemplo:
        let isLoggedIn = true;
            console.log(isLoggedIn ? "Bem-vindo!" : "Por favor, faça login.");

Switch Case:
Exemplo:
       let day = "segunda";
switch (day) {
  case "segunda":
    console.log("Início da semana!");
    break;
  case "sexta":
    console.log("Quase fim de semana!");
    break;
  default:
    console.log("Dia comum.");
}


2. Loops
For:
Exemplo:
for (let i = 0; i < 5; i++) {
  console.log(`Iteração ${i}`);
}

While:
Exemplo:
let count = 0;
while (count < 5) {
  console.log(`Contagem: ${count}`);
  count++;
}

Do...While:
Exemplo:
let num = 0;
do {
  console.log(`Número: ${num}`);
  num++;
} while (num < 5);


3. Funções
Funções Declarativas:
Exemplo:
function greet(name) {
  return `Olá, ${name}!`;
}
console.log(greet("Ana"));


Funções Anônimas e Arrow Functions:
Exemplo:
const add = (a, b) => a + b;
console.log(add(3, 5)); // Resultado: 8




*/