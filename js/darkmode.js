// Função para alternar entre o modo claro e o modo escuro
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

// Adiciona um ouvinte de evento ao botão
document.getElementById('toggleDarkMode').addEventListener('click', toggleDarkMode);
