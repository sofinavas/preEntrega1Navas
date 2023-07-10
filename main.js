function simularVotacion() {
  const edad = parseInt(prompt("Ingrese su edad:"));

  if (isNaN(edad)) {
    alert("Por favor, ingrese un valor numérico para la edad.");
    return;
  }

  if (edad >= 18) {
    alert("¡Puede votar en las próximas elecciones!");
  } else {
    alert("No cumple con la edad mínima para votar.");
  }
}

simularVotacion();


  

