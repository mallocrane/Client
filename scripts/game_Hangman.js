/* 404 Web page - NUIT DE L'INFO: malloc(rane) Group � 2018. */

var level = 0;
var word = "";
var word_number = 0;
var word_size = 0;
var answer = 0;
var total_answer = 0;
var table = ["ordinateur", "lit", "nuit", "informatique", "cookie", "code", "serveur", "canvas", "jeu", "page", "erreur"];

/*if(window.addEventListener){
    window.addEventListener('load', init, false);
}else{
    window.attachEvent('onload', init);
}*/

function init(){
	level = 0;
	word = "";
	word_number = 0;
	word_size = 0;
	answer = 0;
	total_answer = 0;
	document.getElementById("reload").className = "hidden";
	document.getElementById("character").className = "visible";
	document.getElementById("test").className = "visible";
	document.getElementById("answer").innerHTML = "";
	document.getElementById("word").className = "visible";
	document.getElementById("advert").innerHTML = "";
	
	for(var i = 101; i <= 115; ++i){
		document.getElementById(i).className = "hidden";
		document.getElementById(i).innerHTML = "_";
	}
	
	hangman(0);
	start_game();
}

function start_game(){
	word_number = Math.round((Math.random() * 10));
	word = table[word_number];
	word_size = word.length;
	
	for(var i = 101; i <= word_size+100; ++i){
		document.getElementById(i).className = "visible";
	}
}

function check(){
	if(level >= 0){
		document.getElementById("advert").innerHTML = "";
		var character = document.getElementById("character").value;
		if(character.length == 1){
			answer = 0;
			for(var i = 0; i <= word_size; ++i){
				if(character == word.charAt(i)){
					document.getElementById(101+i).innerHTML = character;
					++answer;
					++total_answer;
				}
			}
			if(answer == 0){
				document.getElementById("advert").innerHTML = "Cette lettre n'est pas dans le mot.";
				++level;
			}
		}
		else{
			if(character == word){
				document.getElementById("word").className = "hidden";
				document.getElementById("character").className = "hidden";
				document.getElementById("answer").innerHTML = word;
				document.getElementById("reload").className = "visible";
				document.getElementById("advert").innerHTML = "Vous avez gagne, bien joue !";
				level = -1;
			}
			else{
				document.getElementById("advert").innerHTML = "Ce n'est pas le bon mot, reessayez !";
				++level;
			}
		}
		
		if(total_answer == word_size){
			document.getElementById("word").className = "hidden";
			document.getElementById("character").className = "hidden";
			document.getElementById("test").className = "hidden";
			document.getElementById("answer").innerHTML = word;
			document.getElementById("reload").className = "visible";
			document.getElementById("advert").innerHTML = "Vous avez gagne, bien joue !";
			level = -1;
		}
		
		document.getElementById("character").value = "";
		
		if(level > 11){
			document.getElementById("answer").innerHTML = "Le mot etait : " + word;
			document.getElementById("advert").innerHTML = "Vous avez perdu !";
			document.getElementById("reload").className = "visible";
			document.getElementById("word").className = "hidden";
			document.getElementById("character").className = "hidden";
			document.getElementById("test").className = "hidden";
		}
		else{hangman(level);}
	}
}

function hangman(level){
	for(var i = 0; i <= 11; i++){
		document.getElementById(i).className = "hidden";
	}
	if(level >= 0){
		document.getElementById(level).className = "visible_img";
	}
	else{document.getElementById(0).className = "visible_img";}
}

setTimeout(init, 200); 
