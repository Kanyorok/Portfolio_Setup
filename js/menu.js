function mobileMenu() {
  const x = document.getElementById('top_navigation');
  const y = document.querySelector('#ham_button');
  const z = document.querySelector('.menu_icon h2');
  if (x.style.display === 'block') {
    x.style.display = 'none';
    z.style.visibility = 'visible';
    y.src = './icons/Union.png';
  } else {
    x.style.display = 'block';
    z.style.visibility = 'hidden';
    y.src = './icons/close.svg';
  }
}

const bannerProjects = [
  {
    Name: 'projectOne',
    projectTitle: 'Ecommerce Site',
    projectDescription:
      `This an ecommerce site that is made using Reactjs frontend
      and Nodejs framework. The site is a solution to make a digital
      solution to sell products online. It covers all major features
      such as add to cart, payment gateway, shipment, and many more.`,
    tech: ['CSS', 'HTML', 'Reactjs','Nodejs'],
    img: 'icons/ecommerce.png',
    live: 'https://kamandoradesigns.com/',
    git: 'https://github.com/Kanyorok'
  },
];

const projectInfo = [
  {
    id: 1,
    projectName: 'School Website',
    projectInfo:
      "This a school website that has been fully made using WordPress. It demonstrates expertise in customizing themes, integrating plugins for seamless functionality, and ensuring mobile responsiveness.",
    tech: ['HTML', 'CSS', 'WordPress', 'Plugins'],
    img: 'icons/jonathan.png',
    live: 'https://jonathangloag.ac.ke/',
    git: '#'
  },
  {
    id: 2,
    projectName: 'Weather Application',
    projectInfo:
      "This project is about building a mobile web application to check a list of air pollution metrics about dynamic changes in different places that I have created using of React and Redux.",
    tech: ['HTML', 'CSS', 'API', 'JS'],
    img: 'icons/weather.png',
    live: 'https://climaticvals.onrender.com/',
    git: 'https://github.com/Kanyorok/air-pollution-aqi'
  },
  {
    id: 3,
    projectName: 'Art Website',
    projectInfo:
      "The Bookstore is a website similar to the \"Awesome Books\". I have created a simplified version of it that allows a user to: Display a list of books, Add a book, and Remove a selected book.",
    tech: ['React', 'Redux', 'API', 'CSS'],
    img: 'icons/Artist_Website.png',
    live: 'https://africanartistavni.co.ke/',
    git: 'https://github.com/Kanyorok/Artist-website'
  },
  {
    id: 4,
    projectName: 'Maths Magician App',
    projectInfo:
      "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.",
    tech: ['HTML', 'ReactJs', 'Redux', 'CSS'],
    img: 'icons/maths.png',
    live: 'https://calm-pavlova-636a7b.netlify.app/',
    git: 'https://github.com/Kanyorok/mathmagician'
  },
  {
    id: 5,
    projectName: 'Tourism Talk Website',
    projectInfo:
      "A replica of a commercial website that showcases skill in creating responsive website using the mobile-first approach",
    tech: ['HTML', 'Bootstrap', 'Ruby', 'CSS'],
    img: 'icons/Tourism.png',
    live: 'https://kanyorok.github.io/CaptstoneProject/',
    git: 'https://github.com/Kanyorok/CaptstoneProject'
  },
  {
    id: 6,
    projectName: 'TO-DO App',
    projectInfo:
      "In this project, I have built a simple HTML list of To Do tasks. This simple web page is built using webpack and served by a webpack dev server.",
    tech: ['HTML', 'Bootstrap', 'Ruby', 'CSS'],
    img: 'icons/Todo.png',
    live: 'https://kanyorok.github.io/To-DoList/dist/',
    git: 'https://github.com/Kanyorok/To-DoList'
  },
];

function mainProject() {
  const presentProject = bannerProjects[0];
  const headlineProject = `<section class="works_content">
  <img src=${presentProject.img} class="image_placement" alt="The Banner" />
  <div class="text_placement">
    <h2>${presentProject.projectTitle}</h2>
    <p class="info_starter">${presentProject.projectDescription}</p>
    <ul>
      <li>
        <a href="#">${presentProject.tech[0]}</a>
      </li>
      <li>
        <a href="#">${presentProject.tech[1]}</a>
      </li>
      <li>
        <a href="#">${presentProject.tech[2]}</a>
      </li>
      <li>
        <a href="#">${presentProject.tech[3]}</a>
      </li>
    </ul>
    <button id=${presentProject.Name} onclick="clickedButton(this.id)" type="button">See project</button>
  </div>
</section>`;

  return headlineProject;
}

const showSections = () => {
  const divCard = projectInfo.map((item) => {
    return `<section class="center_content">
  <section class="content_desc">
    <img class="image_placement" src=${item.img} alt="" />
    <div class="top_left">
      <h2>${item.projectName}</h2>
      <p>
       ${item.projectInfo}
      </p>
      <ul>
        <li>
          <a href="#">${item.tech[0]}</a>
        </li>
        <li>
          <a href="#">${item.tech[1]}</a>
        </li>
        <li>
          <a href="#">${item.tech[2]}</a>
        </li>
        <li>
          <a href="#">${item.tech[3]}</a>
        </li>
      </ul>
      <button id=${item.id} onclick="clickedButton(this.id)" type="button">See project</button>
    </div>
  </section>
</section>`;
  });

  return divCard;
};

