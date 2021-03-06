// Functions for binding to and handling mouse clicks
(function(){ 
"use strict"; // @start

	shutup.mouse = {

		getCoords : function(e){ // Get the coords from a given mouse event
			var rect = shutup.canvas.getBoundingClientRect();
			return {
				x: e.clientX - rect.left,
				y: e.clientY - rect.top
			};
		},

		constant : {
			NONE: 0, LEFT : 1, MIDDLE : 2, RIGHT : 3
		},

		func : [
			// No button
			function(coords, e){

			},
			// Left button
			function(coords, e){
				switch(shutup.state){
					case 1 : { // Main Menu
						if(coords.x >= 325 && coords.x <= 425 && coords.y >= 90 && coords.y <= 130){
							shutup.newGame();
						}
					break; }
					case 2 : { // IN GAME
						var pos = shutup.game.room.findPosFromDraw(coords);
						var a = shutup.game.room.getActor(pos);
						if(a){
							a.onClick(e.which);
						}
					break; }
				}
			},
			// Middle button
			function(coords, e){

			},
			// Right button
			function(coords, e){

			}
		],

		init : function(){
			shutup.canvas.addEventListener("click", function(e){
				var coords = shutup.mouse.getCoords(e),
					w = e.which;
				if(w === 0 || (w && w < 4 && w > 0)){
					shutup.mouse.func[w](coords, e);
				}
			});
		}

	}


})(); // @end
