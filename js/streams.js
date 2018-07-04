// ce, hm+, casual, pvp, lore, critic, guides, news, twitch, yt

/**
 * preach, sloot, bajheera, naowh, marvin, snowbambii, shakib, jdotb, treckie, vitaminpee,
 * mitt, fwi, aristimo, naguura, fragnance, asmongold, method, thete, kruzadar, spiderbearsz,
 * finalboss, fatboss, maset, quin, nobbel, towelliee, madseason, bellular, t&e, pyromancer,
 * signsofkelani
 * 
 */
// name, desc, image index, [categories], [twitch,yt] links
// ["","",[,],[],["",""]],
var channels=[
["Preach Gaming","WoW in-depth discussions",[0,0],["ce","critic","guides","twitch","yt"],["preachlfw","user/mikepreachwow/"]],
["Slootbag","Tank main for &lt;Future&gt;",[0,1],["ce","twitch"],["sloot",""]],
["Bajheera","Highly Ranked Warrior Main",[0,2],["pvp","twitch","yt"],["bajheera","channel/UCiWFHBP-d3GNxg_U3NYJKyg"]],
["Naowh","Tank main, high m+",[0,3],["ce","hm","twitch"],["naowh",""]],
["Marvin","Warlock main, high m+",[0,4],["hm","twitch"],["marvin2",""]],
["Snowbambii","Casual Healer Gameplay",[0,5],["casual","twitch"],["snowbambii",""]],
["Shakib","Vengeance DH main, high m+",[0,6],["hm","twitch","yt"],["shakibdh","channel/UCB8F-nsP-I4Nyb24qo2utIw"]],
["Jdotb","Resto Druid main, high m+",[0,7],["hm","twitch","yt"],["jdotb","user/doook74"]],
["Treckie","Prot Paladin main",[0,8],["ce","twitch"],["treckie",""]],
["Vitaminpee","Tank main for &lt;FASTz&gt;",[0,9],["ce","twitch"],["vitaminpee",""]],
["Mittbitt","Balance Druid main, high m+",[1,0],["hm","twitch"],["coachmitt",""]],
["FwiTV","Mistweaver Monk main for &lt;Vision&gt;",[1,1],["ce","twitch"],["fwitv",""]],
["Aristimo","Tank main for &lt;Vision&gt;",[1,2],["ce","twitch"],["aristimo",""]],
["Naguura","Balance Druid main for &ltFuture&gt;",[1,3],["ce","hm","twitch","yt"],["naguura","user/Naguralove"]],
["Fragnance","Warlock Main for &lt;Future&gt;",[1,4],["ce","hm","twitch","yt"],["fragnance","user/JimmyLandqvist"]],
["Asmongold","It's ya boi",[1,5],["casual","guides","twitch","yt"],["asmongold","user/VertualExchange"]],
["Method","World First Guild",[1,6],["ce","hm","yt"],["","user/MethodNetwork"]],
["Thete Gaming","Ret Main, Warcraft Discussions",[1,7],["ce","critic","twitch","yt"],["thetegaming","user/WarlordThete"]],
["Kruzadar","Casual Balance Druid Main",[1,8],["casual","twitch"],["kruzadar",""]],
["Spiderbearsz","Balance Druid main for &lt;Scared of The Dark&gt;",[1,9],["ce","hm","twitch"],["spiderbearsz",""]],
["FinalbossTV","Enhancement Shaman Main, WoW interviews and discussion",[2,0],["ce","twitch","yt","guides"],["finalbosstv","user/finalbosswow"]],
["FatbossTV","Warcraft raid guides, pre-release coverage and host of the 'Laps Around Dalaran' podcast",[2,1],["ce","guides","critic","yt"],["fatbosstv","user/FatbossTV"]],
["Zatchary Gaming","Holy Paladin main for &lt;Vision&gt;",[2,2],["ce","hm","twitch"],["zatcharygaming",""]],
["Quin69","Kiwi boi plays WoW",[2,3],["ce","twitch"],["quin69",""]],
["Nobbel87","WoW Lore encyclopedia",[2,4],["casual","lore","twitch","yt"],["nobbel87","user/Nobbel87"]],
["Towelliee","Protection Paladin main for &lt;Death Jesters&gt;",[2,5],["ce","twitch"],["towelliee",""]],
["MadSeasonShow","WoW Guides and Tips",[2,6],["guides","news","yt"],["","user/madseasonshow"]],
["Bellular Gaming","WoW News and Guides",[2,7],["guides","news","yt"],["","user/BellularGaming"]],
["Taliesin & Evitel","WoW News and Guides",[2,8],["news","yt"],["","channel/UCiHdR2hAyFEXWCbNQgbu_Dg"]],
["Pyromancer","WoW Conspiracy Theories",[2,9],["lore","yt"],["","user/OldxNite"]],
["Signs of Kelani","WoW Guides",[3,0],["guides","yt"],["","user/SignsOfKelani"]],
];

