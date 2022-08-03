/*
   ______      ______                     __       __                 __      __             _____             __        
  / ____/___  / ____/_______  ____  _____/ /_     / /_  __  __       / /___  / /_  ____     / ___/____  ____ _/ /_  _____
 / / __/ __ \/ /_  / ___/ _ \/ __ \/ ___/ __ \   / __ \/ / / /  __  / / __ \/ __ \/ __ \    \__ \/ __ \/ __ `/ __ \/ ___/
/ /_/ / /_/ / __/ / /  /  __/ / / / /__/ / / /  / /_/ / /_/ /  / /_/ / /_/ / / / / / / /   ___/ / /_/ / /_/ / / / / /    
\____/\____/_/   /_/   \___/_/ /_/\___/_/ /_/  /_.___/\__, /   \____/\____/_/ /_/_/ /_/   /____/ .___/\__,_/_/ /_/_/     
                                                     /____/                                   /_/                        

Copyright (c) John Spahr, 2019-2022. 
*/

//focus on inputTxt when GoFrench loads
document.addEventListener(
    'DOMContentLoaded',
    function() {
        document.getElementById('inputTxt').focus()
    },
    false
)

//handle button presses in search bar
function txtChange(e) {
    if (e.keyCode == 13) {
        //if enter key is pressed, get site
        getSite()
        return false
    }
}

//open hamburger menu
function openNav() {
    document.getElementById('sidenavDrawer').style.width = '250px'
}

//close hamburger menu
function closeNav() {
    document.getElementById('sidenavDrawer').style.width = '0'
}

//handle search functionality
function getSite() {
    var inputString = document.getElementById('inputTxt').value.trim() //trims input
    if (inputString != '') {
        //makes sure text box isn't blank
        var content = document.getElementById('inputTxt').value //sets variable "content" to text box value
        var countText = content.trim() //removes unnecessary spaces at the end of text
        var count = (countText.match(/ /g) || []).length //gets number of spaces in text box.
        if (count == 0) {
            //no spaces
            //open wordreference
            window.open('http://www.wordreference.com/enfr/' + countText, '_blank')
        } else {
            //spaces
            //open linguee
            window.open(
                'http://linguee.com/english-french/search?source=auto&query=' +
                countText,
                '_blank'
            )
        }
        document.getElementById('inputTxt').value = ''
    } else {
        alert('Please enter a search query.') //if input is blank
    }
}


$(document).ready(function() {
    //grab rss feed from the local with jquery
    $.get("https://feeds.thelocal.com/rss/fr", function(data) {
        $(data).find("item").each(function() {
            var el = $(this);

            //for each item, create an island with article title, link, and description...
            document.getElementById("news").innerHTML += "<div class='island'><h3><a href='" + el.find("link").text() + "' target='_blan'>" + el.find("title").text() + "</a></h3><p>" + el.find("description").text() + "</p></div>"
        });
    });

    //fetch word of the day and embed it in iFrame...
    var today = new Date();
    var url = 'http://200words-a-day.com/';
    var todaystr = today.getDate();
    var text = document.getElementById('two_hundred_words_french-word');
    text.innerHTML = "<iframe class='frame' frameborder='0' width='250' height='300' scrolling='no' src='" + url + todaystr + ".french-word-a-day.html' />";
});