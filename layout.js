// layout.js
// Dynamically loads sidebar.html and navbar.html into every page
// Handles loading of sidebar/navbar and highlights the active page

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

// Highlight the sidebar link for the current page using Bootstrap's .active
function highlightActiveSidebarLink() {
  // Get all nav-links inside the sidebar
  const links = document.querySelectorAll('.sidebar .nav-link[href]');
  const currentPage = location.pathname.split('/').pop();

  links.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref && linkHref === currentPage) {
      link.classList.add('active');

      // Update browser tab title based on active link text
      const pageName = link.textContent.trim();
      document.title = `${pageName} | SIGE`;

      // If it's inside a collapsed submenu, open it
      const collapseParent = link.closest('.collapse');
      if (collapseParent) {
        const instance = bootstrap.Collapse.getOrCreateInstance(collapseParent, { toggle: false });
        instance.show();
      }
    }
  });
}
