var IsPlaying = false;
var IsShuffling = false;
var IsRepeating = false;


function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].style.background = "#990033";
        tablinks[i].style.color = "#FFCC33"; //Set colors back to default
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    
    document.getElementById('dropbox').style.display = "inline";
}

function openNestedTab(evt, parent, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks, nestedtablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    nestedtablinks = document.getElementsByClassName("nestedtablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        nestedtablinks[i].style.background = "#990033";
        nestedtablinks[i].style.color = "#FFCC33"; //Set colors back to default
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(parent).style.display = "block";
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    
    document.getElementById('dropbox').style.display = "inline";
}


function closeTab(evt){
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].style.background = "#990033";
        tablinks[i].style.color = "#FFCC33"; //Set colors back to default
    }
    document.getElementById('bar_search').value = "";
    document.getElementById('bar_search').placeholder = "Search All";
    
    document.getElementById('dropbox').style.display = "none";
}


function clickLibraryTab(evt){
    openTab(evt, "tabcontent_library");
    clickSongTab(evt);
    
    document.getElementById("tablink_library").style.backgroundColor = "#FFCC33";
    document.getElementById("tablink_library").style.color = "#990033";
}

function clickPlaylistTab(evt){
    openTab(evt, "tabcontent_playlist");
    document.getElementById('bar_search').placeholder = "Search Playlist";
    
    document.getElementById("tablink_playlist").style.backgroundColor = "#FFCC33";
    document.getElementById("tablink_playlist").style.color = "#990033";
}

function clickQueueTab(evt){
    openTab(evt, "tabcontent_queue");
    document.getElementById('bar_search').placeholder = "Search Queue";
    
    document.getElementById("tablink_queue").style.backgroundColor = "#FFCC33";
    document.getElementById("tablink_queue").style.color = "#990033";
}

function clickSongTab(evt){
    openNestedTab(evt, "tabcontent_library", "tabcontent_library_song");
    document.getElementById('bar_search').placeholder = "Search Song";
    
    document.getElementById("tablink_library_song").style.backgroundColor = "#FFCC33";
    document.getElementById("tablink_library_song").style.color = "#990033";
}

function clickArtistTab(evt){
    openNestedTab(evt, "tabcontent_library", "tabcontent_library_artist");
    document.getElementById('bar_search').placeholder = "Search Artist";
    
    document.getElementById("tablink_library_artist").style.backgroundColor = "#FFCC33";
    document.getElementById("tablink_library_artist").style.color = "#990033";
}

function clickAlbumTab(evt){
    openNestedTab(evt, "tabcontent_library", "tabcontent_library_album");
    document.getElementById('bar_search').placeholder = "Search Album";
    
    document.getElementById("tablink_library_album").style.backgroundColor = "#FFCC33";
    document.getElementById("tablink_library_album").style.color = "#990033";
}

function clickSettingsBtn(evt){
    openTab(evt, "tabcontent_settings");
    document.getElementById('bar_search').placeholder = "Search Setting";
    
    document.getElementById("tablink_library_song").style.backgroundColor = "#FFCC33";
    document.getElementById("tablink_library_song").style.color = "#990033";
}

function clickPlayPauseBtn(evt){
    IsPlaying = !IsPlaying;
    if (IsPlaying){
        document.getElementById('btn_play').style.display = "none";
        document.getElementById('btn_pause').style.display = "inline";
    }
    else{
        document.getElementById('btn_play').style.display = "inline";
        document.getElementById('btn_pause').style.display = "none";
    }
}

function clickShuffleBtn(evt){
    IsShuffling = !IsShuffling;
    if (IsShuffling)
        document.getElementById('btn_shuffle').src = "./Resources/shuffle-on.png";
    else
        document.getElementById('btn_shuffle').src = "./Resources/shuffle-off.png";
}

function hoverShuffleBtn(evt){
    if (IsShuffling)
        document.getElementById('btn_shuffle').src = "./Resources/shuffle-on.png";
    else
        document.getElementById('btn_shuffle').src = "./Resources/shuffle-off.png";
}


function clickRepeatBtn(evt){
    IsRepeating = !IsRepeating;
    if (IsRepeating)
        document.getElementById('btn_repeat').src = "./Resources/repeat-on.png";
    else
        document.getElementById('btn_repeat').src = "./Resources/repeat-off.png";
}

function hoverRepeatBtn(evt){
    if (IsRepeating)
        document.getElementById('btn_repeat').src = "./Resources/repeat-on.png";
    else
        document.getElementById('btn_repeat').src = "./Resources/repeat-off.png";
}

function nextInQueue(evt){
    var center = document.getElementById('albumart_center');
    var left = document.getElementById('albumart_left');
    var right = document.getElementById('albumart_right');
    
    var temp = document.getElementById('albumart_center').src;
    
    center.src = right.src;
    right.src = left.src;
    left.src = temp;
    switchSongTitle(evt);
}

function previousInQueue(evt){
    var center = document.getElementById('albumart_center');
    var left = document.getElementById('albumart_left');
    var right = document.getElementById('albumart_right');
    
    var temp = document.getElementById('albumart_center').src;
    
    center.src = left.src;
    left.src = right.src;
    right.src = temp;
    
    switchSongTitle(evt);
}

function switchSongTitle(evt){
    var center = document.getElementById('albumart_center');
    var filename = center.src.split(/(\\|\/)/g).pop();
    
    if (filename === "Abbey-Road.jpg"){
        document.getElementById('text_songtitle').innerHTML = "Here Comes The Sun";
        document.getElementById('text_artist').innerHTML = "The Beatles";
        document.getElementById('time_maximum').innerHTML = "03:06";
    }
    else if (filename === "Where-Is-My-Mind.jpg"){
        document.getElementById('text_songtitle').innerHTML = "Where Is My Mind";
        document.getElementById('text_artist').innerHTML = "The Pixies";
        document.getElementById('time_maximum').innerHTML = "03:52";
    }
    else if (filename === "Dark-Side-of-the-Moon.jpg"){
        document.getElementById('text_songtitle').innerHTML = "Eclipse";
        document.getElementById('text_artist').innerHTML = "Pink Floyd";
        document.getElementById('time_maximum').innerHTML = "02:10";
    }
    else{
        document.getElementById('text_songtitle').innerHTML = "Untitled";
        document.getElementById('text_artist').innerHTML = "Unknown Artist";
        document.getElementById('time_maximum').innerHTML = "05:00";
    }
    document.getElementById('text_time').innerHTML = "00:00";
    
}

function swipeAlbum(evt, dir){
    if (dir == 0)//Left
        previousInQueue();
    else //Right
        nextInQueue();
}

function dropboxAction(evt){
    closeTab(evt);
}
