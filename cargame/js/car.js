// document.addEventListener("keydown", function(event) {
   
//     console.log("Hello"+event);
//     findTheDirectionPressed(event);
//     findTheDirectionPressed(event)
// {
//     console.log(event.which);
// }
// });

var objImage= null;
var currentDirection="right";
var interval;
			function init(){
                
				objImage=document.getElementById("car");				
				objImage.style.position='relative';
				objImage.style.left='0px';
                objImage.style.top='30px';
                currentDirection = "right";
                interval = 0;
               
            }
            function newGame()
            {
                init();
                interval = setInterval("move(currentDirection)", 150);
            }
            function stopGame()
            {
                if((parseInt(objImage.style.left)<0)||(parseInt(objImage.style.left)>875)||(parseInt(objImage.style.top)<30)||(parseInt(objImage.style.top)>410))		
                {
                    alert("game over");
                    clearInterval(interval); 
                    init();
                }	
               
            }

            function move(currentDirection)
            {
                
                if(currentDirection == "right")
                {
                    moveRight();
                }
                else if(currentDirection == "left")
                {
                    moveLeft();
                }
                else if(currentDirection == "top")
                {
                    moveUp();
                }
                else
                {
                    moveDown();
                }
                stopGame();
            }
			function getKeyAndMove(e){	
                	
				var key_code=e.which||e.keyCode;
				switch(key_code){
					case 37: 
                         
                        currentDirection = "left";
						break;
					case 38: 
                        
                        currentDirection = "top";
						break;
					case 39:
                        
                        currentDirection = "right";
						break;
					case 40: 
                        
                        currentDirection = "down";
						break;						
				}
			}
			function moveLeft(){
                objImage.style.transform="rotateY(150deg)";
                objImage.style.left=parseInt(objImage.style.left)-5 +'px';
               
			}
			function moveUp(){
                objImage.style.transform=" rotateZ(-90deg)";
				objImage.style.top=parseInt(objImage.style.top)-5 +'px';
			}
			function moveRight(){
                objImage.style.transform=" rotate(360deg)";
				objImage.style.left=parseInt(objImage.style.left)+5 +'px';
			}
			function moveDown(){
                objImage.style.transform=" rotate(90deg)";
				objImage.style.top=parseInt(objImage.style.top)+5 +'px';
            }
            
			
