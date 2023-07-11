document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form")
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = form.elements["Nome"].value;
        const email = form.elements["e-mail"].value;
        const mensagem = form.elements["mensagem"].value;

        
        alert("Ola"+ " " + name + " " + "seu email é:" + " " + email + " " + "e a mensagem digitada foi: =>" + " " + mensagem)
    });

});