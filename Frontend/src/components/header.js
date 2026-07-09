// components/header.js

export function renderHeader() {

    const session = null; // const session = getSession();

    const isLogged = !!session;

    const isAdmin =
        session?.role === "ADMIN" ||
        session?.role?.includes?.("ADMIN");

    return `
    <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">

        <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

            <!-- Logo -->

            <a
                href="/"
                class="text-3xl font-black tracking-tight text-blue-700 transition hover:text-blue-600"
            >
                EDULOGIC
            </a>

            <!-- Navegación Desktop -->

            <nav class="hidden items-center gap-2 lg:flex">

                <a href="/"
                    class="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">
                    Inicio
                </a>

                <a href="/courses"
                    class="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">
                    Cursos
                </a>

                ${!isLogged ? `
                    <a href="/login"
                        class="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">
                        Iniciar sesión
                    </a>

                    <a href="/register"
                        class="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500">
                        Registrarse
                    </a>
                ` : `

                    <a href="/dashboard"
                        class="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">
                        Dashboard
                    </a>

                    <a href="/profile"
                        class="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">
                        Perfil
                    </a>

                    ${isAdmin ? `
                        <a href="/admin"
                            class="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">
                            Administración
                        </a>
                    ` : ""}

                    <button
                        id="logout-btn"
                        class="rounded-full bg-red-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-400">
                        Cerrar sesión
                    </button>

                `}
            </nav>

            <!-- Botón menú móvil -->

            <button
                id="menu-btn"
                class="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
                aria-label="Abrir menú">

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
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

        <!-- Menú móvil -->

        <nav
            id="mobile-menu"
            class="hidden border-t border-slate-200 bg-white lg:hidden">

            <div class="flex flex-col p-5 gap-2">

                <a href="/"
                    class="rounded-lg px-4 py-3 font-medium hover:bg-blue-50">
                    Inicio
                </a>

                <a href="/courses"
                    class="rounded-lg px-4 py-3 font-medium hover:bg-blue-50">
                    Cursos
                </a>

                ${!isLogged ? `

                    <a href="/login"
                        class="rounded-lg px-4 py-3 font-medium hover:bg-blue-50">
                        Iniciar sesión
                    </a>

                    <a href="/register"
                        class="rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-500">
                        Registrarse
                    </a>

                ` : `

                    <a href="/dashboard"
                        class="rounded-lg px-4 py-3 font-medium hover:bg-blue-50">
                        Dashboard
                    </a>

                    <a href="/profile"
                        class="rounded-lg px-4 py-3 font-medium hover:bg-blue-50">
                        Perfil
                    </a>

                    ${isAdmin ? `
                        <a href="/admin"
                            class="rounded-lg px-4 py-3 font-medium hover:bg-blue-50">
                            Administración
                        </a>
                    ` : ""}

                    <button
                        id="logout-mobile-btn"
                        class="rounded-lg bg-red-500 px-4 py-3 font-semibold text-white hover:bg-red-400">
                        Cerrar sesión
                    </button>

                `}

            </div>

        </nav>

    </header>
    `;
}