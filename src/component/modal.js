function createElement(tag, className, textContent) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (textContent) el.textContent = textContent;
  return el;
}

function Modal() {
  const modal = document.querySelector(".modal");
  if (!modal) return;

  const modalContent = createElement("div", "modal-content");
  modal.appendChild(modalContent);

  const close = createElement("span", "close", "×");
  modalContent.appendChild(close);

  const col = createElement("div", "col");
  modalContent.appendChild(col);

  col.appendChild(createElement("h2", null, "login with social"));

  const socialLogin = [
    {
      className: "fb",
      iconClass: "fa-brands fa-facebook-f",
      text: "Login with Facebook",
    },
    {
      className: "google",
      iconClass: "fa-brands fa-google-plus-g",
      text: "Login with Google+",
    },
    {
      className: "github",
      iconClass: "fa-brands fa-github",
      text: "Login with Github",
    },
  ];

  socialLogin.forEach(({ className, iconClass, text }) => {
    const btn = createElement("a", `${className} ${className} btn`, text);
    btn.href = "#";
    btn.insertAdjacentHTML("afterbegin", `<i class="${iconClass}"></i> `);
    col.appendChild(btn);
  });

  return modal;
}

export default Modal;
