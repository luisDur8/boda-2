// Reproductor de Audio
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const progressBar = document.getElementById('progress-bar');

// Reproducir audio
playButton.addEventListener('click', () => {
    audioPlayer.play();
});

// Pausar audio
pauseButton.addEventListener('click', () => {
    audioPlayer.pause();
});

// Actualizar barra de progreso
audioPlayer.addEventListener('timeupdate', () => {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
});

// Cuenta Regresiva
// Fecha de destino (puedes cambiarla a tu preferencia)
const countdownDate = new Date("Dec 28, 2024 00:00:00").getTime();

const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = countdownDate - now;

  // Calcula el tiempo para días, horas, minutos y segundos
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Actualiza el contenido HTML con los valores calculados
  document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

  // Si la cuenta regresiva ha terminado, detén el temporizador
  if (timeRemaining < 0) {
    clearInterval(countdownFunction);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);


// Galería
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Función para mostrar la diapositiva correcta
function showSlide(index) {
  // Asegura que el índice esté dentro de los límites
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  // Mueve el carrusel
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Botones de navegación
nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

// Navegación automática cada 5 segundos
setInterval(() => {
  showSlide(currentIndex + 1);
}, 4000);


// Inicializar el mapa en una ubicación específica (Ejemplo: Ciudad de México)
  var map = L.map('map').setView([20.551197,-100.445734], 16);

  // Agregar el mapa base de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Agregar un marcador en la ubicación
  var marker = L.marker([20.551197,-100.445734]).addTo(map);

  // Agregar un popup cuando el usuario haga clic en el marcador
  marker.bindPopup('<b>¡Hola Ex Hacienda El Cerrito!</b>').openPopup();


// Hamburguesa  
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
})