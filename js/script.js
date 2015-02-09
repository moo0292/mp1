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
$('a').click(function() {
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
        var divHeight = docHeight;
        if(i+1 < sectArr.length){
            divHeight = $(sectArr[i+1]).offset().top - divPos;    
        }
        if (windowPos >= divPos-2 && windowPos < (divPos-2 + divHeight)) {
            $("a[href='" + section + "']").addClass("nav-active");
        } else {
            $("a[href='" + section + "']").removeClass("nav-active");
        }
    }

    if(windowPos + windowHeight == docHeight) {
        if (!$("nav li:last-child a").hasClass("nav-active")) {
            var navActiveCurrent = $(".nav-active").attr("href");
            $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
            $("nav li:last-child a").addClass("nav-active");
        }
    }
});