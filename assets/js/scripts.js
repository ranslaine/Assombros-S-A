// 🔥 TELA DE CARREGAMENTO
window.addEventListener("load", function() {
    const loading = document.getElementById("loading");

    setTimeout(function() {
    loading.style.opacity = "0";

    setTimeout(() => {
        loading.style.display = "none";
        }, 1000);
    }, 2000);
});


// 🎯 EASTER EGG
document.addEventListener("DOMContentLoaded", function() {
    const egg = document.getElementById("egg");

    function mover() {
        const larguraTela = window.innerWidth;
        const alturaTela = window.innerHeight;

        const x = Math.floor(Math.random() * (larguraTela - 80));
        const y = Math.floor(Math.random() * (alturaTela - 80));

        egg.style.left = x + "px";
        egg.style.top = y + "px";

        console.log("Nova posição:", x, y);
    }

    mover(); // roda uma vez quando abre

    setInterval(mover, 30000); // roda a cada 30 segundos
});