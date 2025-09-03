// ========= PASOS Y ESTADO =========
const PASOS = ["personaje", "escenario", "emocion"]; // 3 pasos
let pasoActual = 0;

const seleccion = {
  personaje: null,
  escenario: null,
  emocion: null
};

// ========= ARRAYS DE OPCIONES =========
// Personajes
const personajes = [
  { nombre: "BLUEY", img: "imgs/Personajes/BLUEY.png", audio: "Grabaciones/Bluey.aac", genero: "femenino"},
  { nombre: "Caperucita Roja", img: "imgs/Personajes/CaperucitaRoja.png", audio: "Grabaciones/CaperucitaRoja.aac", genero: "femenino"},
  { nombre: "DRAGÓN", img: "imgs/Personajes/DRAGÓN.png" , audio: "Grabaciones/dragon.aac", genero: "masculino"},
  { nombre: "Lobo Feroz", img: "imgs/Personajes/LoboFeroz.png", audio: "Grabaciones/loboFeroz.aac", genero: "masculino"},
  { nombre: "MICKEY MOUSE", img: "imgs/Personajes/MICKEYMOUSE.png", audio: "Grabaciones/mickeyMouse.aac", genero: "masculino"},
  { nombre: "PEPPA", img: "imgs/Personajes/PEPPA.png", audio: "Grabaciones/PeppaPig.aac", genero: "femenino"},
  { nombre: "Pinocho", img: "imgs/Personajes/Pinocho.png", audio: "Grabaciones/Pinocho.aac", genero: "masculino"},
  { nombre: "SIMBA", img: "imgs/Personajes/SIMBA.png", audio: "Grabaciones/simba.aac", genero: "masculino"},
  { nombre: "STITCH", img: "imgs/Personajes/STITCH.png", audio: "Grabaciones/Stich.aac", genero: "masculino"},
  { nombre: "Elsa", img: "imgs/Personajes/ELSA.png", audio: "Grabaciones/elsa.aac", genero: "femenino"}
];

// Escenarios
const escenarios = [
  { nombre: "la casa", img: "imgs/Escenarios/casa.png", audio: "Grabaciones/casa.aac" },
  { nombre: "la clase", img: "imgs/Escenarios/clase.png" , audio: "Grabaciones/clase.aac" },
  { nombre: "el parque", img: "imgs/Escenarios/parque.png" , audio: "Grabaciones/parque.aac" },
  { nombre: "la calle", img: "imgs/Escenarios/calle.png" , audio: "Grabaciones/calle.aac" },
  { nombre: "la piscina", img: "imgs/Escenarios/piscina.png", audio: "Grabaciones/piscina.aac" }
];

// Emociones
const emociones = [
  { nombre: "aburrido", img: "imgs/Emociones/aburrido.png", audio: "Grabaciones/ABURRIDO.mp3" },
  { nombre: "asustado", img: "imgs/Emociones/asustado.png", audio: "Grabaciones/ASUSTADO.mp3" },
  { nombre: "contento", img: "imgs/Emociones/contento.png", audio: "Grabaciones/CONTENTO.mp3" },
  { nombre: "enfadado", img: "imgs/Emociones/enfadado.png", audio: "Grabaciones/ENFADADO.mp3" },
  { nombre: "triste", img: "imgs/Emociones/triste.png", audio: "Grabaciones/TRISTE.mp3" }
];
const emocionesFemeninas = [
  { nombre: "aburrida", img: "imgs/Emociones/aburrida.png", audio: "Grabaciones/ABURRIDA.mp3" },
  { nombre: "contenta", img: "imgs/Emociones/contenta.png", audio: "Grabaciones/CONTENTA.mp3" },
  { nombre: "triste", img: "imgs/Emociones/triste(1).png", audio: "Grabaciones/TRISTE.mp3" },  // No cambia
  { nombre: "asustada", img: "imgs/Emociones/asustada.png", audio: "Grabaciones/ASUSTADA.mp3" },
  { nombre: "enfadada", img: "imgs/Emociones/enfadada.png", audio: "Grabaciones/ENFADADA.mp3" }
];