// The popup window
function showPopup() {
  const pop = `<div class="popup">
  <div class="popup_content">
    <div class="titleContent">
      <div class="heading">
        <h2 id="headingSection"></h2>
      </div>
      <img id="closeButton" onclick="closed()" src="icons/close.svg" alt="">
    </div>
    <ul>
      <li>
        <a id="first_tech" href="#">CSS</a>
      </li>
      <li>
        <a id="second_tech" href="#">HTML</a>
      </li>
      <li>
        <a id="third_tech" href="#">BOOTSTRAP</a>
      </li>
      <li>
        <a id="fourth_tech" href="#">RUBY</a>
      </li>
    </ul>
    <div class="desktopView">
      <div id="popup_info">
        <img id="popup-img" src="icons/Snapshoot Portfolio.jpg" alt="Portfolio">
      </div>
      <div class ="all_info">
        <p id="projectDesc"></p>
        <div class="bottom_section">
          <a href="" id="extlink"><button id="projectSeven" type="button">Visit Site <img src="icons/live_icon.svg" alt="" class="btnIcon"></button></a>
          <a href="" id="gitlink"><button id="projectSeven" type="button">View Repo <img src="icons/github_2.svg" class="btnIcon"> </button></a>
        </div>
      </div>
    </div>
  </div>
</div>`;

  return pop;
}

function clickedButton(theId) {
  const savedInfo = theId;
  const titleSelect = document.getElementById('headingSection');
  const paragraphSelect = document.getElementById('projectDesc');
  const popImage = document.getElementById('popup-img')
  const firstTech = document.getElementById('first_tech')
  const secTech = document.getElementById('second_tech')
  const thirdTech = document.getElementById('third_tech')
  const fourthTech = document.getElementById('fourth_tech')
  const livelink = document.getElementById('extlink')
  const gitlink = document.getElementById('gitlink')
  const popWin = document.querySelector('.popup');

  projectInfo.forEach((e, i) => {
    const project = i;
    if (projectInfo[project].id === Number(savedInfo)) {
      titleSelect.innerHTML = projectInfo[project].projectName;
      paragraphSelect.innerHTML = projectInfo[project].projectInfo;
      popImage.src = projectInfo[project].img;
      firstTech.innerHTML = projectInfo[project].tech[0];
      secTech.innerHTML = projectInfo[project].tech[1];
      thirdTech.innerHTML = projectInfo[project].tech[2];
      fourthTech.innerHTML = projectInfo[project].tech[3];
      livelink.href = projectInfo[project].live;
      gitlink.href = projectInfo[project].git;
      popWin.style.visibility = 'visible';
    }
  });

  bannerProjects.forEach((bannerPrj) => {
    if (bannerPrj.Name === savedInfo) {
      titleSelect.innerHTML = bannerPrj.projectTitle;
      paragraphSelect.innerHTML = bannerPrj.projectDescription;
      popImage.src = bannerPrj.img;
      firstTech.innerHTML = bannerPrj.tech[0];
      secTech.innerHTML = bannerPrj.tech[1];
      thirdTech.innerHTML = bannerPrj.tech[2];
      fourthTech.innerHTML = bannerPrj.tech[3];
      livelink.href = bannerPrj.live;
      gitlink.href = bannerPrj.git;
      popWin.style.visibility = 'visible';
    }
  });
}

clickedButton();

// close popup window
function closed() {
  const popWin = document.querySelector('.popup');
  popWin.style.visibility = 'hidden';
}

// Add_validation_form
function validateEmail(event) {
  const email = document.forms[0].elements.Email.value;
  // check email
  const res = email.match(/[A-Z]/g);
  const btn = document.querySelector('form #form_btn');
  const container = document.querySelector('form #form-btn-container');
  const child = document.createElement('h2');
  let msg = '';

  if (res) {
    msg = 'Error:Form was not Sent! The email should be lowercase only';
    event.preventDefault();
  } else return;

  child.innerText = msg;
  child.style.color = 'red';
  container.insertBefore(child, btn);

  setTimeout(() => {
    child.remove();
  }, 3000);
}

window.onload = () => {
  document.querySelector('#form').addEventListener('submit', (event) => validateEmail(event));
};

function manageData(parsedInfo) {
  parsedInfo.preventDefault();
  const form = document.querySelector('#form');
  const formData = {
    fullName: form.elements.fullname.value,
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  sessionStorage.setItem('formData', JSON.stringify(formData));
}

function setupDownloadButton() {
      const link = document.createElement('a');
      link.href = 'CV/Robert_Kanyoro__Resume_Fullstack.pdf';
      link.download = 'CV/Robert_Kanyoro__Resume_Fullstack.pdf';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log('working');
}

function handleRefresh() {
  const formData = JSON.parse(sessionStorage.getItem('formData'));
  const form = document.querySelector('#form');
  form.elements.fullName.value = formData.fullname;
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

window.addEventListener('load', () => {
  document.getElementById('multiStories').innerHTML = mainProject();
  document.getElementById('popWindow').innerHTML = showPopup();
  document.getElementById('grid_contentdesc').innerHTML = showSections().join('');
  document.querySelector('#form').addEventListener('input', (parsedInfo) => manageData(parsedInfo));
  handleRefresh();
  setupDownloadButton();
});

mobileMenu();
closed();

