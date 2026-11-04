export function pagina404() {
  return `
    <div class="container text-center py-5">
      <h1 class="display-1 text-muted">404</h1>
      <h2 class="mb-3">Página no encontrada</h2>
      <p class="text-muted mb-4">Lo sentimos, la página que buscas no existe.</p>
      <a href="/" data-ruta class="btn btn-primary">
        <i class="bi bi-house me-1"></i>Volver al Inicio
      </a>
    </div>
  `
}