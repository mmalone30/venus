// This is where it all goes :)
$(window).scroll(function() {
  //alert("You scrolled");

  var windowScroll = $(window).scrollTop();
  if (windowScroll > 96) {
    $("header.article").addClass("scrolling");
    $("header.article h3").addClass("show");
  } else {
    $("header.article").removeClass("scrolling");
    $("header.article h3").removeClass("show");
  }

 console.log(windowScroll);

});