const keywordMedia = {
  "agua": { img: "imgs/EXTRA/agua.png", alt: "agua", audio: "Grabaciones/agua​.aac" },
  "amigo":   { img: "imgs/EXTRA/amigo.png",  alt: "amigo", audio: "Grabaciones/amigo.aac"  },
  "arcoiris": { img: "imgs/EXTRA/arcoiris.png", alt: "arcoíris", audio: "Grabaciones/arcoíris.aac" },
  "boca": { img: "imgs/EXTRA/boca.png", alt: "boca" , audio: "Grabaciones/boca.aac" }, 
  "dedos": { img: "imgs/EXTRA/dedos.png", alt: "dedos", audio: "Grabaciones/dedos.aac" },
  "fuego": { img: "imgs/EXTRA/fuego.png", alt: "fuego", audio: "Grabaciones/fuego.aac"  },
  "gafas": { img: "imgs/EXTRA/gafas.png", alt: "gafas", audio: "Grabaciones/gafas.aac"  },
  "hablar": { img: "imgs/EXTRA/hablar.png", alt: "hablar", audio: "Grabaciones/hablar.aac"  },
  "imaginación": { img: "imgs/EXTRA/imaginación.png", alt: "imaginación", audio: "Grabaciones/imaginación.aac"  },
  "juego": { img: "imgs/EXTRA/juego.png", alt: "juego", audio: "juego/agua.aac"  },
  "mejilla": { img: "imgs/EXTRA/mejilla.png", alt: "mejilla", audio: "Grabaciones/mejillas.aac"  },
  "nube": { img: "imgs/EXTRA/nube.png", alt: "nube", audio: "Grabaciones/nube.aac"  },
  "ojos": { img: "imgs/EXTRA/ojos.png", alt: "ojos", audio: "Grabaciones/ojos.aac" },
  "paso": { img: "imgs/EXTRA/paso.png", alt: "paso", audio: "Grabaciones/pasos.aac" },
  "piedra": { img: "imgs/EXTRA/piedra.png", alt: "piedra", audio: "Grabaciones/piedra.aac"  },
  "ratón": { img: "imgs/EXTRA/ratón.png", alt: "ratón", audio: "Grabaciones/ratón.aac"  },
  "ruidoso": { img: "imgs/EXTRA/ruidoso.png", alt: "ruidoso", audio: "Grabaciones/ruidoso.aac"  },
};

