document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    tarjeta.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', tarjeta.textContent);
        e.dataTransfer.setData('source', tarjeta.parentElement.id);
        e.dataTransfer.setData('clases', tarjeta.className);
        if (tarjeta.querySelector('img')) {
            e.dataTransfer.setData('imagen', tarjeta.querySelector('img').src);
        }
        tarjeta.classList.add('dragging');
        tarjeta.style.visibility = 'hidden';
    });

    tarjeta.addEventListener('dragend', e => {
        tarjeta.classList.remove('dragging');
    });
});

const zonaHistoria = document.getElementById('zonaHistoria');
const contenedorOriginal = document.getElementById('contenedorOriginal');

zonaHistoria.addEventListener('dragover', e => {
    e.preventDefault();
    zonaHistoria.classList.add('dragover');
});

zonaHistoria.addEventListener('dragleave', e => {
    zonaHistoria.classList.remove('dragover');
});

contenedorOriginal.addEventListener('dragover', e => {
    e.preventDefault();
});

zonaHistoria.addEventListener('drop', e => {
    e.preventDefault();
    zonaHistoria.classList.remove('dragover');
    const texto = e.dataTransfer.getData('text/plain');
    const source = e.dataTransfer.getData('source');
    const clases = e.dataTransfer.getData('clases');
    const imagenSrc = e.dataTransfer.getData('imagen');
    
    if (source === 'contenedorOriginal') {
        const nuevaTarjeta = document.createElement('div');
        nuevaTarjeta.className = clases;
        nuevaTarjeta.draggable = true;
        nuevaTarjeta.textContent = texto;
        
        if (imagenSrc) {
            const imgClone = document.createElement('img');
            imgClone.src = imagenSrc;
            nuevaTarjeta.insertBefore(imgClone, nuevaTarjeta.firstChild);
        }

        nuevaTarjeta.addEventListener('click', () => {
            const tarjetaOriginal = Array.from(contenedorOriginal.children).find(t => t.textContent === texto);
            if (tarjetaOriginal) {
                tarjetaOriginal.style.visibility = 'visible';
            }
            nuevaTarjeta.remove();
        });
        
        zonaHistoria.appendChild(nuevaTarjeta);
    }
});

contenedorOriginal.addEventListener('drop', e => {
    e.preventDefault();
    const texto = e.dataTransfer.getData('text/plain');
    const source = e.dataTransfer.getData('source');
    
    if (source !== 'contenedorOriginal') {
        const tarjetaEnHistoria = Array.from(zonaHistoria.children).find(t => t.textContent === texto);
        if (tarjetaEnHistoria) {
            tarjetaEnHistoria.remove();
        }
        
        const tarjetaOriginal = Array.from(contenedorOriginal.children).find(t => t.textContent === texto);
        if (tarjetaOriginal) {
            tarjetaOriginal.style.visibility = 'visible';
        }
    }
});

function actualizarConectores() {
    const conectoresDiv = document.querySelectorAll('.conector');
    conectoresDiv.forEach((conector, index) => {
        if (index === numFrase) {
            conector.classList.add('activo');
        } else {
            conector.classList.remove('activo');
        }
    });
}

function crearHistoria() {
    const tarjetasElegidas = zonaHistoria.querySelectorAll('.tarjeta');
    const frase = Array.from(tarjetasElegidas).map(t => t.textContent).join(' ');
    const fraseCompleta = conectores[numFrase] + " " + frase;
    frases.push(fraseCompleta);
    
    const historiaAcumulada = document.getElementById('historiaAcumulada');
    const nuevaFrase = document.createElement('p');
    nuevaFrase.innerHTML = '<img src="https://static.arasaac.org/pictograms/2357/2357_300.png" alt="libro" style="width:40px"> ' + fraseCompleta;
    historiaAcumulada.appendChild(nuevaFrase);
    
    if (numFrase < 6) {
        numFrase++;
        actualizarConectores();
        zonaHistoria.innerHTML = '';
        contenedorOriginal.querySelectorAll('.tarjeta').forEach(tarjeta => {
            tarjeta.style.visibility = 'visible';
        });
    } else {
        mostrarHistoriaCompleta();
    }
}

function mostrarHistoriaCompleta() {
    const modal = document.getElementById('modalHistoria');
    const historiaCompleta = document.getElementById('historiaCompleta');
    historiaCompleta.innerHTML = frases.map(frase => 
        `<p><img src="https://static.arasaac.org/pictograms/2357/2357_300.png" alt="libro" style="width:40px"> ${frase}</p>`
    ).join('');
    modal.style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modalHistoria').style.display = 'none';
    nuevaHistoria();
}

