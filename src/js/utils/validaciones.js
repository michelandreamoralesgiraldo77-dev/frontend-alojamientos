export const validarCorreo = (correo) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!correo?.trim()) return 'El correo es obligatorio'
  if (!regex.test(correo)) return 'Ingresa un correo válido'
  return null
}

export const validarContrasena = (contrasena) => {
  if (!contrasena) return 'La contraseña es obligatoria'
  if (contrasena.length < 6) return 'La contraseña debe tener al menos 6 caracteres'
  return null
}

export const validarConfirmacion = (contrasena, confirmacion) => {
  if (contrasena !== confirmacion) return 'Las contraseñas no coinciden'
  return null
}

export const validarNombre = (nombre) => {
  if (!nombre?.trim()) return 'El nombre es obligatorio'
  if (nombre.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres'
  return null
}