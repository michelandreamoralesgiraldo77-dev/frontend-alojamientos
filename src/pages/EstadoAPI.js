const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000'

export function paginaEstadoAPI() {
  setTimeout(verificarConexion, 100)
  
  return `
    <div class="container">
      <h2 class="mb-4"><i class="bi bi-plug me-2"></i>Estado de Conexión con API</h2>
      
      <div class="card">
        <div class="card-body text-center py-5">
          <div id="estado-icono" class="display-1 text-muted mb-3">
            <i class="bi bi-question-circle"></i>
          </div>
          <h4 id="estado-texto">Verificando conexión...</h4>
          <p class="text-muted mb-3">URL de la API: <code>${API_URL}</code></p>
          <button id="btn-verificar" class="btn btn-primary">
            <i class="bi bi-arrow-clockwise me-1"></i>Verificar de nuevo
          </button>
        </div>
      </div>
    </div>
  `
}

async function verificarConexion() {
  const icono = document.getElementById('estado-icono')
  const texto = document.getElementById('estado-texto')
  const boton = document.getElementById('btn-verificar')
  
  if (!icono) return
  
  try {
    icono.innerHTML = '<div class="spinner-border text-primary"></div>'
    texto.textContent = 'Conectando con la API...'
    
    const respuesta = await fetch(`${API_URL}/`, {
      method: 'GET',
      mode: 'cors'
    })
    
    if (respuesta.ok) {
      const datos = await respuesta.json()
      icono.innerHTML = '<i class="bi bi-check-circle-fill text-success"></i>'
      texto.innerHTML = `✅ Conectado — ${datos.mensaje || 'API funcionando correctamente'}`
    } else {
      throw new Error(`Error: ${respuesta.status}`)
    }
  } catch (error) {
    icono.innerHTML = '<i class="bi bi-x-circle-fill text-danger"></i>'
    texto.innerHTML = `❌ No se pudo conectar: ${error.message}<br><small class="text-muted">Verifica que el backend esté corriendo en ${API_URL}</small>`
  }
  
  if (boton) {
    boton.onclick = verificarConexion
  }
}