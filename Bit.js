// constructor:
function Bit(posX, posY, dirX, dirY) {
	this.x = posX;
	this.y = posY;
	this.dirX = dirX;
	this.dirY = dirY;
	var zero_or_one = ["$","£","€","$","$","€","$","$"];
	var letter = random(zero_or_one);

	this.display = function() {
		console.log("drawing a letter");
		textSize(20);
		fill(0, 200, 0, 100);
		text(letter, this.x, this.y);
	}

	this.updatePos = function() {
		// travel in direction of dir
		this.x = this.x + dirX;
		this.y = this.y + dirY;
	}
}
