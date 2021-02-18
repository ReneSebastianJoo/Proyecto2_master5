let user01 = { nombre: "Hiromi", saldo: 200, password: "helloworld" };
let user02 = { nombre: "Manuel", saldo: 290, password: "l33t" };
let user03 = { nombre: "Luis", saldo: 67, password: "123" };
const boton = document.getElementById("boton");

var din = user02.saldo;
let num = document.getElementById("num");

function muestraSaldo(){
    num.innerText = din;

}

function deposita(){

    var aumento = parseInt(prompt("Cuanto quieres depositar"));
    if(isNaN(aumento)){
        alert("debe ser un numero")
   
    }else {
        var incremento = Math.abs(aumento);
        var total = incremento +din;
        if (total >= 990){
            alert("Esto es un error una cuenta Bitbanco no debe tener mas de 990 bitcoins")
        } else {
            din = total;
            num.innerText = din;
        }
    }
    
    
}

function retirar(){

    var decremento = parseInt(prompt("Cuanto quieres retirar"));
    if (isNaN(decremento)){
        alert("debe ser un numero")

    }else {
        var retiro = Math.abs(decremento); 
        var cashOut = din - retiro;
        if (cashOut <= 10){
            alert("Lo sentimos no podemos permitir que su cuenta tenga menos de 10 Bitcoins")
        } else{
            din = cashOut;
            num.innerText = din;
         }
            
    }

}

function salir(){
    alert("Hasta luego");
    window.close();
}