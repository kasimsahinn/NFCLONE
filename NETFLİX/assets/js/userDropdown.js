$( document ).ready(function() {
    var userImage = $(".user-img-dropdown");
    var userImage2 = $(".user-img-dropdown div");
    $(userImage).hover(function () {
        $(userImage2).addClass("dropdown-open");
        $(".user-img-dropdown i").addClass("rotate")
    })

    $(userImage).mouseleave(function () {
        $(userImage2).delay(1000).queue(function(next){
            $(userImage2).removeClass("dropdown-open");
            $(".user-img-dropdown i").removeClass("rotate");
            next();
        });
    })
});