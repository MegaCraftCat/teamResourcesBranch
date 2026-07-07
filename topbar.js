//this file is used to create the top bar navigation for the website. It is injected into the top of the body automatically when the page loads.
const topbarHTML = `
  <!-- Top Bar -->
  <div id="topbar">
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
          <a href="wpilibSetup.html">Getting Started with WPILib</a>
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

// Inject the navigation bar into the top of the body automatically
document.body.insertAdjacentHTML('afterbegin', topbarHTML);