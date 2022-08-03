let cont = [{
  name: "Love Me Harder",
  artist: "Ariana Grande",
  img: "folder/love-me-harder.jpg",
  audio: "folder/love-me-harder.mp3",
},
{
  name: "Rockstar",
  artist: "Post Malone",
  img: "folder/rockstar.jpg",
  audio: "folder/rockstar.mp3",
},
{
  name: "Savage Love",
  artist: "Jason Derulo",
  img: "folder/savage-love.jpg",
  audio: "folder/savage-love.mp3",
}];

let nameX = document.getElementById("name");
let artistX = document.getElementById("artist");
let imgX = document.getElementById("img");
let audioX = document.getElementById("audio");

let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let playBtn = document.getElementById("play");

let index = 0;

window.addEventListener('DOMContentLoaded', () => {
  showContent(index);
});

function showContent(song) {
  let item = cont[song];
  nameX.innerHTML = item.name;
  artistX.innerHTML = item.artist;
  imgX.src = item.img;
  audioX.src = item.audio;
}

playBtn.addEventListener('click', () => {
  if (audioX.paused) {
    audioX.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audioX.pause();
    playBtn.innerHTML = '<i class="fas fa-stop"></i>';
  }
});

nextBtn.addEventListener('click', () => {
  index++;
  if (index > cont.length - 1) {
    index = 0;
  }
  showContent(index);
})

prevBtn.addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = cont.length - 1;
  }
  showContent(index);
});


// let play1 = document.getElementById("play");
// play1.addEventListener("click", function(){
//   let audio = document.getElementById("audio-a");
//   if(audio.paused){
//     audio.play();
//   }else{
//     audio.pause();
//   }
// });



// let container = document.getElementById("container");

// function displayItems(getContent){
//   let display = getContent.map(function(item){
//     return `<h1 id="name-n">${item.name}</h1>
//     <h3 id="artist-a">${item.artist}</h3>

//     <div class="img-container">
//       <img id="img-i" src="${item.img}" alt="">
//     </div>

//     <audio id="audio-a" src="${item.audio}" ></audio>`;
//   });

//   display = display.join("");
//   container.innerHTML = display;
// }

