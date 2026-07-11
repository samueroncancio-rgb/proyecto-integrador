// components/header.js

export function renderHeader() {

    const session = null; // const session = getSession();

    const isLogged = !!session;

    const isAdmin =
        session?.role === "ADMIN" ||
        session?.role?.includes?.("ADMIN");

    return `
    <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">

        <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

            <!-- Logo -->

            <a
                href="/"
                class="text-2xl font-black tracking-tight text-blue-700 transition hover:text-blue-600"
            >
                EDULOGIC
            </a>

            <!-- Navegación Desktop -->

            <nav class="hidden items-center gap-1 lg:flex">

                <a href="/"
                    class="rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400">
                    Inicio
                </a>

                <a href="/courses"
                    class="rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400">
                    Cursos
                </a>

                ${!isLogged ? `
                    <a href="/login"
                        class="rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400">
                        Iniciar sesión
                    </a>

                    <a href="/register"
                        class="rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-blue-500">
                        Registrarse
                    </a>
                ` : `

                    <a href="/dashboard"
                        class="rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400">
                        Dashboard
                    </a>

                    <a href="/profile"
                        class="rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400">
                        Perfil
                    </a>

                    ${isAdmin ? `
                        <a href="/admin"
                            class="rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400">
                            Administración
                        </a>
                    ` : ""}

                    <button
                        id="logout-btn"
                        class="rounded-full bg-red-500 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-red-400">
                        Cerrar sesión
                    </button>

                `}

                <!-- Dark mode toggle -->

                <button
                    id="theme-toggle"
                    class="ml-1 rounded-full p-1.5 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    aria-label="Cambiar tema">

                    <svg class="block h-4 w-4 dark:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                    </svg>

                    <svg class="hidden h-4 w-4 dark:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>

                </button>

            </nav>

            <!-- Lado derecho móvil -->

            <div class="flex items-center gap-1 lg:hidden">

                <!-- Dark mode toggle móvil -->

                <button
                    id="theme-toggle-mobile"
                    class="rounded-full p-1.5 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    aria-label="Cambiar tema">

                    <svg class="block h-4 w-4 dark:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                    </svg>

                    <svg class="hidden h-4 w-4 dark:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>

                </button>

                <!-- Botón menú móvil -->

                <button
                    id="menu-btn"
                    class="rounded-lg p-1.5 text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    aria-label="Abrir menú">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">

                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"/>

                    </svg>

                </button>

            </div>

        </div>

        <!-- Menú móvil -->

        <nav
            id="mobile-menu"
            class="hidden border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 lg:hidden">

            <div class="flex flex-col p-4 gap-1">

                <a href="/"
                    class="rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-blue-50 dark:text-slate-300 dark:hover:bg-slate-800">
                    Inicio
                </a>

                <a href="/courses"
                    class="rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-blue-50 dark:text-slate-300 dark:hover:bg-slate-800">
                    Cursos
                </a>

                ${!isLogged ? `

                    <a href="/login"
                        class="rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-blue-50 dark:text-slate-300 dark:hover:bg-slate-800">
                        Iniciar sesión
                    </a>

                    <a href="/register"
                        class="rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-500">
                        Registrarse
                    </a>

                ` : `

                    <a href="/dashboard"
                        class="rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-blue-50 dark:text-slate-300 dark:hover:bg-slate-800">
                        Dashboard
                    </a>

                    <a href="/profile"
                        class="rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-blue-50 dark:text-slate-300 dark:hover:bg-slate-800">
                        Perfil
                    </a>

                    ${isAdmin ? `
                        <a href="/admin"
                            class="rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-blue-50 dark:text-slate-300 dark:hover:bg-slate-800">
                            Administración
                        </a>
                    ` : ""}

                    <button
                        id="logout-mobile-btn"
                        class="rounded-lg bg-red-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-400">
                        Cerrar sesión
                    </button>

                `}

            </div>

        </nav>

    </header>
    `;
}

function applyTheme(theme) {
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains("dark");
    const next = isDark ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
}

export function setupHeader() {

    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });
    }

    const saved = localStorage.getItem("theme");
    if (saved) {
        applyTheme(saved);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        applyTheme("dark");
    }

    const toggleBtn = document.getElementById("theme-toggle");
    const toggleBtnMobile = document.getElementById("theme-toggle-mobile");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", toggleTheme);
    }

    if (toggleBtnMobile) {
        toggleBtnMobile.addEventListener("click", toggleTheme);
    }
}
