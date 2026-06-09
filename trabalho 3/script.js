let nomes = [];
let alturas = [];

let resposta = "S";
let i = 0;

let maior;
let menor;

let pessoaMaior = "";
let pessoaMenor = "";

while (resposta == "S" || resposta == "s") {

    nomes[i] = prompt("Nome:");
    alturas[i] = Number(prompt("Altura:"));

    if (i == 0) {
        maior = alturas[i];
        menor = alturas[i];

        pessoaMaior = nomes[i];
        pessoaMenor = nomes[i];
    }

    if (alturas[i] > maior) {
        maior = alturas[i];
        pessoaMaior = nomes[i];
    }

    if (alturas[i] < menor) {
        menor = alturas[i];
        pessoaMenor = nomes[i];
    }

    i++;

    resposta = prompt("Deseja cadastrar outra pessoa? (S/N)");
}

alert(
    "Maior altura: " + maior +
    "\nNome: " + pessoaMaior +
    "\n\nMenor altura: " + menor +
    "\nNome: " + pessoaMenor
);