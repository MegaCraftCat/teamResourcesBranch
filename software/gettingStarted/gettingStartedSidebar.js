//this is the sidebar for the software getting started section
//it is meant to allow the user to move between the different pages of the subcategory
const softwareGettingStartedSidebarHTML = `
  <!-- Left Sidebar -->
  <aside id="sidebar_left">
    <h3>this is invisible</h3>
    <ul>
      <li>
        <a href="learningJava.html">Learning Java</a>
      </li>
      <li>
        <a href="wpiLibSetup.html">WpiLib Setup</a> 
      </li>
    </ul>
  </aside>
`;


document.body.insertAdjacentHTML('afterbegin', softwareGettingStartedSidebarHTML);