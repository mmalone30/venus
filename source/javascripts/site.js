// This is where it all goes :)
$(window).scroll(function() {
  //alert("You scrolled");

  var windowScroll = $(window).scrollTop();
  if (windowScroll > 96) {
    $("header.article").addClass("scrolling");
  } else {
    $("header.article").removeClass("scrolling");
  }

 console.log(windowScroll);

});
