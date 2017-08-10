$(window).ready(function() {
	$(".dropBtn").hide();
	count=true;
	$("#listBtn").click(function(event) {
		$(".dropBtn").removeClass('hidden-xs');
		if (count==true) {
			$(".dropBtn").slideDown("slow");
			$("#listBtn").attr("class", "lnr lnr-cross")
			$("#listBtn").css("float", "right")

			count=false;
		}else {
			count=true;
			$(".dropBtn").slideUp();
			$("#listBtn").attr("class", "lnr lnr-menu")
		}
	});
	$(window).ready(function(){
	$(".topBtn").click(function() {
		$("body").animate({
			scrollTop: 0,
		}, 1500);
	});
})
});


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

$(window).ready(function(){
		$("#banner").click(function(){

		$("#serDropNav").hide();
})
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
	$("#featuredBoxs").hide();
	$(".featuredBoxItem").hide();
	$(".btnimg").click(function(){
		$("section").hide();
		$("#featuredBoxs").show();
		$(".featuredBoxItem").slideDown();
	})

	$(".closeBtn").click(function(){
		$("section").show();
		$("#featuredBoxs").hide();
		$(".featuredBoxItem").slideUp();
	})
})


$(window).ready(function(){
	$("#featuredBoxs .image11").click(function(){
		var slideImgWidth=$(".slideLent img").width();
		$(".slideLent").animate({
			left: 0+"px",
		}, 1000)
		$("#featuredBoxs .image11").css("border","1px solid #53B778")
		$("#featuredBoxs .image22").css("border","none")
		$("#featuredBoxs .image33").css("border","none")
	})	
	$("#featuredBoxs .image22").click(function(){
		var slideImgWidth=$(".slideLent img").width();
		$(".slideLent").animate({
			left: -slideImgWidth+"px",
		}, 1000)
		$("#featuredBoxs .image22").css("border","1px solid #53B778")
		$("#featuredBoxs .image11").css("border","none")
		$("#featuredBoxs .image33").css("border","none")
	})
	$("#featuredBoxs .image33").click(function(){
		var slideImgWidth=$(".slideLent img").width();
		$(".slideLent").animate({
			left: -2*slideImgWidth+"px",
		}, 1000)
		$("#featuredBoxs .image33").css("border","1px solid #53B778")
		$("#featuredBoxs .image11").css("border","none")
		$("#featuredBoxs .image22").css("border","none")
	})
})

