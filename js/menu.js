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

mobileMenu();
