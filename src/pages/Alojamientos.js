import { obtenerAlojamientos } from '../api/alojamientos.js'

export function paginaAlojamientos() {
  setTimeout(cargarAlojamientos, 100)
  
  return `
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2><i class="bi bi-building me-2"></i>Alojamientos</h2>
        <button class="btn btn-primary" disabled>
          <i class="bi bi-plus-lg me-1"></i>Nuevo Alojamiento
        </button>
      </div>
      
      <div class="row" id="lista-alojamientos">
        <div class="col-12 text-center py-5">
          <div class="spinner-border text-primary" role="status"></div>
          <p class="mt-2 text-muted">Cargando alojamientos...</p>
        </div>
      </div>
    </div>
  `
}

async function cargarAlojamientos() {
  const contenedor = document.getElementById('lista-alojamientos')
  if (!contenedor) return

  try {
    const alojamientos = await obtenerAlojamientos()
    
    if (alojamientos.length === 0) {
      contenedor.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="bi bi-inbox display-4 text-muted mb-3"></i>
          <h5>No hay alojamientos registrados</h5>
          <p class="text-muted">Vuelve más tarde o agrega uno nuevo.</p>
        </div>
      `
      return
    }

    contenedor.innerHTML = alojamientos.map(aloj => `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${aloj.nombre || 'Sin nombre'}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${aloj.ciudad || ''}, ${aloj.pais || ''}</h6>
            <p class="card-text small text-truncate">${aloj.descripcion || 'Sin descripción'}</p>
            <p class="text-primary fw-bold">$${aloj.precio_noche || '0'} / noche</p>
            <a href="/alojamientos/${aloj.id}" data-ruta class="btn btn-outline-primary w-100">
              <i class="bi bi-eye me-1"></i>Ver detalles
            </a>
          </div>
        </div>
      </div>
    `).join('')

  } catch (error) {
    contenedor.innerHTML = `
      <div class="col-12 text-center py-5 text-danger">
        <i class="bi bi-exclamation-triangle display-4 mb-3"></i>
        <h5>Error al cargar los alojamientos</h5>
        <p class="text-muted">${error.message}</p>
      </div>
    `
  }
}