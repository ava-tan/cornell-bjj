$(document).ready(function() {
  var i = 1;
  var time = 2000;

  function changeImage(){
      i = (i+1)%5;

    if(i==0){
      i = 1;
    }

    document.getElementById("carousel").src = "images/carousel-" + i + ".jpg";
  }

  function slider(){
    setInterval(changeImage, time);
  }

  window.onload = slider;

});
