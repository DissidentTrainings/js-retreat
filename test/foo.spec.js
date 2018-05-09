var assert = require('assert');
var GameOfLife = require('../game-of-life');
describe('GameOfLife', ()=>{
	it('GameOfLifeExists', ()=>{
		assert.ok(GameOfLife)
	});

	it('can be init', ()=>{
		assert.ok(new GameOfLife(1,1))
	});

	it('has a board', ()=>{
		var game = new GameOfLife(3,3);
		assert.ok(game.board)
	})

	it('has width axis', ()=>{
		var game = new GameOfLife(3,3);
		assert.ok(game.board.width)
	});

	it('has height axis', () =>{
		var game = new GameOfLife(3,3);
		assert.ok(game.board.height)
	});

	it('inits cells correctly width*height', () =>{
		var game = new GameOfLife(4,3);
		assert.equal(game._getCellCount(), 12)
	});

	it('has the right amount of cells', () =>{
		var game = new GameOfLife(3,3);
		assert.equal(game.cells.length, 9)

	})
	it('can check isRunning', () =>{
		var game = new GameOfLife(3,3);
		assert.equal(typeof game._isRunning, 'function')
	})
});