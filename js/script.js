
// Función para mostrar/ocultar el menú
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.classList.toggle('active');

    // Solo para móviles (≤768px)
    if (window.innerWidth <= 768) {
        content.classList.toggle('sidebar-active');
    } else {
        // Para pantallas grandes (>768px)
        content.classList.toggle('shifted');
    }
}

// Cerrar menú al hacer clic fuera de él (versión corregida)
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.navbar-toggler-icon');
    const content = document.getElementById('content');

    if (!sidebar.contains(event.target) && event.target !== hamburger && !hamburger.contains(event.target)) {
        sidebar.classList.remove('active');

        // Elimina ambas clases para asegurar el estado correcto
        content.classList.remove('shifted', 'sidebar-active');
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

// Función para cargar datos del producto
function loadProductData(sku) {
    // Aquí normalmente harías una petición AJAX o buscar datos
    // Ejemplo con datos estáticos basados en el SKU:
    const productData = {
        'GTR-IBZ-AS53': {
            category: 'Instrumentos musicales',
            name: 'Guitarra eléctrica Ibanez AS53',
            price: '339990',
            sku: 'GTR-IBZ-AS53',
            image: 'img/productos/01-guitarra-electrica-ibanez.png'
        }
        // Agregar más productos según sea necesario
    };

    const product = productData[sku];
    if(product) {
        document.getElementById('editProductCategory').value = product.category;
        document.getElementById('editProductName').value = product.name;
        document.getElementById('editProductPrice').value = product.price;
        document.getElementById('editProductSKU').value = product.sku;
        document.getElementById('editProductImage').value = product.image;
    }
}

// Cambio automático del año en el footer
document.getElementById('year').textContent = new Date().getFullYear();


///////////////////////////// Gestión Venta /////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const sidebar = document.getElementById('sidebarVentas');
    const overlay = document.getElementById('sidebarOverlay');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mainContent = document.querySelector('.main-content');

    // Solo continuar si todos los elementos existen
    if (!sidebar || !overlay || !sidebarToggle) return;

    // Función para abrir/cerrar el sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('show');
        overlay.classList.toggle('show');
        
        // Para móviles: evitar scroll del contenido principal cuando el sidebar está abierto
        if (window.innerWidth < 768) {
            document.body.classList.toggle('no-scroll');
        }
    }

    // Función para cerrar el sidebar
    function closeSidebar() {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
        document.body.classList.remove('no-scroll');
    }

    // Event listeners
    sidebarToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleSidebar();
    });

    overlay.addEventListener('click', closeSidebar);

    // Manejar cambios de tamaño de pantalla
    function handleResponsive() {
        if (window.innerWidth >= 768) {
            // Pantallas grandes: sidebar siempre visible
            sidebar.classList.add('show');
            overlay.classList.remove('show');
            document.body.classList.remove('no-scroll');
        } else {
            // Pantallas pequeñas: sidebar oculto por defecto
            sidebar.classList.remove('show');
            overlay.classList.remove('show');
        }
    }

    // Inicializar y configurar el resize listener
    handleResponsive();
    window.addEventListener('resize', handleResponsive);

    // Evitar que el sidebar se cierre al hacer clic dentro de él
    sidebar.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});