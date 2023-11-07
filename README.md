# Front End Bootcamp - Week 5 Challenge - Code Quiz

## Description

The purpose of this project was to build a multiple choice timed code quiz using JavaScript and web API's. The quiz stores high scores so that the user can guage their progress as they learn. In addition this was a great opportunity to practice the concepts learned on the course.

This was the toughest JavaScript project I've made so far and a culmination of all of the concepts I've been learning over the previous weeks.

My first step was to identify all the HTML I'd need to manipulate, these were held as variables using `getElementById`. I also defined variables for the timer and index of the current question. The questions themselves were defined in a separate file as an array of objects. The code for the high scores was defined in another file.

I decided to break down the code into functions to make it as versatile as possible, so that it could be used in multiple places.

Conditional `if` statements were used to generate a question based on the question index variable. A `for` loop was used to show the answers based on the length of their array, as well as generate the button elements. 

A separate `addEventListener` method was used to register a click event on the answer buttons, adding 1 to the question index each time an answer is clicked. The `addEventListener` method also used a conditional statement to check the answer and return feedback, as well as play the relevant sound effect.

On the end screen an `addEventListener` method was used on the Submit button and `JSON.stringify` and `JSON.parse` was used to store the scores in a new array as a string.

The scores page retrieved the scores from local storage, an `if` statement and `sort()` method were used to sort the scores from highest to lowest and a `for` loop to iterate through and display the scores

I spent some time organising the code once finished to ensure its readability, trying to group related objects together with clear comments.

## Deployed Application

* [JavaScript Code Quiz on GitHub Pages](https://partialarts.github.io/javascript-code-quiz/)

## Usage

To use this web page, you can open index.html inside a browser.

To start the quix, click "Start Quiz" and click on an answer to proceed to the next question. Your score will appear at the end. You can use the form to submit your score to the Highscores page.

## Screenshot

![The application includes a home page titled "Coding Quiz Challenge", a description and a "Start Quiz" button.](./assets/images/screenshot-1.png)
![The application includes a Highscores page, with the scores displayed from highest to lowest in a list.](./assets/images/screenshot-2.png)

### External Tutorials and Resources

* [JavaScript Array of Objects Tutorial](https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/)
* [A Complete Guide to Data Attributes](https://css-tricks.com/a-complete-guide-to-data-attributes/)
* [Event: target property](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
* [How to play audio? (StackOverflow answer)](https://stackoverflow.com/questions/9419263/how-to-play-audio)
* [<audio>: The Embed Audio element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
* [Window location.assign()](https://www.w3schools.com/JSREF/met_loc_assign.asp)

## License

MIT - [See LICENSE file in repo](https://github.com/partialarts/Console-Finances/blob/main/LICENSE)
