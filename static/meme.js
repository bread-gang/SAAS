function randomColor(){
	var r = Math.floor(Math.random()*256);	
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return rgbToHex(r,g,b);
}

function makeColorList(len){
	var res=[];
	for(var i=0;i<len;i++){
		res.push(randomColor());
	}
	return res;
}

function rgbToHex(r,g,b){
	return "#"+byteToHex(r)+byteToHex(g)+byteToHex(b);
}

function byteToHex(n){
	return ""+numToHexChar(Math.floor(n/16))+""+numToHexChar(n%16);
}

function numToHexChar(num){
	switch(num){
		case 10: return "A";
		case 11: return "B";
		case 12: return "C";
		case 13: return "D";
		case 14: return "E";
		case 15: return "F";
		default: return ""+num;
	}
	
}

module.exports.randomColor = randomColor;
module.exports.rgbToHex = rgbToHex;
module.exports.byteToHex = byteToHex;
module.exports.numToHexChar = numToHexChar;
module.exports.makeColorList = makeColorList;