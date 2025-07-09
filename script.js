const loveButton = document.getElementById('loveButton');
const message = document.getElementById('message');
const revealButton = document.getElementById('revealButton');
const declaration = document.getElementById('declaration');

// Mensagens aleatórias que aparecem ao clicar no primeiro botão
const messages = [
    "Meu coração tem ciúmes de você!",
    "Nao sei bem o pq, mais vc é importante pra mim!",
    "Adoro encher seu saco ksksk!",
    "Nao sei se amor, mais se for, que doido ksksksks!",
    "Mesmo que vocêja brigou bastante cmg,",
    "ainda gosto de fazer parte do seu dia",
    "Não sou uma das melhores pessoas, mais...",
    "Bom, acho q ja ta bem fofo ksksks...",
    "Não mandei muita mensagem ultimamente,",
    "pq pensei q seria melhor não atrapalhar vc",
    "acho que ja ta bom ate aq ksksks"
];

// Clique no botão "Clica aqqq :)"
loveButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
    message.classList.remove('hidden');
    message.classList.add('visible');
});

// Clique no botão "Ler minha mensagem 💌"
revealButton.addEventListener('click', () => {
    declaration.classList.remove('hidden');
    declaration.classList.add('visible');
    declaration.scrollIntoView({ behavior: 'smooth' });
    revealButton.style.display = 'none';
});

// Efeito de aparecer ao rolar (scroll)
const fadeElements = document.querySelectorAll('.fade-in-on-scroll');

function handleScroll() {
    fadeElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
handleScroll(); // para ativar imediatamente se estiver visível
