import { paginaInicio } from '../pages/Inicio.js'
import { paginaAlojamientos } from '../pages/Alojamientos.js'
import { paginaDetalleAlojamiento } from '../pages/DetalleAlojamiento.js'
import { paginaComodidades } from '../pages/Comodidades.js'
import { paginaEstadoAPI } from '../pages/EstadoAPI.js'
import { pagina404 } from '../pages/404.js'
import { renderizarNavbar } from '../components/Navbar.js'
import { renderizarFooter } from '../components/Footer.js'

const rutas = {
  '/': paginaInicio,
  '/alojamientos': paginaAlojamientos,
  '/comodidades': paginaComodidades,
  '/estado-api': paginaEstadoAPI
}

export function iniciarRouter() {
  window.addEventListener('popstate', renderizarPagina)
  renderizarPagina()
}

export function navegar(ruta) {
  history.pushState({}, '', ruta)
  renderizarPagina()
}

function renderizarPagina() {
  const ruta = window.location.pathname
  const app = document.getElementById('app')
  
  let vista = rutas[ruta]
  
  if (!vista) {
    if (ruta.startsWith('/alojamientos/')) {
      const id = ruta.split('/')[2]
      vista = () => paginaDetalleAlojamiento(id)
    } else {
      vista = pagina404
    }
  }
  
  app.innerHTML = `
    ${renderizarNavbar()}
    <main class="flex-grow-1">
      ${vista()}
    </main>
    ${renderizarFooter()}
  `
}