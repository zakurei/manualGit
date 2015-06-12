$(document).ready(function(){
 var docw = $(document).width() - 100;
 $("#learn").click(function(){
	$("#main").animate({
		scrollLeft: $("#learning").scrollLeft()}, 700,function(){});
		 main.children().removeClass();
 
		 /* Add active class to clicked anchor's parent li */
 
     		$(this).parent().addClass('active');
   
 });
 $("#try").click(function(){
	$("#main").animate({
		scrollLeft: $("#try_it_out").scrollLeft()}, 700,function(){});   
 });
 $("#sld").click(function(){
	$("#main").animate({
		scrollLeft: $("#slide").scrollLeft()},700,function(){});
});
 $("#blg").click(function(){
	$("#main").animate({
		scrollLeft: $("blog").scrollLeft()},700,function(){});
});

});
