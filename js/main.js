function scrollFooter(scrollY, heightFooter) {
  console.log(scrollY);
  console.log(heightFooter);

  if (scrollY >= heightFooter) {
    $('footer').css({
      'bottom': '0px'
    });
  } else {
    $('footer').css({
      'bottom': '-' + heightFooter + 'px'
    });
  }
}



                    
$(window).on('load', function () {
  var windowHeight = $(window).height(),
    footerHeight = $('footer').height(),
    heightDocument = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

  // Definindo o tamanho do elemento pra animar
  $('#scroll-animate, #scroll-animate-main').css({
    'height': heightDocument + 'px'
  });

  // Definindo o tamanho dos elementos header e conteúdo
  $('header').css({
    'height': windowHeight + 'px',
    'line-height': windowHeight + 'px'
  });

  $('.wrapper-parallax').css({
    'margin-top': windowHeight + 'px'
  });

  scrollFooter(window.scrollY, footerHeight);

  // ao dar rolagem
  $(window).on('scroll', function () {
    var scroll = window.scrollY;

    $('#scroll-animate-main').css({
      'top': '-' + scroll + 'px'
    });

    $('header').css({
      'background-position-y': 20 - (scroll * 120 / heightDocument) + '%'
    });

    scrollFooter(scroll, footerHeight);
  });
});










// TypeScript
var typing = new Typed(".text", {
  strings: ["", "creators.", "editors."],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true
});

// GSAP
gsap.registerPlugin(ScrollTrigger);
const introsplitTypes = document.querySelectorAll(".left-part h1");
introsplitTypes.forEach((char, i) => {
  const i_text = new SplitType(char);
  gsap.to(i_text.chars, {
    y: 0,
    stagger: 0.08, // text splitting transition
    duration: 0.3 // full text duration
  });
});