// ========= HISTORIAS =========
const historias = {
  contento: {
    inicio:
      "[personaje] llegó a [escenario] con una sonrisa enorme. Hoy estaba lleno de alegría, porque quería vivir un momento especial junto a todos en [escenario]. [personaje] miró alrededor y sintió que todo brillaba un poco más. Saltó, dio una vuelta y dijo: ‘¡Qué día tan alegre!’. Con cada paso, [personaje] notaba cómo la emoción de la alegría llenaba su corazón.",
    finales: [
      "Entonces decidió invitar a sus amigos. Jugaron a correr, saltar y cantar en [escenario]. Hubo risas, palmas y un gran ¡hurra! Al terminar, [personaje] se sintió todavía más alegre, como si el mundo fuera un arcoíris.",
      "Después, [personaje] organizó una pequeña sorpresa. Preparó un baile divertido y todos se unieron. Entre aplausos y carcajadas, [personaje] pensó: ‘¡Qué feliz soy en [escenario]!’."
    ]
  },
  triste: {
    inicio:
      "En [escenario], [personaje] caminaba despacito. Sus pasos sonaban suaves, como si no quisiera molestar a nadie. Sentía el corazón un poco pesado y la mirada baja. [personaje] suspiró: ‘uff’. Todo en [escenario] parecía gris y callado. Se sentó en un rincón, sintiendo cómo la emoción de la tristeza lo envolvía. Pero algo dentro le decía que no estaría así para siempre.",
    finales: [
      "De pronto, [personaje] encontró algo curioso en el suelo: una piedra brillante. La sostuvo y sonrió un poquito. Buscó a un amigo en [escenario] y compartió su hallazgo. Poco a poco, la nube triste se fue abriendo.",
      "Entonces escuchó una voz suave: ‘¿Estás bien, [personaje]?’ Era un amigo. Se sentaron juntos y hablaron despacito. Con cada palabra, la tristeza se hacía más pequeña hasta que el corazón se sintió más ligero."
    ]
  },
  asustado: {
    inicio:
      "De pronto, en [escenario], [personaje] escuchó un ruido extraño: ‘cric-cric’. Se quedó muy quieto. El corazón iba pum, pum, pum, como un tambor nervioso. [personaje] miró a un lado y al otro, pensando: ‘¿Qué fue eso?’. [escenario] parecía enorme y lleno de sombras. La emoción del miedo se hizo grande, y [personaje] sintió un escalofrío. Aun así, respiró hondo para calmarse.",
    finales: [
      "Contó hasta tres: uno… dos… tres. Caminó despacio y miró detrás de una piedra. ¡Era solo una hoja moviéndose! El miedo desapareció y [personaje] se rió con alivio. Corrió feliz por [escenario], sintiéndose valiente.",
      "Entonces vio algo moverse de nuevo. Pero al mirar bien, descubrió que era un ratón. ‘¡Qué ratón tan bonito’, pensó [personaje], sonriendo. Desde entonces, [escenario] ya no daba miedo."
    ]
  },
  enfadado: {
    inicio:
      "[personaje] estaba en [escenario] con el ceño fruncido. Las mejillas ardían de rabia y sentía el corazón latiendo rápido. Todo le molestaba y la emoción del enfado crecía como un globo. [personaje] pateó el suelo con fuerza. Miró a su alrededor, buscando algo que le hiciera sentir mejor. [escenario] parecía demasiado ruidoso. Cerró los ojos y pensó: ‘No quiero sentirme así’.",
    finales: [
      "Entonces decidió probar algo nuevo. Abrió la boca y sopló largo: ‘fuuuu’. Después contó con los dedos: uno, dos, tres. Poco a poco, el rojo intenso se volvió más suave, y el corazón se calmó. [personaje] sonrió al final.",
      "[personaje] buscó un amigo y dijo: ‘Necesito un minuto’. Tomó un poco de agua y habló con calma. El enfado se fue y, en su lugar, apareció una idea divertida para jugar juntos en [escenario]."
    ]
  },
  aburrido: {
    inicio:
      "[personaje] estaba en [escenario] sin saber qué hacer. Miraba el reloj y parecía que el tiempo no se movía. Todo estaba muy quieto y la emoción del aburrimiento no lo dejaba en paz. [personaje] dio una vuelta, luego otra. Suspiró y dijo: ‘¡Qué largo es este día!’. En [escenario] no pasaba nada interesante, pero entonces algo brilló en su imaginación: ¡podía inventar algo nuevo!",
    finales: [
      "[personaje] pensó: ‘Voy a crear un juego’. Y lo hizo: buscar, contar, saltar. Enseguida se sintió emocionado. El aburrimiento desapareció, y [personaje] terminó riendo en medio de [escenario].",
      "De pronto, [personaje] se puso unas gafas de explorador imaginarias. Miró todo con ojos nuevos. Descubrió colores, sombras y formas misteriosas. Así, [escenario] se convirtió en el lugar más divertido del mundo."
    ]
  }
};

// ========= TARJETAS =========
function crearTarjetas(lista, contenedorId, categoria, siguientePasoIndex = null) {
  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) return;
  contenedor.innerHTML = "";

  lista.forEach((item) => {
    const div = document.createElement("div");
    div.className = "tarjeta";
    const src = encodeURI(item.img);

    div.innerHTML = `<img src="${src}" alt="${item.nombre}" class="tarjeta-img">`;

    div.addEventListener("click", () => {
      seleccion[categoria] = item.nombre;

      if (categoria === "personaje") {
        seleccion.emocion = null;
        // Regenera las tarjetas de emociones con el array correcto
        crearTarjetas(getEmocionesArray(), "tarjetas-emocion", "emocion", null);
      }

      contenedor.querySelectorAll(".tarjeta").forEach((t) => t.classList.remove("seleccionada"));
      div.classList.add("seleccionada");

      // Reproduce audio y espera a que termine para avanzar
      reproducirAudio(item.audio, () => {
        if (siguientePasoIndex !== null) {
          irASeccion(siguientePasoIndex);
        } else {
          generarHistoria();
        }
      });
    });

    contenedor.appendChild(div);
  });
}

