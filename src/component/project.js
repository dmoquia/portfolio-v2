import { portData } from "../../services/data/portfolioData";

function Project() {
  let placeholder = document.querySelector(".project-list");
  let out = "";
  for (let item of portData) {
    out += `
    <div class="flip-card" tabindex=${item.id}>
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src=${item.image} alt="" />
          <h3>${item.title}</h3>
        </div>
        <div class="flip-card-back">
          <h3>
            Tech use <i class="fa-sharp fa-solid fa-layer-group"></i>
            <br />
            <span>${item.techStack}</span>
          </h3>
          <p>
            <span>Description:</span>
            ${item.description}
          </p>
          <span class="demo"
            ><a href=${item.demo} target="_blank"
              >demo<i class="fa-solid fa-globe"></i
            ></a>
            <a
              href=${item.repo}
              target="_blank"
              >repo<i class="fa-brands fa-github"></i
            ></a>
          </span>
        </div>
      </div>
      </div>
    `;
  }
  placeholder.innerHTML = out;
}

export default Project;
