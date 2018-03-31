// JavaScript Document
 
		window.onscroll = function() {changeSolution(); changePersona(); changeWireframe(); changePrototype(); };


function changeSolution() {
	
    if (document.body.scrollTop >  document.getElementById("one").offsetTop-300 || document.documentElement.scrollTop > document.getElementById("one").offsetTop-300) {
        document.getElementById("rsolution").className = "off";
    } else {
		 document.getElementById("rsolution").className = "";
	}
}

function changePersona() {
    if (document.body.scrollTop > document.getElementById("one").offsetTop-300 && document.body.scrollTop < document.getElementById("two").offsetTop-300 || document.documentElement.scrollTop > document.getElementById("one").offsetTop-300 && document.documentElement.scrollTop < document.getElementById("two").offsetTop-300) {
        document.getElementById("rpersona").className = "";
	} else {
		document.getElementById("rpersona").className = "off";
	}
}

function changeWireframe() {
    if (document.body.scrollTop > document.getElementById("two").offsetTop-300 && document.body.scrollTop < document.getElementById("three").offsetTop-300 || document.documentElement.scrollTop > document.getElementById("two").offsetTop-300 && document.documentElement.scrollTop < document.getElementById("three").offsetTop-300) {
        document.getElementById("rwireframe").className = "";
	} else {
		document.getElementById("rwireframe").className = "off";
	}
}

function changePrototype() {
    if (document.body.scrollTop > document.getElementById("three").offsetTop-300 || document.documentElement.scrollTop > document.getElementById("three").offsetTop-300) {
        document.getElementById("rprototype").className = "";
    } else {
		 document.getElementById("rprototype").className = "off";
	}
}