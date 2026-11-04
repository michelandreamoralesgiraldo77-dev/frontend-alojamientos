import { authApi } from '../js/api/auth.api.js'
import { sesion } from '../js/state/sesion.js'

export const AdminUsuariosPage = () => {
  const contenedor = document.createElement('div')
  contenedor.className = 'container py-5'

  if (!sesion.estaAutenticado() || !sesion.esAdmin()) {
    window.location.href = '/no-autorizado'
    return contenedor
  }

  contenedor.innerHTML = `
    <div class="row">
      <div class="col-12">
        <h2 class="mb-4">
          <i class="bi bi-people me-2"></i>Gestión de Usuarios
        </h2>
        <div id="contenido" class="card shadow-sm">
          <div class="text-center py-5">
            <div class="spinner-border text-primary" role="status"></div>
            <p class="mt-2">Cargando usuarios...</p>
          </div>
        </div>
      </div>
    </div>
  `

  setTimeout(async () => {
    try {
      const usuarios = await authApi.listarUsuarios()
      
      document.getElementById('contenido').innerHTML = `
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover">
              <thead class="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Rol</th>
                </tr>
              </thead>
              <tbody>
                ${usuarios.map(u => `
                  <tr>
                    <td>${u.id}</td>
                    <td>${u.nombre}</td>
                    <td>${u.correo}</td>
                    <td>
                      <span class="badge ${u.rol === 'admin' ? 'bg-danger' : 'bg-secondary'}">
                        ${u.rol === 'admin' ? 'Admin' : 'Usuario'}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `
    } catch (error) {
      document.getElementById('contenido').innerHTML = `
        <div class="alert alert-danger m-3">❌ ${error.message}</div>
      `
    }
  }, 0)

  return contenedor
}