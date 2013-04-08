//二值化后的image对象
var BitMatrix = function(width, height){
	this.data = [];
	this.width = width;
	this.height = height || width;
}

BitMatrix.prototype = {
	get : function(x, y){
		return this.data[this.width * y + x];
	},
	set : function(x, y, value){
		this.data[this.width * y + x] = value;
	},
	setRegion : function(x, y, width, height, value){
		for(var i = y; i < y + height; i ++){
			for(var j = x; j < x + width; j ++){
				this.data[this.width * i + j] = value;
			}
		}
	}
}