import { renderFinal } from "../final-view.js";
import { HOME,CONTAINER_SELECTOR,FINAL,GROUP_STAGE,KNOCK_OUT } from "./constants.js";

const renderHome = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = `
    <h1>Teams Qualified</h1>
    <div class="images">
      <img src="images/spain.png" alt="Spain">
      <img src="images/croatia-flag-png-xl.png" alt="Croatia">
      <img src="images/albania.png" alt="Albania">
      <img src="images/france.png" alt="France">
      <img src="images/Flag_of_Slovakia.png" alt="Slovakia">
      <img src="images/Flag_of_Slovenia.png" alt="Slovenia">
      <img src="images/italy.png" alt="Italy">
      <img src="images/1200px-Flag_of_Serbia.png" alt="Serbia">
      <img src="images/deutschland.gif" alt="Germany">
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
 <h1>Group Stage</h1>
  <div class="content">
    <div class="box">
      <h2>Group A</h2>
      <ul>
        <li>Germany <span id="points">7 pts</span></li></li>
        <li>Switzerland <span id="points">5 pts</span></li>
        <li>Hungary <span id="points">3 pts</span></li>
        <li>Scotland <span id="points">1 pt</span></li>
        </ul>
        <button id="view-btn">View Results</button>
    </div>
    <div class="box">
      <h2>Group B</h2>
      <ul>
        <li>Spain <span id="points">9 pts</span></li>
        <li>Italy <span id="points">4 pts</span></li>
        <li>Albania <span id="points">2 pts</span></li>
        <li>Croatia <span id="points">1 pt</span></li>
      </ul>
        <button id="view-btn">View Results</button>
    </div>
    <div class="box">
      <h2>Group C</h2>
      <ul>
        <li>England <span id="points">5 pts</span></li>
        <li>Denmark <span id="points">3 pts</span></li>
        <li>Slovenia <span id="points">3 pts</span></li>
        <li>Serbia <span id="points">2 pts</span></li>
      </ul>
        <button id="view-btn">View Results</button>
      
    </div>
    <div class="box">
      <h2>Group D</h2>
      <ul>
        <li>Austria <span id="points">6 pts</span></li>
        <li>France <span id="points">5 pts</span></li>
        <li>Netherlands <span id="points">4 pts</span></li>
        <li>Poland <span id="points">1 pt</span></li>
      </ul>
        <button id="view-btn">View Results</button>

    </div>
    <div class="box">
      <h2>Group E</h2>
      <ul>
        <li>Romania <span id="points">4 pts</span></li> 
        <li>Belgium <span id="points">4 pts</span></li>
        <li>Slovakia <span id="points">4 pts</span></li>
        <li>Ukraine <span id="points">4 pts</span></li>
      </ul>
        <button id="view-btn">View Results</button>

    </div>
    <div class="box">
      <h2>Group F</h2>
      <ul>
        <li>Portugal <span id="points">6 pts</span></li>
        <li>Turkie <span id="points">6 pts</span></li>
        <li>Georgia <span id="points">4 pts</span></li>
        <li>Czechia <span id="points">1 pt</span></li>
        
      </ul>
        <button id="view-btn">View Results</button>

    </div>
  </div>
</div>
  `;
};

const renderKnockOut = () => {
  document.querySelector(CONTAINER_SELECTOR).innerHTML = `
    <div id="knock-out">
      <h1>Knock Out Stage</h1>
      <div class="results">
        <h1>Round of 16</h1>
        <h2><img id="result-img" src="images/spain.png" alt="Spain"> Spain 4:1 Georgia <img id="result-img" src="images/georgia.png" alt="Georgia"></h2>
        <h2><img id="result-img" src="images/deutschland.gif" alt="Germany"> Germany 2:0 Denmark <img id="result-img" src="images/denmaark.png" alt="denmaark"> </h2>
        <h2><img id="result-img" src="images/portugal.png" alt="portugal"> Portugal 0(3):(0)0 Slovenia <img id="result-img" src="images/Flag_of_Slovenia.png" alt="Slovenia"> </h2>
        <h2><img id="result-img" src="images//france.png" alt="France"> France 1:0 Belgium <img id="result-img" src="images/belgium.png" alt="Belgium"> </h2>
        <h2><img id="result-img" src="images/romania.png" alt="Romania"> Romania 0:3 Netherlands <img id="result-img" src="images/netherlands.png" alt="Netherlands"> </h2>
        <h2><img id="result-img" src="images/austria.png" alt="Austria"> Austria 1:2 Turike <img id="result-img" src="images/turkie.png" alt="Turkie"> </h2>
        <h2><img id="result-img" src="images/england.png" alt="England"> England 2:1 Slovakia <img id="result-img" src="images/Flag_of_Slovakia.png" alt="Slovakia"> </h2>
        <h2><img id="result-img" src="images/swiss.png" alt="Swiss"> Switzerland 2:0 Italy <img id="result-img" src="images/italy.png" alt="Italy"> </h2>
        <h1>Quarterfinals</h1>
        <h2><img id="result-img" src="images/spain.png" alt="Spain"> Spain 2:1 Germany <img id="result-img" src="images/deutschland.gif" alt="Germany"></h2>
        <h2><img id="result-img" src="images/portugal.png" alt="portugal"> Portugal 0(3):(5)0 France <img id="result-img" src="images//france.png" alt="France"> </h2>     
        <h2><img id="result-img" src="images/netherlands.png" alt="Netherlands"> Netherlands : Turike <img id="result-img" src="images/turkie.png" alt="Turkie"> </h2> 
        <h2><img id="result-img" src="images/england.png" alt="England"> England : Switzerland <img id="result-img" src="images/swiss.png" alt="Swiss"> </h2>
                <h1>Semifinals</h1>
                <h2><img id="result-img" src="images/spain.png" alt="Spain"> Spain : France <img id="result-img" src="images//france.png" alt="France"> </h2>
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