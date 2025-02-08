// JavaScript for changing navbar color on scroll
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#222";
    } else {
      navbar.style.backgroundColor = "#333";
    }
  });
  
