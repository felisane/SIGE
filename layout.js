// layout.js - Dynamically loads sidebar and navbar into pages
function loadLayout() {
  // Sidebar
  fetch('sidebar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('sidebar-container').innerHTML = html
    });

  // Navbar
  fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navbar-container').innerHTML = html
    });
}

document.addEventListener('DOMContentLoaded', loadLayout);

function toggleSubmenu() {
  document.getElementById("submenuClientes").classList.toggle("show");
}