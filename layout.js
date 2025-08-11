// layout.js
// Dynamically loads sidebar.html and navbar.html into every page
// Handles submenu toggling for the sidebar and highlights the active page

function loadLayout() {
  // Fetch and inject sidebar.html content
  fetch('sidebar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('sidebar-container').innerHTML = html;
      highlightActiveSidebarLink();
    });

  // Fetch and inject navbar.html content
  fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navbar-container').innerHTML = html;
    });
}

document.addEventListener('DOMContentLoaded', loadLayout);

function toggleSubmenu() {
  document.getElementById("submenuClientes").classList.toggle("show");
}

// Highlight the sidebar link for the current page using Bootstrap's .active
function highlightActiveSidebarLink() {
  // Get all nav-links inside the sidebar
  const links = document.querySelectorAll('.sidebar .nav-link[href]');
  const currentPage = location.pathname.split('/').pop();

  links.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref && linkHref === currentPage) {
      link.classList.add('active');

      // If it's a submenu link, open the submenu
      if (link.parentElement.id === "submenuClientes") {
        document.getElementById("submenuClientes").classList.add("show");
      }
    }
  });
}