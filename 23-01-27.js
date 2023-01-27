// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?

function numberToString(num) {
    return num.toString()
  }

//   Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

//   Examples
//   Input: [1, 5.2, 4, 0, -1]
//   Output: 9.2
  
//   Input: []
//   Output: 0
  
//   Input: [-2.398]
//   Output: -2.398
  
//   Assumptions
//   You can assume that you are only given numbers.
//   You cannot assume the size of the array.
//   You can assume that you do get an array and if the array is empty, return 0.
//   What We're Testing
//   We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
//   Advanced users may find this extremely easy and can easily write this in one line.

function sum (numbers) {
    let sum = 0
    for (let i=0; i<numbers.length; i++) {
      sum += numbers[i]      
    }
    return sum;
  };

//   An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

//   Example: (Input --> Output)
  
//   "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

  function isIsogram(str){
    let iso = str.toLowerCase();
    for (let i = 0; i < iso.length; ++i)
      for (let j = i + 1; j < iso.length; ++j)
        if(iso[i] === iso[j])
          return false;
    return true;
  }

//   Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
    if (p1 === p2) {
      return 'Draw!';
    } else if (p1 === 'rock' && p2 === 'scissors') {
      return 'Player 1 won!'
    } else if (p1 === 'rock' && p2 === 'paper') {
        return 'Player 2 won!'
    }  else if (p1 === 'paper' && p2 === 'scissors') {
        return 'Player 2 won!'
    } else if (p1 === 'paper' && p2 === 'rock') {
        return 'Player 1 won!'
    }  else if (p1 === 'scissors' && p2 === 'paper') {
        return 'Player 1 won!'
    } else if (p1 === 'scissors' && p2 === 'rock') {
        return 'Player 2 won!'
    }
  };