function ToggleMenu() {
  $(document).ready(function () {
    $("#menu").click(function () {
      // Toggle navbar button animation
      $(this).toggleClass("active");

      // Toggle navbar menu
      $(".hideNav").slideToggle(500, function () {
        if ($(this).css("display") == "none") {
          // Remove inline class
          $(this).css("display", "");
        }
      });
      $(".menu-bar>i.fa-solid").toggleClass("fa-xmark");
    });
  });
}

export default ToggleMenu;
