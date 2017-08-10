$(window).ready(function() {
	$(".dropBtn").hide();
	count=true;
	$("#listBtn").click(function(event) {
		$(".dropBtn").removeClass('hidden-xs');
		if (count==true) {
			$("#listBtn").attr("class", "lnr lnr-cross")
			$(".dropBtn").slideDown();
			$("#listBtn").css("float", "right")

			count=false;
		}else {
			count=true;
			$(".dropBtn").slideUp();
			$("#listBtn").attr("class", "lnr lnr-menu")
		}
	});
});



$(window).ready(function(){
	$(".topBtn").click(function() {
		$("body").animate({
			scrollTop: 0,
		}, 1500);
	});
})
$(window).ready(function(){
	$(".process").click(function() {
		$("body").animate({
			scrollTop: 1350,
		}, 1500);
	});
})


$(window).ready(function(){
	$(".input").click(function(event){
		$(".input").css("border-bottom", "2px solid #d5d5d5")
		$(this).css("border-bottom", "2px solid #53b778")
	})
});

var list = $(".tor")

for (var i = 0; i < list.length; i++) {
	list[i].addEventListener("click",function(){
		var element = $(this).index();
		for (var o = list.length; o > element; o--) {
			$(list[o]).removeClass("change");
			
		}
		for (var j = 0; j <= element; j++) {
			$(list[j]).attr("class", "change");

		}
	})
}
$(".ex").css("display","block");
$("#exp").click(function(){
	$(".ex").css("display","block");
	$(".skec").css("display","none");
	$(".digi").css("display","none");
	
})
$("#ske").click(function(){
	$(".skec").css("display","block")
	$(".ex").css("display","none");
	$(".digi").css("display","none");
	
})
$("#digi").click(function(){
	$(".digi").css("display","block")
	$(".ex").css("display","none");
	$(".skec").css("display","none");

})

$("#serDropNav").hide();

$(window).ready(function () {
	
	$( "#banner" ).click(function() {
  		$("#serDropNav").hide();	
	});

})

$("#serDropNav").hide();

$(window).ready(function () {
	
	$( ".clickSer" ).click(function() {
  		$("#serDropNav").toggle();	
	});

})

$("#serDropNav2").hide();
$(window).ready(function () {
	
	$( ".clickSer1" ).click(function() {
  		$("#serDropNav2").toggle();	
	});
	$("#listBtn").click(function() {
		$("#serDropNav2").hide();
	})

})


$(window).ready(function(){
	$("#featuredBox").hide();
	$(".featuredBoxItem").hide();
	$(".btnimg").click(function(){
		$("section").hide();
		$("#featuredBox").show();
		$(".featuredBoxItem").slideDown();
	})

	$(".closeBtn").click(function(){
		$("section").show();
		$("#featuredBox").hide();
		$(".featuredBoxItem").slideUp();
	})
})


$(window).ready(function(){
	$("#featuredBox .img1").click(function(){
		var slideImgWidth=$(".slideLent img").width();
		$(".slideLent").animate({
			left: 0,
		}, 1000)
		$("#featuredBox .img1").css("border","1px solid #53B778")
		$("#featuredBox .img2").css("border","none")
		$("#featuredBox .img3").css("border","none")
	})	
	$("#featuredBox .img2").click(function(){
		var slideImgWidth=$(".slideLent img").width();
		$(".slideLent").animate({
			left: -slideImgWidth+"px",
		}, 1000)
		$("#featuredBox .img2").css("border","1px solid #53B778")
		$("#featuredBox .img1").css("border","none")
		$("#featuredBox .img3").css("border","none")
	})
	$("#featuredBox .img3").click(function(){
		var slideImgWidth=$(".slideLent img").width();
		$(".slideLent").animate({
			left: -2*slideImgWidth+"px",
		}, 1000)
		$("#featuredBox .img3").css("border","1px solid #53B778")
		$("#featuredBox .img1").css("border","none")
		$("#featuredBox .img2").css("border","none")
	})
})



$(window).ready(function(){
	$("#quoteBox").hide();
	$(".quoteBoxItem").hide();
	$(".quoteBtn").click(function(){
		$("section").hide();
		$("#quoteBox").show();
		$(".quoteBoxItem").slideDown();
	})

	$(".closeBtn").click(function(){
		$("section").show();
		$("#quoteBox").hide();
		$(".quoteBoxItem").slideUp();
	})
})

