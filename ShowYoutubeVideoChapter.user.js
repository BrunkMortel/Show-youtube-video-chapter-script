// ==UserScript==
// @name         Show video chapter name
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Show the current youtube video chapter name, made for JimmyBoyyy
// @author       Brunk_Mortel
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

var backgroundColor = '#000000';
var textColor = '#FFFFFF';
var textSize = '35px';

var videoview = document.getElementById("player");

function init(){
    var div = document.createElement("div");
    div.id = "scriptVODChapterDiv";
    div.style ="background:"+backgroundColor+";color:"+textColor+";font-size:"+textSize;

    var span = document.createElement('span');
    span.id = "scriptVODChapterSpan";
    var chapterName = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > div.ytp-chapter-container > button > div.ytp-chapter-title-content").innerText;
    if(chapterName == ""){
        span.innerHTML = "No chapter set for the video";
    }
    else{
        span.innerHTML = chapterName;
    }

    div.appendChild(span);
    videoview.appendChild(div);

    Loop();
}

function Loop() {
    var updateLoop = setInterval(function () {
        var chapterName = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > div.ytp-chapter-container > button > div.ytp-chapter-title-content").innerText;

        if(document.getElementById("scriptVODChapterDiv") == null){
            videoview = document.getElementById("player");

            var div = document.createElement("div");
            div.id = "scriptVODChapterDiv";
            div.style ="background:"+backgroundColor+";color:"+textColor+";font-size:"+textSize;

            var span = document.createElement('span');
            span.id = "scriptVODChapterSpan";
            if(chapterName == ""){
                span.innerHTML = "No chapter set for the video";
            }
            else{
                span.innerHTML = chapterName;
            }

            div.appendChild(span);
            videoview.appendChild(div);
        }
        else{
            var title = document.getElementById("scriptVODChapterSpan");

            if(chapterName == ""){
                title.innerHTML = "No chapter set for the video";
            }
            else{
                title.innerHTML = chapterName;
            }
        }

    }, 5000);
}

window.onload = init();



