//          ShortCuts!
let blackImg = $(".logoBlack").css("visibility","hidden");
let whiteImg = $(".logoWhite").css("visibility","visible");
let signField = $("#signinField").css("visibility","hidden");
let logField = $("#loginField").css("visibility","visible");


//          Prelazak u DarkMode
$(whiteImg).click(function(){
    if(whiteImg){
        whiteImg.hide();
        blackImg.css("visibility","visible");
        $("#darkMode").attr("href","dark.css")
    }
    else{

    }
});

//          Prelazak u LightMode

$(blackImg).click(function(){
    if(blackImg){
        blackImg.css("visibility","hidden");
        whiteImg.show();
        $("#darkMode").attr("href","style.css")
    }
    else{

    }
});
//           SignIn-BTN-Active
function  signActive () {
    $(".btnSign").click(function(){
        if(".btnSign"){
            
            $(logField).css("visibility","hidden");
            $(signField).css("visibility","visible");
            $(".btnSign").css("background","transparent")
            $(".btnLog").css("background","white");
        }
        else{
    
        }
    });
}


//          LogIn-BTN-Active
function logActive (){
    $(".btnLog").click(function(){
        if(".btnLog"){
    
            $(signField).css("visibility","hidden");
            $(logField).css("visibility","visible");
            $(".btnLog").css("background","transparent");
            $(".btnSign").css("background","white");
    
        }
        else{
    
        }
    });
}




//           Function-After-Sign/Log Page Click

$("#logSignPage").click(function(){
    if("logSignPage"){
        logActive()
    }
});

















