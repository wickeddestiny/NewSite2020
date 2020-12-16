//          ShortCuts!
let blackImg = $(".logoBlack").css("visibility","hidden");
let whiteImg = $(".logoWhite").css("visibility","visible");
let signField = $("#signinField").css("visibility","hidden");
let logField = $("#loginField").css("visibility","visible");




//          Prelazak u DarkMode INDEX.HTML
    $(whiteImg).click(function(){
        if(whiteImg && $("body").attr("id") == "index" ){
            whiteImg.hide();
            blackImg.css("visibility","visible");
            $("#darkMode").attr("href","/styles/dark.css")
        }
        else{
        }
    });

//          Prelazak u LightMode INDEX.HTML
    $(blackImg).click(function(){
        if(blackImg && $("body").attr("id") == "index" ){
            blackImg.css("visibility","hidden");
            whiteImg.show();
            $("#darkMode").attr("href","/styles/index.css")
        }
        else{
        }
    });
//          Prelazak u DarkMode LOGIN.HTML
    $(whiteImg).click(function(){
        if(whiteImg && $("body").attr("id") == "login" ){
            whiteImg.hide();
            blackImg.css("visibility","visible");
            $("#darkMode").attr("href","/styles/dark.css")
        }
        else{
            console.log("stupid")
        }
    });

//          Prelazak u LightMode LOGIN.HTML
    $(blackImg).click(function(){
        if(blackImg && $("body").attr("id") == "login" ){
            blackImg.css("visibility","hidden");
            whiteImg.show();
            $("#darkMode").attr("href","/styles/login.css")
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
            $("#eyeSign").removeClass()
            $("#eyeSign").addClass("fa fa-eye-slash")
        }
        else{
            $("#passSign").prop("type","password")
            $("#passRepeat").prop("type","password")
            $("#eyeSign").removeClass()
            $("#eyeSign").addClass("fa fa-eye")
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

//          LogIn Password Include Validation



    $("#signInBtn").click(function (inputtxt) {
        const passInput = $("#passSign").val();
        const passRepeat = $("#passRepeat").val()
        let pwd=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
        if(passInput.match(pwd) && passRepeat.match(pwd)) {
            return true
        }
        else{
            alert(' PASSWORD MUST INCLUDE! Min-Max Characters(6-15) + Min Number (1)!')
            return false;
        }
    });




















