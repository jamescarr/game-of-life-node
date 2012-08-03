require('should');
var gol = require('../index')

describe('Game Of Life', function(){
	describe('One Dimension', function(){
		it('should die if no neighbors', function(){
			var game = gol.createGame([
				[0,1,0,0]
			]);

			game.cycle();

			game.grid.should.eql([
				[0,0,0,0]
			])
		});
		it('should die if one neighbors', function(){
			var game = gol.createGame([
				[1,1,0,0]
			]);

			game.cycle();

			game.grid.should.eql([
				[0,0,0,0]
			])
		});

		it('should live if two neighbors', function(){
			var game = gol.createGame([
				[1,1,1,0]
			]);

			game.cycle();

			game.grid.should.eql([
				[0,1,0,0]
			])
		});

	})
	describe('Multiple Dimension', function(){
		it('should live if two neighbors', function(){
			var game = gol.createGame([
				[1,1,0,0],
				[1,0,0,0],
				[0,0,0,0],
			]);

			game.cycle();

			game.grid.should.eql([
				[1,1,0,0],
				[1,1,0,0],
				[0,0,0,0],
			])
		});
		it('should live if three neighbors', function(){
			var game = gol.createGame([
				[0,1,0,0],
				[1,1,1,0],
				[0,0,0,0],
			]);

			game.cycle();

			game.grid.should.eql([
				[1,1,1,0],
				[1,1,1,0],
				[0,1,0,0],
			])
		});
		it('should die if it has more than 3 neighbors', function(){
			var game = gol.createGame([
				[0,1,0,0],
				[1,1,1,0],
				[0,1,0,0],
			]);

			game.cycle();

			game.grid.should.eql([
				[1,1,1,0],
				[1,0,1,0],
				[1,1,1,0],
			])
		});
		it('should come to life if 3 neighbors', function(){
			var game = gol.createGame([
				[0,1,0,0],
				[1,0,1,0],
				[0,0,0,0],
			]);

			game.cycle();

			game.grid.should.eql([
				[0,1,0,0],
				[0,1,0,0],
				[0,0,0,0],
			])
		});
	});

	describe('Renderer', function(){
		var stringRenderer = {
			render: function(grid){
				grid.forEach(function(row){
					row.forEach(function(cell){
						if(cell == 1){
							output += 'x'
						}else{
							output += '.'
						}
					});
					output += '\n';
				});
			}
		}, output = '';
		it('should render as string', function(){
			var game = gol.createGame([
				[0,1,0,0],
				[1,0,1,0],
				[0,0,0,0],
			], stringRenderer);
			
			game.cycle()

			output.should.eql('.x..\n.x..\n....\n');
		});
	})
	


})