// ========= AUDIO =========
let currentAudio = null;

function reproducirAudio(src, onEnded) {
  if (!src) {
    if (onEnded) onEnded();
    return;
  }

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio(src);

  currentAudio.onended = () => {
    if (onEnded) onEnded();
  };

  currentAudio.play()
    .then(() => console.log("Reproduciendo:", src))
    .catch(err => {
      console.error("Error al reproducir audio:", err);
      if (onEnded) onEnded(); // Si falla el audio, que avance igual
    });
}

// ========= HELPERS =========
function findByName(arr, name) {
  return arr.find(e => e.nombre === name);
}

function getPersonajeSeleccionado() {
  return findByName(personajes, seleccion.personaje);
}

function getEmocionesArray() {
  const p = getPersonajeSeleccionado();
  if (p && p.genero === "femenino") return emocionesFemeninas;
  return emociones;
}

// Mapear emoción elegida al “key” de historias
function normalizarEmocionKey(nombreEmocion) {
  const n = (nombreEmocion || "").toLowerCase();
  const mapa = {
    "contenta": "contento",
    "aburrida": "aburrido",
    "asustada": "asustado",
    "enfadada": "enfadado",
    "triste": "triste" // igual para ambos géneros
  };
  return mapa[n] || n; 
}

function getImgSrcFor(categoria, nombre) {
  let map;
  if (categoria === "emocion") {
    map = getEmocionesArray();
  } else if (categoria === "personaje") {
    map = personajes;
  } else if (categoria === "escenario") {
    map = escenarios;
  } else {
    map = [];
  }
  const item = findByName(map, nombre);
  return item ? item.img : "";
}

function inlineImg(src, alt, audio) {
  if (!src) return "";
  return `<img class="inline-img" src="${encodeURI(src)}" alt="${alt}" data-audio="${audio}" style="cursor:pointer;">`;
}

function getEmocionSeleccionada() {
  const emoArr = getEmocionesArray();
  return findByName(emoArr, seleccion.emocion);
}

function capitalizar(str) {
  return (str || "").charAt(0).toUpperCase() + (str || "").slice(1);
}
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Crea <img> como las de inlineImg, pero como NODO (no string)
function createInlineImgEl({ img, audio, alt }) {
  const el = document.createElement("img");
  el.className = "inline-img";
  el.src = encodeURI(img);
  el.alt = alt || "";
  el.style.cursor = "pointer";
  if (audio) el.setAttribute("data-audio", audio);
  return el;
}


function applyKeywordImages(root, keywordsMap) {
  if (!root) return;

 
  const entries = Object.entries(keywordsMap).map(([key, media]) => {
    
    const pattern = `(?<!\\p{L})(${escapeRegExp(key)})((?!\\p{L}))`;
    const re = new RegExp(pattern, "giu");
    return { key, media, re };
  });

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  for (const node of textNodes) {
    let text = node.nodeValue;
    let changed = false;
    let parts = [{ text }]; // array de fragmentos alternando texto/imagen

    
    for (const { media, re } of entries) {
      const newParts = [];
      for (const part of parts) {
        if (!part.text) { newParts.push(part); continue; }
        const src = part.text;
        let lastIndex = 0;
        let match;
        while ((match = re.exec(src)) !== null) {
          changed = true;
          const before = src.slice(lastIndex, match.index);
          if (before) newParts.push({ text: before });

          
          newParts.push({ img: media.img, audio: media.audio, alt: match[1] });

          lastIndex = re.lastIndex;
        }
        const tail = src.slice(lastIndex);
        if (tail) newParts.push({ text: tail });
      }
      parts = newParts;
    }

    if (changed) {
      const frag = document.createDocumentFragment();
      for (const p of parts) {
        if (p.text != null) {
          frag.appendChild(document.createTextNode(p.text));
        } else if (p.img) {
          frag.appendChild(createInlineImgEl({ img: p.img, audio: p.audio, alt: p.alt }));
        }
      }
      node.parentNode.replaceChild(frag, node);
    }
  }
}


