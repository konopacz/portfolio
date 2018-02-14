console.log("it's working");

var blogpost1 = document.getElementById('blogpost1');
var readblog1 = document.getElementById('readblogpost1');
var closeblog1 = document.getElementById('closeblogpost1');

  if($('body').is('.blog')){
    readblog1.addEventListener('click', function() {
      blogpost1.style.display = "block";
      readblog1.style.display = "none";


  });
}
  if($('body').is('.blog')){
closeblog1.addEventListener('click', function() {
  blogpost1.style.display = "none";
  readblog1.style.display = "block";
});
}


var charlieTh = document.getElementById('charlieTh');
var overlay = document.getElementById('overlay');
var close = document.getElementById('close');

// prompt2: add click to charlieTh with anonymous function to show the overlay
if($('body').is('.art')){
charlieTh.addEventListener('click', function(){
  overlay.style.display="block";
});
}
// prompt3: add a click to close overlay
if($('body').is('.art')){
close.addEventListener('click', function(){
  overlay.style.display="none";

});
}

var josh = document.getElementById('josh');
var overlay2 = document.getElementById('overlay2');
var close2 = document.getElementById('close2');

// prompt2: add click to charlieTh with anonymous function to show the overlay
if($('body').is('.art')){
josh.addEventListener('click', function(){
  overlay2.style.display="block";
});
}
// prompt3: add a click to close overlay
if($('body').is('.art')){
close2.addEventListener('click', function(){
  overlay2.style.display="none";

});
}




var gladlist = document.getElementById('gladlist');
var overlay3 = document.getElementById('overlay3');
var close3 = document.getElementById('close3');

// prompt2: add click to charlieTh with anonymous function to show the overlay
if($('body').is('.graphic')){
gladlist.addEventListener('click', function(){
  overlay3.style.display="block";
});
}
// prompt3: add a click to close overlay
if($('body').is('.graphic')){
close3.addEventListener('click', function(){
  overlay3.style.display="none";

});
}





//FADING IN

$(function(){  // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1000);

            }

        });

    });

});


var slideIndex = 1;
showDivs(slideIndex);

//Slideshow Code

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
