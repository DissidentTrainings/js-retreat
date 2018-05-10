class GameOfLife {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.cells = new Array(width*height).fill(0);
	}
	start(cells){

		if (cells && (cells.length == this._getCellCount())) {
			this.cells = cells;
			return;
		}
		// Math.round(Math.random())
		this.cells = this.cells.map((cell)=>{
			return Math.round(Math.random())
		});
	}

	_getCellCount(){
		 return this.cells.length;
	}
	_isRunning(){
		var running = true;
		
		function keepOnlyLivingCells(item){
			return item === 0
		}
	
		var filtered = this.cells
										.filter(keepOnlyLivingCells)

		return (filtered.length !== this._getCellCount())
	
	}
	_calculateCellNeighboursIndex(index, width){

			var left = index - 1;
			var right = index + 1;
			var above = index - width;
			var below = index + width;
			var upperLeft = index - width - 1;
			var upperRight = index - width + 1;
			var lowerLeft = index + width - 1;
			var lowerRight = index + width + 1;
			return {
				left, 
				right, 
				above, 
				below, 
				upperLeft, 
				upperRight, 
				lowerLeft, 
				lowerRight
			}
	}
	_run(){

		var me = this;
		var res = this.cells.map((cell, index)=>{
			return me._calculateCellNeighboursIndex(index, me.width)
		});

		this.cells = [0,0,0,0,1,1,0,1,1];
		return true;
	}
}

module.exports = GameOfLife;