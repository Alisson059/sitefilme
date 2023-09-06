/* Objetivo: fazer o carregamento da url com filmes
Será usado o comando fetch() para localizar
e carregar os filmes e exibir em uma página html
*/

function carregarFilmes() {
    //LOCALIZE O ARQUIVO 
    fetch ("js/apiFilme.json")

        /*fetch("https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR-US&page=1")*/

        //RECEBA OS DADOS LOCALIZADOS EM JSON    //GUARDE OS DADOS NA VARÍAVEL DADOS
        .then((response) => response.json())
        .then((dados) => {

            //EXIBE NA TELA OS RESULTADOS
            console.log(dados.results);
            var saida = "<div id=filme>";
            dados.results.map((item, i) => {
                saida += `
                <div>
                <a href="${item.link}">
                <img src=https://image.tmdb.org/t/p/w500${item.poster_path}>
                <p id=voto>${item.vote_average}</p>
                <h2>${item.title}</h2>
                <p id=data>${item.release_date}</p>
                </a>
                </div>
                
            `;
            });
            saida += "</div>";
            document.body.innerHTML += saida;
        })
        .catch((erro) => console.log(`Erro ao tentar executar a API -> ${erro}`));
}