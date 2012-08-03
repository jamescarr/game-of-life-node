var gol = require('./index')
  , renderer = require('./charm-renderer');

var rows = 30
  , columns = 100
  , initialBoard = [];


for(var i = 0; i < rows; i++){
	initialBoard[i] = []
	for(var j = 0; j < columns; j++){
		initialBoard[i][j] = randomXToY(0,1);
	}
}


var game = gol.createGame(initialBoard, renderer);


setInterval(game.cycle, 200);

function randomXToY(minVal,maxVal,floatVal){
  var randVal = minVal+(Math.random()*(maxVal-minVal));
  return Math.round(randVal);
}