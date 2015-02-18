/* resizing nav bar */
//reduce nav bar size if window is scrolled past the nav height
$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("nav").removeClass("large").addClass("small"); 
    } else{
        $("nav").removeClass("small").addClass("large");
    }
});

/* smooth scrolling */
//use animation to make scrolling smooth
var root = $('html, body');
$("nav a").click(function() {
    var href = $(this.hash);
    href =href.length ? href : $('[id=' + this.hash.slice(1) +']');
    root.animate({
        scrollTop: $(href.selector).offset().top
    }, 800, function () {
        window.location.hash = href.selector;
    });
    return false;
});

/* highlighting nav bar */
var sectArr = []; 
//store each href tag in an array to call upon them later
var sectionList = $("nav li").children();
for (var i=0; i < sectionList.length; i++) {    
    sectArr.push($(sectionList[i]).attr('href'));
}

$(window).scroll(function(){
    //get various positions and offsets
    var windowPos = $(window).scrollTop(); 
    var windowHeight = $(window).height(); 
    var docHeight = $(document).height();
    
    //calculate whether the window is in range of a section from href tags stored in previous array
    for (var i=0; i < sectArr.length; i++) {
        var divPos = $(sectArr[i]).offset().top; 
        var divHeight = docHeight - divPos;
        if(i+1 < sectArr.length){
            divHeight = $(sectArr[i+1]).offset().top - divPos;    
        }
        if (windowPos >= divPos-20 && windowPos < (divPos-20 + divHeight)) {
            $("a[href='" + sectArr[i] + "']").addClass("highlight");
        } else {
            $("a[href='" + sectArr[i] + "']").removeClass("highlight");
        }
    }
    //account for the bottom of the page attributing to the last section
    if(windowPos + windowHeight >= docHeight) {
        if (!$("nav li:last-child a").hasClass("highlight")) {
            $("a[href='" + $(".highlight").attr("href") + "']").removeClass("highlight");
            $("nav li:last-child a").addClass("highlight");
        }
    }
});


/* carousel */

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
    
    //get previous slide on click on left arrow
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
        
            //reset interval
            clearInterval(interval);
            interval = setInterval(function(){
                var i = carousel.find('li' + '.active').index();
                slides().eq(i).fadeOut(transition);            
                slides().eq(i).removeClass('active');


                if(slides().length == i+1) i = -1;

                slides().eq(i+1).fadeIn(transition);
                slides().eq(i+1).addClass('active');
            }, transition+time );
    });
    
    //get next slide on click on right arrow
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
        
            //reset interval
            clearInterval(interval);
            interval = setInterval(function(){
                var i = carousel.find('li' + '.active').index();
                slides().eq(i).fadeOut(transition);            
                slides().eq(i).removeClass('active');


                if(slides().length == i+1) i = -1;

                slides().eq(i+1).fadeIn(transition);
                slides().eq(i+1).addClass('active');
            }, transition+time );
    });
            
});

/*modal */

jQuery(function() {
    // click to open modal
  $(".open-modal").on('click', function(e) {
    e.preventDefault();
    $('html').addClass('no-scroll');
    $('body').append('<div class="modal"><img src="' + $(this).attr('href') + '">');
    return false;
  });
    // click any where to close modal
    $('body').on('click', '.modal', function() {
    $('html').removeClass('no-scroll');
    $('.modal').remove();
  });
  
});