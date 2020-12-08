/*
* The Main program implements an application that
* pushes an integer onto a stack.
*
* @author  Ben Whitten
* @version 1.0
* @since   2020-12-8
*/

// Defining require and process
/*eslint no-undef: "error"*/
/*global require*/
// Defining prompt for getting user input.
const prompt = require('prompt-sync')({sigint: true});

// This is the object MrCoxallStack
class MrCoxallStack {
    constructor() {
        this.stack = [];
    }

    push(addition) {
        this.stack.push(addition);
    }
}

///////////////////////////////////////////////////////////////////////////////

// This handles the input and output.
  try {
    let stack = new MrCoxallStack();
    var addition;
    var temp = 1;

    while (temp == 1) {
      addition = prompt("Input a number to push to the stack: ");
      if (isNaN(addition) == true) {
        console.log("ERROR: Invalid Input");
        break;
      } else {
        stack.push(addition);
        console.log();
        console.log("Pushed(", addition, ")");
      }
    }
  } catch (err) {
    console.log();
    console.log("ERROR: Invalid Input");
  }
