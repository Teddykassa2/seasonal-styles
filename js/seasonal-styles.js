$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);

        switch(season){

            case "Spring":{

                $("html").css("background-color","#2B7129");
                $("#wear").attr("src","images/spring-wear.jpg");
                $("#logo").attr("src","images/spring.gif");
                $("header h3").text("Jump into Spring wear");
            };
            break;

            case "Summer":{

                $("html").css("background-color","#EBA52B");
                $("#wear").attr("src","images/summer-wear.jpg");
                $("#logo").attr("src","images/summer.gif");
                $("header h3").text("Jump into Summer wear");
                
            };
            break;
        

            case "Fall":{

                $("html").css("background-color","#A81124");
                $("#wear").attr("src","images/fall-wear.jpg");
                $("#logo").attr("src","images/fall.gif");
                $("header h3").text("Jump into Fall wear");
                
            };
            
            break;

            case "Winter":{

                $("html").css("background-color","#005393");
                $("#wear").attr("src","images/winter-wear.jpg");
                $("#logo").attr("src","images/winter.gif");
                $("header h3").text("Jump into Winter wear");
            };
            break;
            
        };


    
        
      

    });
});