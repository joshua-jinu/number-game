document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('play-button');
  const gameContainer = document.querySelector('.game');
  const gameOverContainer = document.querySelector('.gameover');
  let score = 0;
  let timerId;

  // Challenge 1 :- Reference the play button and on click of it the startGame() function should be called
  // Expectation of the function :- visibility  of the play button and the game container changes  when the play button is clicked, ensuring that the game starts as expected.

  playButton.onclick = () => {
    startGame();
    playButton.style.display = 'none';
    gameContainer.style.display = 'flex';
  };

  // Challenge 2 :- Complete function generateRandomNumbers that will generate Randomnumbers. You will need to reference elements from the DOM and change its innerHTML value to be Random numbers.

  let num1 = document.getElementById('number1');
  let num2 = document.getElementById('number2');
  function generateRandomNumbers() {
    num1.innerHTML = Math.floor(Math.random() * 100);
    num2.innerHTML = Math.floor(Math.random() * 100);
  }

  // The timer function is already done for you!

  function startTimer() {
    let time = 10;
    const timer = document.getElementById('timer');
    timer.innerHTML = time;

    if (timerId) {
      clearInterval(timerId);
    }

    timerId = setInterval(() => {
      time--;
      if (time === 0) {
        endGame();
      }
      timer.innerHTML = time;
    }, 1000);

    window.score = score; // Expose score for testing
  }

  function startGame() {
    score = 0;
    generateRandomNumbers();
    startTimer();
    window.score = score; // Expose score for testing
  }

  function endGame() {
    clearInterval(timerId);
    localStorage.setItem('score', score);
    gameContainer.style.display = 'none';
    gameOverContainer.style.display = 'flex';
    const scoreBoard = document.getElementById('score-board');
    scoreBoard.innerHTML = score;
  }

  function resetGame() {
    clearInterval(timerId);
    generateRandomNumbers();
    startTimer();
  }
  // Challenge 3 :- Build Logic for Reset and ending the game. if the user clicks the correct option( > /< or =) they should move to second question and randm numbers should be again generated, score should increase, tmer should reset otherwise the endgameFunction should be invoked
  document.querySelector('#greater-than').addEventListener('click', () => {
    if (num1.innerHTML > num2.innerHTML) {
      score += 1;
      window.score = score;
      resetGame();
    } else {
      endGame();
    }
  });
  document.querySelector('#lesser-than').addEventListener('click', () => {
    if (num1.innerHTML < num2.innerHTML) {
      score += 1;
      window.score = score;
      resetGame();
    } else {
      endGame();
    }
  });
  document.querySelector('#equal-to').addEventListener('click', () => {
    if (num1.innerHTML == num2.innerHTML) {
      score += 1;
      window.score = score;
      resetGame();
    } else {
      endGame();
    }
  });

  // Challenge 4 :-  On clicking  Play again button, the user should get to play the game again, change the dislay of the game contaier and gameoverContainer and invoke the starGame() method
  function playAgainHandler() {}

  const playAgainButton = document.getElementById('play-again-button');
  if (playAgainButton) {
    playAgainButton.onclick = playAgainHandler;
  }
  function playAgainHandler() {
    playButton.style.display = 'none';
    gameContainer.style.display = 'flex';
    gameOverContainer.style.display = 'none';
    startGame();
  }

  //DOnot edit this code (Expose functions for testing)
  window.startGame = startGame;
  window.endGame = endGame;
  window.resetGame = resetGame;
  window.generateRandomNumbers = generateRandomNumbers;
});