function nuevaHistoria() {
    frases = [];
    numFrase = 0;
    actualizarConectores();
    document.getElementById('historiaAcumulada').innerHTML = '';
    resetearHistoria();
}

function resetearHistoria() {
    zonaHistoria.innerHTML = '';
    contenedorOriginal.querySelectorAll('.tarjeta').forEach(tarjeta => {
        tarjeta.style.visibility = 'visible';
    });
}

        // Mostrar el popup al cargar la página
        window.onload = function() {
            document.getElementById('popupInicial').style.display = 'block';
        }

        function cerrarPopupInicial() {
            document.getElementById('popupInicial').style.display = 'none';
        }

        let frases = [];
        let numFrase = 0;
        const conectores = [
            "Había una vez",
            "Luego",
            "Más adelante",
            "Entonces",
            "De pronto",
            "Después",
            "Finalmente"
        ];

        function asignarImagenes() {
            const tarjetas = document.querySelectorAll('.tarjeta');
            tarjetas.forEach(tarjeta => {
                const texto = tarjeta.textContent;
                const imagen = document.querySelector(`img[data-palabra="${texto}"]`);
                if (imagen) {
                    const imgClone = document.createElement('img');
                    imgClone.src = imagen.src;
                    tarjeta.insertBefore(imgClone, tarjeta.firstChild);
                }
                
                if (texto === "Caperucita Roja" || texto === "Lobo Feroz" || texto === "Abuelita") {
                    tarjeta.classList.add('sustantivo');
                } else if (texto === "come" || texto === "come" || texto === "lleva") {
                    tarjeta.classList.add('verbo');
                } else if (texto === "sobre") {
                    tarjeta.classList.add('preposicion');
                } else if (texto === "rápidamente" || texto === "felizmente") {
                    tarjeta.classList.add('adverbio');
                }
            });
        }
        document.addEventListener('DOMContentLoaded', asignarImagenes);

        function crearHistoria() {
    const tarjetasElegidas = zonaHistoria.querySelectorAll('.tarjeta');
    let frase = '';
    let palabras = Array.from(tarjetasElegidas).map(t => t.textContent);
    
    // Estructurar la frase según las palabras seleccionadas
    if (palabras.length > 0) {
        // Primera palabra (sujeto)
        let primeraPalabra = palabras[0];
        if (primeraPalabra === "Caperucita Roja" || primeraPalabra === "Abuelita") {
            frase = "la " + primeraPalabra;
        } else if (primeraPalabra === "Lobo Feroz") {
            frase = "el " + primeraPalabra;
        } else {
            frase = primeraPalabra;
        }
        
        // Resto de palabras
        for (let i = 1; i < palabras.length; i++) {
            let palabra = palabras[i];
            
            // Añadir "a" antes de objetos directos (para complementos)
            if ((palabra === "Abuelita" || palabra === "Caperucita Roja") && 
                (palabras[i-1] === "come" || palabras[i-1] === "lleva")) {
                frase += " a la " + palabra;
            } 
            // Añadir "al" antes de objetos directos (para el lobo)
            else if (palabra === "Lobo Feroz" && 
                    (palabras[i-1] === "come" || palabras[i-1] === "lleva")) {
                frase += " al " + palabra;
            }
            // Añadir "se" antes de verbos para acciones reflexivas
            else if ((palabra === "come" || palabra === "lleva") && 
                    (frase.endsWith("Lobo Feroz") || frase.endsWith("Caperucita Roja") || frase.endsWith("Abuelita"))) {
                frase += " " + palabra;
            }
            // Otros casos
            else {
                frase += " " + palabra;
            }
        }
    }
    
    const fraseCompleta = conectores[numFrase] + " " + frase + ".";
    frases.push(fraseCompleta);
    
    const historiaAcumulada = document.getElementById('historiaAcumulada');
    const nuevaFrase = document.createElement('p');
    nuevaFrase.innerHTML = '<img src="https://static.arasaac.org/pictograms/2357/2357_300.png" alt="libro" style="width:40px"> ' + fraseCompleta;
    historiaAcumulada.appendChild(nuevaFrase);
    
    if (numFrase < 6) {
        numFrase++;
        actualizarConectores();
        zonaHistoria.innerHTML = '';
        contenedorOriginal.querySelectorAll('.tarjeta').forEach(tarjeta => {
            tarjeta.style.visibility = 'visible';
        });
    } else {
        mostrarHistoriaCompleta();
    }
}