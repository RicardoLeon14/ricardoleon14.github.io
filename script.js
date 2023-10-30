
function logeo() {
    let user = document.getElementById('Usur').value;
    let Pass = document.getElementById('Contras').value;

    if (user == "alumno@iestpargentina.edu.pe" && Pass == "argentina") {
        window.location = "index.html";
    }
    else {
        alert("Los datos ingresados son incorrectos")
        let dato = window.prompt("¿Podrías corregirlo?");
        if (dato == "No" | dato == "NO" |dato == "no") {
            alert("Lo siento no podemos ayudarte");
        } else if (dato == "Si" | dato == "SI" | dato=="si") {
            alert("Entendido, puedes corregirlo:")
            document.getElementById('Usur').value = "";
            document.getElementById('Contras').value = "";
        }

    }
}
