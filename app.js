const Navbar = document.querySelector(".desktopNav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
  
    if (Navbar) {
      Navbar.classList.add("active-nav");
    }
  } else {
    if (Navbar) {
      Navbar.classList.remove("active-nav");
    }
  }
});




const cards = document.querySelectorAll(".servbox");

cards.forEach((servbox) => {
  servbox.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("bg-active"));
    servbox.classList.add("bg-active");
  });
});






const Openmiddle = document.querySelector(".openmenu");
 const CloseMenu = document.querySelector(".closemenu");
const MiddleList = document.querySelector(".rightMenu");

if (Openmiddle) {
  Openmiddle.addEventListener("click",()=>{
    
    MiddleList.classList.toggle("activeMenu")
  })
}





const MobNavbar = document.querySelector(".mobilNav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
  
    if (MobNavbar) {
      MobNavbar.classList.add("active-nav2");
    }
  } else {
    if (MobNavbar) {
      MobNavbar.classList.remove("active-nav2");
    }
  }
});