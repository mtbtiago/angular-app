// User $ instead of window.Tinder

$("body").on("click", "#bu_yes", function() {
  var person_div = $(this).parentsUntil(".person_div").parent();
  person_div.toggleClass("bounceOutLeft");
});

$("body").on("click", "#bu_nope", function() {
  var person_div = $(this).parentsUntil(".person_div").parent();
  person_div.toggleClass("bounceOutRight");
});
