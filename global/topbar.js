//this file is used to create the top bar navigation for the website. It is injected into the top of the body automatically when the page loads.
const topbarHTML = `
<!-- Top Bar -->
<div id="topbar">
  <button class="toggle-btn" id="openBtn" aria-expanded="false">☰ Open Sidebar</button>

  <a href="https://team1100.org/">
    <img src="../../global/media/1100Logo.jpg" alt="">
  </a>
  <div class="dropdown-row">

    <!-- Dropdown 1 -->
    <div class="dropdown">
      <button class="dropbtn">Home</button>
      <div class="dropdown-content">
        <a href="index.html">What is this Website?</a>
        <a href="#">About Team 1100</a>
        <a href="#">How to maintain this website</a>
      </div>
    </div>

    <!-- Dropdown 2 -->
    <div class="dropdown">
      <button class="dropbtn">Software</button>
      <div class="dropdown-content">
        <a href="../../software/gettingStarted/index.html">Getting Started</a>
        <a href="#">Subsystems</a>
        <a href="#">Commands</a>
      </div>
    </div>

    <!-- Dropdown 3 -->
    <div class="dropdown">
      <button class="dropbtn">Mechanical</button>
      <div class="dropdown-content">
        <a href="#">Cad</a>
        <a href="#">brad</a>
      </div>
    </div>

  </div>

</div>
`;

// Inject the navigation bar into the top of the body 
document.body.insertAdjacentHTML('afterbegin', topbarHTML);

//the sidebar button thingy
const toggleButton = document.getElementById('openBtn');

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('sidebar-open');
    toggleButton.textContent = isOpen ? '☰ Close Sidebar' : '☰ Open Sidebar';
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}
