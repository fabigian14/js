// EJEMPLOS DE VARIABLES

var musica = "ROCK";
console.log("variable música antes del bloque", musica);

{
	var musica = "POP";
	console.log("varible música dentro del bloque", musica);
}

console.log("varible musica después del bloque", musica);


console.log("===============================")

let musica2 = "ROCK";
console.log("variable música antes del bloque", musica2);

{
	let musica2 = "POP";
	console.log("varible música dentro del bloque", musica2);
}

console.log("varible musica después del bloque", musica2);

// EN EL NAVEGADOR
/*
	CON LA PALABRA RESERVADA VAR:
		Variable música antes del bloque ROCK
		varible música dentro del bloque POP
		varible musica después del bloque POP

	===============================
	
	CON LA PALABRA RESERVADA LET:
		Variable música antes del bloque ROCK
		varible música dentro del bloque POP
		varible musica después del bloque ROCK
*/