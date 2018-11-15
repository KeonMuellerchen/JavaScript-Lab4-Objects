// Step 1 - Create a new object called storyteller
// Step 2 - Give the storyteller object a property called name with a value
// Step 3 - Give the storyteller object a property called address with a value
// Step 4 - Give the storyteller object a property called bio with a function definition that returns the following string:
// `${name} lives at ${address} and is a great storyteller.`
let storyteller = {
    name: "Keon",
    address: "32 Rosemary AVE",
    bio: function () {
        return `${this.name} lives at ${this.address} and is a great storyteller.`;
    }
}

// Step 5 - Using the DOM techniques you learned last week, fill out the Storyteller's information in the provided table.
const storytellerName = document.querySelector('.name');
storytellerName.textContent = storyteller.name;

const storytellerAddress = document.querySelector('.address');
storytellerAddress.textContent = storyteller.address;

const storytellerBio = document.querySelector('.bio');
storytellerBio.textContent = storyteller.bio();

// Step 6 - Create an object constructor called Player that takes 3 arguments: name, class,and level
function Player (name, _class, level) {
    this.name = name;
    this._class = _class;
    this.level = level;

    this.bio = function () {
        return `${this.name} is a world class ${this._class} at the bolstering level of ${this.level}!`;
    }

    this.toHTML = function (selector) {
        let div = document.createElement('div');
        div.textContent = this.bio();
        document.querySelector(selector).append(div);
    }
}
// Step 7 - Give the constructor the following 3 properties: name, class, and level


// Step 8 - Give the constructor a bio property with a function definition that returns the following string
// `${name} is a world class ${class} at the bolstering level of ${level}!`


// Step 9 - Create 2 new players called playerOne and playerTwo with whatever values you want.
let playerOne = new Player("Dave", "SQL", 100);
let playerTwo = new Player("Billy", "Java", 99);

// Step 10 - Using the DOM techniques you learned last week, fill out the player's information in the provided tables for each player.
//player1
const player1name = document.querySelector('#playerOne .name');
player1name.textContent = playerOne.name;

const player1class = document.querySelector('#playerOne .className');
player1class.textContent = playerOne._class;

const player1level = document.querySelector('#playerOne .level');
player1level.textContent = playerOne.level;

const player1Bio = document.querySelector('#playerOne .bio');
player1Bio.textContent = playerOne.bio();

//player2
const player2name = document.querySelector('#playerTwo .name');
player2name.textContent = playerTwo.name;

const player2class = document.querySelector('#playerTwo .className');
player2class.textContent = playerTwo._class;

const player2level = document.querySelector('#playerTwo .level');
player2level.textContent = playerTwo.level;

const player2Bio = document.querySelector('#playerTwo .bio');
player2Bio.textContent = playerOne.bio();
