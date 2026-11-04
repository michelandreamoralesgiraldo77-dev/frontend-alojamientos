export function paginaDetalleAlojamiento(id) {
  return `
    <div class="container">
      <a href="/alojamientos" data-ruta class="btn btn-outline-secondary mb-4">
        <i class="bi bi-arrow-left me-1"></i>Volver a Alojamientos
      </a>
      
      <div id="detalle-alojamiento">
        <div class="text-center py-5">
          <div class="spinner-border text-primary" role="status"></div>
          <p class="mt-2 text-muted">Cargando información del alojamiento #${id}...</p>
        </div>
      </div>
    </div>
  `
}