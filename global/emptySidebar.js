//the sidebar for when there is only one page in the subcategory
//maybe include some sponsors or something idk
const emptySidebarHTML = `
  <!-- Left Sidebar -->
  <aside id="sidebar_left">
    <a href="https://team1100.org/">
      <img src="../../global/media/1100Logo.jpg" alt="">
    </a>
  </aside>
`;


document.body.insertAdjacentHTML('afterbegin', emptySidebarHTML);