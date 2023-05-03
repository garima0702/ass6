function playGame() {
    const number = document.getElementById("number").value;
    if (number < 1 || number > 100) {
      document.getElementById("result").innerHTML = "Please enter a number between 1 and 100.";
      return;
    }
    
    let attempts = 5;
    let min = 1;
    let max = 100;
    let guess = Math.floor((min + max) / 2);
    
    while (attempts > 0) {
      if (guess == number) {
        document.getElementById("result").innerHTML = "The computer guessed " + guess + " and won!";
        return;
      } else if (guess < number) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
      
      guess = Math.floor((min + max) / 2);
      attempts--;
    }
    
    document.getElementById("result").innerHTML = "The computer was unable to guess the number. You win!";
  }