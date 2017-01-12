// FONCTION POUR TESTER PASSWORD

var testerpassword = function(password) {
	var correct;

	correct = true;

	for(i = 0; i < password.length; i++) {
		if(password[i] !== "a"  &&
			password[i] !== "b" &&
			password[i] !== "c" &&
			password[i] !== "d" &&
			password[i] !== "e" &&
			password[i] !== "f" &&
			password[i] !== "g" &&
			password[i] !== "h" &&
			password[i] !== "i" &&
			password[i] !== "j" &&
			password[i] !== "k" &&
			password[i] !== "l" &&
			password[i] !== "m" &&
			password[i] !== "n" &&
			password[i] !== "o" &&
			password[i] !== "p" &&
			password[i] !== "q" &&
			password[i] !== "r" &&
			password[i] !== "s" &&
			password[i] !== "t" &&
			password[i] !== "u" &&
			password[i] !== "v" &&
			password[i] !== "w" &&
			password[i] !== "x" &&
			password[i] !== "y" &&
			password[i] !== "z" &&
			password[i] !== "A" &&
			password[i] !== "B" &&
			password[i] !== "C" &&
			password[i] !== "D" &&
			password[i] !== "E" &&
			password[i] !== "F" &&
			password[i] !== "G" &&
			password[i] !== "H" &&
			password[i] !== "I" &&
			password[i] !== "J" &&
			password[i] !== "K" &&
			password[i] !== "L" &&
			password[i] !== "M" &&
			password[i] !== "N" &&
			password[i] !== "O" &&
			password[i] !== "P" &&
			password[i] !== "Q" &&
			password[i] !== "R" &&
			password[i] !== "S" &&
			password[i] !== "T" &&
			password[i] !== "U" &&
			password[i] !== "V" &&
			password[i] !== "W" &&
			password[i] !== "X" &&
			password[i] !== "Y" &&
			password[i] !== "Z" &&
			password[i] !== "0" &&
			password[i] !== "1" &&
			password[i] !== "2" &&
			password[i] !== "3" &&
			password[i] !== "4" &&
			password[i] !== "5" &&
			password[i] !== "6" &&
			password[i] !== "7" &&
			password[i] !== "8" &&
			password[i] !== "9") {
			correct = false;
		}
	}
	return correct;
}

module.exports = testerpassword;
