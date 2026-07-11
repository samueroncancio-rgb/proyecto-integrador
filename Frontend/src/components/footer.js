
export function renderFooter() {

    return `
        <footer class="bg-slate-900 text-slate-300">

            <div class="mx-auto grid max-w-[1100px] gap-12 px-6 py-20 md:grid-cols-[2fr_1fr]">

                <!-- Logo -->

                <section>

                    <h2 class="text-4xl font-extrabold tracking-tight text-white">
                        EDULOGIC
                    </h2>

                    <p class="mt-5 max-w-[32rem] text-sm leading-7 text-slate-400">
                        Plataforma educativa diseñada para ayudar a los futuros
                        estudiantes a fortalecer sus habilidades en lógica,
                        matemáticas y programación antes de iniciar una carrera STEM.
                    </p>

                </section>

                <!-- Contacto -->

                <section>

                    <h3 class="text-xl font-bold text-white">
                        Contacto
                    </h3>

                    <div class="mt-6 space-y-3 text-sm">

                        <p>
                            contacto@edulogic.com
                        </p>

                        <p>
                            Barranquilla, Colombia
                        </p>

                    </div>

                </section>

            </div>

            <div class="border-t border-slate-800">

                <div class="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-3 px-6 py-4 text-xs text-slate-500 md:flex-row">

                    <p>
                        © 2026 EDULOGIC. Todos los derechos reservados.
                    </p>

                    <p>
                        Proyecto Integrador • Riwi
                    </p>

                </div>

            </div>

        </footer>
    `;
}