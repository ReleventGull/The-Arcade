let gameState = {
    apple: [11, 8],
    snake: {
        body : [ [10, 5], [10, 6], [10, 7], [10, 8] ],
        nextDirection: [1, 0]
    }
  }
 


gameState.snake.body.forEach(segement => console.log(segement))

