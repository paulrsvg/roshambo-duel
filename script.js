/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

var score = 0;
var playerChoice;

var readTheNum = {
	'0': 'Rock',
	'1': 'Paper',
	'2': 'Scissors'
};

var cpuChoice = {
	init: function() {
		this.store = Math.floor(Math.random() * 3);
		this.text = readTheNum[this.store];
	},
	store: '',
	text: '',
};

var winOrder = [0, 1, 2, 0]; //corresponds to RPS, winner is choice + 1

var chooseWinner = function(player, cpu) {
  if(winOrder[player] === winOrder[cpu]) {
    return 'Whoa a tie! Try again?';
  }
  if(winOrder[player] === winOrder[cpu + 1]) {
    score++;
    return "Achievement unlocked: you won!";
  } else {
    score--;
    return 'You lost! Back to the dojo!';
  }
}

var paragraph = document.querySelector('p');
var assignClick = function(tag, pos) {
  tag.addEventListener('click', function() {
    playerChoice = pos;   
    cpuChoice.init();
    paragraph.innerText = 'The computer chose: ' + cpuChoice.text;
    paragraph.innerText += '\n' + chooseWinner(playerChoice, cpuChoice.store);
    paragraph.innerText += '\n' + 'SCORE: ' + score;
  });
}

var images = {
  tags: document.getElementsByTagName('img'),
  init: function() {
    for(var step = 0; step < this.tags.length; step++) {
      assignClick(this.tags[step], step);
    }
  }
}

images.init();
