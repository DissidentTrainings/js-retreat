var assert = require('assert');
var GameOfLife = require('../game-of-life');


var CORRECT_NUMBER_OF_CELLS = 9;

describe('GameOfLife', ()=>{
	var gol;
	beforeEach(()=>{
		gol = new GameOfLife(3,3)
	})

	it('exists', ()=>{
		assert.equal(typeof GameOfLife, 'function')
	});	
	it('can be created', ()=>{
		assert.ok(new GameOfLife(3,3))
	});
	it('has a height', ()=>{

		assert.ok(gol.height)
	});
	it('has a width', ()=>{
		assert.ok(gol.width)
	});
	it('has CellCount', () =>{
		assert.equal(gol._getCellCount(), CORRECT_NUMBER_OF_CELLS)
	});
	it('has cells', () =>{
		assert.equal(gol.cells.length, CORRECT_NUMBER_OF_CELLS)
	});
	
	it('is Running', () => {
		assert.equal(gol._isRunning(), false)
	});
	it('is running after start()', () => {
		gol.start();
		assert.equal(gol._isRunning(), true);
	});

	it('takes array of zeroes to not run', ()=>{
		gol.start(new Array(CORRECT_NUMBER_OF_CELLS).fill(0));
		assert.equal(gol._isRunning(), false);
	});

	it('runs when one cell is living/1', ()=>{
		let data = new Array(CORRECT_NUMBER_OF_CELLS).fill(0);
		data[0] = 1;
		gol.start(data);
		assert.equal(gol._isRunning(), true);
	});
	var basicCase = [0,0,0,0,1,1,0,1,0];
	var resultBasicCaseStep1 = [0,0,0,0,1,1,0,1,1];
	it('isRunning for [0,0,0,0,1,1,0,1,0]', () => {
		gol.start(basicCase);
		assert.equal(gol._isRunning(), true);
	});
	it('changes, when it makes a step', () => {
		gol.start(basicCase);
		assert.ok(gol._run())
	})
	it('calculates the right result when run() is called', () => {
		gol.start(basicCase);
		gol._run();
		assert.notDeepEqual(gol.cells, basicCase)
	})

	xit('calculates a different result for a different input', ()=>{
		gol.start(resultBasicCaseStep1);
		gol._run();
		assert.notDeepEqual(gol.cells, resultBasicCaseStep1)
	});

	it('calculates the right amount of cells when running', () => {
		gol.start(basicCase);
		gol._run();
		assert.equal(gol._getCellCount(), CORRECT_NUMBER_OF_CELLS)
	});


	it('.generatation == 1 when run was called')


	

	describe('neighbour calc', ()=>{
		var calculatedPositions;
		beforeEach(()=>{
			calculatedPositions = gol._calculateCellNeighboursIndex(5, 3);
		})
		it('below', ()=>{
			assert.equal(calculatedPositions.below, 8)
		})

		it('upper', ()=>{
			assert.equal(calculatedPositions.above, 2)
		})

		it('left', ()=>{
			assert.equal(calculatedPositions.left, 4)
		})

		it('right', ()=>{
			assert.equal(calculatedPositions.right, 6)
		})

		it('upperLeft', ()=>{
			assert.equal(calculatedPositions.upperLeft, 1)
		})

		it('upperRight', ()=>{
			assert.equal(calculatedPositions.upperRight, 3)
		})
		
		it('lowerLeft', ()=>{
			assert.equal(calculatedPositions.lowerLeft, 7)
		})

		it('lowerRight', ()=>{
			assert.equal(calculatedPositions.lowerRight, 9)
		})
	})
		it('test for width and index 1', () => {
			var widthIndexOne = gol._calculateCellNeighboursIndex(1,1);
			assert.equal(widthIndexOne)
		})
});