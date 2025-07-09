const loveButton = document.getElementById('loveButton');
const message = document.getElementById('message');
const heart = document.getElementById('heart');

const messages = [
    "Meu coração tem ciúmes de você!",
    "Nao sei bem o pq, mais vc é importante pra mim!",
    "Adoro encher seu saco ksksk!",
    "Nao sei se amor, mais se for, que doido ksksksks!",
    "Mesmo que você já brigou bastante cmg,",
    "ainda gosto de fazer parte do seu dia",
    "Não sou uma das melhores pessoas, mais...",
    "Bom, acho q ja ta bem fofo ksksks...",
    "Não mandei muita mensagem ultimamente,",
    "pq pensei q seria melhor não atrapalhar vc,",
    "acho que ja ta bom ate aq ksksks"
];

loveButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
    message.classList.remove('hidden');
    message.classList.add('visible');
    heart.style.display = 'inline';
});

particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 2 },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none',
      random: false,
      straight: false
    }
  },
  interactivity: {
    events: {
      onhover: { enable: false }
    }
  },
  retina_detect: true
});
