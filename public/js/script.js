$(document).on("scroll",function(){$(document).scrollTop()>100?$("nav").removeClass("large").addClass("small"):$("nav").removeClass("small").addClass("large")});var $root=$("html, body");$("nav a").click(function(){var a=$(this.hash);return a=a.length?a:$("[id="+this.hash.slice(1)+"]"),$root.animate({scrollTop:$(a.selector).offset().top},800,function(){window.location.hash=a.selector}),!1});for(var sectionList=$("nav li").children(),sectArr=[],i=0;i<sectionList.length;i++){var sect=sectionList[i];sectArr.push($(sect).attr("href"))}$(window).scroll(function(){for(var a=$(window).scrollTop(),b=$(window).height(),c=$(document).height(),d=0;d<sectArr.length;d++){var e=sectArr[d],f=$(e).offset().top,g=c-f;d+1<sectArr.length&&(g=$(sectArr[d+1]).offset().top-f),a>=f-20&&f-20+g>a?$("a[href='"+e+"']").addClass("highlight"):$("a[href='"+e+"']").removeClass("highlight")}a+b>=c&&($("nav li:last-child a").hasClass("highlight")||($("a[href='"+$(".highlight").attr("href")+"']").removeClass("highlight"),$("nav li:last-child a").addClass("highlight")))}),jQuery(function(){function a(){return b.find("li")}var b=$(".carousel"),c=1e3,d=5e3;a().fadeOut(),a().first().addClass("active"),a().first().fadeIn(c),interval=setInterval(function(){var d=b.find("li.active").index();a().eq(d).fadeOut(c),a().eq(d).removeClass("active"),a().length==d+1&&(d=-1),a().eq(d+1).fadeIn(c),a().eq(d+1).addClass("active")},c+d),$("#leftArrow").on("click",function(){var d=b.find("li.active").index();a().eq(d).fadeOut(c),a().eq(d).removeClass("active"),0==d?d=a().length-1:d--,a().eq(d).fadeIn(c),a().eq(d).addClass("active")}),$("#rightArrow").on("click",function(){var d=b.find("li.active").index();a().eq(d).fadeOut(c),a().eq(d).removeClass("active"),d==a().length-1?d=0:d++,a().eq(d).fadeIn(c),a().eq(d).addClass("active")})}),jQuery(function(){$(".open-modal").on("click",function(a){a.preventDefault();var b=$(this).attr("href");return $("html").addClass("no-scroll"),$("body").append('<div class="modal"><img src="'+b+'">'),!1}),$("body").on("click",".modal",function(){$("html").removeClass("no-scroll"),$(".modal").remove()})});