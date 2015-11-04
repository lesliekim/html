function moveElement(elemId, final_x, final_y, interval){
	var elem = document.getElementById(elemId);
	if (elem.movement){
		clearTimeout(elem.movement)
	}
	if (!elem.style.left){
		elem.style.left = "0px";
	}
	if (!elem.style.top){
		elem.style.top = "0px";
	}
	//elem.style.position = "absolute";
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y){
		return true;
	}
	if (xpos < final_x){
		xpos++;
	}
	if (xpos > final_x){
		xpos--;
	}
	if (ypos < final_y){
		ypos++;
	}
	if (ypos > final_y){
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('" + elemId + "'," + final_x + "," + final_y + "," + interval + ")";
	elem.movement = setTimeout(repeat, interval);
}
