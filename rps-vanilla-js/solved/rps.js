function Game(){
	this.wins = 0;
	this.losses = 0;
	this.ties = 0;
	this.compGuesses = ['r', 'p', 's'];
	this.compGuess = '';
	this.userGuess = '';
	this.play = function(user,comp){
		if(user === 'p' || user === 'r' || user === 's'){
			document.getElementById('user-guess').innerText = "You Guessed: " + user;
			comp = this.compGuesses[Math.floor(Math.random() * this.compGuesses.length)];
			document.getElementById('computer-guess').innerText = "Computer Guessed: " + comp;
			if(user === 'p' && comp === 'p'){
				this.ties++;
				document.getElementById('ties').innerText = "Ties: " + this.ties;
			} else if(user === 'r' && comp === 'p'){
				this.losses++;
				document.getElementById('losses').innerText = "Losses: " + this.losses;
			} else if(user === 's' && comp === 'p'){
				this.wins++;
				document.getElementById('wins').innerText = "Wins: " + this.wins;
			} else if(user === 'p' && comp === 's'){
				this.losses++;
				document.getElementById('losses').innerText = "Losses: " + this.losses;
			} else if(user === 'r' && comp === 's'){
				this.wins++;
				document.getElementById('wins').innerText = "Wins: " + this.wins;
			} else if(user === 's' && comp === 's'){
				this.ties++;
				document.getElementById('ties').innerText = "Ties: " + this.ties;
			} else if(user === 'p' && comp === 'r'){
				this.wins++;
				document.getElementById('wins').innerText = "Wins: " + this.wins;
			} else if(user === 'r' && comp === 'r'){
				this.ties++;
				document.getElementById('ties').innerText = "Ties: " + this.ties;
			} else if(user === 's' && comp === 'r'){
				this.losses++;
				document.getElementById('losses').innerText = "Losses: " + this.losses;
			}
		} else {
			alert("Please enter r, p, or s")
		}
	}
};


var game = new Game();
document.addEventListener('keydown', function(e) {
	game.play(e.key.toLowerCase(), game.compGuess);
})