window.addEventListener("load", function () {
  //capturo todos los input
  let nameEvent;
  let input6 = document.querySelector("#cantDado6");
  let input10 = document.querySelector("#cantDado10");
  let input20 = document.querySelector("#cantDado20");
  let input100 = document.querySelector("#cantDado100");
  let botonDado6 = document.getElementById("boton-dado6");
  let botonDado10 = document.getElementById("boton-dado10");
  let botonDado20 = document.getElementById("boton-dado20");
  let botonDado100 = document.getElementById("boton-dado100");
  let clearButtons = document.querySelectorAll(".clear");

  clearButtons.forEach((clearButton) => {
    clearButton.addEventListener("click", clear);
  });

  function clear() {
    let iteraciones = document.getElementById("resultado-dado-6");
    iteraciones.innerHTML = "";
  }

  function eventoCap(event) {
    nameEvent = event.target.value;
    console.log(nameEvent);
    return nameEvent;
  }

  function pasaValor(max) {
   
    return function cantidad(nameEvent) {
      let iteraciones = document.getElementById("resultado-dado-6");

      for (i = 1; i <= nameEvent; i++) {
        iteraciones.innerHTML +=
          `<li>El resultado del dado numero ${i} es:</li>` + dado(max);
      }
      return "Se tiraron " + nameEvent + " dados";
    };
  }

  function dado(max) {
    return Math.floor(Math.random() * (max - 1 + 1) + 1);
  }

  botonDado6.addEventListener("click", pasaValor(6));
  botonDado10.addEventListener("click", pasaValor(10));
  botonDado20.addEventListener("click", pasaValor(20));
  botonDado100.addEventListener("click", pasaValor(100));
  input6.addEventListener("blur", eventoCap);
  input10.addEventListener("blur", eventoCap);
  input20.addEventListener("blur", eventoCap);
  input100.addEventListener("blur", eventoCap);
});
