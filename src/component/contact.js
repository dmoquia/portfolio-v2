function createElement(tagName, className, attributes, textContent) {
  const element = document.createElement(tagName);
  if (className) {
    element.classList.add(...className);
  }
  if (attributes) {
    Object.entries(attributes).forEach(([name, value]) => {
      element.setAttribute(name, value);
    });
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

function Contact() {
  const contact = document.querySelector(".contact-section");
  contact.innerHTML = "";

  const h2 = createElement(
    "h2",
    ["section-title", "contact-title"],
    null,
    "Contact me"
  );
  const divContainer = createElement("div", ["contact-container"]);
  const divLeft = createElement("div", ["left-contact"], {
    "data-aos": "fade-right",
    "data-aos-duration": "1500",
  });
  const img = createElement("img", null, {
    src: "https://res.cloudinary.com/dqbcudtfg/image/upload/v1673315906/portfolio/png-contact_ll06tq.png",
    alt: "",
  });
  divLeft.appendChild(img);

  const divRight = createElement("div", ["right-contact"], {
    "data-aos": "fade-left",
    "data-aos-duration": "1500",
  });
  const form = createElement("form", null, { id: "submit" });
  const divInputBox1 = createElement("div", ["input-box"]);
  const input1 = createElement("input", null, {
    type: "text",
    id: "name",
    required: true,
  });

  input1.placeholder = "Enter Name";
  const span1 = createElement("span", null, null, " name");
  divInputBox1.appendChild(input1);
  divInputBox1.appendChild(span1);

  const divInputBox2 = createElement("div", ["input-box"]);
  const input2 = createElement("input", null, {
    type: "email",
    id: "email",
    required: true,
    placeholder: "Enter email",
  });
  const span2 = createElement("span", null, null, " email");
  divInputBox2.appendChild(input2);
  divInputBox2.appendChild(span2);

  const divInputBox3 = createElement("div", ["input-box"]);
  const textarea = createElement("textarea", null, {
    id: "message",
    cols: "20",
    rows: "10",
    required: true,
    placeholder: "...some message",
  });
  const span3 = createElement("span", ["textarea-span"], null, "Message");
  divInputBox3.appendChild(textarea);
  divInputBox3.appendChild(span3);

  const btn = createElement(
    "button",
    ["submit-btn"],
    { title: "Click to send", type: "submit" },
    "Send"
  );

  const alert = createElement("div", ["alert"], { hidden: true });
  const alertIcon = createElement("span", ["icon-check"]);
  const icon = createElement("i", ["fa-solid", "fa-circle-check"]);
  alertIcon.appendChild(icon);

  const alertMessage = createElement(
    "span",
    ["message"],
    null,
    "Message sent successfully!"
  );

  alert.appendChild(alertIcon);
  alert.appendChild(alertMessage);

  form.appendChild(divInputBox1);
  form.appendChild(divInputBox2);
  form.appendChild(divInputBox3);
  form.appendChild(btn);
  form.appendChild(alert);

  divRight.appendChild(form);

  divContainer.appendChild(divLeft);
  divContainer.appendChild(divRight);

  contact.appendChild(h2);
  contact.appendChild(divContainer);

  return contact;
}

export default Contact;
