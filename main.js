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
            $("#darkMode").attr("href","/styles/dark.css")
        }
        else{
        }
    });

//          Prelazak u LightMode
    $(blackImg).click(function(){
        if(blackImg){
            blackImg.css("visibility","hidden");
            whiteImg.show();
            $("#darkMode").attr("href","/styles/index.css")
        }
        else{
        }
    });

//           SignIn-BTN-Active

    $(".btnSign").click(function(){
            $(logField).css("visibility","hidden");
            $(signField).css("visibility","visible");
            $(".btnSign").css("background","transparent")
            $(".btnLog").css("background","white");
        
    });

//          LogIn-BTN-Active

    $(".btnLog").click(function(){
            $(signField).css("visibility","hidden");
            $(logField).css("visibility","visible");
            $(".btnLog").css("background","transparent");
            $(".btnSign").css("background","white");
        
    });

    //           Show Password Log In
    
    $("#eyeLog").click(function(){
        if ("password" == $("#passLog").attr("type")){
            $("#passLog").prop("type","text")
            $("#eyeLog").removeClass()
            $("#eyeLog").addClass("fa fa-eye-slash")
        }
        else{
            $("#passLog").prop("type","password")
            $("#eyeLog").removeClass()
            $("#eyeLog").addClass("fa fa-eye")
        }
    });

//           Show Password Sign In

    $("#eyeSign").click(function(){
        if ("password" == $("#passSign").attr("type")){
            $("#passSign").prop("type","text")
            $("#passRepeat").prop("type","text")
            $("#eyeLog").removeClass()
            $("#eyeLog").addClass("fa fa-eye-slash")
        }
        else{
            $("#passSign").prop("type","password")
            $("#passRepeat").prop("type","password")
            $("#eyeLog").removeClass()
            $("#eyeLog").addClass("fa fa-eye")
        }
    });

//           Sign Up BTN  -  Password / Repeated Checker
    
    $(function validate() {
        $("#signInBtn").click(function () {
            
            const passInput = $("#passSign").val();
            const passRepeat = $("#passRepeat").val();
            if (passInput !== passRepeat) {
                alert("Passwords do not match.");
                return false
            }
            else{
                return true
            }
        });
    });


















