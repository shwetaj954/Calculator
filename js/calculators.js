document.oncontextmenu=new Function("event.returnValue=false");
document.onselectstart=new Function("event.returnValue=false");

$(function () {
    $(".btn").each(function () {
        $(this).click(function () {
          
            var Text = $("#displayer").text().trim();
          
            $("#displayer").append($(this).val());
           
            switch ($(this).val()) {
                case "C":
                   
                    $("#displayer").text("");
                   
                    break;
               
                case "D":
                   
                    $("#displayer").text(Text.substr(0, Text.length - 1));
                   
                    break;
               
                case "=":
               
                function compute(content){
                     var index = content.lastIndexOf("(");
                     if(index > -1){
                        var nextIndex = content.indexOf(")",index);

                        if(nextIndex > -1){
                             var result=compute(content.substring(index + 1,nextIndex));
                            return compute(content.substring(0,index)+(""+result)+content.substring(nextIndex+1));
                        }
                    }
                    index=content.indexOf("+");
                    if(index>-1){
                        return compute(content.substring(0,index))+compute(content.substring(index+1));
                    }
                    index=content.lastIndexOf("-");
                    if(index>-1){
                        return compute(content.substring(0,index))-compute(content.substring(index+1));
                    }
                     index=content.indexOf("*");
                    if(index>-1){
                        return compute(content.substring(0,index))*compute(content.substring(index+1));
                    }
                    index=content.lastIndexOf("/");
                    if(index>-1){
                        return compute(content.substring(0,index))/compute(content.substring(index+1));
                    }
                    if(content==""){
                        return 0;
                    }else{
                         return Number(content);
                    };
                };
                $("#displayer").text(compute(Text));
            };
        });
    });
});

