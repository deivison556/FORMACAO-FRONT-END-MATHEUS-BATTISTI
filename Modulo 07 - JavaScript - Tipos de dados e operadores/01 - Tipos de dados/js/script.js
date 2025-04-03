// 1 - Tipo Number
console.log(typeof 2);
console.log(-15);
console.log(5.2);

// 2 -  Operações aritméticas
/*

  + soma
  - subtração
  * multiplicação
  / divisão
  % resto da divisão

*/
console.log(2 + 4);
console.log(10 - 5);
console.log(12 * 5);
console.log(25 / 5);
console.log(180 % 7);
console.log(5 * (13 + 2))

// 3 - Special Numbers
/*

  - Infinty
  - -Infinity
  - NaN (Not a Number)

*/
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
console.log(12 * "sd"); // NaN (Not a Number)

// 4 - Tipo Strings
console.log('Um texto');
console.log(`Esse é outro texto`);
console.log("Um novo texto final");

// 5 - Concatenação
/* 

  - Concatenação é o recurso que une dois ou mais texto.
  - O Operada da concatenação é o +

*/
console.log('Oi ' + ' tudo' + ' bem');

// 6 - Interpolação (Template strings)
/*

  - A interpolação é um recurso semelhante a concatenação
  - Deve ser escrito `entre crases`
  - Podemos executar código JavaScript com ${algum código};

*/
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

// 7 - Tipo de dado Boolean
/*

  - True
  - False

*/
console.log(true);
console.log(false);
console.log(5 > 20); // false
console.log(30 > 10); // true

// 8 - Comparações
/*

  Maior e menor: > e <;
  Maior ou igual e menor ou igual: >= e <=;
  Igual: ==;
  Diferente: !=;
  Identico: ===;

*/

console.log(5 <= 5); // true
console.log(5 < 5); // false
console.log(10 >= 10); // true
console.log(10 > 12); // false
console.log(10 != 9 ); // true

// 9 - Comparação de idêntico
/*

  - Operadores de === e !== funcinam como == e !==.
  - Porém também levam em consideração o tipo de dado;
*/

console.log(9 == '9');
console.log(9 === '9'); //false
console.log(9 != '9');
console.log(9 !== '9'); //true

// 10 - Operadores lógicos
/*

  && - AND (True apenas se os dois lados forem verdadeiros)
  || - OR (Para ser true, um lado com true é o suficiente)
  ! - NOT (Este operador inverte a comparação)

*/

// 11 - Operadores lógicos na prática
console.log(true && true); // true
console.log(false && false); // false
console.log(5 > 2 && 2 < 10); // true
console.log(5 > 2 && "Deivison" === 1); // false

console.log(5 > 2 || "Deivison" === 1); // true
console.log(5 < 2 || 5 > 100); // false

console.log(!true); //retorna false
console.log(!5 > 2); //retorna false

// 12 - Empty values
/*
  - Undefined
  - Null
*/
console.log(typeof null, typeof undefined);
