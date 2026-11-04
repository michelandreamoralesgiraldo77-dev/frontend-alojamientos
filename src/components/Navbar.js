import { navegar } from '../router/index.js'

export function renderizarNavbar() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div class="container">
        <a class="navbar-brand" href="/" data-ruta>Inicio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/" data-ruta>Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/alojamientos" data-ruta>Alojamientos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/comodidades" data-ruta>Comodidades</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/estado-api" data-ruta>Estado API</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
}

document.addEventListener('click', (e) => {
  if (e.target.matches('[data-ruta]')) {
    e.preventDefault()
    navegar(e.target.getAttribute('href'))
  }
})