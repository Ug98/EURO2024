const HOME = "home";
const GROUP_STAGE = "groupStage";
const KNOCK_OUT = "knockOut";
const FINAL = "final";
const CONTAINER_SELECTOR = '#container';

const renderHome = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = `
    <h1>Teams Qualified</h1>
    <div class="images">
      <img src="images/deutschland.gif" alt="Germany">
      <img src="images/spain.png" alt="Spain">
      <img src="images/croatia-flag-png-xl.png" alt="Croatia">
      <img src="images/albania.png" alt="Albania">
      <img src="images/france.png" alt="France">
      <img src="images/Flag_of_Slovakia.png" alt="Slovakia">
      <img src="images/Flag_of_Slovenia.png" alt="Slovenia">
      <img src="images/italy.png" alt="Italy">
      <img src="images/1200px-Flag_of_Serbia.png" alt="Serbia">
      <img src="images/belgium.png" alt="Belgium">
      <img src="images/ukraine.png" alt="Ukraine">
      <img src="images/georgia.png" alt="Georgia">
      <img src="images/netherlands.png" alt="Netherlands">
      <img src="images/turkie.png" alt="Turkie">
      <img src="images/swiss.png" alt="Swiss">
      <img src="images/scotland.png" alt="Scotland">
      <img src="images/poland.png" alt="Poland">
      <img src="images/romania.png" alt="Romania">
      <img src="images/hungary.png" alt="hungary">
      <img src="images/portugal.png" alt="portugal">
      <img src="images/england.png" alt="England">
      <img src="images/austria.png" alt="Austria">
      <img src="images/czech_republic.png" alt="czech_republic">
      <img src="images/denmaark.png" alt="denmaark">
    </div>
  `;
};

const renderGroupStage = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = `
 <div id="group-stage">
  <div class="content">
    <div class="box">
      <h2>Group A</h2>
      <ul>
        <li>Germany</li>
        <li>Switzerland</li>
        <li>Hungary</li>
        <li>Scotland</li>
      </ul>
    </div>
    <div class="box">
      <h2>Group B</h2>
      <ul>
        <li>Spain</li>
        <li>Italy</li>
        <li>Albania</li>
        <li>Croatia</li>
      </ul>
    </div>
    <div class="box">
      <h2>Group C</h2>
      <ul>
        <li>England</li>
        <li>Denmark</li>
        <li>Slovenia</li>
        <li>Serbia</li>
      </ul>
    </div>
    <div class="box">
      <h2>Group D</h2>
      <ul>
        <li>Austria</li>
        <li>France</li>
        <li>Netherlands</li>
        <li>Poland</li>
      </ul>
    </div>
    <div class="box">
      <h2>Group E</h2>
      <ul>
        <li>Romania</li>
        <li>Belgium</li>
        <li>Slovakia</li>
        <li>Ukraine</li>
      </ul>
    </div>
    <div class="box">
      <h2>Group F</h2>
      <ul>
        <li>Portugal</li>
        <li>Turkie</li>
        <li>Georgia</li>
        <li>Czechia</li>
      </ul>
    </div>
  </div>
</div>
  `;
};

const renderKnockOut = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = `
    <div id="knock-out">
      <h1>Knock Out Stage</h1>
      <div class="content">
        <img src="images/knock-out.jpg" alt="Knock Out Stage">
        <!-- Add more content as needed -->
      </div>
    </div>
  `;
};

const renderFinal = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = `
    <div id="final">
      <h1>Final</h1>
      <div class="content">
        <!-- Add content for Final stage -->
      </div>
    </div>
  `;
};

const loadPage = (page = '') => {
  switch (page) {
    case HOME:
      renderHome();
      break;

    case GROUP_STAGE:
      renderGroupStage();
      break;

    case KNOCK_OUT:
      renderKnockOut();
      break;

    case FINAL:
      renderFinal();
      break;

    default:
      console.error(`Unknown page: ${page}`);
      break;
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); 

      const page = link.getAttribute('data-page');

      loadPage(page);
    });
  });

  loadPage(HOME);
});