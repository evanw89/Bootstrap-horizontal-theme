//BE SURE TO VIEW IN FULL MODE FOR THE FULL EFFECT

var scrollCountLeft = 0

// window.onresize = function() {
//  var windowWidth = $(window).width(); 
// }

$(window).bind('mousewheel', function(e){
  var windowWidth = $(window).width();
  $( window ).resize(function() {
    $("body > div.container-fluid").css("transform","translateX(0)");
    var windowWidth = $(window).width(); 
    var scrollCountLeft = 0
  });
  if(e.originalEvent.wheelDelta < 0) {
    scrollCountLeft = scrollCountLeft + 1;
    if(scrollCountLeft>3) {
      scrollCountLeft=3;
    }
    $("body > div.container-fluid").css("transform","translateX(" + (windowWidth * scrollCountLeft * -1) + "px)");
    // scrollCountLeft = scrollCountLeft + 1;
    // $(window).scrollLeft(windowWidth * scrollCountLeft);
    // if(scrollCountLeft>3) {
    //   scrollCountLeft=3;
    // }
  }
  if(e.originalEvent.wheelDelta > 0) {
      var windowWidth = $(window).width();
    $( window ).resize(function() {
      $("body > div.container-fluid").css("transform","translateX(0)");
      var windowWidth = $(window).width(); 
      var scrollCountLeft = 0
    });
    scrollCountLeft = scrollCountLeft - 1;
    if(scrollCountLeft<0) {
      scrollCountLeft=0;
    }
    $("body > div.container-fluid").css("transform","translateX(" + (windowWidth * scrollCountLeft * -1) + "px)");
  //   scrollCountLeft = scrollCountLeft - 1;
  //   if(scrollCountLeft<0) {
  //     scrollCountLeft=0;
  //   }
  //   $(window).scrollLeft(windowWidth * scrollCountLeft);
  }
});
var isFirefox = 
                  navigator.userAgent.toLowerCase().indexOf('firefox') > -1; 
if(isFirefox) {
  
$(window).on('mousewheel DOMMouseScroll', function(event){
  $( window ).resize(function() {
      $("body > div.container-fluid").css("transform","translateX(0)");
      var windowWidth = $(window).width(); 
      var scrollCountLeft = 0
    });
  if(event.originalEvent.detail > 0) {
    scrollCountLeft = scrollCountLeft + 1;
    if(scrollCountLeft>3) {
      scrollCountLeft=3;
    }
    $("body > div.container-fluid").css("transform","translateX(" + (windowWidth * scrollCountLeft * -1) + "px)");
//     scrollCountLeft = scrollCountLeft + 1;
//     $(window).scrollLeft(windowWidth * scrollCountLeft);
//     if(scrollCountLeft>3) {
//       scrollCountLeft=3;
//     }
  }
  if(event.originalEvent.wheelDelta < 0) {
    $( window ).resize(function() {
      $("body > div.container-fluid").css("transform","translateX(0)");
      var windowWidth = $(window).width(); 
      var scrollCountLeft = 0
    });
    scrollCountLeft = scrollCountLeft - 1;
    if(scrollCountLeft<0) {
      scrollCountLeft=0;
    }
    $("body > div.container-fluid").css("transform","translateX(" + (windowWidth * scrollCountLeft * -1) + "px)");
//     scrollCountLeft = scrollCountLeft - 1;
//     if(scrollCountLeft<0) {
//       scrollCountLeft=0;
//     }
//     $(window).scrollLeft(windowWidth * scrollCountLeft);
  }
});
  
}
var windowWidth = $(window).width(); 