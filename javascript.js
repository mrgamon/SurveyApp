// elements
$(document).ready(function(){
 $('.hovereffect').hover(function () {
     $(this).children('.z-text').css('top', '0').fadeToggle(600);
 });    
});

var activeEl = 2;
$(function() {
    var items = $('.btn-nav');
    $( items[activeEl] ).addClass('active');
    $( ".btn-nav" ).click(function() {
        $( items[activeEl] ).removeClass('active');
        $( this ).addClass('active');
        activeEl = $( ".btn-nav" ).index( this );
    });
});