// Write your code in this file!
const currentUser = 'Grace Hopper';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`
/* 
1) index.js
excitedWelcomeMessage
  contains "WELCOME TO FLATBOOK, ":
ReferenceError: excitedWelcomeMessage is not defined
at Context.<anonymous> (test/indexTest.js:25:14)
at processImmediate (node:internal/timers:464:21)


2) index.js
excitedWelcomeMessage
  contains the value of the 'currentUser' variable:
ReferenceError: excitedWelcomeMessage is not defined
at Context.<anonymous> (test/indexTest.js:31:14)
at processImmediate (node:internal/timers:464:21)

3) index.js
excitedWelcomeMessage
  ends with an exclamation point:
ReferenceError: excitedWelcomeMessage is not defined
at Context.<anonymous> (test/indexTest.js:35:14)
at processImmediate (node:internal/timers:464:21)

4) index.js
shortGreeting
  contains "Welcome, ":
ReferenceError: shortGreeting is not defined
at Context.<anonymous> (test/indexTest.js:41:14)
at processImmediate (node:internal/timers:464:21)

5) index.js
shortGreeting
  contains the first initial of the name stored in the 'currentUser' variable:
ReferenceError: shortGreeting is not defined
at Context.<anonymous> (test/indexTest.js:48:14)
at processImmediate (node:internal/timers:464:21)

6) index.js
shortGreeting
  ends with an exclamation point:
ReferenceError: shortGreeting is not defined
at Context.<anonymous> (test/indexTest.js:53:14)
at processImmediate (node:internal/timers:464:21)
*/