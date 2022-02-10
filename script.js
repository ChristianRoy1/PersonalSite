function removeMask() {
  $(".projects").removeClass("active");
  $(".project-card").removeClass("adjust-card");
}

function showProjects() {
  $(window).scrollTop(0);
  $(".projects").addClass("active");
  $(".project-card").addClass("adjust-card");
}
