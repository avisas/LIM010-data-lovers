/* Manejo del DOM */

const btnSubmit = document.getElementById('inputSubmit');       
btnSubmit.addEventListener("click", () => {
    const enteredUsername = document.getElementById('inputUname').value;
    const enteredPassword = document.getElementById('inputPsw').value;
    if (enteredUsername == "laboratoria" && enteredPassword == "LABORATORIA") {
        alert('login correcto');
    } else {
        alert('Usuario y/o contraseña incorrectos');
        }
    });
