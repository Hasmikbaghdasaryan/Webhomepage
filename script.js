
 
$(function(){
	$("#button1").click(function() {
    $('html, body').animate({
        scrollTop: $(".bodypic").offset().top-200+'px'
    }, 1000);
});
	$("#button2").click(function() {
    $('html, body').animate({
        scrollTop: $(".recent").offset().top-200+'px'
    }, 1000);
});
	$("#button3").click(function() {
    $('html, body').animate({
        scrollTop: $(".mans").offset().top-200+'px'
    }, 1000);
});
	$("#button4").click(function() {
    $('html, body').animate({
        scrollTop: $(".form-group").offset().top-200+'px'
    }, 1000);
});

	$("#button6").click(function() {
    $('html, body').animate({
        scrollTop: $(".footerUl").offset().top-200+'px'
    }, 1000);
});


})

$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 100;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "<button class = 'btn'>Read more </button> ";
    var lesstext = "<button class = 'btn'>Read less </button>";
    

    $('.more>p').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});



$(document).ready(function(){
    // $(".inpBtn").click(function(){
    //     $("this").toggle();
    // });
$('.closeall').click(function(){
  $('.panel-collapse.in')
    .collapse('hide');
});
$('.openall').click(function(){
  $('.panel-collapse:not(".in")')
    .collapse('show');
});
});





