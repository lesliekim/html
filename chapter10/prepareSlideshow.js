function prepareSlideshow(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("linklist")) return false;
	//if(!document.getElementById("preview")) return false;
	
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id", "slideshow");
	var preview = document.createElement("img");
	preview.setAttribute("src","./pig.jpg");
	preview.setAttribute("alt","haha! you are a pig!");
	preview.setAttribute("id","preview");
	slideshow.appendChild(preview);
	/*
	var preview = document.getElementById("preview");
	preview.style.position = "absolute";
	preview.style.left = "0px";
	preview.style.top = "0px";
	*/
	var list = document.getElementById("linklist");
	insertAfter(slideshow,list);
	var link = document.getElementsByTagName("a");
	link[0].onmousemove = function(){
		moveElement("preview",-100,0,10);
	}
	link[1].onmousemove = function(){
		moveElement("preview",-200,-100,10);
	}
	link[2].onmousemove = function(){
		moveElement("preview",-300,-200,10);
	}
}
addLoadEvent(prepareSlideshow);