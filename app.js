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
    
    //INTPUT FIELD
    const nameField = document.getElementById("playerName")
    const inputValue = document.getElementById("nameInput").value
    nameField.innerText = `Player Name: ${inputValue}`
    submitButton.className = "hidden"
    inputField.className = "hidden"
    
    //START BUTTON 
    startButton.innerText = "Start!"
    startButton.className = "startBut"
    playerContainer.append(startButton)
    //START BUTTON
    
//RESET BUTTON
    
    
})
// Creating the Board Element//
  let boardElm = document.querySelector("#grid")


  //Initial State
    //Create rows and push the columns into the rows
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

 


    
    




//FUINCTIONS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Create Snake



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
 


  







  
  startButton.addEventListener('click', function startGame () {
    startButton.className = 'hidden'
    gameState.gameRunning = true
    
    function render () {
        console.log('render')
        renderApple()

        gameState.snake.body.forEach(element => {
            
            boardElm.children[element[0]].children[element[1]].className = 'snake'
            
    });
  }
    
//  function newSakeHead (){
   
//         if((newHead[0] > (boardElm.children.length - 1)) || (newHead[0] < 0) || ((newHead[1] > (boardElm.children.length - 1))) || (newHead[1] < 0)) {
//             gameState.gameRunning = false
//             return
//         }
            
//  }
    
 
 
 function tick () {
        console.log('tick')
        
        let currentHead = gameState.snake.body[gameState.snake.body.length - 1]
        let newHead = [currentHead[0] + gameState.snake.nextDirection[0], currentHead[1] + gameState.snake.nextDirection[1]]
        gameState.snake.body.push(newHead)
             if (!(gameState.snake.body[gameState.snake.body.length - 1][0] === gameState.apple[0] && gameState.snake.body[gameState.snake.body.length - 1][1] === gameState.apple[1])) {
                removeTail ()
             
            } else if ((newHead[0] === gameState.apple[0]) && (newHead[1] === gameState.apple[1])) {
                if (gameState.currentScore === gameState.bestScore) {
                    
                    gameState.bestScore ++
                }
                gameState.currentScore ++
                gameState.apple.shift()
                newApplePosition ()
 
                
             }
            
                 
    }

function newApplePosition () {
        let randomRowIdx = Math.floor(Math.random () * (document.getElementsByClassName("row").length - 1))
        let randomCellIdx = Math.floor(Math.random () * (document.getElementsByClassName("row").length - 1))
        gameState.apple = [randomRowIdx, randomCellIdx]
        
        
    }
function renderApple() {
    document.getElementById("currentNum").innerText = gameState.currentScore
    document.getElementById("bestNum").innerText = gameState.bestScore
    boardElm.children[gameState.apple[0]].children[gameState.apple[1]].className = 'apple'
}
    

function removeTail () {
        boardElm.children[gameState.snake.body[0][0]].children[gameState.snake.body[0][1]].className = 'cell'
        gameState.snake.body.shift()
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
            if(gameState.gameRunning === true) {
                tick ()
                render()
            }
    }, 4000 / 35)
 }
)

