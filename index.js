window.onscroll = function() {
    const button = document.getElementsByClassName("backToTop")[0]; // Acessa o primeiro elemento da coleção
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block"; // Mostra o botão
    } else {
        button.style.display = "none"; // Esconde o botão
    }
};

// Adiciona funcionalidade ao botão
document.getElementsByClassName("backToTop")[0].onclick = function() {
    document.documentElement.scrollTop = 0; // Rola para o topo
};
