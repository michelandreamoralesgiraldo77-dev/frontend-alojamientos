import { http } from './http.js'

export const authApi = {
  registro: (datos) => http.post('/api/v1/usuarios/registro', datos),
  login: (datos) => http.post('/api/v1/usuarios/login', datos),
  perfil: () => http.get('/api/v1/usuarios/perfil'),
  listarUsuarios: () => http.get('/api/v1/admin/usuarios')
}