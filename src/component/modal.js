function Modal() {
  const el = document.querySelector(".modal");
  el.innerHTML = `
    <div class="modal-content">
    <span class="close">&times;</span>
    <div class="col">
      <h2>login with social</h2>
      <a href="#" class="fb btn">
        <i class="fa-brands fa-facebook-f"></i> Login with Facebook
      </a>
      <a href="#" class="google btn">
        <i class="fa-brands fa-google-plus-g"></i> Login with Google+
      </a>
      <a href="#" class="github btn">
        <i class="fa-brands fa-github"></i> Login with Github
      </a>
    </div>
  </div>
    `;
  return el;
}

export default Modal;
