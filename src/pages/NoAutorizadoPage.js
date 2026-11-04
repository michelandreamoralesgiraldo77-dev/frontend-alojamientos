export const NoAutorizadoPage = () => {
  const contenedor = document.createElement('div')
  contenedor.className = 'container py-5'

  contenedor.innerHTML = `
    <div class="row justify-content-center text-center">
      <div class="col-md-8 col-lg-6">
        <div class="card p-5 shadow-sm">
          <i class="bi bi-shield-lock display-1 text-muted mb-4"></i>
          <h2 class="text-danger mb-3">Acceso Denegado</h2>
          <p class="text-muted mb-4">No tienes permiso para acceder a esta página.</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="/" data-link class="btn btn-primary">
              <i class="bi bi-house me-2"></i>Ir al Inicio
            </a>
            <a href="/login" data-link class="btn btn-outline-secondary">
              <i class="bi bi-box-arrow-in-right me-2"></i>Iniciar Sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  `

  return contenedor
}