// ========= SECCIONES =========
function irASeccion(index) {
  if (index > pasoActual + 1) return;
  pasoActual = index;

  const secciones = [
    document.getElementById("seccion-personaje"),
    document.getElementById("seccion-escenario"),
    document.getElementById("seccion-emocion")
  ];
  secciones.forEach((s, i) => { if (s) s.style.display = i === index ? "block" : "none"; });

  document.querySelectorAll(".conector").forEach((c, i) => {
    c.classList.toggle("activo", i === index);
  });
}

function conectarBarraProgreso() {
  document.querySelectorAll(".conector").forEach((el, i) => {
    el.addEventListener("click", () => { if (i <= pasoActual) irASeccion(i); });
  });
}

// ========= HISTORIA =========
function generarHistoria() {
  const { personaje, escenario, emocion } = seleccion;
  if (!personaje || !escenario || !emocion) return;

  const key = normalizarEmocionKey(emocion); // clave compatible con `historias`
  const plantilla = historias[key];
  if (!plantilla) return;

  const p = findByName(personajes, personaje);
  const e = findByName(escenarios, escenario);
  const emo = getEmocionSeleccionada();

  const pImg   = inlineImg(getImgSrcFor("personaje", personaje), personaje, p?.audio);
  const eImg   = inlineImg(getImgSrcFor("escenario", escenario), escenario, e?.audio);
  const emoImg = inlineImg(getImgSrcFor("emocion", emocion), emocion, emo?.audio);

  // === Header de emoción (arriba del todo) ===
  const emocionHeader = `
    <div class="emocion-header text-center mb-3">
      ${emoImg}
      <div class="emocion-label font-weight-bold mt-2">${capitalizar(emocion)}</div>
    </div>
  `;

  const inicio = plantilla.inicio
    .replace(/\[personaje\]/g, pImg)
    .replace(/\[escenario\]/g, eImg)
    .replace(/\[emocion\]/g, emoImg);

  const cont = document.getElementById("resultado");
  cont.innerHTML = `
${emocionHeader}
<div class="historia-texto">
  <p>${inicio}</p>
  <div class="d-flex flex-wrap finales-btns justify-content-center">
    <button class="btn btn-primary m-2" onclick="mostrarFinal('${key}',0)">Final 1</button>
    <button class="btn btn-secondary m-2" onclick="mostrarFinal('${key}',1)">Final 2</button>
  </div>
</div>
<hr class="my-3">
<div id="wrap-reinicio" class="d-none text-center" style="margin-top: 1.5rem;">
  <button class="btn btn-outline-dark m-2" onclick="resetHistoria()">Volver a empezar otra historia</button>
  <button class="btn btn-outline-success m-2" onclick="descargarPDF()">Descargar historia en PDF</button>
</div>
`;
// Sustituir palabras por imágenes en el bloque de historia recién pintado
applyKeywordImages(cont.querySelector(".historia-texto"), keywordMedia);

  toggleUIForStory(true);
}


function mostrarFinal(emocionKey, index) {
  const plantilla = historias[emocionKey];
  if (!plantilla) return;

  const pImg = inlineImg(getImgSrcFor("personaje", seleccion.personaje), seleccion.personaje, findByName(personajes, seleccion.personaje)?.audio);
  const eImg = inlineImg(getImgSrcFor("escenario", seleccion.escenario), seleccion.escenario, findByName(escenarios, seleccion.escenario)?.audio);

  const textoFinal = plantilla.finales[index]
    .replace(/\[personaje\]/g, pImg)
    .replace(/\[escenario\]/g, eImg);

  const cont = document.getElementById("resultado");

  const botonesFinales = cont.querySelector(".finales-btns");
  if (botonesFinales) botonesFinales.remove();

  const existe = cont.querySelector(".final-elegido");
  if (existe) existe.remove();

  const p = document.createElement("p");
  p.className = "final-elegido font-weight-bold";
  p.innerHTML = textoFinal;
  cont.appendChild(p);

  const wrap = document.getElementById("wrap-reinicio");
  if (wrap) {
    wrap.classList.remove("d-none");
    cont.appendChild(wrap);
    applyKeywordImages(p, keywordMedia);
  }
}

