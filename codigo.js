var loginForm = document.getElementById("loginVal");
const loginButton = document.getElementById("boton");
const trans = document.getElementById("login-pagina");
const loginErrorMsg = document.getElementById("login-error-msg");
var c = document.getElementById("a1").href;
var d = document.getElementById("a2").href;
var f = document.getElementById("a3").href;


let user01 = { nombre: "Hiromi", saldo: 200, password: "helloworld" };
let user02 = { nombre: "Manuel", saldo: 290, password: "l33t" };
let user03 = { nombre: "Luis", saldo: 67, password: "123" };


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.usu.value;
    const pass = loginForm.pas.value;
    //&& pass === user01.pasword

    if (username === user01.nombre && pass === user01.password) {
        window.open(c);
    } else if(username === user02.nombre && pass === user02.password){
        window.open(d);

    } else if(username === user03.nombre && pass === user03.password){
        window.open(f);
    
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

