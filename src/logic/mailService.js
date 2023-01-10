import Email from "../../services/smtp/smtp";
function MailService() {
  const alertElement = document.querySelector(".alert");
  // #######  alerts when contact sent #######
  const showAlert = () => {
    alertElement.hidden = false;
  };
  const hideAlert = () => {
    alertElement.hidden = true;
  };

  // #######  smtp form email service #######
  const submit = document.querySelector("#submit");
  const resetForm = document.querySelector("form");
  submit.addEventListener("submit", (e) => {
    e.preventDefault();
    Email.send({
      SecureToken: import.meta.env.VITE_SECURE_TOKEN,
      To: import.meta.env.VITE_EMAIL_TO,
      From: import.meta.env.VITE_EMAIL_FROM,
      Subject: "New message from Portfolio site",
      Body:
        "Name: " +
        document.getElementById("name").value +
        "<br> Email: " +
        document.getElementById("email").value +
        "<br> Message: " +
        document.getElementById("message").value,
    })
      .then(
        // message => alert("Sent successfully")
        setTimeout(() => {
          showAlert();
          setTimeout(() => {
            hideAlert();
          }, "4000");
          resetForm.reset();
        }, "2000")
      )
      .catch((err) => {
        console.log(err);
      });
    return false;
  });
}

export default MailService;
