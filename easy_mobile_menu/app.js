$(function(){
var $open = $('#open');
var $close = $('#close');
var $menu = $('#menu');
var $page = $('.container');

$open.on('click',function(){
    $open.css('display','none');
    $close.css('display','inline-block');
    $menu.css('display','block');
    $page.hide();
});

$close.on('click',function(){
    $open.css('display','inline-block');
    $close.css('display','none');
    $menu.css('display','none');
    $page.show();
});
});
