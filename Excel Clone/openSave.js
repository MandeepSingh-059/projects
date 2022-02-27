$(document).ready(function(){

    $(".menu-file").click(function (){
        $(".menu-file").append("<div class='btn-save'>Save</div>");
        $(".menu-file").append("<div class='btn-open'>Open</div>");
        

        
        //download
        $(".btn-save").click(function(){
            let jsonData = JSON.stringify(cellData);
            let file = new Blob([jsonData], {type: "application/json"});
    
            let a = document.createElement("a");
            a.href = URL.createObjectURL(file);
            a.download = "SheetData.json";
            a.click();
        })
    



    });
   
   
    $(".menu-file").mouseleave(function (){
        $(".btn-save, .btn-open").remove();
    });

});