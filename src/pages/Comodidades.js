import { obtenerComodidades } from '../api/comodidades.js'

export function paginaComodidades() {
  setTimeout(cargarComodidades, 100)
  
  return `
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h2><i class="bi bi-lamp me-2"></i>Comodidades</h2>
        <button class="btn btn-primary" disabled>
          <i class="bi bi-plus-lg me-1"></i>Nueva Comodidad
        </button>
      </div>
      
      <div class="row" id="lista-comodidades">
        <div class="col-12 text-center py-5">
          <div class="spinner-border text-primary" role="status"></div>
          <p class="mt-2 text-muted">Cargando comodidades...</p>
        </div>
      </div>
    </div>
  `
}

async function cargarComodidades() {
  const contenedor = document.getElementById('lista-comodidades')
  if (!contenedor) return

  try {
    const comodidades = await obtenerComodidades()
    
    if (comodidades.length === 0) {
      contenedor.innerHTML = `
        <div class="col-12 text-center py-5">
          <i class="bi bi-inbox display-4 text-muted mb-3"></i>
          <h5>No hay comodidades registradas</h5>
          <p class="text-muted">Vuelve más tarde.</p>
        </div>
      `
      return
    }

    contenedor.innerHTML = comodidades.map(com => `
      <div class="col-md-4 col-sm-6 mb-3">
        <div class="card h-100">
          <div class="card-body text-center">
            <i class="bi bi-check-circle display-5 text-success mb-2"></i>
            <h5 class="card-title h6">${com.nombre || 'Sin nombre'}</h5>
          </div>
        </div>
      </div>
    `).join('')

  } catch (error) {
    contenedor.innerHTML = `
      <div class="col-12 text-center py-5 text-danger">
        <i class="bi bi-exclamation-triangle display-4 mb-3"></i>
        <h5>Error al cargar las comodidades</h5>
        <p class="text-muted">${error.message}</p>
      </div>
    `
  }
}