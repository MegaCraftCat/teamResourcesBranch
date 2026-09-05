const softwareGettingStartedSidebarHTML = `
  <!-- Left Sidebar -->
  <aside id="sidebar_left">
    <h1>Software</h1>
    <ul>
      <li>
        <button class="sidebar-subcategory" aria-expanded="true" aria-controls="software-getting-started-pages">Getting Started</button>
        <ul class="sidebar-pages" id="software-getting-started-pages">
          <li><a href="index.html">Software Overview</a></li>
          <li><a href="learningJava.html">Learning Java</a></li>
          <li><a href="workspaceSetup.html">Workspace Setup</a></li>
        </ul>
      </li>
    </ul>
  </aside>
`;


document.body.insertAdjacentHTML('afterbegin', softwareGettingStartedSidebarHTML);

document.querySelectorAll('.sidebar-subcategory').forEach((button) => {
  const pages = document.getElementById(button.getAttribute('aria-controls'));

  if (!pages) return;

  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isExpanded));
    pages.hidden = isExpanded;
  });
});