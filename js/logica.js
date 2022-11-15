

window.addEventListener("load", function(){

let botonDado6 = document.getElementById("boton-dado6")

function funciono(){
    let tope = document.getElementById("cantDado6").value;
    
    return cantidad(tope)
}

function dado (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function cantidad(tope){
    let iteraciones = document.getElementById("resultado-dado-6");
    
    for(i=1;i<=tope;i++){
        iteraciones.innerHTML += `<li>El resultado del dado numero ${i} es:</li>` + dado(1,6) 
        console.log(`El resultado del dado numero ${i} es: `+ dado(1,6)) 
    }console.log(tope)
    return "Se tiraron " + tope + " dados";

}
botonDado6.addEventListener("click", funciono)
})




