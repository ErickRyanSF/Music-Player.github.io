let musicas = [
    {titulo:'Talking to the Moon', artista:'Bruno Mars', src:'sons/Bruno_Mars_-_Talking_To_The_Moon_CeeNaija.com_.mp3', img:'Imagens/ttm.jpg'},
    {titulo:'Flor e o Beija-Flor', artista:'Henrique e Juliano', src:'sons/Henrique e Juliano - Flor E O Beija-Flor part. Marília Mendonça - DVD Novas Histórias(MP3_160K).mp3', img:'Imagens/beija-flor.jpg'},
    {titulo:'When I Was Your Man', artista:'Bruno Mars', src:'sons/Bruno_Mars_-_When_I_Was_Your_Man_Naijamusics.com.mp3', img:'Imagens/Bruno_Mars_-_When_I_Was_Your_Man.jpg'}
];

let musica = document.querySelector('audio');  
let indexMusica = 0;
let imagem = document.querySelector('.img');
let nomeMusica = document.querySelector('.desc h1');
let nomeArtista = document.querySelector('.desc p');

//Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
});

//Funcoes
function renderizarMusica(index){
      musica.setAttribute('src', musicas[index].src);
      musica.addEventListener('loadeddata', () => {
          nomeMusica.textContent = musicas[index].titulo;
          nomeArtista.textContent = musicas[index].artista;
          imagem.src = musicas[index].img;
      });
}

function tocarMusica(){
    musica.play() 
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

