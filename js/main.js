document.addEventListener('DOMContentLoaded', function() {
  var aboutPhoto = document.querySelector('.about-photo__box');

  // Добавляем класс .show сразу при загрузке страницы
  aboutPhoto.classList.add('show');


   $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
});


