import { sesion } from './state/sesion.js'

export function actualizarNavegacion() {
  // Elementos del menú
  const menuLogin = document.getElementById('menu-login')
  const menuRegistro = document.getElementById('menu-registro')
  const menuPerfil = document.getElementById('menu-perfil')
  const menuAdmin = document.getElementById('menu-admin')
  const menuCerrar = document.getElementById('menu-cerrar')

  if (sesion.estaAutenticado()) {
    menuLogin.style.display = 'none'
    menuRegistro.style.display = 'none'
    menuPerfil.style.display = 'block'
    menuCerrar.style.display = 'block'
    
    menuAdmin.style.display = sesion.esAdmin() ? 'block' : 'none'
  } else {
    menuLogin.style.display = 'block'
    menuRegistro.style.display = 'block'
    menuPerfil.style.display = 'none'
    menuAdmin.style.display = 'none'
    menuCerrar.style.display = 'none'
  }
}

export function configurarCerrarSesion() {
  const btnCerrar = document.getElementById('btnCerrarSesion')
  if (!btnCerrar) return

  btnCerrar.addEventListener('click', (e) => {
    e.preventDefault()
    sesion.cerrar()
    window.location.href = '/'
  })
}