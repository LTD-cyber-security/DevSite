// Seleciona elementos
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;

// Adiciona um ouvinte de evento ao botão para alternar temas
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  moonIcon.classList.toggle('moon-on');
  moonIcon.classList.toggle('moon-off');
});

// Define o tema inicial com base na preferência do sistema ou outro critério
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.add('dark-mode');
  moonIcon.classList.remove('moon-off');
  moonIcon.classList.add('moon-on');
}
