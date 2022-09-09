console.log(document);

var formulario = document.querySelector('form')
var paragrafo = document.createElement('p')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    
    const serviceID = "service_8cizczs";
    const templateID = "template_c9d30k1";

    // send the email here
    emailjs.sendForm("service_8cizczs", "template_c9d30k1", this).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Seu formulario foi submetido");
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Aconteceu alguma coisa", error);
      }
    );

    var dados =  new FormData(formulario)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var turma = dados.get('turma')
    var motivo = dados.get('motivo')
    var mensagem = dados.get('mensagem')
    console.log(nome, email, turma, motivo, mensagem)
}) 