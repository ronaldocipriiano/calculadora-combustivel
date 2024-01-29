function calcularCombustivel(event) {
  event.preventDefault();

  let alcoolInput = parseFloat(document.getElementById("alcool").value);
  let gasolinaInput = parseFloat(document.getElementById("gasolina").value);

  if (isNaN(alcoolInput) || isNaN(gasolinaInput)) {
    alert(
      "Por favor, insira valores válidos para o preço do álcool e da gasolina."
    );
    return;
  }

  let contentResult = document.getElementById("content-result");
  let textResult = document.getElementById("text-result");
  let alcoolSpan = document.getElementById("alcool-result");
  let gasolinaSpan = document.getElementById("gasolina-result");

  let calculo = alcoolInput / gasolinaInput;

  if (calculo < 0.7) {
    textResult.textContent = "Compensa usar Álcool";
  } else {
    textResult.textContent = "Compensa usar Gasolina";
  }

  alcoolInput = alcoolInput.toFixed(2);
  gasolinaInput = gasolinaInput.toFixed(2);

  alcoolSpan.textContent = "Álcool R$ " + alcoolInput;
  gasolinaSpan.textContent = "Gasolina R$ " + gasolinaInput;

  contentResult.classList.remove("hide");
}
