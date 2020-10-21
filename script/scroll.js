// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	  document.getElementById("logo").style.display = "none";
	  document.getElementById("nav-links").style.margin = "0em";
	  document.getElementById("nav-links").style.flexBasis = "100%";

	} else {
	  document.getElementById("logo").style.display = "block";
	  document.getElementById("nav-links").style.flexBasis = "70%";

	  
	  if ($(window).width() < 768) {
		document.getElementById("nav-links").style.marginTop = "1em";
	  }
	}
}

window.resize = function() {srollWidthFunction()};

function srollWidthFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	  document.getElementById("logo").style.display = "none";
	  document.getElementById("nav-links").style.margin = "0em";
	  document.getElementById("nav-links").style.flexBasis = "100%";

	} else {
	  document.getElementById("logo").style.display = "block";
	  document.getElementById("nav-links").style.flexBasis = "70%";

	  
	  if ($(window).width() < 768) {
		document.getElementById("nav-links").style.marginTop = "1em";
	  }
	}
}


