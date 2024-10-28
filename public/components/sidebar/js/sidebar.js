document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const navItems = document.querySelectorAll(".nav ul li");
    const logoutButton = document.getElementById("logout-button");

    if (!sidebar) return;

    sidebar.classList.add("collapsed");

    sidebar.addEventListener("mouseenter", function () {
        sidebar.classList.remove("collapsed");
    });

    sidebar.addEventListener("mouseleave", function () {
        sidebar.classList.add("collapsed");
        navItems.forEach(item => {
            const subMenu = item.querySelector(".sub-menu");
            if (subMenu) {
                subMenu.classList.remove("active");
            }
        });
    });

    navItems.forEach(item => {
        item.addEventListener("click", function (event) {
            const subMenu = this.querySelector(".sub-menu");
            if (subMenu) {
                event.stopPropagation();
                subMenu.classList.toggle("active");
                navItems.forEach(otherItem => {
                    if (otherItem !== this) {
                        const otherSubMenu = otherItem.querySelector(".sub-menu");
                        if (otherSubMenu) {
                            otherSubMenu.classList.remove("active");
                        }
                    }
                });
            }
        });
    });


    if (logoutButton) {
        logoutButton.addEventListener("click", function (event) {
            event.preventDefault(); 
            localStorage.removeItem("token"); 
            window.location.href = "/"; 
        });
    }
});
