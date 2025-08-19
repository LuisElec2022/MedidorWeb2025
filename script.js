let contador = 0;

function actualizarMedidor() {
  // Simulación de consumo promedio:
  // Supongamos potencia promedio 1900 W
  // Intervalo = 2 segundos → delta_t = 2/3600 h
  const potenciaPromedio = 240; // W
  const delta_h = 10 / 3600; // horas
  const incremento = potenciaPromedio * delta_h; // kWh

  contador += incremento;

  if (contador > 9999.99) contador = 0;

  const valorFormateado = contador.toFixed(2).padStart(7, '0');
  document.getElementById('kwh').innerText = valorFormateado;
}

setInterval(actualizarMedidor, 5000);

// ==== Fecha ====
let fechaActual = new Date();

function actualizarFecha() {
  fechaActual.setMinutes(fechaActual.getMinutes() + 2);

  const dia = fechaActual.getDate().toString().padStart(2, '0');
  const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
  const año = fechaActual.getFullYear();

  const fechaFormateada = `${dia}/${mes}/${año}`;
  document.getElementById('fecha').innerText = fechaFormateada;
}

actualizarFecha();
setInterval(actualizarFecha, 120000);
