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
	
	$(".topBtn").click(function(event){
		event.preventDefault();
		$("body").animate({
			scrollTop:0
		},800);
	});
});
var photoMass=document.getElementById("map1").getElementsByTagName("img")[0];
var photoMass1=document.getElementById("map1").getElementsByTagName("img")[1];
var photoMass2=document.getElementById("map1").getElementsByTagName("img")[2];
var mapPic = ["image/map/NYyas.png","image/map/DHyas.png","image/map/DEHyas.png"];
var iframe=document.getElementById("ifr");

function mapFunc1(){
	photoMass1.setAttribute("src","image/map/DHboz.png");
	photoMass2.setAttribute("src","image/map/DEHboz.png");
	iframe.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.43843467633!2d-74.11808622462772!3d40.70582531304306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1493743550190");
	count=0;
	photoMass.setAttribute("src", mapPic[count]);
	console.log(count)
	}
function mapFunc2(){
	photoMass.setAttribute("src","image/map/NYboz.png");
	photoMass2.setAttribute("src","image/map/DEHboz.png");
	iframe.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5981744200876!2d90.4145448154366!3d23.832883791536254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65de1c443d3%3A0x29e3642fb77053ae!2sRd+No.+13%2C+Dhaka!5e0!3m2!1sen!2sbd!4v1493743381942");
	count=1;
	photoMass1.setAttribute("src", mapPic[count]);
	console.log(count)
	}
function mapFunc3(){
	photoMass.setAttribute("src","image/map/NYboz.png");
	photoMass1.setAttribute("src","image/map/DHboz.png");
	iframe.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.0889792281!2d77.13894525990527!3d28.52742286149734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew+Delhi%2C+Delhi%2C+India!5e0!3m2!1sen!2sbd!4v1493743454675");
	count=2;
	photoMass2.setAttribute("src", mapPic[count]);
	console.log(count)
	}


$(".innertex").click(function(){
	$(".innertex").css("border-bottom","2px solid lightgray")
	$(this).css("border-bottom","2px solid #53B778")
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
