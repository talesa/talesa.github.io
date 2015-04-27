$(document).ready(function(){       
   var scrollStart = 0;
   var startChange = $('#cover-heading');
   var offset = startChange.offset();
   var colorAlpha1 =  $("#navigation").css("background-color");
   var colorAlpha2 = "rgba(255, 255, 255, 0)";

   function checkScroll() { 
    scrollStart = $(this).scrollTop();
    if(scrollStart > offset.top) {
        $("#navigation").removeClass("top");
        $("#navigation").addClass("scrolled");
        $("#navigation").css("background-color", colorAlpha1);
        $("#navigation a").css("color", "#000");
     } else {
        $("#navigation").removeClass("scrolled");
        $("#navigation").addClass("top");
        $("#navigation").css("background-color", colorAlpha2);
        $("#navigation a").css("color", "#fff");
     }
   }

   checkScroll();

   if (startChange.length) {
	   $(document).scroll(checkScroll);
   }
  $("#body").css("display", "block");
});