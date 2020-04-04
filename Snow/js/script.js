var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

setInterval(function(){

	var pahulja = $('.first').clone().removeClass('first');

	var randomNo = Math.floor(Math.random() * windowWidth)

	pahulja.css('left', randomNo).css('top', '-10px')

	pahulja.appendTo('body').animate({
	top: windowHeight,
	left: '100px' //ovde radi i ide u levo. Kako da ovo varira?
}, {
	duration: 8000,

	done: function(){
		pahulja.remove();
	}
})
},400)

//dodaj animaciju da svaka leluja levo desno. Animiras njihov left sa random brojem izmedju -100 ili + 100px



