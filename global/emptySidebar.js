const isMechanical = window.location.pathname.includes('/mechanical/');
const isExample = window.location.pathname.includes('/example/');
const emptySidebarHTML = isMechanical ? `
  <!-- Left Sidebar -->
  <aside id="sidebar_left">
    <h1>Mechanical</h1>
    <ul>
      <li>
        <button class="sidebar-subcategory" aria-expanded="true" aria-controls="mechanical-cad-pages">CAD</button>
        <ul class="sidebar-pages" id="mechanical-cad-pages">
          <li><a href="../../mechanical/cad/index.html">CAD Resources</a></li>
        </ul>
      </li>
    </ul>
  </aside>
` : isExample ? `
  <!-- Left Sidebar -->
  <aside id="sidebar_left">
    <h1>Example</h1>
    <ul>
      <li>
        <button class="sidebar-subcategory" aria-expanded="true" aria-controls="example-pages">Example Subcategory</button>
        <ul class="sidebar-pages" id="example-pages">
          <li><a href="../exampleSubcategory/index.html">Example Page</a></li>
        </ul>
      </li>
    </ul>
  </aside>
` : `
  <!-- Left Sidebar -->
  <aside id="sidebar_left">
    <h1>Home</h1>
    <ul>
      <li>
        <button class="sidebar-subcategory" aria-expanded="true" aria-controls="home-pages">This Website</button>
        <ul class="sidebar-pages" id="home-pages">
          <li><a href="../../home/thisWebsite/index.html">What is this Website?</a></li>
        </ul>
      </li>
    </ul>
  </aside>
`;


document.body.insertAdjacentHTML('afterbegin', emptySidebarHTML);

document.querySelectorAll('.sidebar-subcategory').forEach((button) => {
  const pages = document.getElementById(button.getAttribute('aria-controls'));

  if (!pages) return;

  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isExpanded));
    pages.hidden = isExpanded;
  });
});