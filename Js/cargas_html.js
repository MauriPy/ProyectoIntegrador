// Función para cargar el navbar y el footer desde archivos externos.
function cargarNavbaryFooter() {
    // Cargar el navbar
    fetch('/html/navbar.html')
        .then(response => response.text())
        .then(navbar => {
            document.getElementById('navbar').innerHTML = navbar;
        })
        .catch(error => console.log('Error al cargar el navbar:', error));
    
    // Cargar el footer
    fetch('/html/footer.html')
        .then(response => response.text())
        .then(footer => {
            document.getElementById('footer').innerHTML = footer;
        })
        .catch(error => console.log('Error al cargar el footer:', error));
}

// Cargar los componentes al cargar la página.
window.onload = cargarNavbaryFooter;