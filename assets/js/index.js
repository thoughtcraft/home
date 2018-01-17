var headerVisible=false;


$( document ).ready(function() {
    //Links: items / tosBisLists
    console.log( "ready!" );
    addClickFunction();
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {myFunction();};
    $("#line1").css("display","flex");
});


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    
    if (window.pageYOffset >= 400 && headerVisible===false) {
        $('#header').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
        headerVisible=true;
    } else if (window.pageYOffset < 400 && headerVisible===true) {
        $('#header').css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0.0});
        headerVisible=false;
    }
    var vis1=(window.innerHeight-$("#ttWrapper").position().top+window.pageYOffset)/($("#ttWrapper").height());
    $('#ttWrapper').css({opacity: vis1, visibility: "visible"});
    
}

function addClickFunction(){
    
    $("#toolsButton").on("click",function(){
        $("#toolsWrapper").fadeTo(300,0);
        
        $("#thoughtsWrapper").fadeTo(300,0,function(){
            $("#line2").css({opacity: 0});
            $("#line2").css("display","flex");
            $("#line1").css("display","none");
            $("#line2").fadeTo(300,1);
        });
        
        
    });
    
    $("#abtToolSelect").on("click",function(){
        //window.location.href = "abtTools.html";
        $("#content").load("abtTools.html #introScreen");  
    });
    
}

//function cacheCheck(){
//	// Check if a new cache is available on page load.
//	window.addEventListener('load', function(e) {
//
//	  window.applicationCache.addEventListener('updateready', function(e) {
//		if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
//		  // Browser downloaded a new app cache.
//		  // Swap it in and reload the page to get the new hotness.
//		  window.applicationCache.swapCache();
//		  if (confirm('A new version of this site is available. Load it?')) {
//			window.location.reload();
//		  }
//		} else {
//		  // Manifest didn't changed. Nothing new to server.
//		}
//	  }, false);
//
//	}, false);
//}