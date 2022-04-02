$(document).ready(function() {
    var botao = $('.menu');
    var dropDown = $('.menu_lista');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });