/*$(document).ready(function (){
  $('body').html('<h1>Hello jQuery!!</h1>');
}); */

$(function(){
  $('button').on('click',function(){
  $('ul').children().css('color','red');
  });
  });