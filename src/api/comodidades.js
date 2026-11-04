const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export async function obtenerComodidades() {
  const respuesta = await fetch(`${API_URL}/api/v1/comodidades`)
  if (!respuesta.ok) throw new Error('No se pudieron cargar las comodidades')
  return await respuesta.json()
}