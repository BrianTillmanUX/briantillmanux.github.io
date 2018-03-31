 
		window.onscroll = function() {changeResults(); changeUsers(); changeHierarchy(); };

function changeResults() {
    if (document.body.scrollTop > document.getElementById("one").offsetTop-400 || document.documentElement.scrollTop > document.getElementById("one").offsetTop-400) {
        document.getElementById("rfresults").className = "off";
    } else {
		 document.getElementById("rfresults").className = "";
	}
}

function changeUsers() {
    if (document.body.scrollTop > document.getElementById("one").offsetTop-400 && document.body.scrollTop < document.getElementById("two").offsetTop-400 || document.documentElement.scrollTop > document.getElementById("one").offsetTop-400 && document.documentElement.scrollTop < document.getElementById("two").offsetTop-400) {
        document.getElementById("rfusers").className = "";
	} else {
		document.getElementById("rfusers").className = "off";
	}
}

function changeHierarchy() {
    if (document.body.scrollTop > document.getElementById("two").offsetTop-400 || document.documentElement.scrollTop > document.getElementById("two").offsetTop-400) {
        document.getElementById("rfhierarchy").className = "";
    } else {
		 document.getElementById("rfhierarchy").className = "off";
	}
}