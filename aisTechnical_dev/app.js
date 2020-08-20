// collapsible sub sections in navbar
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// toggle display of pdf maps
var pdfers = document.getElementsByClassName('pdfToggler');
var j;

for (j = 0; j < pdfers.length; j++) {
	pdfers[j].addEventListener("click", function() {
		this.classList.toggle("active");
		var activemap = this.nextElementSibling;
		if (activemap.style.display === "block") {
     		activemap.style.display = "none";
   		} else {
     		activemap.style.display = "block";
    	}
	});
}