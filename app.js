//KEYCODES FOR THE ARROW KEYS
//left = 37
//up = 38
//right = 39
//down = 40





//RENDER TIME







const inputField = document.getElementById("nameInput")

const submitButton = document.getElementById("submitName")

const playerContainer = document.getElementById("playerStatus")


submitButton.addEventListener('click', function nameSelect () {
    const nameField = document.getElementById("playerName")
    const inputValue = document.getElementById("nameInput").value
    nameField.innerText = `Player Name: ${inputValue}`

    submitButton.className = "hidden"
    
    inputField.className = "hidden"
    
    //PREVIOUSLY DEFINED
    let startButton = document.createElement("button")
    
    startButton.innerText = "Start!"
    
    startButton.className = "startBut"
    playerContainer.append(startButton)

   
    
    
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
//Default Score
document.getElementById('currentScore').innerText =  `Current: 0`
document.getElementById('bestScore').innerText = `Best: 0`







//FUINCTIONS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Create Snake
let gameState = {
    apple: [11, 8],
    snake: {
        body : [ [10, 5], [10, 6], [10, 7], [10, 8]],
        nextDirection: [0, 1]
    }
  }






function render () {
    
    let snakeBody = gameState.snake.body
    snakeBody.forEach(element => {
    boardElm.children[element[0]].children[element[1]].className = 'snake'
    
    
});
}


    
    
function tick () {
    
    gameState.snake.body.forEach(element => {
      element[0] , element [1] += 1})
   
}


// function updateSnake () {
    
//     gameState.snake.body.shift()
//     gameState.snake.body.push()
    
// }


// document.onkeydown = function keyPress(e) {
//     {if (e.keyCode === 38) {
//     gameState.snake.nextDirection = [1, 0] // Up Key
//   } else if (e.keyCode === 40) {
//     gameState.snake.nextDirection = [-1, 0]// Up Key
//   } else if (e.keyCode === 37) {
//     gameState.snake.nextDirection = [0, -1]
//   } else if (e.keyCode === 39) {
//     gameState.snake.nextDirection = [0, 1]
//   }
// }
// }






    
setInterval(() => {
    render()
    tick ()
}, 1000 / 5)
