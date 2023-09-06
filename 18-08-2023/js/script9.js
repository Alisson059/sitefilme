/* Funções em javaScript 

Existe 2 tipos de funções: 
- reservados pela linguagem, é necessario apens chama a função para que seja executada
Alert ()
Console.log ()
Prompt()

- Personalizados 
criadas pelo usuários, é necessário que sejam constridas 
utilizando a estrutura:
Function nomeDaFunção (){


}
e em seguida chamadas para serem executadas.

Em cada função há a presença dos paranteses () que podem esta vazio ou não. 
Os parenteses recebem  um argumento. Quando este argumento é uma variável, dizemos que ele recebe um parámetro

Função personalizada sem argumento, já o comando console.log ("Olá mundo!") possui um argumento do tipo string.

*/


function saudacao() {
    console.log("Olá mundo!");

}
saudacao();

/*Função personalizada com PARÂMETRO, pois se trata de uma variável previamnete declarada e que será utilizada no bloco do código*/
var nome;
function despedida(nome) {
    console.log("Tchau, " + nome);

}

despedida("joão"); 

/* Função personalizada com PARÂMETRO, pois há duas variável nos parâmteses que foram previamente declaradas e que forem utilizadas no bloco
de códigos, retornando um cálculo (soma)*/


var a, b;
function soma(a, b ) {
    return a + b;
}

var resultado = soma(5, 3);
console.log(resultado);





