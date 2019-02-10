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


function AnimateRotate(angle) {
	// caching the object for performance reasons
	var $elem = $('#art');

	// we use a pseudo object for the animation
	// (starts from `0` to `angle`), you can name it as you want
	$({deg: 0}).animate({deg: angle}, {
		duration: 300,
		step: function(now) {
			// in the step-callback (that is fired each step of the animation),
			// you can use the `now` paramter which contains the current
			// animation-position (`0` up to `angle`)
			$elem.css({
				transform: 'rotate(' + now + 'deg)'
			});
		},
		complete: function(){
			AnimateRotate(360);
		}
	},'linear');
}

function AnimateRotate2(angle) {
	// caching the object for performance reasons
	var $elem = $('#art2');

	// we use a pseudo object for the animation
	// (starts from `0` to `angle`), you can name it as you want
	$({deg: 0}).animate({deg: angle}, {
		duration: 300,
		step: function(now) {
			// in the step-callback (that is fired each step of the animation),
			// you can use the `now` paramter which contains the current
			// animation-position (`0` up to `angle`)
			$elem.css({
				transform: 'rotate(' + now + 'deg)'
			});
		},
		complete: function(){
			AnimateRotate2(360);
		}
	},'linear');
}

function AnimateRotate3(angle) {
	// caching the object for performance reasons
	var $elem = $('#art3');

	// we use a pseudo object for the animation
	// (starts from `0` to `angle`), you can name it as you want
	$({deg: 0}).animate({deg: angle}, {
		duration: 300,
		step: function(now) {
			// in the step-callback (that is fired each step of the animation),
			// you can use the `now` paramter which contains the current
			// animation-position (`0` up to `angle`)
			$elem.css({
				transform: 'rotate(' + now + 'deg)'
			});
		},
		complete: function(){
			AnimateRotate3(360);
		}
	},'linear');
}