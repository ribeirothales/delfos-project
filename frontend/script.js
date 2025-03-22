// Selecionando os botões e modais
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const closeLoginBtn = document.getElementById('close-login');
const closeSignupBtn = document.getElementById('close-signup');

// Função para abrir o modal de Login
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});

// Função para abrir o modal de Sign Up
signupBtn.addEventListener('click', () => {
  signupModal.style.display = 'flex';
});

// Função para fechar o modal de Login
closeLoginBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Função para fechar o modal de Sign Up
closeSignupBtn.addEventListener('click', () => {
  signupModal.style.display = 'none';
});

// Fechar o modal ao clicar fora da caixa modal
loginModal.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

signupModal.addEventListener('click', (e) => {
  if (e.target === signupModal) {
    signupModal.style.display = 'none';
  }
});


const button = document.getElementById("glowButton");
let stars = [];

button.addEventListener("mouseover", () => {
    removeStars();
    for (let i = 0; i < 5; i++) { 
        let star = document.createElement("div");
        star.classList.add("stars");
        if (Math.random() > 0.5) star.classList.add("large");
        document.body.appendChild(star);

        // Captura a posição do botão em relação à tela
        let buttonRect = button.getBoundingClientRect();

        // Posições iniciais da estrela em relação ao botão
        let startX = Math.random() * buttonRect.width;
        let startY = Math.random() * buttonRect.height;

        // Posiciona as estrelas dentro do botão
        star.style.left = `${buttonRect.left + startX}px`;  // Posição X fixada ao botão
        star.style.top = `${buttonRect.top + startY}px`;    // Posição Y fixada ao botão

        // Animação do movimento das estrelas
        setTimeout(() => {
            let angle = Math.random() * 2 * Math.PI;
            let distance = Math.random() * 50 + 20;
            let moveX = Math.cos(angle) * distance;
            let moveY = Math.sin(angle) * distance;
            star.style.transform = `translate(${moveX}px, ${moveY}px)`;
            star.style.opacity = "0";
        }, 50);
        
        stars.push(star);
    }
});

button.addEventListener("mouseleave", () => {
    removeStars();
});

function removeStars() {
    stars.forEach(star => {
        star.style.opacity = "0";
        setTimeout(() => star.remove(), 500);
    });
    stars = []; 
}

let c = init("canvas"),
  w = (canvas.width = window.innerWidth),
  h = (canvas.height = window.innerHeight);
//initiation

class firefly{
  constructor(){
    this.x = Math.random()*w;
    this.y = Math.random()*h;
    this.s = Math.random()*2;
    this.ang = Math.random()*2*Math.PI;
    this.v = this.s*this.s/4;
  }
  move(){
    this.x += this.v*Math.cos(this.ang);
    this.y += this.v*Math.sin(this.ang);
    this.ang += Math.random()*20*Math.PI/180-10*Math.PI/180;
  }
  show(){
    c.beginPath();
    c.arc(this.x,this.y,this.s,0,2*Math.PI);
    c.fillStyle="#fddba3";
    c.fill();
  }
}

let f = [];

function draw() {
  if(f.length < 100){
    for(let j = 0; j < 10; j++){
     f.push(new firefly());
  }
     }
  //animation
  for(let i = 0; i < f.length; i++){
    f[i].move();
    f[i].show();
    if(f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h){
       f.splice(i,1);
       }
  }
}

let mouse = {};
let last_mouse = {};

canvas.addEventListener(
  "mousemove",
  function(e) {
    last_mouse.x = mouse.x;
    last_mouse.y = mouse.y;

    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  },
  false
);
function init(elemid) {
  let canvas = document.getElementById(elemid),
    c = canvas.getContext("2d"),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight);
  c.fillStyle = "rgba(30,30,30,1)";
  c.fillRect(0, 0, w, h);
  return c;
}

window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback);
    }
  );
});

function loop() {
  window.requestAnimFrame(loop);
  c.clearRect(0, 0, w, h);
  draw();
}

window.addEventListener("resize", function() {
  (w = canvas.width = window.innerWidth),
  (h = canvas.height = window.innerHeight);
  loop();
});

loop();
setInterval(loop, 1000 / 60);

// Abrir o modal da História do Tarot
document.getElementById("open-history").addEventListener("click", function() {
  document.getElementById("history-modal").style.display = "flex";
});

// Abrir o modal dos Arcanos Maiores
document.getElementById("open-arcanos").addEventListener("click", function() {
  document.getElementById("arcanos-modal").style.display = "flex";
});

// Fechar o modal da História do Tarot
document.getElementById("close-history").addEventListener("click", function() {
  document.getElementById("history-modal").style.display = "none";
});

// Fechar o modal dos Arcanos Maiores
document.getElementById("close-arcanos").addEventListener("click", function() {
  document.getElementById("arcanos-modal").style.display = "none";
});

// Fechar o modal clicando fora do conteúdo do modal
window.addEventListener("click", function(event) {
  if (event.target === document.getElementById("history-modal")) {
    document.getElementById("history-modal").style.display = "none";
  }
  if (event.target === document.getElementById("arcanos-modal")) {
    document.getElementById("arcanos-modal").style.display = "none";
  }
});
