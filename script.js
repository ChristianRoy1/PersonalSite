//
// Modal Functionality

function showCardWebsite() {
  // General functionality
  $(".mask").addClass("active");
  $(".modal").addClass("active");
  $(".modal").addClass("modalUp");
  // Show unique content
  $(".modal-website").addClass("active");
}

function showCardRecipe() {
  // General functionality
  $(".mask").addClass("active");
  $(".modal").addClass("active");
  $(".modal").addClass("modalUp");
  // Show unique content
  $(".modal-recipe").addClass("active");
}

// When mask is clicked, remove the mask, modal, and content
function removeMask() {
  // General Reset
  $(".mask").removeClass("active");
  $(".modal").removeClass("active");
  $(".modal").removeClass("modalUp");
  $(".modal").animate({ scrollTop: 0 }, "fast");
  // Reset unique Modal content
  $(".modal-website").removeClass("active");
  $(".modal-recipe").removeClass("active");
}
