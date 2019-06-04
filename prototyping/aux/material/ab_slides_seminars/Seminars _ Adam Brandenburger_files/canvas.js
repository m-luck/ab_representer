var context;
var about = {};
var home = {};
var contact = {};
var work = {};
var adam = {};
var c;
var menuItems = [];
var navCircles = [];
var smallBalls = [];
var cWidth;
var cHeight;
var sbSize = 25;

var sizeS = 20;
var sizeM = 30;
var sizeL = 45;
var fontsizeS = 11;
var fontsizeM = 16;
var fontsizeL = 19;

var LinS = .8;
var LdeS = .4;

var MinS = .8;
var MdeS = .3;

var SinS = .4;
var SdeS = .3;

var timerTime = 100;



var mousePos = {};

$(document).ready(function(){



});

function getNav(){
//console.log(arrayFromPHP);
c=document.getElementById('canavas');
context = c.getContext('2d');
cWidth = c.width;
cHeight = c.height;


c.addEventListener('mousemove', function(evt) {
        mousePos = getMousePos(c, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        
      }, false);
      

c.addEventListener('click', function clickit(evt){
		mousePos = getMousePos(c, evt);
		$.each(navCircles, function(i, itemt) {
			if ((mousePos.x-itemt.x)*(mousePos.x-itemt.x)+(mousePos.y-itemt.y)*(mousePos.y-itemt.y) < itemt.radius*itemt.radius) {
			if(itemt.clickable == 1){
				window.open(itemt.link, '_self');
				}
				
			}
		});
	  }, false);
	  
	prepNav();
	
}

function getMousePos(c, evt) {
        var rect = c.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

//ctx.fillStyle="#FF0000";
//ctx.fillRect(0,0,150,75);



function prepNav(){
	var requestAnimationFrame = window.requestAnimationFrame ||
       window.mozRequestAnimationFrame ||
       window.webkitRequestAnimationFrame ||
       window.msRequestAnimationFrame;
        	
        	$.each(arrayFromPHP, function(n, navItem) {
        		
        		var navXdir;
        		var navYdir;
        		
        		if(n%2 == 0){
	        		navYdir = 1;
        		}else{
	        		navYdir = -1;
        		}
        		
        		if(n%3 == 0){
	        		navXdir = 1;
        		}else{
	        		navXdir = -1;
        		}
        		var originalSize;
        		var titleFontSize;
        		
        		if(navItem.type == 1){
	        		originalSize = sizeM;
	        		titleFontSize = fontsizeM;
        		}else if(navItem.type == 0){
	        		originalSize = 0;
	        		titleFontSize = 0;
        		}
        	
        	
        	var ballColor = 'rgb(' + navItem.color[0] + ',' + navItem.color[1] + ',' + navItem.color[2] + ')';
	        	var button = new buttons(navItem.origin[0],navItem.origin[1],originalSize,ballColor,navXdir,navYdir,[0,0],(n+3)*3/(n+2), navItem.title,navItem.link,[],1000,navItem.type, titleFontSize,0, 0, 1);
	        	navCircles.push(button);
        	});
        	
        	
        //var about = new buttons(145,80,sizeM,'rgb(143,143,127)',1,1,[0,0],1);
        //var home = new buttons(60,50,sizeM,'rgba(250,0,0,.3)',1,1,[0,0],3);
        //var contact = new buttons(78,160,sizeM,'rgba(240,240,23,.3)',1,1,[0,0],2);
        //var work = new buttons(205,135,sizeM,'rgba(23,240,240,.3)',1,1,[0,0],1);
        //var adam = new buttons(145,200,sizeM,'rgba(200,100,240,.5)',1,1,[0,0],1.2);
        
        var sb1 = new buttons(145,200,0,'rgba(35,200,33,.5)',1,1,[0,0],1.2);
        var sb2 = new buttons(145,200,0,'rgba(35,200,33,.5)',1,1,[0,0],1.2);
        var sb3 = new buttons(145,200,0,'rgba(35,200,33,.5)',1,1,[0,0],1.2);
        
        // FIND SIMILAR COLORED SUB BALLS
        
        $.each(navCircles, function(a, itema) {
        if(itema.type == 1){
        	
        	var ballSpot = 1;
        	
        		$.each(navCircles, function(b, itemb) {
        			if (itemb.type == 0){
        				if (itemb.color == itema.color){
	        				itemb.x = itema.x + (itema.radius +sizeM *1.3) * Math.cos(2 * Math.PI * ballSpot / 6);
	        				itemb.y = itema.y + (itema.radius +sizeM *1.3) * Math.sin(2 * Math.PI * ballSpot / 6);
	        				itema.clickable = 0;
        				ballSpot++;
        				}
        			}
        		});
	    
	    }
	    });
	    
	    // FIND SIMILAR COLORED SUB BALLS END
        
        //smallBalls.push(sb1, sb2, sb3);
        
        //navCircles.push(about, home, contact, work, adam);
        //console.log(navCircles);
    
    updateNav();
}

function buttons(x,y,r,c,xd,yd,v,a,t,l,smoothArray,sp,type,fs,timer,snSwitch, clickable){
	  	this.x = x;
        this.y = y;
        this.radius = r;
        this.color = c;
        this.xdir = xd;
        this.ydir = yd;
        this.vel = v;
        this.acc = a*(Math.PI / 180);
        this.title = t;
        this.fontsize = fs;
        this.link = l;
        this.smooth = smoothArray;
        this.speed = sp;
        this.type = type;
        this.timer = timer;
        this.snSwitch = snSwitch;
        this.clickable = clickable;
}

function updateNav(){

	
	//about.acc = about.acc+10;
	$.each(navCircles, function(i, itemt) {

		if (itemt.timer > 0){
		
			itemt.timer = itemt.timer+1;

		}
			if (itemt.snSwitch == 1){
							if (itemt.radius < sizeM){
			 	 			itemt.radius = itemt.radius +1.2;
			 	 			//itemt.timer=1;
			 	 			}
			 	 			if (itemt.fontsize < fontsizeM){
				 	 			itemt.fontsize = itemt.fontsize +.4;
			 	 			}else{
				 	 			itemt.snSwitch = 0;
				 	 			itemt.timer = 1;
			 	 			}
			 }else if(itemt.snSwitch == -1){
				 if (itemt.radius > 0){
			 	 			itemt.radius = itemt.radius -.8;
			 	 			
			 	 			}else{
				 	 			itemt.snSwitch = 0;
			 	 			}
			 	 			if (itemt.fontsize > 0){
				 	 			itemt.fontsize = itemt.fontsize -.3;
			 	 			}else{
				 	 			itemt.timer = 0;
				 	 			
			 	 			}
			 }
				
 if ((mousePos.x-itemt.x)*(mousePos.x-itemt.x)+(mousePos.y-itemt.y)*(mousePos.y-itemt.y) < itemt.radius*itemt.radius) {
  //console.log('enter'+this);
  		 var currentItem = i;
  		 
  		 
  		 $.each(navCircles, function(b, itemb) {
  		 
  		 	
  		 	
		 	 	if (b != currentItem){
			 	 	if(itemb.type == 0){
				 	 	if(itemb.color == itemt.color){
					 	 	itemb.snSwitch = 1;
				 	 	}else{
					 	 	itemb.snSwitch = -1;
				 	 	}
			 	 	}else if(itemb.type == 1){
				 	 	
				 	 	if (itemb.radius > sizeS){
			 	 			itemb.radius = itemb.radius -.8;
			 	 		}
			 	 		if (itemb.fontsize > fontsizeS){
				 	 		itemb.fontsize = itemb.fontsize -.3;
			 	 		}
			 	 		
			 	 	
			 	 	}
			 	 	
		 	 	}else{
		 	 	
			 	 	if (itemt.radius < sizeL){
			 	 			itemt.radius = itemt.radius + 2;
			 	 	}
			 	 	if (itemt.fontsize < fontsizeL){
				 	 		itemt.fontsize = itemt.fontsize+.8;
				 	 		}
			 	 	if(itemt.type == 0){
					 	 		itemt.timer = 1;

				 	 		}
			 	 	
		 	 	}
		 	 	
		 	 });
  		 //NOT THE 0 INDEX 
  		 
	 	 // NOT THE 0 INDEX END
	 	// }
	 	 
	 	 
 }else{
	 
	 c.style.cursor = 'default';
 	if (itemt.timer >= timerTime){
 			
 			itemt.snSwitch = -1;
 		}
 		if (itemt.fontsize > fontsizeM){
		 	 itemt.fontsize = itemt.fontsize -.3;
		 	 }
 		if (itemt.radius > sizeM){
	 	 itemt.collisionCheck();
		 	 itemt.radius = itemt.radius - .8;
		 	 
		 	  $.each(navCircles, function(b, itemb) {
		 	 	if (b != currentItem){
			 	 	

		 	 	
			 	 		if (itemb.radius < sizeM && itemb.type !=0){
			 	 			itemb.radius = itemb.radius +.8;
			 	 			itemb.fontsize = itemb.fontsize +.3;
			 	 		}
			 	 	
		 	 	}
		 	 });
	 	 }
  
 }
 		var points = [];
 		points[0] = itemt.x;
 		points[1] = itemt.y;
 		//console.log(points[0]);
		itemt.smooth.push(points);
		
		var newX = itemt.x;
		var newY = itemt.y;
		
		if(itemt.smooth.length > 3){
		newX = 0;
		newY = 0;
			itemt.smooth.splice(2,1);
			for(var t = 0; t < itemt.smooth.length; t++) {
				newX = newX + itemt.smooth[t][0];
				newY = newY + itemt.smooth[t][1];
			} 
			newX = newX/itemt.smooth.length;
			newY = newY/itemt.smooth.length;
		}
		if(itemt.title == 'About'){
		}
		
		// NEW X AND NEW Y ARE THE AVERAGE OF THE LAST 10. WHAT DO I DO WITH THAT?!!?
		
		//console.log(newX);

		itemt.x = itemt.x + itemt.vel[0] *itemt.xdir;
		itemt.y = itemt.y + itemt.vel[1] *itemt.ydir;
	
	itemt.acc = itemt.acc + Math.sin(itemt.acc*3);
	
	//itemt.vel[0] = (Math.cos(itemt.acc)*(itemt.radius/300));
	//itemt.vel[1] = (Math.sin(itemt.acc)*(itemt.radius/300));
	
	itemt.vel[0] = itemt.radius/itemt.speed;
	itemt.vel[1] = itemt.radius/itemt.speed;
	
	
	//console.log(Math.sin(itemt.acc));
	
	
	});
	$.each(navCircles, function(i, itemt) {
	itemt.collisionCheck();
});
	drawNav();
	requestAnimationFrame(updateNav);
}



function drawNav(){

   //context.fillStyle = "rgb(0,0,0)";
   context.clearRect(0, 0, c.width, c.height);

$.each(navCircles, function(i, itemt) {
	if(itemt.radius > 0){
	
	context.beginPath();
      context.arc(itemt.x, itemt.y, itemt.radius, 0, 2 * Math.PI, false);
      c.style.cursor = 'pointer';
      context.fillStyle = itemt.color;
      context.fill();
      			
      			if(itemt.type == 0){

      			context.beginPath();
      			
      			var innerWidth;
      				if(itemt.radius < 7){
	      				innerWidth = 0;
      				}else{
	      				innerWidth = 7;
      				}
      			context.arc(itemt.x, itemt.y, (itemt.radius - innerWidth), 0, 2 * Math.PI, false);
      			context.fillStyle = "rgb(0,0,0)";
      			context.fill();
      			}
      		
      		context.beginPath();
      		context.fillStyle = "rgb(255,255,255)";
      		context.font = "100 "+itemt.fontsize+"px bebas_neueregular";
      		context.textAlign = 'center';
      		context.fillText(itemt.title.toUpperCase(), itemt.x, itemt.y+3);
      		context.fill();
      	
      	}
      		
      });
      
      
      
      /*$.each(smallBalls, function(i, itemt) {
	      context.beginPath();
	
	      context.arc(itemt.x, itemt.y, itemt.radius, 0, 2 * Math.PI, false);
	      context.fillStyle = itemt.color;
	      context.fill();
      });*/
}

      
buttons.prototype.collisionCheck = function(){
	
			var x1 = this.x;
			var y1 = this.y;
			var radius1 = this.radius;
			var xW = cWidth - this.radius;
			var xO = this.radius;
			var yW = cHeight - this.radius;
			var yO = this.radius;
		
    		//console.log(currentCircle);
    		//console.log(arrayOfPoints);
	
		
		
			
		$.each(navCircles, function(t, itema) {
			var x2 = itema.x;
			var y2 = itema.y;
			
			if( x2 != x1 && y2 != y1){
				
				
				var radius2 = itema.radius;
				var dx = x2 - x1;
				var dy = y2 - y1;
				var radii = radius1 + radius2;
				if(  (dx*dx) + (dy*dy) < (radii * radii) ){
					
					itema.speed = ( ((dx*dx) + (dy*dy)) - (radii * radii) )/1.2 + itema.speed;
					if (itema.speed < 50){
						itema.speed = 50;
					}
					
					// SWITCH POS/NEG
							if( (x2 > x1) && (y2 < y1) ){
								this.xdir = 1;
								this.ydir = -1;
							}else if ( (x2 > x1) && (y2 > y1) ){
								this.xdir = 1;
								this.ydir = 1;
							}else if( (x2 < x1) && (y2 < y1) ){
								this.xdir =  -1;
								this.ydir = -1;
							}else if( (x2 < x1) && (y2 > y1) ){
								this.xdir = -1;
								this.ydir = 1;
							}else if( (x2 == x1) && (y2 > y1)){
								this.ydir = 1;
							}else if( (x2 == x1) && (y2 < y1)){
								this.ydir = -1;
							}else if( (y2 == y1) && (x2 > x1)){
								this.xdir = 1;
							}else if( (y2 == y1) && (x2 < x1)){
								this.xdir = -1;
							}
							
			        	
			        		return false;
			        		
			        // END SWITCH
				}
        		
			}else{
				itema.speed = 500;
    			}
    		
    	});
    	if(this.x +25 >= (cWidth - this.radius)){
    	this.speed = 1000;
    	//this.speed = (this.x+25) - (cWidth - this.radius) + this.speed;
		this.xdir = -1;
			}else if(this.x - 25 <= this.radius){
				this.xdir = 1;
			} 
	if(this.y +25 >= (cHeight - this.radius)){
	this.speed = 1000;
	//this.speed = (this.x+25) - (cWidth - this.radius) + this.speed;
		this.ydir = -1;
			}else if(this.y -25 <= this.radius){
				this.ydir = 1;
			}
}


function checkForEdges(){

	
	
}
