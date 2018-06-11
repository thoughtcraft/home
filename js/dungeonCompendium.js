var role = 0;
var sD = "";
var tankRuns = [
    ['mos', 'y_q8cRpaRxE', '20', "Quaking, Bursting, Fortified", "Blood Death Knight", "Naowh", "7.3.5", 0],
    ["mos", "0fAdpyCaryM", "27", "Bolstering, Grievous, Tyrannical", "Vengeance Demon Hunter", "Shakib", "7.3.5", 0],
    ['hov', 'tlvRGrKl2mk', '28', 'Quaking, Bursting, Fortified', 'Blood Death Knight', 'Lepan', "7.3.5", 0],
    ['lkara', 'QGItZCbxHHY', '29', 'Sanguine, Grievous, Fortified', 'Blood Death Knight', 'Naowh', '7.3.5', 0],
    ['coen', 'Zeu9VvxehdU', '28', 'Volcanic, Raging, Tyrannical', 'Blood Death Knight', 'Naowh', '7.3.5', 0],
    ['nl', 'ADeazWASGck', '25', 'Teeming, Quaking, Fortified', 'Blood Death Knight', 'Lazel', '7.3.5', 0],
    ['nl', '55hreNzsIUk', '20', 'Bolstering, Skittish, Fortified', 'Protection Warrior', 'Foraken', '7.3.0', 0],
    ['lkara','186254644','23','Raging, Necrotic,Tyrannical','Brewmaster Monk','Jason (Zqs)','7.2.5',1],
    ['votw','241848519','28','Sanguine, Necrotic, Fortified',"Vengeance Demon Hunter", "Shakib", "7.3.5", 1],
    ['cos','233017080','27','Burstering, Quaking, Fortified',"Vengeance Demon Hunter", "Shakib", "7.3.5", 1],
    ['arc','238269596','27','Teeming, Explosive, Fortified',"Vengeance Demon Hunter", "Shakib", "7.3.5", 1],   
    ['brh','229574538','27','Sanguine, Grievous, Fortified',"Vengeance Demon Hunter", "Shakib", "7.3.5", 1],
    ['nl','229010314','27','Sanguine, Grievous, Fortified',"Vengeance Demon Hunter", "Shakib", "7.3.5", 1],
    ['dht','223187613','27','Bolstering, Skittish, Fortified',"Vengeance Demon Hunter", "Shakib", "7.3.5", 1],
    ['mos','213294764','25','Sanguine, Volcanic, Fortified',"Vengeance Demon Hunter", "Shakib", "7.3.2", 1],
    ['brh','258553999','28','Sanguine, Grievous, Fortified',"Blood Death Knight", "Naowh", "7.3.5", 1],
    ['sott','206262630','23','Bursting, Quaking, Fortified',"Blood Death Knight", "Naowh", "7.3.2", 1],
    ['eoa','222666899','27','Bolstering, Skittish, Fortified',"Blood Death Knight", "Naowh", "7.3.5", 1],
    ['ukara','9o7qLG3vtUc','21','Bursting, Skittish, Fortified',"Blood Death Knight", "JaceDK", "7.3.5", 0],
    ['sott','263749739','27','Bursting, Quaking, Fortified',"Blood Death Knight",'Lepan','7.3.5',1],
    ['cos','263752378','28','Bursting, Quaking, Fortified',"Blood Death Knight",'Lepan','7.3.5',1],
    ['nl','263751890','27','Bursting, Quaking, Fortified',"Blood Death Knight",'Lepan','7.3.5',1],
    ['arc','263512097','28','Bursting, Quaking, Fortified',"Blood Death Knight",'Lepan','7.3.5',1],
    ['ukara','185329636','22','Teeming, Quaking, Fortified',"Brewmaster Monk",'Jason (Zqs)','7.3.0',1],
    ['brh','183887000','23','Teeming, Quaking, Fortified',"Brewmaster Monk",'Jason (Zqs)','7.3.0',1],
    ['arc','185323651','21','Teeming, Quaking, Fortified',"Brewmaster Monk",'Jason (Zqs)','7.3.0',1],
    ['coen','185325424','22','Teeming, Quaking, Fortified',"Brewmaster Monk",'Jason (Zqs)','7.3.0',1],
    ['mos', 'tSNKnvFLJcs', '15', 'Sanguine, Overflowing, Tyrannical', 'Brewmaster Monk', 'Keggernaut', '7.1.5', 0]
];

