const Navbar = document.querySelector(".desktopNav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
  
    if (Navbar) {
      Navbar.classList.add("active");
    }
  } else {
    if (Navbar) {
      Navbar.classList.remove("active");
    }
  }
});
