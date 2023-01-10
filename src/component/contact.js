function Contact() {
  const contact = document.querySelector(".contact-section");
  contact.innerHTML = `
    <h2 class="section-title contact-title">Contact me</h2>
    <div class="contact-container">
      <div
        class="left-contact"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <img src="https://res.cloudinary.com/dqbcudtfg/image/upload/v1673315906/portfolio/png-contact_ll06tq.png" alt="" />
      </div>

      <div
        class="right-contact"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <form id="submit">
          <div class="input-box">
            <input
              type="text"
              id="name"
              required="required"
              placeholder="Enter Name"
            />
            <span> name</span>
          </div>
          <div class="input-box">
            <input
              type="email"
              id="email"
              required="required"
              placeholder="Enter email"
            />
            <span> email</span>
          </div>
          <div class="input-box">
            <textarea
              id="message"
              cols="20"
              rows="10"
              required="required"
              placeholder="...some message"
            ></textarea>
            <span class="textarea-span">Message</span>
          </div>
          <button
            class="submit-btn"
            title="Click to send"
            type="submit"
            value="Submit"
          >
            Send
          </button>

          <!-- alert message here -->
          <div class="alert" hidden>
            <span class="icon-check"
              ><i class="fa-solid fa-circle-check"></i
            ></span>
            <span class="message">Message sent successfully!</span>
          </div>
        </form>
      </div>
    </div>
    `;
  return contact;
}

export default Contact;
