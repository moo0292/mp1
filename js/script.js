/* resizing nav bar */
$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("nav").removeClass("large").addClass("small");
        //$(".section").removeClass("section-large").addClass("section-small");
        
    } else{
        $("nav").removeClass("small").addClass("large");
        //$(".section").removeClass("section-small").addClass("section-large");
    }
});

/* smooth scrolling */
var $root = $('html, body');
$("nav a").click(function() {
    var href = $(this.hash);
    href =href.length ? href : $('[id=' + this.hash.slice(1) +']');
    $root.animate({
        scrollTop: $(href.selector).offset().top
    }, 800, function () {
        window.location.hash = href.selector;
    });
    return false;
});
/* highlighting nav bar */
var sectionList = $("nav li").children(); // find the a children of the list items
var sectArr = []; // create the empty aArray
for (var i=0; i < sectionList.length; i++) {    
    var sect = sectionList[i];
    sectArr.push($(sect).attr('href'));
} // this for loop fills the aArray with attribute href values

$(window).scroll(function(){
    var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
    var windowHeight = $(window).height(); // get the height of the window
    var docHeight = $(document).height();
    
    for (var i=0; i < sectArr.length; i++) {
        var section = sectArr[i];
        var divPos = $(section).offset().top; // get the offset of the div from the top of page
        var divHeight = docHeight - divPos;
        if(i+1 < sectArr.length){
            divHeight = $(sectArr[i+1]).offset().top - divPos;    
        }
        if (windowPos >= divPos-4 && windowPos < (divPos-4 + divHeight)) {
            $("a[href='" + section + "']").addClass("highlight");
        } else {
            $("a[href='" + section + "']").removeClass("highlight");
        }
    }

    if(windowPos + windowHeight >= docHeight) {
        if (!$("nav li:last-child a").hasClass("highlight")) {
            $("a[href='" + $(".highlight").attr("href") + "']").removeClass("highlight");
            $("nav li:last-child a").addClass("highlight");
        }
    }
});


/* carousel */

/*$(document).ready(function(){
    
    $('.carousel ul').css({width: ($( window ).width()*3)});
    $('.carousel li').css({width: ($( window ).width())});
    $('.carousel img').css({width: ($( window ).width())});
    $('.carousel').css({width: ($( window ).width())});
	// Set the interval to be 5 seconds
	var t = setInterval(function(){
		$(".carousel ul").animate({marginLeft:-1*($(window).width())},1000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},4000);
});

$( window ).resize(function() {
    $('.carousel ul').css({width: ($( window ).width()*3)});
    $('.carousel li').css({width: ($( window ).width())});
    $('.carousel').css({width: ($( window ).width())});
    $('.carousel img').css({width: ($( window ).width())});
});*/



jQuery(function(){
    var carousel = $('.carousel');
    var transition = 1000;
    var time = 4000;
    
    function slides(){
        return carousel.find('li');   
    }
    
    slides().fadeOut();
    
    slides().first().addClass('active');
    slides().first().fadeIn(transition);
    
    interval = setInterval(
        function(){
            var i = carousel.find('li' + '.active').index();
            slides().eq(i).fadeOut(transition);            
            slides().eq(i).removeClass('active');

            
            if(slides().length == i+1) i = -1;
            
            slides().eq(i+1).fadeIn(transition);
            slides().eq(i+1).addClass('active');
        }, transition+time );
    
    $("#leftArrow").on('click', function(){
            var i = carousel.find('li' + '.active').index();
            slides().eq(i).fadeOut(transition);            
            slides().eq(i).removeClass('active');
        
            if(i == 0) 
                i = slides().length - 1;
            else 
                i--;
            slides().eq(i).fadeIn(transition);
            slides().eq(i).addClass('active');
    });

    $("#rightArrow").on('click', function(){
            var i = carousel.find('li' + '.active').index();
            slides().eq(i).fadeOut(transition);            
            slides().eq(i).removeClass('active');
        
            if(i == slides().length-1) 
                i = 0;
            else 
                i++;
            slides().eq(i).fadeIn(transition);
            slides().eq(i).addClass('active');
    });
            
});


jQuery(function() {
  
  // Build modal
  $(".open-modal").on('click', function(e) {
    e.preventDefault();
    var image = $(this).attr('href');
    $('html').addClass('no-scroll');
    $('body').append('<div class="modal"><img src="' + image + '">');
    return false;
  });
  
  // Close modal
    $('body').on('click', '.modal', function() {
    $('html').removeClass('no-scroll');
    $('.modal').remove();
  });
  
});