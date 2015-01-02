/* custom.js - Grab Bag of useful functions to make the site perform as we expect. */

/* Video Feed Fixer - Embeds come in many sizes, and tend to be sized in such a way that
   they overflow the containers, especially when mobile users enter the mix. Lets fix
   this with some jquery sugar */

// Find all YouTube videos
var $allVideos = $("iframe[src^='http://www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $(".cardbody");

// Figure out and save aspect ratio for each video
$allVideos.each(function() {

  $(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});

// When the window is resized
$(window).resize(function() {

  var newWidth = $fluidEl.width();

  // Resize all videos according to their own aspect ratio
  $allVideos.each(function() {

    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));

  });

// Kick off one resize to fix all videos on page load
}).resize();
