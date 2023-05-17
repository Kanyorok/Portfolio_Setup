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

const projects = {
  projectOne: {
    projectTitle: "HTML and JavaScript",
    projectDescription: "The project is about the coding of javascript and HTML",
  },
  projectTwo: {
    projectTitle: "Ruby on Rails",
    projectDescription: "It is an illustration of the projects done in relation to Ruby"
  },
  projectThree: {
    projectTitle: "Reactjs",
    projectDescription: "The project is about the application of Reactjs"
  },
  projectFour: {
    projectTitle: "CSS Frameworks",
    projectDescription: "The project is about the use of CSS Frameworks"
  },
  projectFive: {
    projectTitle: "Mongodb",
    projectDescription: "The project is about the use of databases in websites"
  },
  projectSix: {
    projectTitle: "Nextjs",
    projectDescription: "The project is about the coding website using Nextjs"
  },
  projectSeven: {
    projectTitle: "Nodejs",
    projectDescription: "The project is about the coding website using Nodejs"
  },
}

function clickedButton(the_id) {
  let savedInfo = the_id;
  let titleSelect = document.getElementById('headingSection');
  let paragraphSelect = document.getElementById('projectDesc');


  for (let project in projects ){
    if(project === savedInfo){
      titleSelect.innerHTML = projects[project].projectTitle;
      paragraphSelect.innerHTML = projects[project].projectDescription;
    }
  }
}

