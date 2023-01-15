import "./style.scss";
import AOS from "aos";
import "animate.css";
import $ from "jquery";
import "owl.carousel"; // from node_modules
import { login, logout } from "./services/firebase/loginMethod";
import {
  facebookProvider,
  googleProvider,
} from "./services/firebase/authProviders";
import { eventHandler } from "./utils/close";
import Skills from "./src/component/skills";
import Modal from "./src/component/modal";
import Contact from "./src/component/contact";
import Footer from "./src/component/footer";
import ToggleMenu from "./src/logic/toggleMenu";
import SkillCarousel from "./src/logic/skillCarousel";
import MailService from "./src/logic/mailService";
// import GetData from "./services/firebase/getData";
import pdfURL from "./public/resume.pdf";
import Card from "./src/component/card";
// GetData();
// components
Skills();
Modal();
Contact();
Footer();

// #######  menu toggle buttons #######
ToggleMenu();

// #######  skill carousel #######
SkillCarousel();

// #######  controls the page's width after animation #######
$("[data-aos]").parent().addClass("hideOverflowOnMobile");

// #######  display personal project component #######

Card();
AOS.init();

// // #######  smtp form email service #######
MailService();

// #######  sign with social account #######
// Facebook authentication
const login_fb = document.querySelector(".fb");
login(login_fb, facebookProvider);

// Google authentication
const login_google = document.querySelector(".google");
login(login_google, googleProvider);

// Github authentication
const login_github = document.querySelector(".github");
login(login_github, googleProvider);

// logout
const logoutBtn = document.getElementById("logout");
logout(logoutBtn);

// #######  POPUP MODAL #######
// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("signIn-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
eventHandler(btn, modal, "block");
// When the user clicks on <span> (x), close the modal
eventHandler(span, modal, "none");
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// #######  persist user after login #######
window.addEventListener("DOMContentLoaded", () => {
  const userLoaded = JSON.parse(localStorage.getItem("user"));
  const greet = document.querySelector("#greet");
  if (userLoaded) {
    greet.innerHTML = `Welcome ${userLoaded.displayName}`;
    document.querySelector(".logoff").style.display = "flex";
    document.querySelector(".signin").style.display = "none";
  } else {
    document.querySelector(".signin").style.display = "auto";
    document.querySelector(".logoff").style.display = "none";
  }
});

// #######  DOWNLOAD RESUME #######
let users = JSON.parse(localStorage.getItem("user"));
$("#download").on("click", function (e) {
  e.preventDefault();
  if (!users) {
    $("#myModal").show();
    return;
  }
  document.querySelector("#download").href = pdfURL;
  window.open("./assets/resume-88e01036.pdf", "_blank");
});
