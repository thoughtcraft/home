var ids=["Garothi","Felhounds","HighCommand","Hasabel","Eonar","Imonar","Kingaroth","Varimathras","Coven","Aggramar","Argus"];
var shortName=["Garothi","Felhounds","High Command","Hasabel","Eonar","Imonar","Kin'garoth","Varimathras","Coven","Aggramar","Argus"];
var fullName=["Garothi Worldbreaker","Felhounds of Sargeras","Antoran High Command","Portal Keeper Hasabel","Eonar the Life-Binder",
              "Imonar the Soulhunter","Kin'garoth","Varimathras","The Coven of Shivarra","Aggramar","Argus the Unmaker"];
var prevClick=-1;
var check=false;
var id="";

$( document ).ready(function() {
    console.log( "ready!" );
    cacheCheck();
    addMouseOvers();
});

function cacheCheck(){
	// Check if a new cache is available on page load.
	window.addEventListener('load', function(e) {

	  window.applicationCache.addEventListener('updateready', function(e) {
		if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
		    // Browser downloaded a new app cache.
		    // Swap it in and reload the page to get the new hotness.
		    window.applicationCache.swapCache();
		    window.location.reload();
		} else {
		  // Manifest didn't changed. Nothing new to server.
		}
	  }, false);

	}, false);
}

function addMouseOvers(){
    $(".bossCard").on("mousedown",function() {
        id="#m"+($(this).attr("id"));
        selectStrat();
    });

    $("#stratReturn").on("mousedown",function(){
        returnToBossSelector();
    });

    $("#descButton").on("mousedown",function(){
        selectDesc();
    });

    $(".dR").on("mousedown",function(){
        returnToStrat();
    });
}

function selectStrat(){
    $("#bossName").html(fullName[Number(id.slice(2))]); // Fetch the boss name for the header;
    $("#bossSelector").fadeOut(400);
    $(id).fadeIn(400);
    $(".mechanicsTabWrapper").css("display","grid");
}

function returnToBossSelector(){
    $(".mechanicsTabWrapper").fadeOut(400);//Fade mechanics Tab
    $(id).hide();
    $("#bossSelector").fadeIn(400);
}

function selectDesc(){
    $(".mechanicsTabWrapper").fadeOut(400);//Fade mechanics Tab
    $(id).hide();
    $("#d"+Number(id.slice(2))).fadeIn(400);
    $("#d"+Number(id.slice(2))).css("display","grid");
}

function returnToStrat(){
    $("#d"+Number(id.slice(2))).fadeOut(400);
    $(id).fadeIn(400);
    $(".mechanicsTabWrapper").css("display","grid");
}
