import { sesion } from '../js/state/sesion.js'

export const Navbar = () => {
  const nav = document.createElement('nav')
  nav.className = 'navbar navbar-expand-lg navbar-dark bg-primary mb-4'

  const renderMenu = () => {
    const autenticado = sesion.estaAutenticado()
    const esAdmin = sesion.esAdmin()
    const usuario = sesion.obtenerUsuario()

    nav.innerHTML = `
      <div class="container">
        <a class="navbar-brand" href="/" data-link>
          <i class="bi bi-house-door me-2"></i>Alojamientos
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="menuNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" href="/" data-link>Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/alojamientos" data-link>Alojamientos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/comodidades" data-link>Comodidades</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/estado-api" data-link>Estado API</a>
            </li>
            ${autenticado && esAdmin ? `
              <li class="nav-item">
                <a class="nav-link" href="/admin/usuarios" data-link>
                  <i class="bi bi-people"></i> Usuarios
                </a>
              </li>
            ` : ''}
          </ul>
          
          <ul class="navbar-nav">
            ${!autenticado ? `
              <li class="nav-item">
                <a class="nav-link" href="/registro" data-link>Registrarse</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/login" data-link>Iniciar Sesión</a>
              </li>
            ` : `
              <li class="nav-item">
                <span class="nav-link">
                  <i class="bi bi-person-circle"></i> ${usuario?.nombre}
                </span>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/perfil" data-link>Mi Perfil</a>
              </li>
              <li class="nav-item">
                <button id="btnCerrarSesion" class="btn btn-outline-light btn-sm ms-2">
                  Cerrar Sesión
                </button>
              </li>
            `}
          </ul>
        </div>
      </div>
    `

    setTimeout(() => {
      const btnCerrar = document.getElementById('btnCerrarSesion')
      if (btnCerrar) {
        btnCerrar.addEventListener('click', () => {
          sesion.cerrar()
          window.location.href = '/'
        })
      }
    }, 0)
  }

  renderMenu()
  return nav
}