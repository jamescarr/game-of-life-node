var charm = require('charm')();
charm.pipe(process.stdout);
charm.reset();
charm.foreground('green');

module.exports = {
	render: function(grid){
		grid.forEach(function(row, y){
			row.forEach(function(cell, x){
				charm.position(x,y);
				charm.write(cell == 1? String.fromCharCode(176): ' ');
			});
		});
	}
};