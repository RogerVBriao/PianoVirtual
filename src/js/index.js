
const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheckbox = document.querySelector('.keys-check input');

let mapedKeys = [];

let audio = new Audio();
const playTune = (key) => {
    audio.src= `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(() => {clickedKey.classList.remove('active')}, 150);
}

document.addEventListener('keydown', (e) => {
    if(mapedKeys.includes(e.key)){
        playTune(e.key)
    }
});

//Função para controlar o volume
volumeSlider.addEventListener('input',(e) => {
    audio.volume = e.target.value;
});
//Função para controlar as teclas
keysCheckbox.addEventListener('change', (e) => {
    pianoKeys.forEach(key => {
        key.classList.toggle('hide', e.target.checked);
    })
});

function main(){
    pianoKeys.forEach(key => {
        key.addEventListener('click', () => playTune(key.dataset.key));
        mapedKeys.push(key.dataset.key);
    })
}

main();
