function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");
  if (!peso || !altura) {
    resultado.innerText = "Por favor, preencha os campos";
    return;
  }

  const imc = peso / (altura * altura);

  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc >= 30 && imc < 34.9) {
    classificacao = "Obesidade grau I";
  } else if (imc >= 35 && imc < 39.9) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III";
  }

  resultado.innerText = `Seu IMC é: ${imc.toFixed(
    2
  )}\nClassificação: ${classificacao}`;
}
