// Definindo uma matriz 3x3

/*var matriz = [
[1,2,3],
[4,5,6],
[7,8,9]
];

alert (matriz[2][1]);*/

//É AÍ? Qual número vai aparecer na tela??

alert("Acerte o numero o numero 5");



//var numero = prompt("Digite um numero de 0 a 2: ");
//numero2 = prompt("Digite outro numero de 0 a 2: ");

while (true) {
    numero = prompt("Digite um numero de 0 a 2: ");
    numero2 = prompt("Digite outro numero de 0 a 2: ");

    matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];


    if (matriz[numero][numero2] == 5) {
        alert(" Você acerto!" + matriz[numero][numero2]);
        break
    }

    else {
        alert("Você errou");
        alert("Tente de novo!!");
    }
}