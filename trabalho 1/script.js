let idades = [];
let maior;
let posicao;

for (let i = 0; i < 4; i++) {
    idades[i] = Number(prompt("Digite uma idade:"));

    if (i == 0) {
        maior = idades[i];
        posicao = i;
    } else {
        if (idades[i] > maior) {
            maior = idades[i];
            posicao = i;
        }
    }
}

alert(`Maior idade: " + ${maior}`);
alert("Posição: " + (posicao + 1));