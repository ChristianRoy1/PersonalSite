//
// Modal Functionality

function showCardWebsite() {
  $(".mask").addClass("active");
  $(".modal").addClass("active");
  $(".modal").addClass("modalUp");

  $(".modal-website").addClass("active");
  // $(".modal-website").addClass("active");
}

// When mask is clicked, remove the mask, modal, and content
function removeMask() {
  $(".mask").removeClass("active");
  $(".modal").removeClass("active");
  $(".modal").removeClass("modalUp");
}
