window.addEventListener('load', function(){
    //capturo todos los input 
    let input6 = document.querySelector('#cantDado6');
    let input10 = document.querySelector('#cantDado10');
    let input20 = document.querySelector('#cantDado20');
    let input100 = document.querySelector('#cantDado100');
    let botonDado6 = document.getElementById("boton-dado6");
    let botonDado10 = document.getElementById("boton-dado10");
    let botonDado20 = document.getElementById("boton-dado20");
    let botonDado100 = document.getElementById("boton-dado100");

    let nameEvent;
  function prueba(event){
   nameEvent = event.target.value;
   return nameEvent;


   }  
    

function funciono(){
    nameEvent;
    return cantidad(nameEvent)
}

function dado (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function cantidad(nameEvent){
    let iteraciones = document.getElementById("resultado-dado-6");
    
    for(i=1;i<=nameEvent;i++){
        iteraciones.innerHTML += `<li>El resultado del dado numero ${i} es:</li>` + dado(1,6) 
        console.log(`El resultado del dado numero ${i} es: `+ dado(1,6)) 
    }console.log(nameEvent)
    return "Se tiraron " + nameEvent + " dados";

}

botonDado6.addEventListener("click", funciono);
botonDado10.addEventListener("click", funciono);
botonDado20.addEventListener("click", funciono);
botonDado100.addEventListener("click", funciono);
input6.addEventListener('blur', prueba );
input10.addEventListener('blur', prueba );
input20.addEventListener('blur', prueba );
input100.addEventListener('blur', prueba );



})