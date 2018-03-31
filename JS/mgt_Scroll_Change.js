// JavaScript Document
 
		window.onscroll = function() {changeIntro(); changeFinal(); changeProto(); };

function changeIntro() {
    if (document.body.scrollTop > document.getElementById("zero").offsetTop-400 || document.documentElement.scrollTop > document.getElementById("zero").offsetTop-400) {
        document.getElementById("mtgintro").className = "off";
    } else {
		 document.getElementById("mtgintro").className = "";
	}
}

function changeFinal() {
    if (document.body.scrollTop > document.getElementById("zero").offsetTop-400 && document.body.scrollTop < document.getElementById("one").offsetTop-400 || document.documentElement.scrollTop > document.getElementById("zero").offsetTop-400 && document.documentElement.scrollTop < document.getElementById("one").offsetTop-400) {
        document.getElementById("mtgfinal").className = "";
	} else {
		document.getElementById("mtgfinal").className = "off";
	}
}

function changeProto() {
    if (document.body.scrollTop > document.getElementById("one").offsetTop-400 || document.documentElement.scrollTop > document.getElementById("one").offsetTop-400) {
        document.getElementById("mtgproto").className = "";
    } else {
		 document.getElementById("mtgproto").className = "off";
	}
}