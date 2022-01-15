var slideIndex = 1;
mostrarSlide(slideIndex);

function plusSlides(n) {
  mostrarSlide(slideIndex += n);
}

function slideAtual(n) {
  mostrarSlide(slideIndex = n);
}

function mostrarSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slide_show");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" ativado", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " ativado";
}
