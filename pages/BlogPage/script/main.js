$(document).ready(function(){
	$(".navRight li a").click(function(event){
		$(".navRight li a").css("borderBottom", "none");
		$(this).css("borderBottom", "2px solid #53B778");
		$(this).css("background", "none");
	});

	$(".dropBtn").hide();
	count=true;
	$("#listBtn").click(function(event) {
		$(".dropBtn").removeClass('hidden-xs');
		if (count==true) {
			$(".dropBtn").slideDown("slow");
			$("#listBtn").attr("class", "lnr lnr-cross visible-xs")
			$("#listBtn").css("float", "right")

			count=false;
		}else {
			count=true;
			$(".dropBtn").slideUp();
			$("#listBtn").attr("class", "lnr lnr-menu")
		}
	});

	$(".topBtn").click(function(event){
		event.preventDefault();
		$("body").animate({
			scrollTop:0
		},800);
	});

	$("div[class^='sliderBtn']").click(function(){
		$("div[class^='sliderBtn']").css("background","white");
		$("div[class^='sliderBtn']").css("border","none");
		$(this).css("border","1px solid white");
		$(this).css("background","none");
	});

	var imgWidth=$(".gallerySlider img").width();

	$(".sliderBtn1").click(function(){		
		$(".gallerySlider").css("left", "0");
	});

	$(".sliderBtn2").click(function(){
		$(".gallerySlider").css("left", -imgWidth)
	});

	$(".sliderBtn3").click(function(){
		$(".gallerySlider").css("left", -2*imgWidth)
	});

	var slider=$(".galleryImg img");
	sum=0;

	$(".btnRight").click(function(){
		sum-=imgWidth;
		if(sum<-1560){
			sum=0;
		}
		for(i=0;i<slider.length;i++){	
		$(".gallerySlider").css("left", sum)
	}
	})
	$(".btnLeft").click(function(){
		sum+=imgWidth;
		if(sum>0){
			sum=-1560;
		}
		for(i=0;i<slider.length;i++){	
		$(".gallerySlider").css("left", sum)	
	}
	})

	$(".pageBtn li").click(function(){
		$(".pageBtn li").css("background","none");
		$(".pageBtn li").css("text-decoration","none");
		$(this).css("background","lightgray");
	});
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