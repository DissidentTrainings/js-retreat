class GameOfLife {
	constructor(width, height){
		this.board = {};
		this.board.width = width;
		this.board.height = height;


		this.cells = new Array(this._getCellCount()).fill(0);

	}
	_getCellCount(){
		return this.board.width * this.board.height;
	}
	_isRunning(){	
		false;
	}
}

module.exports = GameOfLife;