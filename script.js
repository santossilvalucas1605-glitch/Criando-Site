// ============================
// MENU MOBILE
// ============================

function abrirMenu() {
    const menu = document.getElementById("menu");

    menu.classList.toggle("active");
}


// Fecha o menu ao clicar em um link

const links = document.querySelectorAll("#menu a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("menu")
            .classList.remove("active");

    });

});


// ============================
// ANIMAÇÃO AO ROLAR
// ============================

const elementos = document.querySelectorAll(
    ".about-card, .title-card, .news-card, .game"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach(function(elemento) {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition = "opacity .7s ease, transform .7s ease";

    observer.observe(elemento);

});


// ============================
// ANO AUTOMÁTICO NO FOOTER
// ============================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const ano = new Date().getFullYear();

    copyright.innerHTML =
        `© ${ano} Site do Torcedor — Projeto independente.`;

}