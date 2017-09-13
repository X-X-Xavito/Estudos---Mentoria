		
			function calculaIMC(){

				var selecionaNome = document.getElementById("nome");
				var nome = selecionaNome.value;

			  	var selecionaPeso = document.getElementById("peso");
			  	var peso = selecionaPeso.value;

			 	var selecionaAltura = document.getElementById("altura");
			 	var altura = selecionaAltura.value;

			 	var imc = peso / (altura * altura);

				document.getElementById("resultadoIMC").innerHTML = (nome + ", o seu IMC é: " + imc);
			}
