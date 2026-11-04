const CLAVE_TOKEN = 'jwt_token'
const CLAVE_USUARIO = 'usuario_datos'

export const sesion = {
  guardar(token, usuario) {
    sessionStorage.setItem(CLAVE_TOKEN, token)
    sessionStorage.setItem(CLAVE_USUARIO, JSON.stringify(usuario))
  },

  obtenerToken() {
    return sessionStorage.getItem(CLAVE_TOKEN)
  },

  obtenerUsuario() {
    const datos = sessionStorage.getItem(CLAVE_USUARIO)
    return datos ? JSON.parse(datos) : null
  },

  estaAutenticado() {
    return !!this.obtenerToken()
  },

  esAdmin() {
    const usuario = this.obtenerUsuario()
    return usuario?.rol === 'admin'
  },

  cerrar() {
    sessionStorage.removeItem(CLAVE_TOKEN)
    sessionStorage.removeItem(CLAVE_USUARIO)
  }
}