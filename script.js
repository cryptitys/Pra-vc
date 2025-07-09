const loveButton = document.getElementById('loveButton');
const message = document.getElementById('message');

const messages = [
    "Meu coração bate mais forte por você!",
    "Você é a razão do meu sorriso!",
    "Cada momento ao seu lado é um presente!",
    "Eu te amo mais do que as palavras podem dizer!",
    "Você ilumina meus dias, mesmo no escuro.",
    "Seu olhar é o meu pôr do sol favorito."
];

loveButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
    message.classList.remove('hidden');
    message.classList.add('visible');
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
