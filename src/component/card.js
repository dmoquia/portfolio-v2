import { portData } from "../../services/data/portfolioData";

function Card() {
  let placeholder = document.querySelector(".project-list");
  let out = "";

  for (let item of portData) {
    const { techStack, image, title, description } = item;

    const tags = `<ul className='tags'>
${techStack
  .split(", ")
  .map(function (tag) {
    return "<li> <em>" + tag + "</em></li>";
  })
  .join(" ")}
</ul>`;
    out += `
    <div class="card">
    <div class="image">
      <img  src=${image}>
    </div>
    <div class="content">
      <h3>${title}</h3>
      <p>${description}</p>

      <h4>Tech Stack  <i class="fa-sharp fa-solid fa-layer-group"></i></h4>

       ${tags}

      <br>
      <div class="demorepo"> <a href=${item.demo} target="_blank">Demo: <i class="fa-solid fa-globe"></i
      ></a> <a href=${item.repo} target="_blank">Repo: <i class="fa-brands fa-github"></i
      ></a></div>
    </div>
  </div>

</div>
    `;
  }
  placeholder.innerHTML = out;
}

export default Card;