var dpsRuns = [
    ["mos", "LqXO2XnlCsg", "21", "Sanguine, Grievous, Fortified", "Affliction Warlock", "Deepshades", "7.3.5", 0],
    ['mos', '7dZgDQr3K-Q', '17', 'Sanguine Volcanic Tyrannical', 'Balance Druid', 'Naguura', '7.3.0', 0],
    ['arc', 'T39s2fbngS8', '27', 'Sanguine Volcanic Fortified', 'Windwalker Monk', 'Darkee', '7.3.5', 0],
    ['sott', 'hfjkY_tFcQs', '24', 'Bolstering, Grievous, Fortified', 'Havoc Demon Hunter', 'Frankster', '7.3.5', 0],
    ['lkara', 'oeQ0FuTkbns', '28', 'Quaking, Bursting, Fortified', 'Marksmanship Hunter', 'Gingi', '7.3.5', 0],
    ['sott', 'AtdzTpDguLk', '26', 'Sanguine, Grievous, Fortified', 'Affliction Warlock', 'Fragnance', '7.3.5', 0],
    ['eoa', 'JUd846JVI7k', '27', 'Bolstering, Skittish, Fortified', 'Affliction Warlock', 'Fragnance', '7.3.5', 0],
    ['votw', 'XzC8xJs1Ljc', '27', 'Bolstering, Skittish, Fortified', 'Affliction Warlock', 'Fragnance', '7.3.5', 0],
    ['cos', 'wSFAdotTEmQ', '27', 'Bolstering, Skittish, Fortified', 'Affliction Warlock', 'Fragnance', '7.3.5', 0],
    ['lkara', 'WhlzHP6ap2s', '25', 'Sanguine, Volcanic, Fortified', 'Affliction Warlock', 'Fragnance', '7.3.5', 0],
    ['dht', '3djyuOrnOKU', '27', 'Skittish, Bolstering, Fortified', 'Marksmanship Hunter', 'Gingi', '7.3.5', 0],
    ['brh', 'Ll2A9J3H-yw', '27', 'Teeming, Quaking, Fortified', 'Marksmanship Hunter', 'Gingi', '7.3.5', 0],
    ['coen', 'ihhSxVvHeTE', '27', 'Sanguine, Grievous, Fortified', 'Affliction Warlock', 'Sjeletyven', '7.3.5', 0],
    ['hov', 'El9cE7DdM0A', '26', 'Sanguine, Volcanic, Fortified', 'Marksmanship Hunter', 'Gingi', '7.3.5', 0],
    ['nl', '7JNOXAGI8Dg', '25', 'Teeming, Quaking, Fortified', 'Marksmanship Hunter', 'Gingi', '7.3.5', 0],
    ['nl', 'pNhcEwYdEmM', '23', 'Bolstering, Grievous, Tyrannical', 'Shadow Priest', 'Matthxw', '7.3.5', 0],
    ['ukara','nsiKfXjiiuE','27','Raging, Volcanic, Tyrannical','Affliction Warlock','Sjeletyven','7.3.5',0],
    ['ukara','2XlxfgwUHw8','27','Bursting, Quaking, Fortified','Fire Mage','Imfiredup','7.3.5',0],
    ['ukara','ja_pP07Dtpk','26','Bolstering, Skittish, Fortified','Marksmanship Hunter','Rogerbrown','7.3.5',0]
];

