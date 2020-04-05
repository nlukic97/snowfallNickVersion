/*var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

setInterval(function(){

	var pahulja = $('.first').clone().removeClass('first');

	var randomNo = Math.floor(Math.random() * windowWidth)

	pahulja.css('left', randomNo).css('top', '-10px')

	pahulja.appendTo('body').animate({
	top: windowHeight,
}, {
	duration: 8000,

	done: function(){
		pahulja.remove();
	}
})
},400)*/

//dodaj animaciju da svaka leluja levo desno. Animiras njihov left sa random brojem izmedju -100 ili + 100px

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

setInterval(function(){
	var pahulja =  $('.first').clone().removeAttr('class')

	var randomNo = Math.floor(Math.random() * (windowWidth))
	var leftRight2 = Math.floor(Math.random() * 200);
	pahulja.css('left', randomNo).css('top', '-15px')

	pahulja.appendTo('body').animate({
		top: windowHeight/4, 
		left: '+=' + leftRight2 //ide samo do kraja u jednom pravcu. Podeli animaciju na 4 dela //you could make this be the coursor position, when it reaches it dissapears
	},
	{
		duration: 2000,
		easing: "linear",
		
		done: function() {
			
			pahulja.animate({
				top:windowHeight / 2,
				left: '-=' + leftRight2 	
			},{
				duration:2000,
				easing: "linear",

				done: function() {
					pahulja.animate({
						top: windowHeight/4 * 3,
						left: '+=' + leftRight2
					}, {
						duration: 2000,
						easing: "linear",

						done: function(){
							pahulja.animate({
								top: windowHeight,
								left: '-=' + leftRight2
							}, {
								duration: 2000,
								easing: "linear",
								done: function(){
									pahulja.remove()
								}
							})
						}
					})
				}
			});
		}
	})
},200)



//pomoc:      http://jsfiddle.net/scarqb7x/
//origdjidji  http://jsfiddle.net/Xw29r/

//ceo article https://stackoverflow.com/questions/10385950/how-to-get-a-div-to-randomly-move-around-a-page-using-jquery-or-css