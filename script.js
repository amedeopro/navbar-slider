var dropDown = $('.dropdown-menu');
var item = $('.item');

item.mouseenter(function(){
  $(this).children('.dropdown-menu').show();
});

item.mouseleave(function(){
  $(this).children('.dropdown-menu').hide();
});
