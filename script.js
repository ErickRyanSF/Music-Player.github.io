let musicas = [
    {titulo:'Talking to the Moon', artista:'Bruno Mars', src:'sons/Bruno_Mars_-_Talking_To_The_Moon_CeeNaija.com_.mp3', img:'Imagens/ttm.jpg'},
    {titulo:'Flor e o Beija-Flor', artista:'Henrique e Juliano', src:'sons/Henrique e Juliano - Flor E O Beija-Flor part. Marília Mendonça - DVD Novas Histórias(MP3_160K).mp3', img:'Imagens/beija-flor.jpg'},
    {titulo:'When I Was Your Man', artista:'Bruno Mars', src:'sons/Bruno_Mars_-_When_I_Was_Your_Man_Naijamusics.com.mp3', img:'Imagens/Bruno_Mars_-_When_I_Was_Your_Man.jpg'},
    {titulo:'Evidências', artista:'Chitãozinho e Xororó', src:'sons/wagnerluther-chitaozinho-e-xororo-evidencias-por-wagner-luther-a279265a.mp3', img:'Imagens/evidencias.jpg'},
    {titulo:'What Makes You Beautiful', artista:'One Direction', src:'sons/What_Makes_You_Beautiful.mp3', img:'Imagens/what make you b.jpg'},
    {titulo:'Bohemian Rhapsody', artista:'Queen', src:'sons/Queen - Bohemian Rhapsody.mp3', img:'Imagens/queen-ii.jpg'},
    {titulo:'Sunflower', artista:'Post Malone', src:'sons/Post-Malone-Sunflower-Spider-Man-Into-the-Spider-Verse-Ft-Swae-Lee-(HiphopMood.com).mp3', img:'Imagens/sunflower.jpg'},
    {titulo:'Plutão', artista:'VMZ', src:'sons/VMZ - Plutão.mp3', img:'Imagens/plutao.jpg'},
    {titulo:'Calling', artista:'Metro Boomin', src:'sons/Metro_Boomin_Nav_A_Boogie_Wit_da_Hoodie_Swae_Lee_-_Calling.mp3', img:'Imagens/calling.jpg'},
    {titulo:'Pray For Me', artista:'The Weeknd', src:'sons/14-The-Weeknd-Kendrick-Lamar-Pray-For-Me-2.mp3', img:'Imagens/pray for me.jpg'},
];

let musica = document.querySelector('audio');

let duracaoMusica = document.querySelector('.fim');
let indexMusica = 0;
let imagem = document.querySelector('.img');
let nomeMusica = document.querySelector('.desc h1');
let nomeArtista = document.querySelector('.desc p');

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

//Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
});


//Funções
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

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime/musica.duration) * 100) + "%";
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));

}

function segundosParaMinutos (segundos){
    let campoMinuto = Math.floor(segundos/60);
    let campoSegundo = segundos%60;
    if(campoSegundo<10){
        campoSegundo = "0" + campoSegundo;
    }
    return campoMinuto + ":" + campoSegundo;
}