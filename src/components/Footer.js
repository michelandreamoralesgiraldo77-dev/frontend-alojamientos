export function renderizarFooter() {
  return `
    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container text-center">
        <p class="mb-0">🏨 Proyecto Alojamientos — Módulo Frontend con JavaScript</p>
        <p class="text-muted small mb-0">© ${new Date().getFullYear()} — Todos los derechos reservados</p>
      </div>
    </footer>
  `
}