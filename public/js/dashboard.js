document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const navItems = document.querySelectorAll('.nav ul li');

    // Expandir a sidebar ao passar o mouse sobre os ícones
    navItems.forEach(item => {
        item.addEventListener("mouseover", function () {
            sidebar.classList.remove("collapsed");
        });

        item.addEventListener("mouseleave", function () {
            if (!sidebar.matches(':hover')) {
                sidebar.classList.add("collapsed");
            }
        });
    });

    // Manter a sidebar expandida enquanto o mouse estiver sobre ela
    sidebar.addEventListener("mouseover", function () {
        sidebar.classList.remove("collapsed");
    });

    // Colapsar a sidebar ao sair da sidebar
    sidebar.addEventListener("mouseleave", function () {
        sidebar.classList.add("collapsed");
    });
});
