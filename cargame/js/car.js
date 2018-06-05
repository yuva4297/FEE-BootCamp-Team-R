var objImage= null;
var currentDirection="right";
var interval;
var speed = 5;
var score = 0;
var counter = 0;
var limit = 30;
var bestscore = 0;
// document.getElementById('bestscorebox').value = localStorage.getItem("value");

			function init(){
               // 
				objImage=document.getElementById("car");				
				objImage.style.position='relative';
				objImage.style.left='0px';
                objImage.style.top='30px';
                currentDirection = "right";
                interval = 0;
                speed = 5;
                counter = 0;
                 
                document.getElementById('bestscorebox').value = localStorage.getItem("value");
               
               
            }
            function newGame()
            {

                //console.log(localStorage.getItem("value")); 
               init();
                console.log(window.localStorage.getItem("value")); 
                interval = setInterval("move(currentDirection)", 150);
                updatescore();
            }
            function stopGame()
            {
                if((parseInt(objImage.style.left)<0)||(parseInt(objImage.style.left)>875)||(parseInt(objImage.style.top)<30)||(parseInt(objImage.style.top)>410))		
                {
                    alert("game over");
                    
                    clearInterval(interval); 
                    best_score();
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
                counter++;
                score = counter;
                updatescore();
              
                if(counter >= limit)
                {
                    increasespeed();
                    
                    limit = limit +30;
                    //console.log(limit);
                }
                
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
                    default:
                        break;						
				}
            }
            function best_score()
            {
                bestscore = localStorage.getItem("value");
                if(bestscore!==null)
                {
                    if(score>bestscore)
                    {
                        localStorage.setItem("value",score);
                        bestscore = score;
                    }
                    else{
                        localStorage.setItem("value",bestscore);
                    }
                    document.getElementById("bestscorebox").value = bestscore;
                }
            }
			function moveLeft(){
                objImage.style.transform="rotateY(150deg)";
                objImage.style.left=parseInt(objImage.style.left)-speed +'px';
               
			}
			function moveUp(){
                objImage.style.transform=" rotateZ(-90deg)";
				objImage.style.top=parseInt(objImage.style.top)-speed +'px';
			}
			function moveRight(){
                objImage.style.transform=" rotate(360deg)";
				objImage.style.left=parseInt(objImage.style.left)+speed +'px';
			}
			function moveDown(){
                objImage.style.transform=" rotate(90deg)";
				objImage.style.top=parseInt(objImage.style.top)+speed +'px';
            }
            function increasespeed()
            {
                speed = speed + 5;
            }
            function updatescore()
            {
                document.getElementById("scorebox").value = score;
                
         
            }
          
            