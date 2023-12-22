// ***for hide***//

$("#hide").click(function(){
    $(".details").hide();
})
// ***for Show***//

$("#show").click(function(){
    $(".details").show();
})
// ***for Hide with slow animation***//

$("#hide2").click(function(){
    $(".details").hide(1000);
})
// ***Show with slow animation***//

$("#show2").click(function(){
    $(".details").show(1000);
})
// ***for fadeIn***//

$("#fade").click(function(){
    $(".details").fadeIn(1000);
})
// ***for fadeOut***//

$("#fade2").click(function(){
    $(".details").fadeOut(1000);
})
// ***for fadeToggle***//

$("#fade3").click(function(){
    $(".details").fadeToggle();
})
// ***for fadeTo***//

$("#fade4").click(function(){
    $(".details").fadeTo(show , 0.7);
})

// ***for Toggle***//

$("#toggle").click(function(){
    $(".chnge").slideToggle(show );
})

// ***for Animation ***//

$("#anime").click(function(){
    $(".chnge").fadeTo(show );
})