function toggleUIForStory(mostrarHistoria) {
  const barra = document.querySelector(".conectores-lista");
  if (barra) barra.style.display = mostrarHistoria ? "none" : "";

  const ids = ["seccion-personaje", "seccion-escenario", "seccion-emocion"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.display = mostrarHistoria ? "none" : "block";
  });

  const res = document.getElementById("seccion-resultado");
  if (res) res.style.display = mostrarHistoria ? "block" : "none";
}

function resetHistoria() {
  seleccion.personaje = null;
  seleccion.escenario = null;
  seleccion.emocion = null;

  document.querySelectorAll(".tarjeta.seleccionada").forEach((t) => t.classList.remove("seleccionada"));

  const cont = document.getElementById("resultado");
  if (cont) cont.innerHTML = "";

  // Regenerar emociones a estado base
  crearTarjetas(getEmocionesArray(), "tarjetas-emocion", "emocion", null);

  toggleUIForStory(false);
  pasoActual = 0;
  irASeccion(0);
}

async function descargarPDF() {
  try {
    // 1) Espera a fuentes e imágenes para evitar "saltos" de render
    if (document.fonts?.ready) await document.fonts.ready;
    await Promise.all(
      Array.from(document.images)
        .filter(img => !img.complete)
        .map(img => new Promise(res => { img.onload = img.onerror = res; }))
    );

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "p", unit: "pt", format: "a4" });

    const element = document.getElementById("resultado");
    if (!element) throw new Error("No se encontró #resultado");

    // 2) Controla la escala (mejor que 2 fijo). Máx 2–3 para evitar mega-canvas
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);

    // 3) html2canvas con allowTaint y sin CORS
    const canvas = await html2canvas(element, {
      scale: dpr,
      backgroundColor: "#ffffff",
      allowTaint: true,
      logging: false,
      scrollX: 0,
      scrollY: -window.scrollY,
      ignoreElements: el =>
        el.id === "wrap-reinicio" || el.closest?.("#wrap-reinicio")
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const imgData = canvas.toDataURL("image/png");
    if (imgHeight <= pageHeight) {
      doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight, undefined, "FAST");
    } else {
      let remaining = imgHeight;
      let position = 0;

      const pageCanvas = document.createElement("canvas");
      const ctx = pageCanvas.getContext("2d");

      const ratio = canvas.width / imgWidth;
      pageCanvas.width = canvas.width;
      pageCanvas.height = Math.floor(pageHeight * ratio);

      while (remaining > 0) {
        const sx = 0;
        const sy = Math.floor(position * ratio);
        const sWidth = canvas.width;
        const sHeight = Math.min(pageCanvas.height, canvas.height - sy);

        ctx.clearRect(0, 0, pageCanvas.width, pageCanvas.height);
        ctx.drawImage(canvas, sx, sy, sWidth, sHeight, 0, 0, sWidth, sHeight);

        const segmentData = pageCanvas.toDataURL("image/png");
        doc.addImage(segmentData, "PNG", 0, 0, imgWidth, (sHeight / ratio), undefined, "FAST");

        remaining -= (sHeight / ratio);
        position += (sHeight / ratio);

        if (remaining > 0) doc.addPage();
      }
    }

    doc.setProperties({
      title: "mi_historia",
      subject: "Exportación PDF",
      creator: "Tu App"
    });
    doc.save("mi_historia.pdf");

  } catch (err) {
    console.error(err);
    alert("No se pudo generar el PDF. Revisa la consola para más detalles.");
  }
}


// ========= ARRANQUE =========
window.addEventListener("load", () => {
  crearTarjetas(personajes, "tarjetas-personaje", "personaje", 1);
  crearTarjetas(escenarios, "tarjetas-escenario", "escenario", 2);
  // Emociones iniciales según el personaje (si no hay, usa las masculinas por defecto)
  crearTarjetas(getEmocionesArray(), "tarjetas-emocion", "emocion", null);

  conectarBarraProgreso();
  irASeccion(0);
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("inline-img")) {
    const audioSrc = e.target.getAttribute("data-audio");
    if (audioSrc) {
      reproducirAudio(audioSrc);
    }
  }
});

