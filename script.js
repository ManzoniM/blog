// Funções para abrir e fechar modais
function openModal(modalId) {
    document.getElementById(modalId).classList.add('show');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

// Fechar modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
    const modals = ['privacyModal', 'termsModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            closeModal(modalId);
        }
    });
});

// Alternar posts
function togglePost(postId) {
    const post = document.getElementById(postId);
    const icon = document.getElementById(postId + '-icon');

    post.classList.toggle('show');

    if (post.classList.contains('show')) {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

// Menu mobile
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

// Copiar para área de transferência
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
const themeIcon = themeToggle.querySelector('i');

// Forçar tema escuro inicial
htmlElement.classList.add('dark');
localStorage.setItem('theme', 'dark');
themeIcon.classList.remove('fa-moon');
themeIcon.classList.add('fa-sun');

themeToggle.addEventListener('click', () => {
    const isDark = htmlElement.classList.contains('dark');
    htmlElement.classList.toggle('dark', !isDark);
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}