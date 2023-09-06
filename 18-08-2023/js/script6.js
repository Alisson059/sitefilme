var altura = 5;

for (var contador = 1; contador <= altura; contador = contador + 1) {
    var linha = " ";
    for (var arterisco = 1; arterisco <= contador; arterisco = arterisco + 1 ) {
        linha += " * ";
    }

    alert(linha);
    console.log (linha);
}
