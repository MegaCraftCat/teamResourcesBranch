//this is the sidebar for the software getting started section
//it is meant to allow the user to move between the different pages of the subcategory
const softwareGettingStartedSidebarHTML = `
  <!-- Left Sidebar -->
  <aside id="sidebar_left">
    <h1>Pages</h1>
    <ul>
      <li>
        <a href="https://github.com/">Learning Java</a>
      </li>
      <li>
        <a href="#">Downloading WPILib</a> 
      </li>
    </ul>
  </aside>
`;


document.body.insertAdjacentHTML('afterbegin', softwareGettingStartedSidebarHTML);