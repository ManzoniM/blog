// Funções para gerenciar modais
function abrirModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fecharModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Função para copiar texto para a área de transferência
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copiado para a área de transferência: ' + text);
    }).catch(err => {
        console.error('Falha ao copiar: ', err);
    });
}

// Controle do tema claro/escuro
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Verificar preferência salva ou do sistema
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    htmlElement.classList.toggle('dark', savedTheme === 'dark');
} else {
    htmlElement.classList.toggle('dark', systemPrefersDark);
}

themeToggle.addEventListener('click', () => {
    const isDark = htmlElement.classList.contains('dark');
    htmlElement.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Menu mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Fechar menu ao clicar em um item
document.querySelectorAll('#mobile-menu a').forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Fechar modais ao clicar fora
window.addEventListener('click', (event) => {
    const modals = ['modalPrivacidade', 'modalTermos'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            fecharModal(modalId);
        }
    });
});
