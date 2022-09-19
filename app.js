//KEYCODES FOR THE ARROW KEYS
//left = 37
//up = 38
//right = 39
//down = 40





//RENDER TIME


window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);




const inputField = document.getElementById("nameInput")

const submitButton = document.getElementById("submitName")

const playerContainer = document.getElementById("playerStatus")

let startButton = document.createElement("button")
submitButton.addEventListener('click', function nameSelect () {
    buildIntialState ()
    const nameField = document.getElementById("playerName")
    const inputValue = document.getElementById("nameInput").value
    nameField.innerText = `Player Name: ${inputValue}`

    submitButton.className = "hidden"
    
    inputField.className = "hidden"
    
    //PREVIOUSLY DEFINED
    
    startButton.innerText = "Start!"
    startButton.className = "startBut"
    playerContainer.append(startButton)


    //Reset Button
  
   
    
    
})
// Creating the Board Element//
 


let boardElm = document.querySelector("#grid")
let gameState = {
    apple: [11, 8],
    snake: {
        body : [ [10, 5], [10, 6], [10, 7]],
        nextDirection: [0, 1]
    },
    currentScore: 0,
    bestScore: 0,
    gameRunning: false
    
  }
   


    //Initial State
      //Create rows and push the columns into the rows
    function buildIntialState () {
        for(let row = 1; row <= 20; row++) {
          
            const rowElm = document.createElement('tr')
            
            boardElm.append(rowElm)
            
            rowElm.className = "row"
           
            for (let col = 1; col <= 20; col ++) {
                
                const cellElm = document.createElement('td')
                
                rowElm.append(cellElm)
    
                cellElm.className = "cell"
                
        }
    
    }
  gameState = {
    apple: [11, 8],
    snake: {
        body : [ [10, 5], [10, 6], [10, 7]],
        nextDirection: [0, 1]
    },
    currentScore: 0,
    bestScore: 0,
    gameRunning: false
    
  }
    }
     
  
gameScore = {
    bestScore: 0
}
 


    
    




//FUINCTIONS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Create Snake



 

  
  



  let resetButton = document.createElement("button")

  
  startButton.addEventListener('click', function startGame () {
    gameState.gameRunning = true
    startButton.classList = 'hidden'
    console.log(startButton.classList)
    function render () {
        
        renderApple()
        if (gameState.gameRunning === true){
            gameState.snake.body.forEach(element => {
                
                boardElm.children[element[0]].children[element[1]].className = 'snake'
                
        });
        }
        return
        
    
    }
    

//REWITE TICK
//


       function tick() {
        console.log('tick')
        let snakeBody = gameState.snake.body
        let currentDirection = gameState.snake.nextDirection
        let currentHead = snakeBody[snakeBody.length - 1]
        let newhead = [(currentHead[0] + currentDirection[0]), (currentHead[1] + currentDirection[1])]
        
        if (newhead[0] > 19 || newhead[0] < 0 || newhead[1] > 19 || newhead[1] < 0) {
            
            resetButton.innerText = "Reset!"
            resetButton.className = "resetBut"
            playerContainer.append(resetButton)

            gameState.gameRunning = false
                
            
            
                return
        } 
       
        for (let i = 0; i < snakeBody.length - 2; i ++){
            if (snakeBody[snakeBody.length - 1][0] === snakeBody[i][0] && snakeBody[snakeBody.length - 1][1] === snakeBody[i][1]) {
                
                resetButton.innerText = "Reset!"
                resetButton.className = "resetBut"
                playerContainer.append(resetButton)
                gameState.gameRunning = false

                return
            }
        }
         
        if (newhead[0] === gameState.apple[0] && newhead[1] === gameState.apple[1]) {
            snakeBody.push(newhead)
            increaseScore ()
            newApple ()
        }
        
        removeTail () 
        snakeBody.push(newhead)
       }





function increaseScore () {
    
    if (gameState.currentScore === gameScore.bestScore  ) {
        console.log("+1")
        gameState.currentScore ++
        gameScore.bestScore ++
    } else {
        gameState.currentScore ++
    }
}



function removeTail () {
        boardElm.children[gameState.snake.body[0][0]].children[gameState.snake.body[0][1]].className = 'cell'
        gameState.snake.body.shift()
    }

    
function newApple () {
    
    let snakeHead = gameState.snake.body[gameState.snake.body.length - 1]
    console.log(snakeHead[0])
    while((snakeHead[0] === gameState.apple[0]) && (snakeHead[1] === gameState.apple[1])) {
        let randomRowIdx = Math.floor(Math.random () * (document.getElementsByClassName("row").length - 1))
        let randomCellIdx = Math.floor(Math.random () * (document.getElementsByClassName("row").length - 1))
        gameState.apple = [randomRowIdx, randomCellIdx]
        
    }
    }

    
    function  renderApple(){
    
    document.getElementById("currentNum").innerText = gameState.currentScore
    document.getElementById("bestNum").innerText = gameScore.bestScore
    boardElm.children[gameState.apple[0]].children[gameState.apple[1]].className = 'apple'
}
   

   
   
   

   
   
   
   
   
   
    document.onkeydown = function keyPress(e) {
        {if (e.keyCode === 38) {
        gameState.snake.nextDirection = [-1, 0] // Up Key
      } else if (e.keyCode === 40) {
        gameState.snake.nextDirection = [1, 0]// Up Key
      } else if (e.keyCode === 37) {
        gameState.snake.nextDirection = [0, -1]
      } else if (e.keyCode === 39) {
        gameState.snake.nextDirection = [0, 1]
      }
    }
    }
setInterval(() => {    
    function runGame () {
        tick ()
        render ()
        
    }
       
    
            if(gameState.gameRunning === true) {
                runGame ()
                
                
                
            }
            
 
    }, 100)
    


}

)

resetButton.addEventListener('click', function clearBoard () {
    

let table = document.getElementById('grid')
while (table.firstChild) {
    table.removeChild(table.firstChild)
}
buildIntialState  ()
  resetButton.className = 'hidden'
  startButton.classList = 'startBut'
    
  
     
}
)