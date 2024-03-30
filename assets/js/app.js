const cross_btn = document.getElementById("cross-btn");
const bar = document.getElementById("bar");
const nav_screen = document.getElementsByClassName("nav-screen");
const header = document.getElementsByTagName("header")[0];

let isBarOpen = false;

// small screen navbar open
bar.addEventListener("click", () => {
  nav_screen[0].style.display = "block";
  header.style.position = "fixed";
  header.style.width = "100%";
  header.style.zIndex = "1000";
  nav_screen[0].style.boxShadow = "0px 30px 50px 0px #03032557";
  isBarOpen = true;
});

// small screen navbar close
cross_btn.addEventListener("click", () => {
  isBarOpen = false;
  nav_screen[0].style.display = "none";
  header.style.position = "relative";
});

// if screen size change
document.body.onresize = () => {
  if (document.body.offsetWidth > 768) {
    nav_screen[0].style.display = "flex";
    nav_screen[0].style.boxShadow = "none";
    header.style.position = "relative";
  } else if (isBarOpen) {
    nav_screen[0].style.display = "block";
    header.style.position = "fixed";
    nav_screen[0].style.boxShadow = "0px 30px 50px 0px #03032557";
  } else {
    nav_screen[0].style.display = "none";
  }
};
