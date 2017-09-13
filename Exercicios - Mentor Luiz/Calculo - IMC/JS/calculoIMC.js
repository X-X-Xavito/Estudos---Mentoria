		
			function calculaIMC(){

				var selecionaNome = document.getElementById("nome");
				var nome = selecionaNome.value;

			  	var selecionaPeso = document.getElementById("peso");
			  	var peso = selecionaPeso.value;

			 	var selecionaAltura = document.getElementById("altura");
			 	var altura = selecionaAltura.value;

			 	var imc = peso / (altura * altura);

			 	if(imc <= 18.5){

			 		document.getElementById("resultadoIMC").innerHTML = (nome + ", o seu IMC é: " + imc + ". Você está abaixo do seu peso ideal!");

			 	} else if (imc > 18.5 && imc <= 25){

			 		document.getElementById("resultadoIMC").innerHTML = (nome + ", o seu IMC é: " + imc + ". Você está no peso ideal!");

			 	} else if (imc > 25 && imc <= 30){

			 		document.getElementById("resultadoIMC").innerHTML = (nome + ", o seu IMC é: " + imc + ". Você está levemente acima do peso ideal!");

			 	} else if(imc > 30){

			 		document.getElementById("resultadoIMC").innerHTML = (nome + ", o seu IMC é: " + imc + ". Você está obeso!");

			 	} 
			}
