$( document ).ready(function() {
    $( "#user-image-manage ul li a  , #user-image-manage ul li i"  ).click(function() {
        let userImg = $(this).find("img").attr("src");
        let userName = $(this ).find("p").text();
        let userName2 = $(this ).find("p");
        let deleteProfile = $(this).parent();

       

        $("#cancelBtn").click(function(){
            $(".banner .info-manage").remove(); 
            $(".banner .user-info").css("display","block") 
        });
        let changeInput = $("#input");
        $("#saveBtn").click(function(){
            $(".banner .info-manage").remove(); 
            $(".banner .user-info").css("display","block") 
            $(userName2).text(changeInput.val());
            

        });
        $("#deleteButton").click(function(){
            $(".banner .info-manage").remove(); 
            $(".banner .user-info").css("display","block") 
            $(deleteProfile).remove();
        });

        
    });
});