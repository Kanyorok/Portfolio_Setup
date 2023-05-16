function mobile_menu() {
  var x = document.getElementById("top_navigation");
  var y = document.querySelector('#ham_button');
  if (x.style.display === "block") {
    x.style.display = "none";
    y.src = "./icons/Union.png";
  } else {
    x.style.display = "block";
    y.src = "./icons/close.svg";
  }
}
