  $(document).ready(function(){
    $('.carousel').carousel();
    $(".button-collapse").sideNav();
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    });

$.extend($.lazyLoadXT, {
  edgeY:  200,
  srcAttr: 'data-src'
});

  $('.button-collapse').sideNav({
      menuWidth: 200,
      edge: 'left',
      closeOnClick: true,
      draggable: true,
   }
   );