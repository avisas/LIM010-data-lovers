/* Manejo del DOM */
const contLogin = document.getElementById('cont-login');    
const btnSubmit = document.getElementById('inputSubmit');    
const enteredUsername = document.getElementById('inputUname').value;
const enteredPassword = document.getElementById('inputPsw').value;

const dataPokemon = POKEMON.pokemon;

 // Login  
btnSubmit.addEventListener("click", () => {
	if (enteredUsername === "" && enteredPassword === "") {
		pokedex.classList.add("flex");
		contLogin.classList.add("none");
	}
});


// console.log(example(dataPokemon)); //array

// const arrayUno = example(dataPokemon);

// for(let i = 0; i < arrayUno.length; i++){
// 	l<
// }


