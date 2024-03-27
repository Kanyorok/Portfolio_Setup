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
    projectTitle: 'SpaceX App',
    projectDescription:
      `In this task, we have worked with the real live data 
      from the SpaceX API. Our task was to build a web 
      application for a company that provides commercial 
      and scientific space travel services. The application 
      allows users to book rockets and join selected 
      space missions.`,
    tech: ['CSS', 'HTML', 'Reactjs', 'Javascript'],
    img: 'icons/spacex.png',
  },
];

const projectInfo = [
  {
    id: 1,
    projectName: 'Budget Application',
    projectInfo:
      "RubyBudget is a cutting-edge personal budget app meticulously crafted using the power and elegance of Ruby on Rails. With its sleek design and intuitive interface, RubyBudget empowers users to take control of their finances effortlessly. Track your income and expenses, set budget goals, and receive insightful financial reports.",
    tech: ['HTML', 'RoR', 'Postgres', 'CSS'],
    img: 'icons/budget_app.png',
  },
  {
    id: 2,
    projectName: 'Weather Application',
    projectInfo:
      "This project is about building a mobile web application to check a list of air pollution metrics about dynamic changes in different places that I have created using of React and Redux.",
    tech: ['HTML', 'CSS', 'API', 'JS'],
    img: 'icons/weather.png',
  },
  {
    id: 3,
    projectName: 'BookStore',
    projectInfo:
      "The Bookstore is a website similar to the \"Awesome Books\". I have created a simplified version of it that allows a user to: Display a list of books, Add a book, and Remove a selected book.",
    tech: ['React', 'Redux', 'API', 'CSS'],
    img: 'icons/books.png',
  },
  {
    id: 4,
    projectName: 'Maths Magician App',
    projectInfo:
      "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.",
    tech: ['HTML', 'ReactJs', 'Redux', 'CSS'],
    img: 'icons/maths.png',
  },
  {
    id: 5,
    projectName: 'Data Dashboard Healthcare',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby', 'CSS'],
    img: 'icons/Data_content_image.svg',
  },
  {
    id: 6,
    projectName: 'Website Portfolio',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby', 'CSS'],
    img: 'icons/website.svg',
  },
];

function mainProject() {
  const presentProject = bannerProjects[0];
  const headlineProject = `<section class="works_content">
  <img src=${presentProject.img} class="image_placement" alt="The Banner" />
  <div class="text_placement">
    <h2>${presentProject.projectTitle}</h2>
    <p>${presentProject.projectDescription}</p>
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
          <button id="projectSeven" type="button">See project <img src="icons/live_icon.svg" alt="" class="btnIcon"></button>
          <button id="projectSeven" type="button">See project <img src="icons/github_2.svg" class="btnIcon"> </button>
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
});
mobileMenu();
closed();