function tarcs(){
	var mensaje="sin igualdad"
	var nombre = document.getElementById("nomb").value;
	var x1 = Math.trunc( Math.random()*20 ) + 1;
	var x2 = Math.trunc( Math.random()*20 ) + 1;
	var x3 = Math.trunc( Math.random()*20 ) + 1;

	switch (x1){
		case 1:
		document.getElementById("box1").innerHTML="<img src='img/emmanuel.jpg'>";
		break;
		case 2:
		document.getElementById("box1").innerHTML="<img src='img/emmanuel2.jpg'>";
		break;
		case 3:
		document.getElementById("box1").innerHTML="<img src='img/miguel.jpg'>";
		break;
		case 4:
		document.getElementById("box1").innerHTML="<img src='img/diego.jpg'>";
		break;
		case 5:
		document.getElementById("box1").innerHTML="<img src='img/alan.png'>";
		break;
	}

	switch (x2){
		case 1:
		document.getElementById("box2").innerHTML="<img src='img/gabriel.jpg'>";
		break;
		case 2:
		document.getElementById("box2").innerHTML="<img src='img/gali.jpg'>";
		break;
		case 3:
		document.getElementById("box2").innerHTML="<img src='img/nazaret.jpg'>";
		break;
		case 4:
		document.getElementById("box2").innerHTML="<img src='img/nohemi.jpg'>";
		break;
		case 5:
		document.getElementById("box2").innerHTML="<img src='img/pau.jpg'>";
		break;
	}

	switch (x3){
		case 1:
		document.getElementById("box3").innerHTML="<img src='img/educaplay.png'>";
		break;
		case 2:
		document.getElementById("box3").innerHTML="<img src='img/director.jpg'>";
		break;
		case 3:
		document.getElementById("box3").innerHTML="<img src='img/logo.png'>";
		break;
		case 4:
		document.getElementById("box3").innerHTML="<img src='img/logo2.jpeg'>";
		break;
		case 5:
		document.getElementById("box3").innerHTML="<img src='img/silva.jpg'>";
		break;
	}

	if ((x1==x2)&&(x1==x3))
		mensaje="Tercias!!";
	else if ((x1==x2)||(x1==x3))
		mensaje="Pares!!";
	else
		mensaje="sin igualdad";

	document.getElementById("Sal01").innerHTML="Hola "+nombre+"| Tu resultado es ";
	document.getElementById("resul").innerHTML= mensaje;
}