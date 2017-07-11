console.log("we're working over here");

/* MONSTER 1 = A=65 / S=83 */
/* MONSTER 2 = K=75 / L=76 */
$(document).ready(function() {
	$(document).keydown(function(key) {
		switch(parstInt(key.which,10)) {
		case 65:
			$("#monsterOne").animate({left: "-=10px"}, 'fast');
			break;
		case 83:
			$("#monsterOne").animate({left: "-=10px"}, 'fast');
		}
	});
});


/*
var mOne = document.getElementById("monsterOne");
var gameBoard = document.getElementsByTagName("main");
var mOneLeft = 0;

function anim(e) {
	if (e.keyCode == 65) {
		mOneLeft += 5;
		mOne.style.left = mOneLeft + 'px';
	}

}
document.onkeydown = anim;
*/

/*
setInterval(document.moveMonster1, 20);
var keys = {};

$(document).keydown(function(e) {
	keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
	delete keys[e.keyCode];
});

function MoveMonster1() {
	if (direction == 65 && 83) {
		$("#monsterOne").animate({left: "-=5"}, 0);
	}
}
*/
/*
$(document).keypress(function (event) {
	console.log(event.keyCode);
	if (event.keyCode == '97') {
		$("#monsterOne").animate({
			left: '+=5px',
		});
	}
});
*/