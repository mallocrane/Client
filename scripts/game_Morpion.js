// 404 Web page - NUIT DE L'INFO: malloc(rane) Group © 2018.

	var f = 0;
	var stop = 0;
	var s = Math.min(window.innerWidth - 10,window.innerHeight - 10);
	var matrix = [
	        [0,0,0],
	        [0,0,0],
	        [0,0,0]
	        ];
	var player1 = '';
	var player2 = '';
	var winner_name = '';
	var looser_name = '';

function Play(){
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    if (player1 != '' | player2 != ''){
        document.getElementById("start").className = "hidden";
        document.getElementById("game").className = "visible";
        var tirage = Math.floor(Math.random() * 2 + 1);
        if (tirage%2 == 0) {
            f = 0;
            document.getElementById("name").innerHTML = "C'est à <b>" + player1 + "</b> (✗) de commencer la partie.";
        }
        else {
            f = 1;
            document.getElementById("name").innerHTML = "C'est à <b>" + player2 + "</b> (<b>◯</b>) de commencer la partie.";
        }
    }
    else {document.getElementById("error").innerHTML = "Vous devez inscrire un nom à chaque joueur.";}
}

function Demarrage(){
	document.getElementById("Canvas").setAttribute("width", s);
	document.getElementById("Canvas").setAttribute("height", s);
	document.getElementById("Canvas").addEventListener("click", positiondb);
	Canvas();
}

function Canvas(){
	c = document.getElementById("Canvas");
	var ctx = c.getContext("2d");
		ctx.fillStyle = "rgba(255, 255, 255, 0)";
		ctx.fillRect(0,0,s,s);
		lignesHorizontales();
}

function positiondb(event) {
	var posX;
	var posY;
	posX = event.clientX;
	posY = event.clientY;
	caseX = Math.floor(posX/(s/3));
	caseY = Math.floor(posY/(s/3));
	console.log("X=",caseX," Y=",caseY);
	if (f%2 == 0 && matrix[caseY][caseX] == 0 && stop == 0) {
		dessinecroix(caseX,caseY);
		matrix[caseY][caseX] = 1;
		win = verification_globale(1);
        if(win){winner(1); stop = 1; console.log(player1 + " gagne la partie.");};
		f++;
	}
	if (f%2 == 1 && matrix[caseY][caseX] == 0 && stop == 0) {
		dessinerond(caseX,caseY);
		matrix[caseY][caseX] = 2;
		win = verification_globale(2);
		if(win){winner(2); stop = 1; console.log(player2 + " gagne la partie.");};
		f++;
	}
}

function verification_globale(j){
    if(matrix[0][0] == j && matrix[1][1] == j && matrix[2][2] == j){return true;}
    else if(matrix[0][2] == j && matrix[1][1] == j && matrix[2][0] == j){return true;}
    else {
        for(var i=0;i<3;i++){
            if(matrix[i][0] == j && matrix[i][1] == j && matrix[i][2] == j){return true;}
            if(matrix[0][i] == j && matrix[1][i] == j && matrix[2][i] == j){return true;}
        }
    }
}

function winner(j){
    if (j==1){winner_name = player1; looser_name = player2;}
    else {winner_name = player2; looser_name = player1;}
    document.getElementById("winner_name").innerHTML = winner_name;
    document.getElementById("loose").innerHTML = "On dirait que tu n'as pas eu de chance cette fois, <b>" + looser_name + "</b>. Dommage, <b>" + winner_name + "</b> a été plus fort que toi ! Vous pouvez retenter une nouvelle partie pour vous départager.";
    document.getElementById("game").className = "hidden";
    document.getElementById("winner").className = "visible";
}

function dessinerond(x,y) {
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.shadowBlur = 10;
    ctx.shadowColor = "white";
    ctx.shadowOffsetX= 3;
    ctx.shadowOffsetY= 3;
	ctx.lineWidth="6";
	ctx.strokeStyle="#000000";
	ctx.arc(((s/3)*x)+(s/6),((s/3)*y)+(s/6),(s/8), 0, 2 * Math.PI);
	ctx.stroke();
	document.getElementById("name").innerHTML = "C'est à <b>" + player1 + "</b> (✗) de jouer !";
	//document.getElementById("iconcr").className = "visible";
	//document.getElementById("iconci").className = "hidden";
	;
}

function dessinecroix(x,y) {
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.shadowBlur = 10;
        ctx.shadowColor = "white";
        ctx.shadowOffsetX= 3;
        ctx.shadowOffsetY= 3;
		ctx.lineCap = "round";
		ctx.lineWidth="6";
		ctx.strokeStyle="#000000";
		ctx.moveTo((s/60)+(s/3)*x,(s/60)+(s/3)*y);
		ctx.lineTo((s/3.2)+(s/3)*x,(s/3.2)+(s/3)*y);
		ctx.moveTo((s/60)+(s/3)*x,(s/3.2)+(s/3)*y);
		ctx.lineTo((s/3.2)+(s/3)*x,(s/60)+(s/3)*y);
		ctx.stroke();
		document.getElementById("name").innerHTML = "C'est à <b>" + player2 + "</b> (<b>◯</b>) de jouer !";
        //document.getElementById("iconci").className = "visible";
        //document.getElementById("iconcr").className = "hidden";
	;
}

function lignesHorizontales(){
	for(var i=1;i<3;i++){
		var c=document.getElementById("Canvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.shadowBlur = 10;
        ctx.shadowColor = "black";
        ctx.shadowOffsetX= 3;
        ctx.shadowOffsetY= 3;
		ctx.lineCap = "round";
		ctx.strokeStyle ="#000000";
		ctx.lineWidth = 3;
		ctx.moveTo(s/72,(s/3)*i);
		ctx.lineTo(s,(s/3)*i);
		ctx.stroke();
	}
	lignesVerticales();
}

function lignesVerticales(){
	var c=document.getElementById("Canvas");
	for(var i=1;i<3;i++){
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.shadowBlur = 10;
        ctx.shadowColor = "grey";
        ctx.shadowOffsetX= 3;
        ctx.shadowOffsetY= 3;
		ctx.lineCap = "round";
		ctx.strokeStyle ="#000000";
		ctx.lineWidth = 3;
		ctx.moveTo((s/3)*i,0);
		ctx.lineTo((s/3)*i,s);
		ctx.stroke();
	}
}

function reload(){window.location.reload();}

	var c=document.getElementById("Canvas");

setTimeout(Demarrage, 200);