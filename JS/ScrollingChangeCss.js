 
		window.onscroll = function() {changePersonas(); changeMapping(); changeNarrative(); };

function changePersonas() {
    if (document.body.scrollTop > document.getElementById("two").offsetTop-400 || document.documentElement.scrollTop > document.getElementById("two").offsetTop-400) {
        document.getElementById("personas").className = "off";
    } else {
		 document.getElementById("personas").className = "";
	}
}

function changeMapping() {
    if (document.body.scrollTop > document.getElementById("two").offsetTop-400 && document.body.scrollTop < document.getElementById("three").offsetTop-400 || document.documentElement.scrollTop > document.getElementById("two").offsetTop-400 && document.documentElement.scrollTop < document.getElementById("three").offsetTop-400) {
        document.getElementById("mapping").className = "";
	} else {
		document.getElementById("mapping").className = "off";
	}
}

function changeNarrative() {
    if (document.body.scrollTop > document.getElementById("three").offsetTop-400 || document.documentElement.scrollTop > document.getElementById("three").offsetTop-400) {
        document.getElementById("narrative").className = "";
    } else {
		 document.getElementById("narrative").className = "off";
	}
}