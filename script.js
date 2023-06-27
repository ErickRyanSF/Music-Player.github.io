let musicas = [
    {titulo:'Talking to the Moon', artista:'Bruno Mars', src:'sons/Bruno_Mars_-_Talking_To_The_Moon_CeeNaija.com_.mp3', img:'Imagens/ttm.jpg'},
    {titulo:'Flor e o Beija-Flor', artista:'Henrique e Juliano', src:'sons/Beija-flor.mp3', img:'Imagens/beija-flor.jpg'},
    {titulo:'When I Was Your Man', artista:'Bruno Mars', src:'sons/Bruno_Mars_-_When_I_Was_Your_Man_Naijamusics.com.mp3', img:'Imagens/Bruno_Mars_-_When_I_Was_Your_Man.jpg'},
    {titulo:'Evidências', artista:'Chitãozinho e Xororó', src:'sons/Evidencias.mp3', img:'Imagens/evidencias.jpg'},
    {titulo:'What Makes You Beautiful', artista:'One Direction', src:'sons/What_Makes_You_Beautiful.mp3', img:'Imagens/what make you b.jpg'},
    {titulo:'Bohemian Rhapsody', artista:'Queen', src:'sons/Queen - Bohemian Rhapsody.mp3', img:'Imagens/queen-ii.jpg'},
    {titulo:'Sunflower', artista:'Post Malone', src:'sons/Post-Malone-Sunflower-Spider-Man-Into-the-Spider-Verse-Ft-Swae-Lee-(HiphopMood.com).mp3', img:'Imagens/sunflower.jpg'},
    {titulo:'Plutão', artista:'VMZ', src:'sons/VMZ - Plutão.mp3', img:'Imagens/plutao.jpg'},
    {titulo:'Calling', artista:'Metro Boomin', src:'sons/Metro_Boomin_Nav_A_Boogie_Wit_da_Hoodie_Swae_Lee_-_Calling.mp3', img:'Imagens/calling.jpg'},
    {titulo:'Pray For Me', artista:'The Weeknd', src:'sons/14-The-Weeknd-Kendrick-Lamar-Pray-For-Me-2.mp3', img:'Imagens/pray for me.jpg'},
    {titulo:'A Thousand Years', artista:'James Arthur', src:'sons/A Thousand Years(MP3_160K).mp3', img:'Imagens/james years.jpg'},
    {titulo:'Rolling in The Deep', artista:'Adele', src:'sons/Rolling in the Deep(MP3_160K).mp3', img:'Imagens/adele.jpg'},
    {titulo:'Adore You', artista:'Harry Styles', src:'sons/Adore You(MP3_160K).mp3', img:'Imagens/adore you.jpg'},
    {titulo:'Amante Profissional', artista:'Herva Doce', src:'sons/Amante Profissional(MP3_160K).mp3', img:'Imagens/amante.jpg'},
    {titulo:'Idontwannabeyouanymore', artista:'Billie Eilish', src:'sons/idontwannabeyouanymore(MP3_160K).mp3', img:'Imagens/billie.jpg'},
    {titulo:'Heaven', artista:'Bryan Adans', src:'sons/Heaven (Classic Version)(MP3_160K).mp3', img:'Imagens/Bryan_Adams_-_Heaven.jpg'},
    {titulo:'Boy with Luv', artista:'BTS', src:'sons/BTS (방탄소년단) - 작은 것들을 위한 시 (Boy With Luv) feat. Halsey (Official Audio)(MP3_160K).mp3', img:'Imagens/BTS-Boy-With-Luv-feat.Halsey-.jpg'},
    {titulo:'Dynamite', artista:'BTS', src:'sons/BTS (방탄소년단) - DYNAMITE (Official Audio)(MP3_160K).mp3', img:'Imagens/BTS-Dynamite.jpg'},
    {titulo:'7 Years', artista:'Lukas Graham', src:'sons/7 Years(MP3_160K).mp3', img:'Imagens/Capa_de_7_Years.jpg'},
    {titulo:'Eduardo e Mônica', artista:'Legião Urbana', src:'sons/Eduardo E Mônica(MP3_160K).mp3', img:'Imagens/edu e monica.jpg'},
    {titulo:'Total Eclipse of The Heart', artista:'Glee Version', src:'sons/Total Eclipse Of The Heart (Glee Cast Version)(MP3_160K).mp3', img:'Imagens/total-eclipse-of-the-heart-04.jpg'},
    {titulo:'Whiskey a Go-Go', artista:'Roupa Nova', src:'sons/gogogo.mp3', img:'Imagens/gogogo.jpg'},
    {titulo:'João e Maria', artista:'Chico Buarque', src:'sons/João E Maria(MP3_160K).mp3', img:'Imagens/joao e maria.jpg'},
    {titulo:'Mulher de Fases', artista:'Raimundos', src:'sons/Mulher de fases(MP3_160K).mp3', img:'Imagens/mulher de fases.jpg'},
    {titulo:'Naked', artista:'James Arthur', src:'sons/Naked(MP3_160K).mp3', img:'Imagens/naked.jpg'},
    {titulo:'Onde Anda Você', artista:'Thiago Nacarato', src:'sons/Onde Anda Você(MP3_160K).mp3', img:'Imagens/onde anda.jpg'},
    {titulo:'Pais e Filhos', artista:'Legião Urbana', src:'sons/Pais E Filhos(MP3_160K).mp3', img:'Imagens/pais.jpg'},
    {titulo:'Birds', artista:'Imagine Dragons', src:'sons/Birds(MP3_160K).mp3', img:'Imagens/passarinho.jpg'},
    {titulo:'Menina Estranha', artista:'Restart', src:'sons/Menina Estranha(MP3_160K).mp3', img:'Imagens/pelanza.jpg'},
    {titulo:'Pense em Mim', artista:'Leandro e Leonardo', src:'sons/Pense em mim(MP3_160K).mp3', img:'Imagens/pense.jpg'},
    {titulo:'Rewrite the Stars', artista:'Anne-Marie & James Arthur', src:'sons/Rewrite The Stars(MP3_160K).mp3', img:'Imagens/rew.jpg'},
    {titulo:'Sign of The Times', artista:'Harry Styles', src:'sons/Sign of the Times(MP3_160K).mp3', img:'Imagens/sign of the times.jpg'},
    {titulo:'Sutilmente', artista:'Skank', src:'sons/Sutilmente(MP3_160K).mp3', img:'Imagens/sutilmente.jpg'},
    {titulo:'Tempo Perdido', artista:'Legião Urbana', src:'sons/Tempo Perdido(MP3_160K).mp3', img:'Imagens/tempo.jpg'},
    {titulo:'How to Save a Life', artista:'The Fray', src:'sons/How to Save a Life(MP3_160K).mp3', img:'Imagens/The_Fray_-_How_to_Save_a_Life.jpg'},
    {titulo:'Dusk Till Down', artista:'Zayn & Sia', src:'sons/Dusk Till Dawn (Radio Edit)(MP3_160K).mp3', img:'Imagens/zayn.jpg'}

];



let musica = document.querySelector('audio');
let indexMusica = 0;

let imagem = document.querySelector('.img');
let nomeMusica = document.querySelector('.desc h1');
let nomeArtista = document.querySelector('.desc p');

let tempoDecorrido = document.querySelector('.tempo .inicio');

let duracaoMusica = document.querySelector('.tempo .fim');

nomeMusica.textContent = musicas[indexMusica].titulo;
nomeArtista.textContent = musicas[indexMusica].artista;
imagem.setAttribute('src', musicas[indexMusica].img);

musica.addEventListener('loadeddata', () => {
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
});



document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
document.querySelector('.botao-pause').style.display = 'none';
musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    
    renderizarMusica(indexMusica);
    tocarMusica();
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    
    renderizarMusica(indexMusica);
    tocarMusica();
});



function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;

    document.body.append(musica);
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
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    if (campoSegundos < 10){
        campoSegundos = '0'+ campoSegundos;
    }
    return `${campoMinutos}:${campoSegundos}`;
}

musica.addEventListener("ended", () => {
    indexMusica++;
    
    if (indexMusica >= musicas.length) {
       
        indexMusica = 0; 
    }
    
    renderizarMusica(indexMusica);
    tocarMusica();
});