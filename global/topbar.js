//this file is used to create the top bar navigation for the website. It is injected into the top of the body automatically when the page loads.
const topbarHTML = `
<!-- Top Bar -->
<div id="topbar">
  <div id="topbar-scroll">
    <button class="toggle-btn" id="openBtn" aria-expanded="false">☰ Open Sidebar</button>

    <a href="https://team1100.org/">
      <img src="../../global/media/1100Logo.png" alt="Team 1100 Logo">
    </a>
    <nav class="dropdown-row" aria-label="Categories">
      <a class="topbar-link" href="../../home/thisWebsite/index.html">Home</a>
      <a class="topbar-link" href="../../software/gettingStarted/index.html">Software</a>
      <a class="topbar-link" href="../../mechanical/cad/index.html">Mechanical</a>
    </nav>

  </div>
</div>
`;

// Inject the navigation bar into the top of the body 
document.body.insertAdjacentHTML('afterbegin', topbarHTML);

//the sidebar button thingy that appears when screen is small 
const toggleButton = document.getElementById('openBtn');

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('sidebar-open');
    toggleButton.textContent = isOpen ? '☰ Close Sidebar' : '☰ Open Sidebar';
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