var healerRuns = [
    ["mos", "Uur77D38CDM", "25", "Raging, Necrotic, Tyrannical", "Restoration Druid", "Jdotb", "7.3.5", 0],
    ["mos", "XLFgtGi1JGE", "25", "Sanguine, Volcanic, Fortified", "Restoration Druid", "Jdotb", "7.3.2", 0],
    ["mos", "oiEujKijeXc", "15", "Skittish, Bolstering, Fortified", "Restoration Shaman", "Honorbound", "7.1.0", 0],
    ["hov", "yJvw0s8t-eY", "22", "Sanguine, Grievous, Fortified", "Restoration Shaman", "Honè", "7.2.0", 0],
    ['ukara', 'tgjhsxKwJb4', '25', 'Teeming, Explosive, Fortified', 'Restoration Druid', 'Jdotb', '7.3.0', 0],
    ['ukara', '6YHeuJskuws', '23', 'Skittish, Bolstering, Fortified', 'Holy Paladin', 'Meowchan', '7.2.5', 0],
    ['votw', 'u7qVnNPoy7c', '28', 'Sanguine, Necrotic, Fortified', 'Restoration Druid', 'Jdotb', '7.3.5', 0],
    ['hov', 'Ngdp213e1Ps', '25', 'Volcanic, Raging, Tyrannical', 'Holy Paladin', 'Zmok', '7.3.5', 0],
    ["nl", "8Lu4lyKCaKQ", "27", "Sanguine, Grievous, Fortified", "Restoration Druid", "Jdotb", "7.3.5", 0],
    ['nl', 'VzmaKuhKv6Y', '22', 'Sanguine, Volcanic, Fortified', 'Holy Paladin', 'Holypalaswe', '7.2.5', 0],
    ['brh','164800968','21','Raging, Necrotic, Tyrannical','Holy Paladin','Maset','7.2',1],
    ['ukara','KvLXwkusfts','25','Bolstering, Grievous, Tyrannical','Holy Paladin','Zmok','7.3.2',0],
    ["brh", "znMwAQ89Er4", "21", "Sanguine, Grievous, Fortified", "Restoration Shaman", "Honè", "7.2.0", 0],
    ["cos", "RbufsfC0tTs", "21", "Bolstering, Skittish, Fortified", "Restoration Shaman", "Honè", "7.2.0", 0]
];

// ['','','','','','','',]
fullNames = [["arc", "Arcway"], ["brh", "Black Rook Hold"], ["coen", "Cathedral of Eternal Night"], ["cos", "Court of Stars"], ["dht", "Darkheart Thicket"], ["eoa", "Eye of Azshara"], ["hov", "Halls of Valor"], ["lkara", "Lower Karazhan"], ["mos", "Maw of Souls"], ["nl", "Neltharion's Lair"], ["sott", "Seat of the Triumverate"], ["ukara", "Upper Karazhan"], ["votw", "Vault of the Wardens"]]

var runs = [tankRuns, dpsRuns, healerRuns];

