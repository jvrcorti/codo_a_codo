function sendWpp(){
    window.open('https://api.whatsapp.com/send?phone=5491123204371&text=Hola! Me gustaría saber más sobre codeninja');
};

function sendConsulta(){

}

function validarDatos(){
   let nombre = document.getElementById("formNombre").value;
   let mail   = document.getElementById("formMail").value;
   let body   = document.getElementById("formConsulta").value;
   
   //Patron para utilizar al validar nombre(solo letras Mm)
   const patternNombre = new RegExp('^[A-Z ]+$', 'i');
   //Patron para utilizar al validar mail
   const patternMail = new RegExp('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$');

   //valido nombre
   if(nombre.length <= 50){
      if(!patternNombre.test(nombre)){
        alert("El nombre debe contener letras solamente");
        //document.getElementById("formNombre").value = "";
        document.envioConsulta.formNombre.focus();
        return 0;    
      }
   }else{
    alert("El nombre no puede exceder los 50 caracteres");
    document.getElementById("formNombre").value = "";
    //document.envioConsulta.formNombre.focus();
    return 0;
   }

   //valido mail
   if(!patternMail.test(mail)){
        alert("El mail ingresado no es correcto");
        //document.getElementById("formMail").value = "";
        document.envioConsulta.formMail.focus();
        return 0;  
   }

   if(body.length == 0){
        alert("Debe ingresar una consulta");
        document.envioConsulta.formMail.focus();
        return 0;
        //De todas formas puede ingresar solamente espacios
   }

   enviarMail();
}


function enviarMail(){

  var parametros = {
    nombre : document.getElementById("formNombre").value,
    email  : document.getElementById("formMail").value,
    mensaje: document.getElementById("formConsulta").value
  };

  const serviceID = "service_twz2pvn";
  const templateID = "template_8ahv74z";

  emailjs.send(serviceID, templateID, parametros)
         .then((res) =>{
              document.getElementById("formNombre").value = "";
              document.getElementById("formMail").value = "";
              document.getElementById("formConsulta").value = "";
              alert("Su consulta ha sido enviada correctamente!");
              })
}
