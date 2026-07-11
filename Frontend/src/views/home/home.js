import { renderFooter } from "../../components/footer";
import { renderHeader } from "../../components/header";

export function renderHome() {

    return `
        <div class="flex min-h-screen flex-col">

            ${renderHeader()}

            <main class="flex-1 dark:bg-slate-950">

                <!-- Hero -->
                <section class="relative overflow-hidden">

                    <!-- ========================= -->
                    <!-- FOTO HERO -->
                    <!-- Reemplazar hero.jpg por la imagen definitiva -->
                    <!-- Tamaño recomendado: 1920x1080 -->
                    <!-- Ruta sugerida: /public/images/hero.jpg -->
                    <!-- ========================= -->

                    <img
                        src="/public/images/STEM.jpg"
                        alt="Estudiantes aprendiendo"
                        class="absolute inset-0 h-full w-full object-cover"
                    />

                    <!-- Oscurece la imagen para que el texto se lea bien -->
                    <div class="absolute inset-0 bg-black/55"></div>

                    <div class="relative mx-auto flex min-h-[650px] max-w-7xl items-center justify-center px-6 text-center text-white">

                        <div class="max-w-3xl">

                            <p class="text-sm font-bold uppercase tracking-[0.3em] text-blue-200">
                                Plataforma STEM
                            </p>

                            <h1 class="mt-6 text-5xl font-black leading-tight lg:text-6xl">
                                Prepárate para tu
                                <span class="text-blue-300">
                                    futuro profesional
                                </span>
                            </h1>

                            <p class="mt-8 text-lg leading-8 text-slate-200">
                                Aprende lógica, matemáticas y programación mediante
                                cursos diseñados para fortalecer tus bases antes de
                                comenzar una carrera STEM.
                            </p>

                            <div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                                <a
                                    href="/courses"
                                    class="rounded-2xl bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-500"
                                >
                                    Explorar cursos
                                </a>

                                <a
                                    href="/register"
                                    class="rounded-2xl border border-white px-8 py-4 font-bold hover:bg-white hover:text-slate-900"
                                >
                                    Registrarse
                                </a>

                            </div>

                        </div>

                    </div>

                </section>

                <!-- Cursos -->
                <section class="px-6 py-20 dark:bg-slate-950">
                    <div class="mx-auto max-w-7xl">
                        <div class="text-center">
                            <p class="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">Nuestros cursos</p>
                            <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">Domina las bases</h2>
                            <p class="mx-auto mt-4 max-w-xl text-slate-500 dark:text-slate-400">Tres pilares fundamentales para tu formación en ciencia y tecnología.</p>
                        </div>
                        <div class="mt-14 grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">

                            <!-- Lógica -->
                            <div class="w-full max-w-xs rounded-[2rem] border border-slate-100 bg-white p-8 shadow-lg shadow-slate-100 transition hover:shadow-xl hover:shadow-blue-100/60 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none dark:hover:shadow-blue-900/30">
                                <!-- ========================= -->
                                <!-- FOTO CURSO -->
                                <!-- Reemplazar por la imagen definitiva -->
                                <!-- Ruta sugerida: /images/courses/logic.jpg -->
                                <!-- Tamaño recomendado: 1024x1024 -->
                                <!-- ========================= -->

                                <div class="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-800">

                                    <img
                                        src="/public/images/logica.jpg"
                                        alt="Curso de Lógica"
                                        class="h-full w-full object-cover transition duration-300 hover:scale-105"
                                    />

                                </div>
                                <h3 class="mt-6 text-xl font-bold text-slate-900 dark:text-white">Lógica</h3>
                                <p class="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                                    Desarrolla el pensamiento lógico y la capacidad de resolver problemas mediante ejercicios de razonamiento, argumentación y análisis.
                                </p>
                                <a href="/courses" class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-500">
                                    Ver más
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                                </a>
                            </div>

                            <!-- Matemáticas -->
                            <div class="w-full max-w-xs rounded-[2rem] border border-slate-100 bg-white p-8 shadow-lg shadow-slate-100 transition hover:shadow-xl hover:shadow-blue-100/60 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none dark:hover:shadow-blue-900/30">


                                <div class="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-800">

                                    <img
                                        src="/public/images/Matematicas.jpg"
                                        alt="Curso de Matemáticas"
                                        class="h-full w-full object-cover transition duration-300 hover:scale-105"
                                    />

                                </div>
                                <h3 class="mt-6 text-xl font-bold text-slate-900 dark:text-white">Matemáticas</h3>
                                <p class="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                                    Fortalece las bases matemáticas necesarias para afrontar con éxito estudios relacionados con carreras STEM.
                                </p>
                                <a href="/courses" class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-500">
                                    Ver más
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                                </a>
                            </div>

                            <!-- Programación -->
                            <div class="w-full max-w-xs rounded-[2rem] border border-slate-100 bg-white p-8 shadow-lg shadow-slate-100 transition hover:shadow-xl hover:shadow-blue-100/60 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none dark:hover:shadow-blue-900/30">

                                <div class="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-800">

                                    <img
                                        src="/public/images/programacion.jpg"
                                        alt="Curso de Programación"
                                        class="h-full w-full object-cover transition duration-300 hover:scale-105"
                                    />

                                </div>
                                <h3 class="mt-6 text-xl font-bold text-slate-900 dark:text-white">Programación</h3>
                                <p class="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                                    Aprende los fundamentos de la programación, los algoritmos y la resolución de problemas mediante código.
                                </p>
                                <a href="/courses" class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-500">
                                    Ver más
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>

                <!-- Por qué EDULOGIC -->
                <section class="bg-slate-50 px-6 py-20 dark:bg-slate-900">
                    <div class="mx-auto max-w-7xl">
                        <div class="text-center">
                            <p class="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">¿Por qué EDULOGIC?</p>
                            <h2 class="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">Todo lo que necesitas para empezar</h2>
                        </div>
                        <div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div class="text-center">
                                <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                                </div>
                                <h3 class="mt-5 text-lg font-bold text-slate-900 dark:text-white">Contenido estructurado</h3>
                                <p class="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">Cursos organizados por nivel que van desde lo básico hasta conceptos avanzados.</p>
                            </div>
                            <div class="text-center">
                                <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                </div>
                                <h3 class="mt-5 text-lg font-bold text-slate-900 dark:text-white">A tu ritmo</h3>
                                <p class="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">Estudia cuando quieras y avanzá sin presiones. El aprendizaje es personalizado.</p>
                            </div>
                            <div class="text-center">
                                <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-slate-800 dark:text-blue-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                </div>
                                <h3 class="mt-5 text-lg font-bold text-slate-900 dark:text-white">Hecho para ti</h3>
                                <p class="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">Diseñado especialmente para estudiantes que quieren incursionar en carreras STEM.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- CTA -->
                <section class="px-6 py-20 dark:bg-slate-950">
                    <div class="mx-auto max-w-4xl rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-16 text-center text-white shadow-2xl shadow-blue-600/20 dark:shadow-blue-900/40 sm:px-16">
                        <h2 class="text-3xl font-black tracking-tight sm:text-4xl">Comienza tu camino en STEM</h2>
                        <p class="mx-auto mt-4 max-w-lg text-blue-100">Regístrate gratis y accede a cursos diseñados para prepararte de la mejor manera antes de iniciar tu carrera universitaria.</p>
                        <a href="/register" class="mt-10 inline-flex items-center justify-center rounded-2xl bg-white px-10 py-4 text-sm font-bold text-blue-700 shadow-lg shadow-blue-900/30 transition hover:bg-blue-50">
                            Registrarse ahora
                        </a>
                    </div>
                </section>

            </main>

            ${renderFooter()}

        </div>
    `;
}