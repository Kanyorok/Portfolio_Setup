function mobileMenu() {
  const x = document.getElementById("top_navigation");
  const y = document.querySelector("#ham_button");
  const z = document.querySelector(".menu_icon h2");
  if (x.style.display === "block") {
    x.style.display = "none";
    z.style.visibility = "visible";
    y.src = "./icons/Union.png";
  } else {
    x.style.display = "block";
    z.style.visibility = "hidden";
    y.src = "./icons/close.svg";
  }
}

const bannerProjects = {
  projectOne: {
    projectTitle: "Multi-Post Stories",
    projectDescription:
      `A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a standard
      dummy text.`,
    tech: ["CSS","HTML", "Bootstrap", "Ruby"],
    img: "icons/Works_cont.svg",
  }
};

const projectInfo = [
  {
    id: 1,
    projectName: "Data Dashboard Healthcare",
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ["HTML", "Bootstrap", "Ruby"],
    img: "icons/pro_sec.svg",
  },
  {
    id: 2,
    projectName: "Data Dashboard Healthcare",
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ["HTML", "Bootstrap", "Ruby"],
    img: "icons/Data_content_image.svg",
  },
  {
    id: 3,
    projectName: "Website Portfolio",
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ["HTML", "Bootstrap", "Ruby"],
    img: "icons/website.svg",
  },
  {
    id: 4,
    projectName: "Profesional Art Printing Data",
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ["HTML", "Bootstrap", "Ruby"],
    img: "icons/professional.svg",
  },
  {
    id: 5,
    projectName: "Data Dashboard Healthcare",
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ["HTML", "Bootstrap", "Ruby"],
    img: "icons/Data_content_image.svg",
  },
  {
    id: 6,
    projectName: "Website Portfolio",
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ["HTML", "Bootstrap", "Ruby"],
    img: "icons/website.svg",
  },
];

function mainProject(){
  const headlineProject = `<section class="works_content">
  <img src=${bannerProjects.projectOne.img} class="image_placement" alt="The Banner" />
  <div class="text_placement">
    <h2>${bannerProjects.projectOne.projectTitle}</h2>
    <p>${bannerProjects.projectOne.projectDescription}</p>
    <ul>
      <li>
        <a href="#">${bannerProjects.projectOne.tech[0]}</a>
      </li>
      <li>
        <a href="#">${bannerProjects.projectOne.tech[1]}</a>
      </li>
      <li>
        <a href="#">${bannerProjects.projectOne.tech[2]}</a>
      </li>
      <li>
        <a href="#">${bannerProjects.projectOne.tech[3]}</a>
      </li>
    </ul>
    <button id="projectOne" onclick="clickedButton(this.id)" type="button">See project</button>
  </div>
</section>`

return headlineProject;
}

const showSections = () => {
  const divCard = projectInfo.map((item) => {
    if (item.id === 1) {
      return `<section class="center_content">
    <section class="content_desc">
      <img src=${item.img} alt="" />
      <div class="top_left1">
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
    } else {
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
    }
  });

  return divCard;
};

// The popup window
function showPopup(){
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
          <button id="projectSeven" type="button">See project <img src="icons/live_icon.svg" alt=""></button>
          <button id="projectSeven" type="button">See project <img src="icons/github_2.svg"> </button>
        </div>
      </div>
    </div>
  </div>
</div>`

return pop;

}

function clickedButton(the_id) {
  let savedInfo = the_id;
  let titleSelect = document.getElementById("headingSection");
  let paragraphSelect = document.getElementById("projectDesc");
  let img = document.getElementById("popup-img");

  const images = document.querySelector("#popup_info #popup-img");
  const popWin = document.querySelector(".popup");

  projectInfo.forEach((e, i) => {  
    let project = i;
    if (projectInfo[project].id === Number(savedInfo)) {
      titleSelect.innerHTML = projectInfo[project].projectName;
      paragraphSelect.innerHTML = projectInfo[project].projectInfo;
      popWin.style.visibility = "visible";
      img.src = projectInfo[project].img;
    } 
  })

  for (let bannerPrj in bannerProjects ){
    if(bannerPrj === savedInfo){
      titleSelect.innerHTML = bannerProjects[bannerPrj].projectTitle;
      paragraphSelect.innerHTML = bannerProjects[bannerPrj].projectDescription;
      images.src= bannerProjects[bannerPrj].img
      popWin.style.visibility = "visible";
    }
  }

}

//close popup window
function closed() {
  const popWin = document.querySelector(".popup");
  popWin.style.visibility = "hidden";
}

window.addEventListener("load", () => {
  document.getElementById('multiStories').innerHTML = mainProject();
  document.getElementById('popWindow').innerHTML = showPopup();
  document.getElementById("grid_contentdesc").innerHTML =
    showSections().join("");
});