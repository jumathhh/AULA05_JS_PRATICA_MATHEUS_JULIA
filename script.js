var peso;
var altura;
var imc;
var resultado;

//1 recebendo o event
function calcular(event){
    //refressh dos boots

    event.preventDefault();
   // alert("Teste");

   //recebendo os dados digitados do usuario
   peso = document.getElementById("peso").value;
   altura = document.getElementById("altura").value;

   //calculo do IMC
   imc = peso/Math.pow(altura, altura);

   //testando a recepção dos valores e testando o calculo do IMC 
   console.log("Peso: " + peso);
   console.log("Altura: " + altura);
   console.log("O Imc é: " + imc);


resultado = document.getElementById('resultado');
if(imc<17){
    resultado.innerHTML = '</br>Seu resultado foi: '+imc.toFixed(2) + '</br>Cuidado, você está muito abaixo do peso' ;
}
else if(imc>=17&&imc<18.5){
    resultado.innerHTML = '</br>Seu resultado foi: '+imc.toFixed(2) + '</br>Você está abaixo do seu peso' ;
}
else if(imc>=18.5&&imc<24.99){
    resultado.innerHTML = '</br>Seu resultado foi: '+imc.toFixed(2) + '</br>Você está no peso normal' ;
}
else if(imc>=25&&imc<29.99){
    resultado.innerHTML = '</br>Seu resultado foi: '+imc.toFixed(2) + '</br>Você está acima do peso' ;
}
else if(imc>30){
    resultado.innerHTML = '</br>Seu resultado foi: '+imc.toFixed(2) + '</br>Você está obeso' ;
}

}