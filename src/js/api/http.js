import { sesion } from '../state/sesion.js'

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000'

async function solicitar(ruta, opciones = {}) {
  const token = sesion.obtenerToken()
  
  const configuracion = {
    ...opciones,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
      ...opciones.headers
    }
  }

  try {
    const respuesta = await fetch(`${API_URL}${ruta}`, configuracion)
    
    if (respuesta.status === 401) {
      sesion.cerrar()
      window.location.href = '/login'
      throw new Error('Sesión expirada, inicia sesión nuevamente')
    }

    const datos = await respuesta.json().catch(() => ({}))

    if (!respuesta.ok) {
      throw new Error(datos.error || `Error ${respuesta.status}`)
    }

    return datos
  } catch (error) {
    throw error
  }
}

export const http = {
  get: (ruta) => solicitar(ruta, { method: 'GET' }),
  post: (ruta, cuerpo) => solicitar(ruta, { method: 'POST', body: JSON.stringify(cuerpo) })
}