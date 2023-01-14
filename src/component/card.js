import { portData } from "../../services/data/portfolioData";

function Card() {
  let placeholder = document.querySelector(".project-list");

  let fragment = new DocumentFragment();

  for (let item of portData) {
    const { techStack, image, title, description } = item;

    // Create the card element
    const card = document.createElement("div");
    card.classList.add("card");

    // Create the image element
    const imageEl = document.createElement("div");
    imageEl.classList.add("image");
    const img = document.createElement("img");
    img.src = image;
    imageEl.appendChild(img);

    // Create the content element
    const content = document.createElement("div");
    content.classList.add("content");
    const titleEl = document.createElement("h3");
    titleEl.textContent = title;
    const descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    content.appendChild(titleEl);
    content.appendChild(descriptionEl);

    // Create the tech stack element
    const techStackEl = document.createElement("ul");
    techStackEl.classList.add("tags");
    const techStackHeader = document.createElement("h4");

    techStackHeader.innerHTML =
      'Tech Stack <i class="fa-sharp fa-solid fa-layer-group"></i>';
    for (let tag of techStack.split(", ")) {
      const tagEl = document.createElement("li");
      tagEl.innerHTML = `<em>${tag}</em>`;
      techStackEl.appendChild(tagEl);
    }
    content.appendChild(techStackHeader);
    content.appendChild(techStackEl);

    // Create the demo/repo element
    const demoRepo = document.createElement("div");
    demoRepo.classList.add("demorepo");
    const demoLink = document.createElement("a");
    demoLink.href = item.demo;
    demoLink.target = "_blank";
    demoLink.textContent = "Demo: ";
    demoLink.innerHTML += '<i class="fa-solid fa-globe"></i>';
    const repoLink = document.createElement("a");
    repoLink.href = item.repo;
    repoLink.target = "_blank";
    repoLink.textContent = "Repo: ";
    repoLink.innerHTML += '<i class="fa-brands fa-github"></i>';
    demoRepo.appendChild(demoLink);
    demoRepo.appendChild(repoLink);
    content.appendChild(demoRepo);

    // Append the card elements
    card.appendChild(imageEl);
    card.appendChild(content);
    fragment.appendChild(card);
  }
  placeholder.appendChild(fragment);
}

export default Card;
