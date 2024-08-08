describe("Numeron Game", function() {
  it("should start the game when the play button is clicked", function() {
    const playButton = document.getElementById("play-button");
    const gameContainer = document.querySelector(".game");

    // Simulate click on play button
    playButton.click();

    // Check if the play button is hidden and the game container is shown
    expect(playButton.style.display).toBe("none");
    expect(gameContainer.style.display).toBe("flex");
  });

  it("should generate random numbers and update the DOM elements", function() {
    // Ensure the function is defined
    expect(typeof window.generateRandomNumbers).toBe("function");

    // Check initial state of the elements
    const initialNumber1 = document.getElementById("number1").innerHTML;
    const initialNumber2 = document.getElementById("number2").innerHTML;

    // Call generateRandomNumbers directly
    window.generateRandomNumbers();

    // Get the generated numbers after calling the function
    const number1 = parseInt(document.getElementById("number1").innerHTML);
    const number2 = parseInt(document.getElementById("number2").innerHTML);

    // Ensure the numbers are updated
    expect(number1).not.toBe(initialNumber1);
    expect(number2).not.toBe(initialNumber2);

    // Check if the numbers are within the expected range
    expect(number1).toBeGreaterThanOrEqual(0);
    expect(number1).toBeLessThanOrEqual(100);
    expect(number2).toBeGreaterThanOrEqual(0);
    expect(number2).toBeLessThanOrEqual(100);
  });
  it("should increment score and reset game when greater-than condition is true", function() {
    // Set numbers such that the greater-than condition is true
    document.getElementById("number1").innerHTML = "50";
    document.getElementById("number2").innerHTML = "30";

    const greaterThanButton = document.getElementById("greater-than");

    // Capture initial score
    const initialScore = window.score;

    // Simulate click event on greater-than button
    greaterThanButton.click();

    // Check if the score is incremented
    expect(window.score).toBe(initialScore + 1);

    // Check if the game container is still visible
    const gameContainer = document.querySelector(".game");
    expect(gameContainer.style.display).toBe("flex");
  });

  it("should end game when greater-than condition is false", function() {
    // Set numbers such that the greater-than condition is false
    document.getElementById("number1").innerHTML = "30";
    document.getElementById("number2").innerHTML = "50";

    const greaterThanButton = document.getElementById("greater-than");

    // Simulate click event on greater-than button
    greaterThanButton.click();

    // Check if the game container is hidden
    const gameContainer = document.querySelector(".game");
    const gameOverContainer = document.querySelector(".gameover");
    expect(gameContainer.style.display).toBe("none");
    expect(gameOverContainer.style.display).toBe("flex");
  });

  it("should increment score and reset game when lesser-than condition is true", function() {
    // Set numbers such that the lesser-than condition is true
    document.getElementById("number1").innerHTML = "30";
    document.getElementById("number2").innerHTML = "50";

    const lesserThanButton = document.getElementById("lesser-than");

    // Capture initial score
    const initialScore = window.score;

    // Simulate click event on lesser-than button
    lesserThanButton.click();

    // Check if the score is incremented
    expect(window.score).toBe(initialScore + 1);

   
  });

  it("should end game when lesser-than condition is false", function() {
    // Set numbers such that the lesser-than condition is false
    document.getElementById("number1").innerHTML = "50";
    document.getElementById("number2").innerHTML = "30";

    const lesserThanButton = document.getElementById("lesser-than");

    // Simulate click event on lesser-than button
    lesserThanButton.click();

    // Check if the game container is hidden
    const gameContainer = document.querySelector(".game");
    const gameOverContainer = document.querySelector(".gameover");
    expect(gameContainer.style.display).toBe("none");
    expect(gameOverContainer.style.display).toBe("flex");
  });

  it("should increment score and reset game when equal-to condition is true", function() {
    // Set numbers such that the equal-to condition is true
    document.getElementById("number1").innerHTML = "50";
    document.getElementById("number2").innerHTML = "50";

    const equalToButton = document.getElementById("equal-to");

    // Capture initial score
    const initialScore = window.score;

    // Simulate click event on equal-to button
    equalToButton.click();

    // Check if the score is incremented
    expect(window.score).toBe(initialScore + 1);

    
  });

  it("should end game when equal-to condition is false", function() {
    // Set numbers such that the equal-to condition is false
    document.getElementById("number1").innerHTML = "30";
    document.getElementById("number2").innerHTML = "50";

    const equalToButton = document.getElementById("equal-to");

    // Simulate click event on equal-to button
    equalToButton.click();

    // Check if the game container is hidden
    const gameContainer = document.querySelector(".game");
    const gameOverContainer = document.querySelector(".gameover");
    expect(gameContainer.style.display).toBe("none");
    expect(gameOverContainer.style.display).toBe("flex");
  });
});