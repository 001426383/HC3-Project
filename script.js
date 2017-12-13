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
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openNestedTab(evt, parent, tabName) {
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
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(parent).style.display = "block";
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
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
    }
    document.getElementById('bar_search').value = "";
    document.getElementById('bar_search').placeholder = "Search All";
}


function clickLibraryTab(evt){
    //openTab(evt, "tabcontent_library");
    clickSongTab(evt);
}

function clickPlaylistTab(evt){
    openTab(evt, "tabcontent_playlist");
    document.getElementById('bar_search').placeholder = "Search Playlist";
}

function clickQueueTab(evt){
    openTab(evt, "tabcontent_queue");
    document.getElementById('bar_search').placeholder = "Search Queue";
}

function clickSongTab(evt){
    openNestedTab(evt, "tabcontent_library", "tabcontent_library_song");
    document.getElementById('bar_search').placeholder = "Search Song";
}

function clickArtistTab(evt){
    openNestedTab(evt, "tabcontent_library", "tabcontent_library_artist");
    document.getElementById('bar_search').placeholder = "Search Artist";
}

function clickAlbumTab(evt){
    openNestedTab(evt, "tabcontent_library", "tabcontent_library_album");
    document.getElementById('bar_search').placeholder = "Search Album";
}

function clickSettingsBtn(evt){
    openTab(evt, "tabcontent_settings");
    document.getElementById('bar_search').placeholder = "Search Setting";
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
    nextInQueue(evt);
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
    previousInQueue(evt);
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
    }
    else if (filename === "Where-Is-My-Mind.jpg"){
        document.getElementById('text_songtitle').innerHTML = "Where Is My Mind";
        document.getElementById('text_artist').innerHTML = "The Pixies";
    }
    else if (filename === "Dark-Side-of-the-Moon.jpg"){
        document.getElementById('text_songtitle').innerHTML = "Eclipse";
        document.getElementById('text_artist').innerHTML = "Pink Floyd";
    }
    else{
        document.getElementById('text_songtitle').innerHTML = "Untitled";
        document.getElementById('text_artist').innerHTML = "Unknown Artist";
    }
    document.getElementById('text_time').innerHTML = "00:00";
    
}

function swipeAlbum(evt){
    
    
    
}