import { paginaInicio } from '../pages/Inicio.js'
import { paginaAlojamientos } from '../pages/Alojamientos.js'
import { paginaComodidades } from '../pages/Comodidades.js'
import { paginaEstadoAPI } from '../pages/EstadoAPI.js'
import { RegistroPage } from '../pages/RegistroPage.js'
import { LoginPage } from '../pages/LoginPage.js'
import { PerfilPage } from '../pages/PerfilPage.js'
import { AdminUsuariosPage } from '../pages/AdminUsuariosPage.js'  
import { NoAutorizadoPage } from '../pages/NoAutorizadoPage.js'
import { sesion } from './state/sesion.js'
import { actualizarNavegacion, configurarCerrarSesion } from './nav-sesion.js'

const rutas = {
  '/': paginaInicio,
  '/alojamientos': paginaAlojamientos,
  '/comodidades': paginaComodidades,
  '/estado-api': paginaEstadoAPI,
  '/registro': RegistroPage,
  '/login': LoginPage,
  '/perfil': PerfilPage,
  '/admin/usuarios': AdminUsuariosPage,  
  '/no-autorizado': NoAutorizadoPage
}

function navegar(ruta) {
  const app = document.getElementById('app')
  if (!app) return
  app.innerHTML = ''

  const rutasPrivadas = ['/perfil', '/admin/usuarios']
  if (rutasPrivadas.includes(ruta) && !sesion.estaAutenticado()) {
    ruta = '/no-autorizado'
  }

  if (ruta === '/admin/usuarios' && !sesion.esAdmin()) {
    ruta = '/no-autorizado'
  }

  const componente = rutas[ruta] || paginaInicio
  const elemento = componente()
  if (elemento instanceof HTMLElement) {
    app.appendChild(elemento)
  } else {
    app.innerHTML = elemento
  }

  actualizarNavegacion()
}

document.addEventListener('click', (e) => {
  const enlace = e.target.closest('a[data-link], a[data-ruta]')
  if (enlace) {
    e.preventDefault()
    const ruta = enlace.getAttribute('href')
    history.pushState({}, '', ruta)
    navegar(ruta)
  }
})

window.addEventListener('popstate', () => {
  navegar(window.location.pathname)
})

configurarCerrarSesion()
navegar(window.location.pathname)