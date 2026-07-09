import { routes, notFoundView } from "./routes.js";

export async function renderRoute() {

    const app = document.getElementById("app");

    if (!app) {
        console.error("No se encontró #app");
        return;
    }

    const path = window.location.pathname;

    const route = routes[path] || {
        render: notFoundView
    };

    // ==========================
    // RUTAS SOLO PARA INVITADOS
    // (Se implementará cuando exista autenticación)
    // ==========================

    /*
    if (route.onlyGuests && isAuthenticated()) {
        navigate("/dashboard");
        return;
    }
    */

    // ==========================
    // RUTAS PROTEGIDAS
    // (Se implementará cuando exista autenticación)
    // ==========================

    /*
    if (route.requiresAuth && !isAuthenticated()) {
        navigate("/login");
        return;
    }
    */

    // ==========================
    // VALIDACIÓN DE ROLES
    // (Se implementará cuando exista la BD)
    // ==========================

    /*
    if (route.allowRoles) {

    }
    */

    app.innerHTML = route.render();

    if (route.setup) {
        await route.setup();
    }

}

export function navigate(path) {

    window.history.pushState(
        {},
        "",
        path
    );

    renderRoute();

}

export function initRouter() {

    document.addEventListener("click", (event) => {

        const link = event.target.closest("a");

        if (!link) return;

        const href = link.getAttribute("href");

        if (!href || !href.startsWith("/")) return;

        event.preventDefault();

        navigate(href);

    });

    window.addEventListener(
        "popstate",
        renderRoute
    );

    renderRoute();

}