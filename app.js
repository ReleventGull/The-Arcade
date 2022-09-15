//RENDER TIME
let lastRenderTime = 0

const SNAKE_SPEED = 1
function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondSinceLastRender <1 / SNAKE_SPEED) return

    lastRenderTime = currentTime
    console.log(secondSinceLastRender)
}

window.requestAnimationFrame(main)






const inputField = document.getElementById("nameInput")

const submitButton = document.getElementById("submitName")

const playerContainer = document.getElementById("playerStatus")


submitButton.addEventListener('click', function nameSelect () {
    const nameField = document.getElementById("playerName")
    const inputValue = document.getElementById("nameInput").value
    nameField.innerText = `Player Name: ${inputValue}`

    submitButton.className = "hidden"
    
    inputField.className = "hidden"
    
    //CREATE START BUTTON 
    let startButton = document.createElement("button")
    
    startButton.innerText = "Start!"
    
    startButton.className = "startBut"
    playerContainer.append(startButton)

   
    
    
})




//Game State
let gameState = {
    apple: [11, 8],
    snake: {
        body : [ [10, 5], [10, 6], [10, 7], [10, 8] ],
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
//End of Initial State
































