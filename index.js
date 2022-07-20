// jQuery event listener for keypress to change h1 text
$(document).keypress(function(event) {
  $("h1").text(event.key);
});

// mouseover event to change h1 colour and fade out
$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
  $("h1").fadeOut();
})

// mouse out (moving off) changes colour to orange
$("h1").on("mouseout", function() {
  $("h1").css("color", "orange")
})

// add button before and after h1 element
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");

// on button click, fades the h1 element in
$("button").on("click", function() {
  $("h1").fadeIn();
});

// mulitple edits 'chained' together. IN thid case, slide up, slide down and animate opacity
$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
// Note that opacity only works with numerical values