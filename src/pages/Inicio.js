export function paginaInicio() {
  return `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h1 class="display-4 mb-4">🏨 Bienvenido al Proyecto Alojamientos</h1>
          <p class="lead text-muted mb-5">Sistema de gestión de alojamientos — Frontend con JavaScript Vanilla, Vite y Bootstrap</p>
          
          <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <a href="/alojamientos" data-ruta class="btn btn-primary btn-lg px-4 gap-3">
              <i class="bi bi-building me-2"></i>Ver Alojamientos
            </a>
            <a href="/comodidades" data-ruta class="btn btn-outline-secondary btn-lg px-4">
              <i class="bi bi-lamp me-2"></i>Comodidades
            </a>
          </div>
        </div>
      </div>
      
      <div class="row mt-5">
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body text-center">
              <i class="bi bi-database display-4 text-primary mb-3"></i>
              <h5 class="card-title">Backend Conectado</h5>
              <p class="card-text text-muted">Consumo de API REST con Fetch</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body text-center">
              <i class="bi bi-shield-lock display-4 text-success mb-3"></i>
              <h5 class="card-title">Autenticación</h5>
              <p class="card-text text-muted">Módulo de usuarios y sesión</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body text-center">
              <i class="bi bi-pencil-square display-4 text-info mb-3"></i>
              <h5 class="card-title">CRUD Completo</h5>
              <p class="card-text text-muted">Crear, leer, actualizar y eliminar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}