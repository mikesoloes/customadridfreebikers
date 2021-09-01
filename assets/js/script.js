const headerContainer = document.querySelector('.header__wrapper');

const menu = document.querySelector('.menu');


window.onscroll = () => {
    if (window.scrollY >= headerContainer.scrollHeight) {
        menu.classList.add('fixed');
    } else {
        menu.classList.remove('fixed');
    }
}



// const play = document.querySelector('.sound__play');
// const stop = document.querySelector('.sound__stop');
// const sound = document.querySelector("#sound").cloneNode();

// play.addEventListener('click', () => {
//     sound.play();
// })

// stop.addEventListener('click', () => {
//     console.log(sound);

// })

// window.AudioContext = window.AudioContext || window.webkitAudioContext;
// if (!window.AudioContext)
//     yourFirstImplementation();
// else {
//     var buffer,
//         ctx = new AudioContext(),
//         gainNode = ctx.createGain();
//     gainNode.connect(ctx.destination);
//     var vol = document.querySelector('input');
//     vol.value = gainNode.gain.value;
//     vol.addEventListener('change', function () {
//         gainNode.gain.value = this.value;
//     }, false);

//     function createBuffer() {
//         ctx.decodeAudioData(this.response, function (b) {
//             buffer = b;
//         }, function (e) { console.warn(e) });
//         var button = document.querySelector('.sound__btn');
//         button.addEventListener('click', function () {
//             playSound(buffer)
//             button.classList.add('play')
//         });
//         button.classList.add('ready');
//     }



//     var file = document.querySelector("#sound"),
//         xhr = new XMLHttpRequest();
//     xhr.onload = createBuffer;
//     xhr.open('GET', file.dataset.src, true);
//     xhr.responseType = 'arraybuffer';
//     xhr.send();

//     function playSound(buf) {
//         var source = ctx.createBufferSource();
//         source.buffer = buf;
//         source.connect(gainNode);
//         source.onended = function () { if (this.stop) this.stop(); if (this.disconnect) this.disconnect(); }
//         source.start(0);
//     }
// }

// function yourFirstImplementation() {
//     alert('webAudioAPI is not supported by your browser');
// }
