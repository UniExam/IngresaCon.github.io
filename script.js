// Información de cada curso
const infoCursos = {
    ipn: {
        titulo: "Curso IPN",
        descripcion: "Temario actualizado, ejercicios, exámenes y asesorías personalizadas."
    },
    unam: {
        titulo: "Curso UNAM",
        descripcion: "Preparación completa para el examen de ingreso a la UNAM."
    },
    uam: {
        titulo: "Curso UAM",
        descripcion: "Simuladores y reforzamiento por áreas académicas."
    },
    uaemex: {
        titulo: "Curso UAEMEX",
        descripcion: "Curso especializado para aspirantes a la UAEMEX."
    },
    uady: {
        titulo: "Curso UADY",
        descripcion: "Guías, ejercicios y práctica para el examen de admisión."
    },
    comipems: {
        titulo: "Curso COMIPEMS",
        descripcion: "Curso completo para nivel medio superior."
    },
    uv: {
        titulo: "Curso UV",
        descripcion: "Estrategias y contenido para ingresar a la Universidad Veracruzana."
    },
    tecnm: {
        titulo: "Curso TECNM",
        descripcion: "Temario específico y simulaciones reales."
    },
    uaslp: {
        titulo: "Curso UASLP",
        descripcion: "Preparación integral para la Universidad Autónoma de San Luis Potosí."
    }
};
const coloresCursos = {
    ipn: "#e31c23",      // rojo típico IPN
    unam: "#1b4d3e",     // azul/verde UNAM
    uam: "#ffcc00",      // amarillo UAM
    uaemex: "#003366",   // azul UAEMEX
    uady: "#006633",     // verde UADY
    comipems: "#ff9900", // naranja COMIPEMS
    uv: "#002147",       // azul UV
    tecnm: "#ff6600",    // naranja TECNM
    uaslp: "#00539f"     // azul UASLP
};

const coloresTexto = {
    ipn: "#ffffff",      // blanco sobre rojo
    unam: "#ffffff",     
    uam: "#000000",      // negro sobre amarillo
    uaemex: "#ffffff",   
    uady: "#ffffff",     
    comipems: "#000000", 
    uv: "#ffffff",       
    tecnm: "#ffffff",    
    uaslp: "#ffffff"     
};

const coloresTitulo = {
    ipn: "#ffd700",      // dorado sobre rojo
    unam: "#ffcc00",
    uam: "#003366",
    uaemex: "#ff6600",
    uady: "#ffff00",
    comipems: "#003300",
    uv: "#ff9900",
    tecnm: "#000000",
    uaslp: "#ffffff"
};

// Elementos de la sección
const seccion = document.getElementById("seccion-curso");
const contenido = document.getElementById("contenido-curso");
const triangulo = document.querySelector("#seccion-curso .triangulo");

// Eventos para cada icono
document.querySelectorAll(".icono-curso").forEach(icono => {
    icono.addEventListener("click", () => {

        const curso = icono.getAttribute("data-curso");

        // Quitar selección previa
        document.querySelectorAll(".icono-curso").forEach(i =>
            i.classList.remove("seleccionado")
        );

        // Si ya está abierta y es el mismo → cerrar
        if (seccion.classList.contains("activa") && seccion.dataset.abierto === curso) {
            seccion.classList.remove("activa");
            seccion.dataset.abierto = "";
            return;
        }

        // Animación del icono
        icono.classList.add("animando");
        setTimeout(() => icono.classList.remove("animando"), 300);

        // Marcar icono como seleccionado
        icono.classList.add("seleccionado");

        // Actualizar contenido
        contenido.innerHTML = `
            <h2>${infoCursos[curso].titulo}</h2>
            <p>${infoCursos[curso].descripcion}</p>
        `;

        contenido.style.background = coloresCursos[curso];
        contenido.style.color = coloresTexto[curso];
        triangulo.style.borderBottomColor = coloresCursos[curso];
        contenido.querySelector("h2").style.color = coloresTitulo[curso];

        // Mostrar sección
        seccion.classList.add("activa");
        seccion.dataset.abierto = curso;

        // 📍 Posicionar el triángulo debajo del icono seleccionado
        const rectIcono = icono.getBoundingClientRect();
        const rectSeccion = seccion.getBoundingClientRect();
        const posicion = rectIcono.left + rectIcono.width / 2 - rectSeccion.left;

        triangulo.style.left = `${posicion - 14}px`; // 14 = mitad del ancho del triángulo
    });
});


// Selecciona todos los botones que harán girar la tarjeta
document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // evita que afecte otros clicks
        const tarjeta = btn.closest('.offering'); // busca la tarjeta contenedora
        tarjeta.classList.toggle('flipped'); // agrega o quita la clase flipped
    });
});



