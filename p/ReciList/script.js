$(document).ready(function () {
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

// ______________________________________________________________
// Top Nav Functionality
// ______________________________________________________________

$(".nav-logo").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "fast");
  return false;
});

// Theme Toggle

var theme = "food";

$(".nav-theme").click(function () {
  if (theme === "food") {
    // Toggle icon
    $(".fa-pizza-slice").removeClass("theme-active");
    $(".fa-glass-cheers").addClass("theme-active");
    // Toggle main container
    $(".container-food").addClass("slide-out-left");
    $(".container-drinks").removeClass("slide-out-right");
    // Toggle variable & reset scroll
    theme = "drinks";
    $("html, body").delay(400).animate({ scrollTop: 0 }, "fast");
  } else {
    // Toggle icon
    $(".fa-glass-cheers").removeClass("theme-active");
    $(".fa-pizza-slice").addClass("theme-active");
    // Toggle main container
    $(".container-food").removeClass("slide-out-left");
    $(".container-drinks").addClass("slide-out-right");
    // Toggle variable & reset scroll
    theme = "food";
    $("html, body").delay(400).animate({ scrollTop: 0 }, "fast");
  }
});

// Filter Toggle

var navFilter = "closed";

$(".nav-filter").click(function () {
  if (navFilter === "open") {
    $(".nav-filter-container").removeClass("active");
    $(".fa-filter").css("color", "rgba(0, 0, 0, 0.15)");
    $(".nav-filter").css("background-color", "rgba(0, 0, 0, 0)");
    navFilter = "closed";
  } else {
    $(".nav-filter-container").addClass("active");
    $(".fa-filter").css("color", "rgba(255, 151, 55, 0.7)");
    $(".nav-filter").css("background-color", "rgba(0, 0, 0, 0.05)");
    navFilter = "open";
  }
});

// ______________________________________________________________
// Modal Functionality
// ______________________________________________________________

// Show Mask & Transition Modal
function showMaskandModal() {
  $(".mask").addClass("active");
  $(".modal").addClass("active");
  $(".modal").addClass("modalUp");
}

// When mask is clicked, remove the mask, modal, and content
function removeMask() {
  // General Reset
  $(".mask").removeClass("active");
  $(".modal").removeClass("active");
  $(".modal").removeClass("modalUp");
  $(".modal").animate({ scrollTop: 0 }, "fast");
  // $("html, body").animate({ scrollTop: 0 }, "fast");
  // Reset unique Modal content
  $(".modal-content").removeClass("active");
}

// Activate modal & unique content when clicked

$(".card").click(function () {
  var divId = this.id;
  showMaskandModal();
  $("#" + divId + "-content").addClass("active");
});