$(document).ready(function () {
    console.log("Loaded dc js");
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
    $("#healerButton").on("mousedown", function () {
        role = 2;
        showDungeonSelector();
    });
    $("#dpsButton").on("mousedown", function () {
        role = 1;
        showDungeonSelector();
    });
    $("#tankButton").on("mousedown", function () {
        role = 0;
        showDungeonSelector();
    });
    $("#returnCard").on("mousedown", function () {
        showRoleSelector();
    });
    $(".dungeonCard").on("mousedown", function () {
        sD = $(this).attr("id");
        console.log(sD);
        buildDungeonView();
        showDungeonView();
    });
    $("#keysReturn").on("mousedown", function () {
        returnFromKeys();
    });
}

function showDungeonSelector() {
    $("#roleScreen").fadeOut(400);
    $("#dungeonScreen").fadeIn(400);
    $("#dungeonScreen").css("display", "grid");
}

function showRoleSelector() {
    $("#dungeonScreen").fadeOut(400);
    $("#roleScreen").fadeIn(400);
    $("#roleScreen").css("display", "grid");
}

function showDungeonView() {
    $("#dungeonScreen").fadeOut(400);
    $("#keysMainWrapper").fadeIn(400);
    $("#keysMainWrapper").css("display", "flex");
}

function returnFromKeys() {
    $("#keysMainWrapper").fadeOut(400);
    $("#keysView").empty();
    $("#dungeonScreen").fadeIn(400);
    $("#dungeonScreen").css("display", "grid");
}


function buildDungeonView() {
    var j = 0;
    //Find the full name for the header:
    var name = "";
    for (var z = 0; z < fullNames.length; z++) {
        if (sD == fullNames[z][0]) {
            name = fullNames[z][1];
            break;
        }
    }
    if (role == 0) {
        $("#keysHeader").text(name + " - Tank PoV");
    } else if (role == 1) {
        $("#keysHeader").text(name + " - DPS PoV");
    } else {
        $("#keysHeader").text(name + " - Healer PoV");
    }
    for (var i = 0; i < runs[role].length; i++) {

        if (sD == runs[role][i][0]) {

            if (runs[role][i][7] == 0) {
                $("#keysView").append("<div id='k" + j.toString() + "' class='keyCard'" + 'onclick="window.open(&quot;https://www.youtube.com/watch?v=' + runs[role][i][1] + '&quot;,&quot;mywindow&quot;)"' + "></div>)");
                $("#k" + j.toString()).append("<img class='videoThumbnail' src='https://img.youtube.com/vi/" + runs[role][i][1] + "/mqdefault.jpg'></img>");
            } else {
                $("#keysView").append("<div id='k" + j.toString() + "' class='keyCard'" + 'onclick="window.open(&quot;http://player.twitch.tv/?video=v' + runs[role][i][1] + '&quot;,&quot;mywindow&quot;)"' + "></div>)");
                $("#k" + j.toString()).append("<iframe class='videoThumbnail' src='http://player.twitch.tv/?video=v" + runs[role][i][1] + "&!autoplay' frameborder='0' allowfullscreen='true' autoplay='false'></iframe>");
            }


            $("#k" + j.toString()).append("<div id='k" + j.toString() + "_c'" + " class='keyContent'></div>");
            $("#k" + j.toString() + "_c").append('<p class="keyLine"><span style="font-weight: 900">Level: </span>' + '+' + runs[role][i][2] + '</p>');
            $("#k" + j.toString() + "_c").append('<p class="keyLine"><span style="font-weight: 900">Affixes: </span>' + runs[role][i][3] + '</p>');
            $("#k" + j.toString() + "_c").append('<p class="keyLine"><span style="font-weight: 900">Class: </span>' + runs[role][i][4] + '</p>');
            $("#k" + j.toString() + "_c").append('<p class="keyLine"><span style="font-weight: 900">Player: </span>' + runs[role][i][5] + '</p>');
            $("#k" + j.toString() + "_c").append('<p class="keyLine"><span style="font-weight: 900">Patch: </span>' + runs[role][i][6] + '</p>');

            j++;
        }
    }

}



// <!-- <div class="keyCard">
// <a href="https://www.youtube.com/watch?v=0fAdpyCaryM" target="_blank">
//     <img class="videoThumbnail" src="https://img.youtube.com/vi/0fAdpyCaryM/mqdefault.jpg"></img>
// </a>
// <div class="keyContent">
//     <p class="keyLine"><span style="font-weight: 900">Level:</span> +27</p>
//     <p class="keyLine">Affixes: Tyrannical, Bolstering, Grievous</p>
//     <p class="keyLine">Class: Vengeance Demon Hunter</p>
//     <p class="keyLine">Player: Shakib</p>
// </div>

// </div> -->