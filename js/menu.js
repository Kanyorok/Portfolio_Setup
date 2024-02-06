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
    projectTitle: 'Multi-Post Stories',
    projectDescription:
      `A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a standard
      dummy text.`,
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    img: 'icons/Works_cont.svg',
  },
];

const projectInfo = [
  {
    id: 1,
    projectName: 'Data Dashboard Healthcare',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    img: 'icons/pro_sec.svg',
  },
  {
    id: 2,
    projectName: 'Data Dashboard Healthcare',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    img: 'icons/Data_content_image.svg',
  },
  {
    id: 3,
    projectName: 'Website Portfolio',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    img: 'icons/website.svg',
  },
  {
    id: 4,
    projectName: 'Profesional Art Printing Data',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    img: 'icons/professional.svg',
  },
  {
    id: 5,
    projectName: 'Data Dashboard Healthcare',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby'],
    img: 'icons/Data_content_image.svg',
  },
  {
    id: 6,
    projectName: 'Website Portfolio',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby'],
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
    <img src=${item.img} alt="" />
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
        <a href="#">CSS</a>
      </li>
      <li>
        <a href="#">HTML</a>
      </li>
      <li>
        <a href="#">BOOTSTRAP</a>
      </li>
      <li>
        <a href="#">RUBY</a>
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
  const popWin = document.querySelector('.popup');

  projectInfo.forEach((e, i) => {
    const project = i;
    if (projectInfo[project].id === Number(savedInfo)) {
      titleSelect.innerHTML = projectInfo[project].projectName;
      paragraphSelect.innerHTML = projectInfo[project].projectInfo;
      popWin.style.visibility = 'visible';
    }
  });

  bannerProjects.forEach((bannerPrj) => {
    if (bannerPrj.Name === savedInfo) {
      titleSelect.innerHTML = bannerPrj.projectTitle;
      paragraphSelect.innerHTML = bannerPrj.projectDescription;
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