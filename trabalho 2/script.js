let nomes = [];
let sexos = [];
let salarios = [];

for (let i = 0; i < 5; i++) {
    nomes[i] = prompt("Digite o nome:");
    sexos[i] = prompt("Digite o sexo:");
    salarios[i] = Number(prompt("Digite o salário:"));
}

let resultado = "";

for (let i = 0; i < 5; i++) {
    if ((sexos[i] == "F" || sexos[i] == "f") && salarios[i] > 5000) {
        resultado = resultado +
        "Nome: " + nomes[i] +
        "\nSalário: R$" + salarios[i] +
        "\n\n";
    }
}

alert("Funcionárias que ganham mais de R$5000:\n\n" + resultado);