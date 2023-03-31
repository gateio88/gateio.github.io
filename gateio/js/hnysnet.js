$(document).ready(function() {
	$("#mnav").click(function() {
		$("#navul").fadeToggle(500);
        $(".search_bg").fadeOut();
		
	});
	$("#msearch").click(function() {
		$(".search_bg").fadeToggle(500);
         $("#navul").fadeOut();
		
	});
    $("#search").click(function() {
		$(".search_bg").fadeToggle(500);
	});
    $("#search_off").click(function() {
    $(".search_bg").fadeOut();	
	});
});
$(document).ready(function() {
	var A = document.location;
	$("#navul a").each(function() {
		if (this.href == A.toString().split("#")[0]) {
			$(this).addClass("cur");
			return false;
		}
	});
});
$(document).ready(function() {
	var A = document.location;
	$(".lower a").each(function() {
		if (this.href == A.toString().split("#")[0]) {
			$(this).addClass("cur");
			return false;
		}
	});
});

$(function() {
	var nav = $(".head_a");
	var win = $(window);
	var sc = $(document);
	win.scroll(function() {
		if (sc.scrollTop() >= 60) {
			nav.addClass("fixedhead");
		} else {
			nav.removeClass("fixedhead");
		}
	})
});

$(function(){  
        //页面初始化的时候，获取滚动条的高度（上次高度）  
        var start_height = $(document).scrollTop();  
        //获取导航栏的高度(包含 padding 和 border)  
        var fixednav_height = $('.fixedhead').outerHeight();  
        $(window).scroll(function() {  
            //触发滚动事件后，滚动条的高度（本次高度）  
            var end_height = $(document).scrollTop();  
            //触发后的高度 与 元素的高度对比  
            if (end_height > fixednav_height){  
                $('.fixedhead').addClass('hide');  
            }else {  
                $('.fixedhead').removeClass('hide');  
            }  
            //触发后的高度 与 上次触发后的高度  
            if (end_height < start_height){  
                $('.fixedhead').removeClass('hide');  
            }  
            //再次获取滚动条的高度，用于下次触发事件后的对比  
            start_height = $(document).scrollTop();  
        });  
}); 