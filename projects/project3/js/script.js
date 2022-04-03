$("document").ready(function () {
    // FADE IN
    $(".fadeIn").hide().fadeIn(1000)
    // HERO SECTION ANIMATIONS
    $(".welcomeSection h1").animate({"font-size":"54px"},1000);
    $(".welcomeSection p").animate({"font-size":"20px"},1000);
    $(".welcomeSection a").animate({"font-size":"18px"},1000);
    $("#productScreen1").animate({"margin-top":"110px"},1000);
    $("#productScreen2").animate({"margin-top":"0px"},1000);
    $("#productScreen3").animate({"margin-top":"-110px"},1000);
    // SCROLL ANIMATIONS
    $(window).scroll( function(){
        if ($(window).scrollTop() > 50){
            $("nav").css({"background":"linear-gradient(to right, #27ecdb, #2ed4fe)","padding-top":"0"})
        }
        else if($(window).scrollTop() < 50){
            $("nav").css({"background":"transparent"})
        }
        if ($(window).scrollTop() > 70) {
            $("#aboutUsHeading").animate({"opacity":"1", "padding-top":"0px"}, 1000);
        }
        if ($(window).scrollTop() > 260){
            $(".aboutUs img").animate({"opacity":"1", "margin-left":"0px"}, 1000);
            $("#aboutUsText").animate({"opacity":"1", "left":"0px"}, 1000);
        }
        if ($(window).scrollTop() > 900){
            $("#productFeatures img").animate({"opacity":"1", "top":"0px", "right":"0px"}, 1000);
            $("#productFeaturesRow1, #productFeaturesHeading").animate({"opacity":"1", "padding-top":"0px"}, 1000);
        }
        if ($(window).scrollTop() > 1000){
            $("#productFeaturesRow2").animate({"opacity":"1", "padding-top":"0px"}, 1000);
        }
        if ($(window).scrollTop() > 1400){
            $("#feature1 .row").animate({"opacity":"1", "padding-top":"0px"}, 1000);
        }
        if ($(window).scrollTop() > 1900){
            $("#feature2 .row").animate({"opacity":"1", "padding-top":"0px"}, 1000);
        }
        if ($(window).scrollTop() > 2400){
            $("#feature3 .row").animate({"opacity":"1", "padding-top":"0px"}, 1000);
        }
        if ($(window).scrollTop() > 3300){
            $("#moreFeatures .container").animate({"opacity":"1", "padding-top":"0px"}, 1000);
        }
        if ($(window).scrollTop() > 3750){
            $("#partners img").animate({"opacity":".5", "top":"0px"}, 1000);
        }
        if ($(window).scrollTop() > 3850){
            $("#pricingTitleAndSubtitle").animate({"opacity":"1", "margin-top":"0px"}, 1000);
        }
        if ($(window).scrollTop() > 3950){
            $(".pricingCard").animate({"opacity":"1", "margin-top":"0px"}, 1000);
        }
        if ($(window).scrollTop() > 5000){
            $("#ourTeamText").animate({"opacity":"1", "margin-top":"0px"}, 1000);
        }
        if ($(window).scrollTop() > 5300){
            $("#ourTeamCardSection").animate({"opacity":"1", "margin-top":"0px"}, 1000);
        }
    })
})

// $(".fadeInOnScroll").each(function(i){
//     var bottom_of_element = $(this).offset().top + $(this).outerHeight();
//     var bottom_of_window = $(window).scrollTop() + $(window).height();
//     if( bottom_of_window > bottom_of_element ){
//         $(this).animate({"opacity":"1"},1000);
//     }
// });