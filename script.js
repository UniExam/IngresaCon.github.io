const dbCursos = {
        ipn: {
            titulo: "IPN",
            precio: "$5,000",
            color: "#6f1c46", // Guinda
            temario: ["Preparación por áreas", "Taller de apoyo emocional", "Taller de actividades y juegos", "Taller de pláticas para tener una buena actitud", "Examen diagnóstico", "4 exámenes simulacro"],
            horarios: ["Matutino: Lunes a Jueves: 09:00 - 11:30 Viernes: Examen en casa", "Vespertino: Lunes a Jueves: 16:00 - 18:30 Viernes: Examen en casa", "Sábado: 09:00 a 13:00 y de 13:00 a 14:00 se realiza examen"]
        },
        unam: {
            titulo: "UNAM",
            precio: "$5,000",
            color: "#1c3d6f", // Azul Oro
            temario: ["Preparación por áreas", "Taller de apoyo emocional", "Taller de actividades y juegos", "Taller de pláticas para tener una buena actitud", "Examen diagnóstico", "4 exámenes simulacro"],
            horarios: ["Matutino: Lunes a Jueves: 09:00 - 11:30 Viernes: Examen en casa", "Vespertino: Lunes a Jueves: 16:00 - 18:30 Viernes: Examen en casa", "Sábado: 09:00 a 13:00 y de 13:00 a 14:00 se realiza examen"]
        },
        uam: {
            titulo: "UAM",
            precio: "$5,000",
            color: "#3c78bcff", // Negro
           temario: ["Preparación por áreas", "Taller de apoyo emocional", "Taller de actividades y juegos", "Taller de pláticas para tener una buena actitud", "Examen diagnóstico", "4 exámenes simulacro"],
            horarios: ["Matutino: Lunes a Jueves: 09:00 - 11:30 Viernes: Examen en casa", "Vespertino: Lunes a Jueves: 16:00 - 18:30 Viernes: Examen en casa", "Sábado: 09:00 a 13:00 y de 13:00 a 14:00 se realiza examen"]
        },
        uaemex: {
            titulo: "UAEMEX",
            precio: "$4,500",
            color: "#2e7d32", // Verde
           temario: ["Preparación por áreas", "Taller de apoyo emocional", "Taller de actividades y juegos", "Taller de pláticas para tener una buena actitud", "Examen diagnóstico", "4 exámenes simulacro"],
            horarios: ["Matutino: Lunes a Jueves: 09:00 - 11:30 Viernes: Examen en casa", "Vespertino: Lunes a Jueves: 16:00 - 18:30 Viernes: Examen en casa", "Sábado: 09:00 a 13:00 y de 13:00 a 14:00 se realiza examen"]
        },
        uady: {
            titulo: "UADY",
            precio: "$4,500",
            color: "#919136ff", // Azul
            temario: ["Preparación por áreas", "Taller de apoyo emocional", "Taller de actividades y juegos", "Taller de pláticas para tener una buena actitud", "Examen diagnóstico", "4 exámenes simulacro"],
            horarios: ["Matutino: Lunes a Jueves: 09:00 - 11:30 Viernes: Examen en casa", "Vespertino: Lunes a Jueves: 16:00 - 18:30 Viernes: Examen en casa", "Sábado: 09:00 a 13:00 y de 13:00 a 14:00 se realiza examen"]
        },
        comipems: {
            titulo: "ECOEMS (Media Superior)",
            precio: "$5,000",
            color: "#d18b29ff", // Verde Azulado
            temario: ["Preparación por áreas", "Taller de apoyo emocional", "Taller de actividades y juegos", "Taller de pláticas para tener una buena actitud", "Examen diagnóstico", "4 exámenes simulacro"],
            horarios: ["Matutino: Lunes a Jueves: 09:00 - 11:30 Viernes: Examen en casa", "Vespertino: Lunes a Jueves: 16:00 - 18:30 Viernes: Examen en casa", "Sábado: 09:00 a 13:00 y de 13:00 a 14:00 se realiza examen"]
        },
        uv: {
            titulo: "UV",
            precio: "$4,600",
            color: "#2e9d2aff", // Azul
           temario: ["Preparación por áreas", "Taller de apoyo emocional", "Taller de actividades y juegos", "Taller de pláticas para tener una buena actitud", "Examen diagnóstico", "4 exámenes simulacro"],
            horarios: ["Matutino: Lunes a Jueves: 09:00 - 11:30 Viernes: Examen en casa", "Vespertino: Lunes a Jueves: 16:00 - 18:30 Viernes: Examen en casa", "Sábado: 09:00 a 13:00 y de 13:00 a 14:00 se realiza examen"]
        },
        tecnm: {
            titulo: "TECNM",
            precio: "$4,200",
            color: "#782828ff", // Rojo
            temario: ["Preparación por áreas", "Taller de apoyo emocional", "Taller de actividades y juegos", "Taller de pláticas para tener una buena actitud", "Examen diagnóstico", "4 exámenes simulacro"],
            horarios: ["Matutino: Lunes a Jueves: 09:00 - 11:30 Viernes: Examen en casa", "Vespertino: Lunes a Jueves: 16:00 - 18:30 Viernes: Examen en casa", "Sábado: 09:00 a 13:00 y de 13:00 a 14:00 se realiza examen"]
        },
        uaslp: {
            titulo: "UASLP (ONLINE)",
            precio: "$2,000",
            color: "#25639aff", // Azul claro
            temario: ["Preparación por áreas", "Taller de apoyo emocional", "Taller de actividades y juegos", "Taller de pláticas para tener una buena actitud", "Examen diagnóstico", "4 exámenes simulacro"],
            horarios: ["Matutino: Lunes a Jueves: 09:00 - 11:30 Viernes: Examen en casa", "Vespertino: Lunes a Jueves: 16:00 - 18:30 Viernes: Examen en casa", "Sábado: 09:00 a 13:00 y de 13:00 a 14:00 se realiza examen"]
        }
    };

  const seccion = document.getElementById("seccion-curso");
    const contenido = document.getElementById("contenido-curso");
    const triangulo = document.querySelector(".triangulo");
    
    // CORRECCIÓN 1: Seleccionamos TANTO los iconos COMO los enlaces del menú
    // .cursos = Iconos | .btn-menu = Enlaces del Dropdown
    const todosLosActivadores = document.querySelectorAll(".cursos, .btn-menu");
    const soloIconos = document.querySelectorAll(".cursos"); // Para efectos visuales

    // --- LÓGICA DE CLIC ---
    todosLosActivadores.forEach(elemento => {
        elemento.addEventListener("click", (e) => {
            // Prevenir salto si es un enlace <a>
            if(elemento.tagName === 'A') e.preventDefault();

            // 1. Identificar el curso
            const cursoKey = elemento.getAttribute("data-curso");
            const data = dbCursos[cursoKey];

            if (!data) return; 

            // 2. Manejo de estado visual
            const estaAbierto = seccion.dataset.abierto === cursoKey;

            // Si ya está abierto y le doy click al mismo -> CERRAR
            if (seccion.classList.contains("activa") && estaAbierto) {
                cerrarSeccion();
                return;
            }

            // Resaltar icono visualmente (solo si existe en la grilla)
            soloIconos.forEach(icon => icon.classList.remove("activo"));
            
            // Buscamos si hay un icono que corresponda a este curso para activarlo visualmente
            const iconoCorrespondiente = document.querySelector(`.cursos[data-curso="${cursoKey}"]`);
            if(iconoCorrespondiente) {
                iconoCorrespondiente.classList.add("activo");
            }

            // 3. Actualizar la Variable CSS de color
            contenido.style.setProperty('--color-tema', data.color);

            // 4. Generar HTML
            const listaTemario = data.temario.map(item => `<li>${item}</li>`).join('');
            const listaHorarios = data.horarios.map(item => `<li>${item}</li>`).join('');

            contenido.innerHTML = `
                <div class="plan-container">
                    <header class="plan-header">
                        <h2>${data.titulo}</h2>
                        <div class="plan-subtitle">
                        <div class="header-divider"></div>
                    </header>

                    <div class="plan-content">
                        <div class="plan-col plan-left">
                            <h3>Lo que incluye:</h3>
                            <ul>${listaTemario}</ul>
                        </div>
                        <div class="plan-col plan-center">
                            <h3>Horarios:</h3>
                            <ul>${listaHorarios}</ul>
                        </div>
                        <div class="plan-col plan-right">
                            <span style="text-transform:uppercase; font-size:0.8em; color:#666;">Inversión Única</span>
                            <div class="plan-price">${data.precio}</div>
                            <a href="#app" class="inscription-btn">Inscribirme Ahora</a>
                        </div>
                    </div>
                </div>
            `;

            // 5. Mostrar Sección
            seccion.classList.add("activa");
            seccion.dataset.abierto = cursoKey;

            // CORRECCIÓN 2: Manejo del triángulo
            // Si el click vino de un icono (.cursos), movemos el triángulo.
            // Si vino del menú, ocultamos el triángulo (porque el menú está muy lejos arriba).
            if (elemento.classList.contains('cursos')) {
                triangulo.style.opacity = '1';
                posicionarTriangulo(elemento);
            } else {
                triangulo.style.opacity = '0'; // Ocultar triángulo si viene del menú
                // Hacemos scroll suave hacia la tarjeta para que el usuario sepa que algo pasó
                setTimeout(() => {
                    seccion.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        });
    });

    function cerrarSeccion() {
        seccion.classList.remove("activa");
        seccion.dataset.abierto = "";
        soloIconos.forEach(icon => icon.classList.remove("activo"));
    }

    function posicionarTriangulo(elementoIcono) {
        requestAnimationFrame(() => {
            const rectIcono = elementoIcono.getBoundingClientRect();
            const rectContainer = seccion.getBoundingClientRect();
            const gridRect = document.querySelector('.CURSOS').getBoundingClientRect();
            
            const centroIconoX = rectIcono.left + (rectIcono.width / 2);
            const inicioSeccionX = rectContainer.left;
            const posRelativa = centroIconoX - inicioSeccionX;

            triangulo.style.left = (posRelativa - 15) + "px";
        });
    }

    window.addEventListener('resize', () => {
        const abiertoKey = seccion.dataset.abierto;
        if (abiertoKey) {
            const iconoActivo = document.querySelector(`.cursos[data-curso="${abiertoKey}"]`);
            if (iconoActivo) posicionarTriangulo(iconoActivo);
        }
    });

    const form = document.getElementById("contactForm");
    const btnSpinner = document.getElementById("btnSpinner");
    const btnText = document.getElementById("btnText");
    const submitBtn = document.getElementById("submitBtn");

    // AQUÍ ESTÁ TU URL YA CONFIGURADA
    const formspreeUrl = "https://formspree.io/f/xanwzlzw";

    async function handleSubmit(event) {
        event.preventDefault(); // Evita recargar la página

        // 1. Mostrar carga
        btnSpinner.classList.remove("hidden");
        btnText.style.display = "none";
        submitBtn.disabled = true;

        const data = new FormData(event.target);

        try {
            const response = await fetch(formspreeUrl, {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Éxito
                alert("¡Gracias! Un asesor se pondrá en contacto.");
                form.reset(); 
            } else {
                // Error
                const errorData = await response.json();
                if (Object.hasOwn(errorData, 'errors')) {
                    alert(errorData["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert("Ocurrió un error al enviar el formulario.");
                }
            }
        } catch (error) {
            alert("Hubo un problema de conexión. Intenta de nuevo.");
        } finally {
            // 2. Restaurar botón
            btnSpinner.classList.add("hidden");
            btnText.style.display = "block";
            submitBtn.disabled = false;
        }
    }

    form.addEventListener("submit", handleSubmit);
    