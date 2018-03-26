


var theHero = document.querySelector(".hero");
var container = document.querySelector("#mainContainer");

container.addEventListener("click", getClickPosition, false);


//makeing the hero click position be center.
function getClickPosition(e) {
	
	var xPosition = e.clientX - (theHero.offsetWidth / 2);
	var yPosition = e.clientY - (theHero.offsetHeight / 2);

	var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
	theHero.style.transform = translate3dValue;
}