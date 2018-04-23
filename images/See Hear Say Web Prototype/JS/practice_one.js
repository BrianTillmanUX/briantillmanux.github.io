// JavaScript Document

//Question one

var count = 0;
		
function wrong_on_at() {		
if(count === 0) {
	document.getElementById("overlay_wrong_at_1").style.display = "block";
	document.getElementById("getat_1").style.display = "none";
	document.getElementById("hidden_text").style.visibility = "visible";
	count = 1;	
			}
    else {
	document.getElementById("overlay_wrong_at_2").style.display = "block";
	}
}

function wrong_off_at() {	
	document.getElementById("overlay_wrong_at_1").style.display = "none";
}
		
function wrong_on_away() {
    if(count === 0) {
	document.getElementById("overlay_wrong_away_1").style.display = "block";
	document.getElementById("getaway_1").style.display = "none";
	document.getElementById("hidden_text").style.visibility = "visible";
	count = 1;	
			}
    else {
	document.getElementById("overlay_wrong_away_2").style.display = "block";
	
	}
}

function wrong_off_away() {		
	document.getElementById("overlay_wrong_away_1").style.display = "none";
}

function correct_on_down() {
	document.getElementById("overlay_correct_down").style.display = "block";
}

function show_answer_down(){
	document.getElementById("overlay_wrong_at_1").style.display = "none";
	document.getElementById("overlay_wrong_away_2").style.display = "none";
	document.getElementById("overlay_correct_down").style.display = "block";
}

//Question 2

var count_2 = 0;
		
function wrong_on_down_2() {		
if(count_2 === 0) {
	document.getElementById("overlay_wrong_down_2_1").style.display = "block";
	document.getElementById("getdown_2").style.display = "none";
	document.getElementById("hidden_text").style.visibility = "visible";
	count_2 = 1;	
			}
    else {
	document.getElementById("overlay_wrong_down_2_2").style.display = "block";
	}
}

function wrong_off_down_2() {	
	document.getElementById("overlay_wrong_down_2_1").style.display = "none";
}
		
function wrong_on_away_2() {
    if(count_2 === 0) {
	document.getElementById("overlay_wrong_away_2_1").style.display = "block";
	document.getElementById("getaway_2").style.display = "none";
	document.getElementById("hidden_text").style.visibility = "visible";
	count_2 = 1;	
			}
    else {
	document.getElementById("overlay_wrong_away_2_2").style.display = "block";
	
	}
}

function wrong_off_away_2() {		
	document.getElementById("overlay_wrong_away_2_1").style.display = "none";
}

function correct_on_around_3() {
	document.getElementById("overlay_correct_around_3").style.display = "block";
}

function show_answer_around_3(){
	document.getElementById("overlay_wrong_down_2_2").style.display = "none";
	document.getElementById("overlay_wrong_away_2_2").style.display = "none";
	document.getElementById("overlay_correct_around_3").style.display = "block";
}

//Question 3

var count_3 = 0;
		
function wrong_on_across_1() {		
if(count_3 === 0) {
	document.getElementById("overlay_wrong_across_1_1").style.display = "block";
	document.getElementById("getacross_1").style.display = "none";
	document.getElementById("hidden_text").style.visibility = "visible";
	count_3 = 1;	
			}
    else {
	document.getElementById("overlay_wrong_across_1_2").style.display = "block";
	}
}

function wrong_off_across_1() {	
	document.getElementById("overlay_wrong_across_1_1").style.display = "none";
}
		
function wrong_on_over_2() {
    if(count_3 === 0) {
	document.getElementById("overlay_wrong_over_2_1").style.display = "block";
	document.getElementById("getover_2").style.display = "none";
	document.getElementById("hidden_text").style.visibility = "visible";
	count_3 = 1;	
			}
    else {
	document.getElementById("overlay_wrong_over_2_2").style.display = "block";
	
	}
}

function wrong_off_over_2() {		
	document.getElementById("overlay_wrong_over_2_1").style.display = "none";
}

function correct_on_along_1() {
	document.getElementById("overlay_correct_along_1").style.display = "block";
}

function show_answer_along_1(){
	document.getElementById("overlay_wrong_across_1_2").style.display = "none";
	document.getElementById("overlay_wrong_over_2_2").style.display = "none";
	document.getElementById("overlay_correct_along_1").style.display = "block";
}

function wrong_on_1() {		
	document.getElementById("overlay_wrong_1").style.display = "block";
}

function correct_on_1() {		
	document.getElementById("overlay_correct_1").style.display = "block";
	
}

function wrong_off_1() {		
	document.getElementById("overlay_wrong_1").style.display = "none";
	window.location.href="practice_two_1.html";
}

function correct_off_1() {		
	document.getElementById("overlay_correct_1").style.display = "none";
	window.location.href="practice_two_2.html";
}

function correct_off_2() {		
	document.getElementById("overlay_correct_1").style.display = "none";
	window.location.href="practice_two_3.html";
}

function correct_off_3() {		
	document.getElementById("overlay_correct_1").style.display = "none";
	window.location.href="practice_two_end.html";
}
