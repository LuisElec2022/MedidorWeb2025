let contador = 0;

function actualizarMedidor() {
  let incremento = Math.random() * 7;
  contador += incremento;

  if (contador > 9999.99) contador = 0;

  const valorFormateado = contador.toFixed(2).padStart(7, '0');
  document.getElementById('kwh').innerText = valorFormateado;
}

setInterval(actualizarMedidor, 2000);

let fechaActual = new Date();

function actualizarFecha() {
  // Suma 2 minutos cada vez que se llama
  fechaActual.setMinutes(fechaActual.getMinutes() + 2);

  const dia = fechaActual.getDate().toString().padStart(2, '0');
  const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
  const año = fechaActual.getFullYear();

  const fechaFormateada = `${dia}/${mes}/${año}`;
  document.getElementById('fecha').innerText = fechaFormateada;
}

// Inicial
actualizarFecha();
// Cada 2 minutos reales (120000 ms)
setInterval(actualizarFecha, 120000);
