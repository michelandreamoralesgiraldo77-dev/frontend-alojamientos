const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export async function obtenerAlojamientos() {
  const respuesta = await fetch(`${API_URL}/api/v1/alojamientos`)
  if (!respuesta.ok) throw new Error('No se pudieron cargar los alojamientos')
  return await respuesta.json()
}

export async function obtenerAlojamientoPorId(id) {
  const respuesta = await fetch(`${API_URL}/api/v1/alojamientos/${id}`)
  if (!respuesta.ok) throw new Error('Alojamiento no encontrado')
  return await respuesta.json()
}