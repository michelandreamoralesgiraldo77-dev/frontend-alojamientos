import { authApi } from '../js/api/auth.api.js'
import { validarCorreo, validarContrasena, validarConfirmacion, validarNombre } from '../js/utils/validaciones.js'

export const RegistroPage = () => {
  const contenedor = document.createElement('div')
  contenedor.className = 'container py-5'

  contenedor.innerHTML = `
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <h2 class="text-center mb-4">Crear Cuenta</h2>
        
        <div id="mensaje" class="mb-3"></div>
        
        <form id="formRegistro" class="card p-4 shadow-sm">
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre completo</label>
            <input type="text" id="nombre" class="form-control" required>
            <div id="error-nombre" class="text-danger small mt-1"></div>
          </div>
          
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
          
          <div class="mb-3">
            <label for="confirmar" class="form-label">Confirmar contraseña</label>
            <input type="password" id="confirmar" class="form-control" required>
            <div id="error-confirmar" class="text-danger small mt-1"></div>
          </div>
          
          <button type="submit" class="btn btn-primary w-100">Registrarse</button>
          
          <p class="text-center mt-3">
            ¿Ya tienes cuenta? <a href="/login" data-link>Inicia sesión</a>
          </p>
        </form>
      </div>
    </div>
  `

  setTimeout(() => {
    const form = document.getElementById('formRegistro')
    const mensajeDiv = document.getElementById('mensaje')

    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      mensajeDiv.innerHTML = ''
      
      const nombre = document.getElementById('nombre').value
      const correo = document.getElementById('correo').value
      const contrasena = document.getElementById('contrasena').value
      const confirmar = document.getElementById('confirmar').value

      // Validaciones
      let hayError = false
      
      const errNombre = validarNombre(nombre)
      document.getElementById('error-nombre').textContent = errNombre || ''
      if (errNombre) hayError = true
      
      const errCorreo = validarCorreo(correo)
      document.getElementById('error-correo').textContent = errCorreo || ''
      if (errCorreo) hayError = true
      
      const errPass = validarContrasena(contrasena)
      document.getElementById('error-contrasena').textContent = errPass || ''
      if (errPass) hayError = true
      
      const errConf = validarConfirmacion(contrasena, confirmar)
      document.getElementById('error-confirmar').textContent = errConf || ''
      if (errConf) hayError = true

      if (hayError) return

      try {
        await authApi.registro({ nombre, correo, contrasena })
        mensajeDiv.innerHTML = `<div class="alert alert-success">✅ ¡Registro exitoso! Redirigiendo al inicio de sesión...</div>`
        setTimeout(() => window.location.href = '/login', 1500)
      } catch (error) {
        mensajeDiv.innerHTML = `<div class="alert alert-danger">❌ ${error.message}</div>`
      }
    })
  }, 0)

  return contenedor
}