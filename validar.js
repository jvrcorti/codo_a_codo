
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const consulta = document.getElementById("consulta");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const $buttonmailto = document.querySelector('tomail');

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexname = /^[1-9]+$/
    //let regexname = /^[a-zA-Z\s]+$/
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(!regexname.test(nombre.value)){
        if(nombre.value.length === 0 ){
            warnings += 'Debe ingresar su nombre y apellido <br>'
            entrar = true
        }
        else if(nombre.value.length <= 4 ){
                warnings += 'Su nombre y apellido debe ser mayor <br>'
                entrar = true
        }
        else {
            entrar =false
        }
        
    }else {
        warnings += 'El nombre no es valido. <br>'
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido. <br>`
        entrar = true
    }
    if(consulta.value.length === 0){
        warnings += `No ingresaste tu consulta. <br>`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})

