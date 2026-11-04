import { authApi } from '../js/api/auth.api.js'
import { sesion } from '../js/state/sesion.js'

export const PerfilPage = () => {
  const contenedor = document.createElement('div')
  contenedor.className = 'container py-5'

  if (!sesion.estaAutenticado()) {
    window.location.href = '/no-autorizado'
    return contenedor
  }

  contenedor.innerHTML = `
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <h2 class="mb-4">Mi Perfil</h2>
        <div id="contenido" class="card p-4 shadow-sm">
          <div class="text-center py-4">
            <div class="spinner-border text-primary" role="status"></div>
            <p class="mt-2">Cargando información...</p>
          </div>
        </div>
      </div>
    </div>
  `

  setTimeout(async () => {
    try {
      const usuario = await authApi.perfil()
      document.getElementById('contenido').innerHTML = `
        <h4 class="mb-3">${usuario.nombre}</h4>
        <hr>
        <p><strong>Correo:</strong> ${usuario.correo}</p>
        <p><strong>Rol:</strong> 
          <span class="badge ${usuario.rol === 'admin' ? 'bg-danger' : 'bg-primary'}">
            ${usuario.rol === 'admin' ? 'Administrador' : 'Usuario'}
          </span>
        </p>
        <p><strong>ID:</strong> ${usuario.id}</p>
      `
    } catch (error) {
      document.getElementById('contenido').innerHTML = `
        <div class="alert alert-danger">❌ Error al cargar perfil: ${error.message}</div>
      `
    }
  }, 0)

  return contenedor
}