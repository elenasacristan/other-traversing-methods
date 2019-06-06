$(document).ready(function() {


    //When a colored panel is clicked, all panels vanish

  //  $('.theButton').click(function() {

//        var classesList = $(this).attr('class').split(" ");
 //       var classSelected = classesList[2];
 //       $("." + classSelected).hide();

//    });

    //When a colored panel is clicked, just that panel disappears

 //   $('.theButton').click(function() {
//        $(this).hide();
 //   });


//When a panel is clicked, all siblings fade to 10% opacity

//    $('.theButton').click(function() {
//         $('.theButton:not(this)').fadeTo(1000,0.1);
//    });
    
//    $('.superButton').click(function() {
//         $('.theButton').fadeTo(1000,1);
//    });

//    $('.theButton').mouseenter(function() {
//         $(this).addClass('black');
//    });
    
//    $('.theButton').mouseleave(function() {
//        $(this).removeClass('black');
//    });
    
    
    
     //hides all panels when a panel is clicked
//$(".theButton").click(function(){
 // $("#panel .container").siblings().hide();
//   })


//hides only the panel that was clicked
 // $(".theButton").click(function(){
//  $(this).hide();
//   })

//adds  a fadeTo to all panels when a panel is clicked
//$(".theButton").click(function(){
//	$  ("#panel .container").siblings().fadeTo(1000, .5);
//   });


//restores all panels to full opacity when reset button clicked 
//$(".superButton").click(function(){
//	$("#panel .container").siblings().fadeTo(1000,1);	
//  });

//turns panel background black on mouseenter
//$(".theButton").mouseenter(function(){
//	$(this).addClass("black");
//   });

 //returns to original colour on mouseout 
//$(".theButton").mouseout(function(){
//	$(this).removeClass("black");
 //  });


$(".theButton").click(function(){
	
	 var classesList = $(this).attr('class').split(" ");
   var col = $(this).css('background-color');
  $('.superButton').text( col);
});
    
});
