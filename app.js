// Seleccionamos los elementos correctamente
let btnIMC = document.querySelector("#calcIMC");
let divDOM = document.querySelector("#resultado");

function calcIMC() {
    let estatura = Number(prompt("Introduce tu estatura en metros (ejemplo: 1.75)"));
    let peso = Number(prompt("Introduce tu peso en kg"));

    if (estatura <= 0 || peso <= 0 || isNaN(estatura) || isNaN(peso)) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    let IMCresult = peso / (estatura * estatura);

    if (IMCresult <= 18.5) {
        divDOM.innerHTML = `
            <img src="https://thumbs.dreamstime.com/z/el-doblar-masculino-flaco-joven-11673997.jpg" alt="Bajo peso">
            <h1>Índice bajo</h1>
        `;
    } else if (IMCresult <= 24.9) {
        divDOM.innerHTML = `
            <img src="https://pbs.twimg.com/media/EXS24u7WoAYoygj.jpg" alt="Peso normal">
            <h1>¡ESTÁS PAPUCHO!</h1>
        `;
    } else if (IMCresult <= 29.9) {
        divDOM.innerHTML = `
            <img src="https://www.fesemi.org/sites/default/files/images/informacion/info-pacientes/obesidad.jpg" alt="Sobrepeso">
            <h1>SOBREPESO</h1>
        `;
    } else {
        divDOM.innerHTML = `
            <img src="https://www.researchgate.net/publication/361237384/figure/fig2/AS:11431281095795124@1668015392026/Figura-6-S-a-Michelin-s-f-Personaje-que-aparece-en-el-logo-de-la-marca-de-llantas.ppm" alt="Obesidad">
            <h1>¡ESTÁS OBESOOOOOOOO!</h1>
        `;
    }
     // Mostrar el resultado después del cálculo
     divDOM.style.display = "block";
}

// Agregamos el evento correctamente
btnIMC.addEventListener("click", calcIMC);
