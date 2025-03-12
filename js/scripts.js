// Sistema de Estrelas
function createStars() {
    const container = document.getElementById('starField');
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        if (Math.random() > 0.9) star.classList.add('pulsar');
        if (Math.random() > 0.95) star.classList.add('nebula');

        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 4 + 1;

        star.style.left = `${xPos}%`;
        star.style.top = `${yPos}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.opacity = Math.random() * 0.5 + 0.3;

        container.appendChild(star);
    }
}

// Contador de Vendas
function animateCounter() {
    const counter = document.querySelector('.counter');
    let count = 0;
    const target = Math.floor(Math.random() * 100) + 50;

    const interval = setInterval(() => {
        if (count < target) {
            count++;
            counter.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

// Temporizador de Escassez
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    const endTime = new Date().getTime() + (48 * 60 * 60 * 1000); // 48 horas

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance <= 0) {
            countdownElement.innerHTML = "Oferta Expirada!";
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    animateCounter();
    startCountdown();
});