  	var selecionaPeso = document.querySelector(".peso");
  	var peso = selecionaPeso.textContent;

 	var selecionaAltura = document.querySelector(".altura");
 	var altura = selecionaAltura.textContent;

 function calculaIMC(peso, altura){
 	var imc = 0;

 	imc = peso / (altura*altura);

 	return imc;
 }
