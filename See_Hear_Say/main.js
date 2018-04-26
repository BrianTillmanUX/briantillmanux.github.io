// JavaScript Document


function makevisible_two() {
    document.getElementById("two").style.visibility = "visible";
}

function makevisible_three() {
    document.getElementById("three").style.visibility = "visible";
}

function makevisible_four() {
    document.getElementById("four").style.visibility = "visible";
}

function whichElement(e) {
    var targ;
	var txt;
	var person;
    if (!e) {
        var e = window.event;
    }
    if (e.target) {
        targ=e.target;
    } else if (e.srcElement) {
        targ=e.srcElement;
    }
    var tname;
    tname = targ.id;
	
	if (tname === "C"){
	}
	else{
		alert("That was the wrong object. \n \n Please try agian.");
		/**person = prompt("Please tell us why you clicked here:", "");**/
	}
    /**document.getElementById("results_list").innerHTML = person;**/
}
	