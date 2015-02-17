/* resizing nav bar */
$(document).on("scroll",function(){
    if($(document).scrollTop()>100){
        $("nav").removeClass("large").addClass("small"); 
    } else{
        $("nav").removeClass("small").addClass("large");
    }
});

/* smooth scrolling */
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
var sectionList = $("nav li").children();
for (var i=0; i < sectionList.length; i++) {    
    sectArr.push($(sectionList[i]).attr('href'));
}

$(window).scroll(function(){
    var windowPos = $(window).scrollTop(); 
    var windowHeight = $(window).height(); 
    var docHeight = $(document).height();
    
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
  $(".open-modal").on('click', function(e) {
    e.preventDefault();
    $('html').addClass('no-scroll');
    $('body').append('<div class="modal"><img src="' + $(this).attr('href') + '">');
    return false;
  });

    $('body').on('click', '.modal', function() {
    $('html').removeClass('no-scroll');
    $('.modal').remove();
  });
  
});