$(document).ready(function () {
    console.log("Loaded streams js");
    cacheCheck();
    addButtonEvents();
});

function cacheCheck() {
    // Check if a new cache is available on page load.
    window.addEventListener('load', function (e) {

        window.applicationCache.addEventListener('updateready', function (e) {
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

function showSidebar(){
    $(".sidebar").css("display","flex");
    $(".mainWrapper").animate({"margin-left":"180px"},400);
    $(".sidebar").animate({"margin-left":"180px"},400,);
}

function hideSidebar(){
    $(".sidebar").animate({"margin-left":"0px"},400,function(){
        $(".sidebar").css("display","none");
    });
    $(".mainWrapper").animate({"margin-left":"0px"},400);
}

function addButtonEvents() {
    
    $(".sidebarButton").on("mousedown",function(){
        showSidebar();
    });
    $(".sidebarClose").on("mousedown",function(){
        hideSidebar();
    });
}