var categories=["ce","hm","casual","pvp","lore","critic","guides","news","twitch","yt"];
var colors=["var(--g1)","var(--g1)","var(--g1)","var(--g1)","var(--hi1)","var(--hi1)","var(--hi1)","var(--hi1)","var(--p1)","var(--r1)"]
var filters=[];
var fadeSpeed=100;

var twitch="https://www.twitch.tv/";
var yt="https://www.youtube.com/";

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

function addButtonEvents() {

    //Handle Filter Selection
    $('#filtersH div.tags').on('mousedown', function() {
        handleFilterClick( $(this).attr("id") );
    });

    //Handle Clear
    $('#clear').on('mousedown',function(){
        clearFilters();
    });

    //Handle Search
    $('#search').on('mousedown',function(){
        search();
    });
}

function handleFilterClick(id){
    //Check if it is an already selected filter:
    var check=filters.indexOf(id);

    index=categories.indexOf(id);
    if (check<0){
        //filter not previously selected 
        filters.push(id);
        $("#"+id).css("color","var(--c5)");
        
        $("#"+id).css("background-color",colors[index]);   
    }else{
        filters.splice(filters.indexOf(id),1);
        $("#"+id).css("color", colors[index]);
        $("#"+id).css("background-color","");
    }

    $("#fp").fadeOut(fadeSpeed,function(){
        //Update filter paragraph:
        if (filters.length==1){
            $("#fp").text("1 Category selected");
        }else{
            $("#fp").text(filters.length+" Categories selected");
        }
    });

    $("#fp").fadeIn(fadeSpeed);
}

function clearFilters(){
    for (var i=0;i<filters.length;i++){
        id=filters[i];
        index=categories.indexOf(id);
        $("#"+id).css("color", colors[index]);
        $("#"+id).css("background-color","");
    }
    filters=[];

    $("#fp").fadeOut(fadeSpeed,function(){
        //Clear filter paragraph:
        $("#fp").text("0 Categories selected");
    });   
    $("#fp").fadeIn(fadeSpeed);
   
    $("#mH").empty();
}

function search(){
    $("#mH").empty();
    var selectedChannels=[];
    //Search all channels:
    for (var i=0;i<channels.length;i++){  
        var crit=filters.length;   
        //Search all categories:
        for (var j=0;j<channels[i][3].length;j++){
            //Search all filters:
            for(var z=0;z<filters.length;z++){
                if(channels[i][3][j].localeCompare(filters[z])===0){
                    crit--;
                }
            }
        }
        if (crit===0){
            selectedChannels.push(channels[i]);
        }
    }

    //Add channels to list:
    for (i=0;i<selectedChannels.length;i++){
        $("#mH").append("<div id=sc"+i.toString()+" class='pickCard'></div>");
        //Logo Stuff
        $("#sc"+i.toString()).append("<div id=sclb"+i.toString()+" class='cardLogoBack'></div>");
        $("#sclb"+i.toString()).append("<div id='"+"scl"+i.toString()+"' class='cardLogo'></div>");
        $("#scl"+i.toString()).css("background-position",(selectedChannels[i][2][1]*(-100)).toString()+"px "+(selectedChannels[i][2][0]*(-100)).toString()+"px");
        //Body Stuff
        $("#sc"+i.toString()).append("<div id=scb"+i.toString()+" class='cardBody'></div>");
        $("#scb"+i.toString()).append("<div class='cardHeader'>"+selectedChannels[i][0]+"</div>")
        $("#scb"+i.toString()).append("<div class='cardDesc'>"+selectedChannels[i][1]+"</div>")
        //Links Stuff
        $("#sc"+i.toString()).append("<div id=sca"+i.toString()+" class='cardLinks'></div>");
        if (selectedChannels[i][4][0].length>0){
            $("#sca"+i.toString()).append('<a href="'+twitch+selectedChannels[i][4][0]+'" target="_blank" class="tags twitch2">Twitch</a>');
        }
        if (selectedChannels[i][4][1].length>0){
            $("#sca"+i.toString()).append('<a href="'+yt+selectedChannels[i][4][1]+'" target="_blank" class="tags yt2">Youtube</a>');
        }
        
    }

    //Conditions for no results found:
    if (selectedChannels.length<1){
        $("#mH").append("<div id=sc"+i.toString()+" class='pickCard'></div>");
        $("#sc"+i.toString()).css("height","100px");
        $("#sc"+i.toString()).append("<div id=scb"+i.toString()+" class='cardBody'></div>");
        $("#scb"+i.toString()).append("<div class='cardHeader'>"+"No results found for the given categories!"+"</div>")
    }
}



// <div class="pickCard c3">
    // <div class="cardLogoBack">
    //     <div class="cardLogo aristimo"></div>
    // </div>
    // <div class="cardBody">
    //     <div class="cardHeader">Aristimo</div>
    //     <div class="cardDesc">Tank main for &lt;Vision&gt;</div>
    // </div>
    // <div class="cardLinks">
    //     <a href="" target="_blank" class="tags twitch2">Twitch</a>
    // </div>

// </div>