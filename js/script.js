////-------------- Postavka ------------------

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






//------------------------------------ Resenje 1--------------------------------- ------------------
/*var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

setInterval(function(){
	var pahulja =  $('.first').clone().removeAttr('class')

	var randomNo = Math.floor(Math.random() * (windowWidth))
	var leftRight2 = Math.floor(Math.random() * 100);
	pahulja.css('left', randomNo).css('top', '-15px')

	pahulja.appendTo('body').animate({
		top: windowHeight/4, 
		left: '+=' + leftRight2
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
},200)*/




//pomoc:      http://jsfiddle.net/scarqb7x/
//origdjidji  http://jsfiddle.net/Xw29r/

//ceo article https://stackoverflow.com/questions/10385950/how-to-get-a-div-to-randomly-move-around-a-page-using-jquery-or-css







//----------------------------------------------- Resenje 2 ---------------------------------------------------

/*var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var windowHeightQ = window.innerHeight / 4;

setInterval(function(){
	var pahulja =  $('.first').clone().removeAttr('class')

	var randomNo = Math.floor(Math.random() * (windowWidth))
	var leftRight2 = Math.floor(Math.random() * 100);
	pahulja.css('left', randomNo).css('top', '-15px')

	//da ide dole do kraja za 8 sekundi
	pahulja.appendTo('body').animate({
		top: windowHeight, 
	},{
		duration: 8000,
		easing: 'linear',
		queue: false, //ovo valjda pravi da ostalo krece odmah, i oni se redjaju jedni za drugim. It doesnt cue anything after this
		done: function(){
			pahulja.remove()
		}
	})

	//2 sekunde desno
	.animate({
		left: '+=' + leftRight2,
	},{
		duration:2000,
		easing:'linear',
	})
	//2 sekunde levo
	.animate({
		left: '-=' + leftRight2,
	},{
		duration:2000,
		easing:'linear',
	})

	//2 sekunde desno
	.animate({
		left: '+=' + leftRight2,
	},{
		duration:2000,
		easing:'linear',
	})

	//2 sekunde levo
	.animate({
		left: '-=' + leftRight2,
	},{
		duration:2000,
		easing:'linear',
	})
},200)*/








//----------------------------------------------- Resenje 3 ---------------------------------------------------


var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var windowHeightQ = window.innerHeight / 4;

setInterval(function(){
	var pahulja =  $('.first').clone().removeAttr('class')
	var randomNo = Math.floor(Math.random() * (windowWidth))
	
	pahulja.css('left', randomNo).css('top', '-15px')

	//animacija pahulje levo desno
	function move(sign) {
		var leftRight2 = Math.floor(Math.random() * 100); //daj random broj od 0 do 100
		pahulja.animate({
			left: sign + leftRight2,
		},{
			duration:2000,
			easing:'linear',
		}) 
	}

	//da ide dole do kraja za 8 sekundi
	pahulja.appendTo('body').animate({
		top: windowHeight, 
	},{
		duration: 8000,
		easing: 'linear',
		queue: false, //ovo valjda pravi da ostalo krece odmah, i oni se redjaju jedni za drugim. It doesnt cue anything after this
		done: function(){
			pahulja.remove()
		}
	})

	//2 sekunde desno
	move('+=')
	//2 sekunde levo
	move('-=')

	//2 sekunde desno
	move('+=')

	//2 sekunde levo
	move('-=')
},200)





