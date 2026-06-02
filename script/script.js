const filmes = [
    {
        titulo: "Spider-Noir",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/rfrzXSaiuvRMLo8PRQds0TfFrZC.jpg",
        descricao: "Ben Reilly, um detetive particular, é forçado a encarar seu passado como O Spider ao se envolver em uma perigosa conspiração."
    },
    {
        titulo: "Mestres do Universo",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/dobbDBQC0G9m65pcVaDM2D2aMr8.jpg",
        descricao: "Adam caiu na Terra quando era criança e perdeu a espada mágica que o ligava a Eternia. Quase 20 anos depois, ele a recupera e retorna ao seu planeta natal para protegê-lo do malvado Esqueleto, mas primeiro precisa desvendar seu passado."
    },
    {
        titulo: "Star Wars: O Mandaloriano e Grogu ",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/dNwaS0tnwgQRaQFPY5MbGxdmYXr.jpg",
        descricao: "Após a queda do Império, Din Djarin e Grogu ajudam a Nova República a enfrentar as ameaças que ainda restam na galáxia."
    },
    {
        titulo: "Devoradores de Estrelas",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/2i8uru7rlbHKaoIbC2V4FZLT7uW.jpg",
        descricao: "Professor de ciências do ensino fundamental acorda em espaçonave a anos-luz da Terra sem memória de como foi parar ali. Aos poucos, lembra que foi recrutado para uma missão na qual precisa investigar o motivo pelo qual o Sol está morrendo."
    },
    {
        titulo: "Matrix ",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/lDqMDI3xpbB9UQRyeXfei0MXhqb.jpg",
        descricao: "homas Anderson descobre que a realidade é uma simulação criada pela Matrix e se une à resistência para lutar contra o sistema que controla a humanidade."
    },
    {
        titulo: "Mortal Kombat",
       imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/4nW5X9iBrMlHMDcTsEOQWXKu3TZ.jpg",
        descricao: "O lutador de MMA Cole Young deve treinar para liberar seu verdadeiro poder para unir-se aos maiores campeões mundiais contra inimigos da Exoterra em uma batalha decisiva pelo universo."
    },
]
const ListaFilmes = document.getElementById("ListaFilmes");
function mostrarFilmes(lista){
    ListaFilmes.innerHTML = ""
    lista.forEach(filme => {
        ListaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top">
                        <div class="card-body">
                         <h3>${filme.titulo}</h3>
                         <p>${filme.descricao}</p>
                         <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
                        </div>
                </div>
            </div> 
        `
    });
}

mostrarFilmes(filmes)

function verDetalhes(titulo) {
        Swal.fire({
            title: titulo,
            text:"Mais informações do filme",
            icon: "info"
        })
}