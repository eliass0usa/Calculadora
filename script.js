//  Função para inserir números selecionados
function insert(num){
  
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num

}

//  Função "Clean": Limpa a calculadora
function clean(){
  document.getElementById('resultado').innerHTML ="";
}

//  Função "Back" (BackSpace): Apaga o último item adicionado 
function back(){
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

// Função "Calcular": Calcula os valores
function calcular(){
  var resultado = document.getElementById('resultado').innerHTML;
  if(resultado){
    document.getElementById('resultado').innerHTML = eval(resultado)
  }else{
    document.getElementById('resultado').innerHTML = "Insira um valor"
  }
}