//KEYCODES FOR THE ARROW KEYS
//left = 37
//up = 38
//right = 39
//down = 40
// document.onkeydown = function keyPress(e)  
// {
//   if (e.keyCode === 38) {
//     console.log('up arrow pressed')
//   } else if (e.keyCode === 40) {
//     console.log('down arrow pressed')
//   } else if (e.keyCode === 37) {
//     console.log('left arrow pressed')
//   } else if (e.keyCode === 39) {
//     console.log('right arrow pressed')
//   }
// }




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


let initialState = {

}

//Game State
let gameState = {
    apple: [11, 8],
    snake: {
        body : [ [10, 5], [10, 6], [10, 7], [10, 8]],
        nextDirection: [1, 0]
    }
  }



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








//Create Snake
let snakeBody = gameState.snake.body

let lastRenderTime = 0

const SNAKE_SPEED = 1

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondSinceLastRender <1 / SNAKE_SPEED) return

    lastRenderTime = currentTime
    console.log(secondSinceLastRender)
    updateSnake ()
    drawSnake ()
    
    
    
}

window.requestAnimationFrame(main)





//Update Snake Funciton
//Want each previous array to equal the array after it.
//Grab Each index of an array and equal it to the next
//Add 1 to the indexes







function updateSnake () {
    for (let b = snakeBody.length - 2; b >= 0; b--){
        snakeBody[b + 1] = snakeBody[b]
        
    }
    snakeBody[0][0] += 0
    snakeBody[0][1] += 1
    
    
}



function drawSnake () {
    snakeBody.forEach(segment => boardElm.children[segment[0]].children[segment[1]].className = 'snake');
}


