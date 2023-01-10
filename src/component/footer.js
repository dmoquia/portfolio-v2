function Footer() {
  const foot = document.querySelector(".foot");
  foot.innerHTML = `
    <div class="footer-section">
        <div class="links">
          <ul class="footer-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="socials">
          <ul class="social-links">
            <li>
              <a
                href="https://www.linkedin.com/in/dennis-moquia/"
                target="_blank"
                ><i class="fa-brands fa-linkedin"></i
              ></a>
            </li>
            <li>
              <a href="https://www.instagram.com/dmoquia23/" target="_blank"
                ><i class="fa-brands fa-instagram"></i
              ></a>
            </li>
            <li>
              <a href="https://www.facebook.com/dmoquia" target="_blank"
                ><i class="fa-brands fa-facebook"></i
              ></a>
            </li>
            <li>
              <a href="https://github.com/dmoquia" target="_blank"
                ><i class="fa-brands fa-github"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-section">
        <p>&copy; Dennis Moquia 2022</p>
      </div>
    `;
  return foot;
}

export default Footer;
