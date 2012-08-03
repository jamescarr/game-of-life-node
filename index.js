module.exports = {
	createGame: function(initialGrid, renderer){
		return new Game(initialGrid, renderer);
	}
}

function Game(grid, renderer){
	this.grid = grid;
	if(!renderer){
		renderer = {render:function(){}};
	}
	renderer.render(grid);
	
	this.cycle = function(){
		var dying = [], born = []
		grid.forEach(function(row, rowIndex) {
			row.forEach(function(cell, cellIndex) {
				var neighbors = getNeighbors(rowIndex, cellIndex)
				var sum = neighbors.reduce(function(sum,coord){
					return getCell(coord) + sum
				}, 0)
				if (sum < 2 || sum > 3) {
					dying.push([rowIndex,cellIndex])
				} else if(sum == 3 && cell ==0){
					born.push([rowIndex, cellIndex])
				}
					
			});
		});
		dying.forEach(function(coord) {
			grid[coord[0]][coord[1]] = 0;
		})
		born.forEach(function(coord){
			grid[coord[0]][coord[1]] = 1
		})
		renderer.render(grid);
	}

	function getCell(coord){
		var cell
		if (grid[coord[0]]) {
			cell = grid[coord[0]][coord[1]];
		}
		return cell ? cell : 0
	}

	function getNeighbors(rowIndex, cellIndex) {
		return [
				[rowIndex-1,cellIndex-1], 
				[rowIndex-1,cellIndex], 
				[rowIndex-1,cellIndex+1],
				[rowIndex,cellIndex-1], 
				[rowIndex, cellIndex+1],
				[rowIndex+1, cellIndex-1],
				[rowIndex+1, cellIndex],
				[rowIndex+1, cellIndex+1],
		   ]
	}
}