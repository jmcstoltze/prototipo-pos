// Función para mostrar/ocultar el menú
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.classList.toggle('active');
    content.classList.toggle('shifted');
}
        
// Cerrar menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
const sidebar = document.getElementById('sidebar');
const hamburger = document.querySelector('.navbar-toggler-icon');
            
if (!sidebar.contains(event.target) && event.target !== hamburger && !hamburger.contains(event.target)) {
    sidebar.classList.remove('active');
    document.getElementById('content').classList.remove('shifted');
    }
});

// Función para manejar los submenús
document.querySelectorAll('.submenu-toggle').forEach(item => {
    item.addEventListener('click', function(e) {
    e.preventDefault();
    const parent = this.parentElement;
    parent.classList.toggle('active');
            
    // Cerrar otros submenús abiertos
    document.querySelectorAll('.has-submenu').forEach(submenu => {
        if (submenu !== parent && submenu.classList.contains('active')) {
            submenu.classList.remove('active');
        }
    });
});
});

// Función para habilitar/deshabilitar el modo edición
function enableEditMode() {
    const editButtons = document.querySelectorAll('.edit-buttons');
    editButtons.forEach(button => {
        button.classList.toggle('d-none');
    });
}
        