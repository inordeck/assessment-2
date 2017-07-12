console.log("we're (almost) working over here");

/* MONSTER 1 = A=65
	class: monsters id: monsterOne */
/* MONSTER 2 = K=75
	class: monsters id: monsterTwo */

window.onload = function(){
/* establish monsters and monsters names */
	monsters = {
		monsterOne: {
			div: document.getElementById("monsterOne"),
			name: "Monster One"
		},
		monsterTwo: {
			div: document.getElementById("monsterTwo"),
			name: "Monster Two"
		}
	};

function startGame(monsters){
/* set starting position of monsters */
	monsters.monsterOne.div.style.left = 0;
	monsters.monsterTwo.div.style.left = 0;
}
/* call start game function */
startGame(monsters);

document.onkeydown = function(key) {
/* reset position based on keystroke and call check for winner function */
	monsters.monsterOne.position = parseInt(monsters.monsterOne.div.style.left, 10);
	monsters.monsterTwo.position = parseInt(monsters.monsterTwo.div.style.left, 10);
	checkWinner();
	movePlayer(key);
};

function checkWinner() {
/* check each monster position for winning state */
	if (monsters.monsterOne.position + monsters.monsterOne.div.offsetWidth >= window.innerWidth - 40) {
		setWinState(monsters.monsterOne, monsters);
	}
	if (monsters.monsterTwo.position + monsters.monsterTwo.div.offsetWidth >= window.innerWidth - 40) {
		setWinState(monsters.monsterTwo, monsters);
	}
}

function movePlayer(key) {
/* moving monsters based on keystrokes, setting keystroke and distance for each */
	switch(key.which) {
		case 65:  // press a to move monster one
			var newMonsterOnePosition = monsters.monsterOne.position += 40;
			monsters.monsterOne.div.style.left = newMonsterOnePosition + "px";
			console.log('aclicked');
			break;
		case 75:  // press k to move monster one
			var newMonsterTwoPosition = monsters.monsterTwo.position += 40;
			monsters.monsterTwo.div.style.left = newMonsterTwoPosition + "px";
			console.log('kclicked');
			break;
	}
}

function setWinState(monsters) {
/* display who won the race */
	document.onkeydown = null;
	var node = document.createElement("h1");
	node.setAttribute("id", "winner");
	  console.log(node);
	var textNode = document.createTextNode(monsters.name + " Wins!");
	node.appendChild(textNode);
	  console.log(textNode);
	 document.body.appendChild(node);
	}
};


/* BELOW ARE PREVIOUS ATTEMPTS AT GETTING MONSTERS TO MOVE */

/*
var keys = {};
	keys.UP = 38;
	keys.LEFT = 37;
	keys.RIGHT = 39;
	keys.DOWN = 40;
console.log(keys);

var mOne = {
	x: 100, //horizontal
	y: 100, //vertical
	speedMultiplier: 5,
	element: document.getElementById("monsterOne")
};
console.log(mOne);

document.body.onkeyup =
document.body.onkeydown = function(e){
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
	var kc = e.keyCode || e.which;
	keys[kc] = e.type == 'keydown';
};

var moveMonsterOne = function(dx, dy){
	mOne.x += (dx||0) * mOne.speedMultiplier;
	mOne.y += (dy||0) * mOne.speedMultiplier;
	mOne.element.style.left = mOne.x + 'px';
	mOne.element.style.top = mOne.y + 'px';
};

var detectMovementOne = function() {
	if ( keys[keys.LEFT] ) {
		moveMonsterOne(-1, 0);
	}
	if ( keys[keys.RIGHT] ) {
		moveMonsterOne(1, 0);
	}
	if ( keys[keys.UP] ) {
		moveMonsterOne(0, -1);
	}
	if ( keys[keys.DOWN] ) {
		moveMonsterOne(0, 1);
	}
};
moveMonsterOne();

setInterval(function(){
	detectMovementOne();
}, 1000/24);
*/



/*setInterval(moveMonsterOne, 20);
var keys = {};

setInterval(moveMonsterTwo, 20);
var keys ={};

$(document).keydown(function(e) {
	keys[e.keyCode] = true;
});

$(document).keyup(function(e){
	delete keys[e.keyCode];
});

function moveMonsterOne() {
	for (var direction in keys) {
		if (!keys.hasOwnProperty(direction)) continue;
		if (direction == 65) {
			$("#monster1").animate({left: "-=5"}, 0);
		}
	}
}
moveMonsterOne();*/



/*
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
*/

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