import { authApi } from '../js/api/auth.api.js'
import { sesion } from '../js/state/sesion.js'
import { validarCorreo, validarContrasena } from '../js/utils/validaciones.js'

export const LoginPage = () => {
  const contenedor = document.createElement('div')
  contenedor.className = 'container py-5'

  contenedor.innerHTML = `
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <h2 class="text-center mb-4">Iniciar Sesión</h2>
        
        <div id="mensaje" class="mb-3"></div>
        
        <form id="formLogin" class="card p-4 shadow-sm">
          <div class="mb-3">
            <label for="correo" class="form-label">Correo electrónico</label>
            <input type="email" id="correo" class="form-control" required>
            <div id="error-correo" class="text-danger small mt-1"></div>
          </div>
          
          <div class="mb-3">
            <label for="contrasena" class="form-label">Contraseña</label>
            <input type="password" id="contrasena" class="form-control" required>
            <div id="error-contrasena" class="text-danger small mt-1"></div>
          </div>
          
          <button type="submit" class="btn btn-primary w-100">Ingresar</button>
          
          <p class="text-center mt-3">
            ¿No tienes cuenta? <a href="/registro" data-link>Regístrate aquí</a>
          </p>
        </form>
      </div>
    </div>
  `

  setTimeout(() => {
    const form = document.getElementById('formLogin')
    const mensajeDiv = document.getElementById('mensaje')

    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      mensajeDiv.innerHTML = ''
      
      const correo = document.getElementById('correo').value
      const contrasena = document.getElementById('contrasena').value

      // Validaciones
      const errCorreo = validarCorreo(correo)
      const errPass = validarContrasena(contrasena)
      
      document.getElementById('error-correo').textContent = errCorreo || ''
      document.getElementById('error-contrasena').textContent = errPass || ''
      
      if (errCorreo || errPass) return

      try {
        const datos = await authApi.login({ correo, contrasena })
        sesion.guardar(datos.token, datos.usuario)
        mensajeDiv.innerHTML = `<div class="alert alert-success">✅ ¡Bienvenido, ${datos.usuario.nombre}!</div>`
        setTimeout(() => window.location.href = '/', 1000)
      } catch (error) {
        mensajeDiv.innerHTML = `<div class="alert alert-danger">❌ ${error.message}</div>`
      }
    })
  }, 0)

  return contenedor
}