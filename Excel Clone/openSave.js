$(document).ready(function(){

    $(".menu-file").click(function (){
        $(".menu-file").append("<div class='btn-save'>Save</div>");
        $(".menu-file").append("<div class='btn-open'>Open</div>");
    });
    $(".menu-file").mouseleave(function (){
        $(".btn-save, .btn-open").remove();
    });



});