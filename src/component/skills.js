function Skills() {
  const techSkill = document.querySelector(".skills");
  techSkill.innerHTML = `
  <div class="owl-carousel owl-theme">
  <div class="item">
    <i class="fa-brands fa-html5 skill-icon"></i>
  </div>
  <div class="item">
    <i class="fa-brands fa-css3-alt skill-icon"></i>
  </div>
  <div class="item">
    <i class="fa-brands fa-square-js skill-icon"></i>
  </div>
  <div class="item">
    <i class="fa-brands fa-sass skill-icon"></i>
  </div>
  <div class="item">
    <i class="fa-brands fa-react skill-icon"></i>
  </div>
  <div class="item">
    <i class="fa-brands fa-node skill-icon"></i>
  </div>
</div>
  `;
  return techSkill;
}

export default Skills;
