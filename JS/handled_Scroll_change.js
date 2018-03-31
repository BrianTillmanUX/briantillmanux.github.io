 
		window.onscroll = function() {changeConcept(); changePrototype(); changeTesting(); changeResearch(); changeBistest(); };


function changeConcept() {
	
    if (document.body.scrollTop > document.getElementById("one").offsetTop-400|| document.documentElement.scrollTop > document.getElementById("one").offsetTop-400) {
        document.getElementById("hconcept").className = "off";
    } else {
		 document.getElementById("hconcept").className = "";
	}
}

function changePrototype() {
    if (document.body.scrollTop > document.getElementById("one").offsetTop-400 && document.body.scrollTop < document.getElementById("two").offsetTop-400 || document.documentElement.scrollTop > document.getElementById("one").offsetTop-400 && document.documentElement.scrollTop < document.getElementById("two").offsetTop-400) {
        document.getElementById("hprototype").className = "";
	} else {
		document.getElementById("hprototype").className = "off";
	}
}

function changeTesting() {
    if (document.body.scrollTop > document.getElementById("two").offsetTop-400 && document.body.scrollTop < document.getElementById("three").offsetTop-400 || document.documentElement.scrollTop > document.getElementById("two").offsetTop-400 && document.documentElement.scrollTop < document.getElementById("three").offsetTop-400) {
        document.getElementById("htesting").className = "";
	} else {
		document.getElementById("htesting").className = "off";
	}
}

function changeResearch() {
    if (document.body.scrollTop > document.getElementById("three").offsetTop-400 && document.body.scrollTop < document.getElementById("four").offsetTop-400 || document.documentElement.scrollTop > document.getElementById("three").offsetTop-400 && document.documentElement.scrollTop < document.getElementById("four").offsetTop-400) {
        document.getElementById("hresearch").className = "";
	} else {
		document.getElementById("hresearch").className = "off";
	}
}

function changeBistest() {
    if (document.body.scrollTop > document.getElementById("four").offsetTop-400 || document.documentElement.scrollTop > document.getElementById("four").offsetTop-400) {
        document.getElementById("hbisplan").className = "";
    } else {
		 document.getElementById("hbisplan").className = "off";
	}
}