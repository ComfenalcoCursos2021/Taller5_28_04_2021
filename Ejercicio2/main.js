// 2.	Determinar la hipotenusa de un triángulo rectángulo 
// conocidas las longitudes de sus dos catetos. Desarrolle el 
// algoritmo correspondiente. Formula: (HIP = √CATa + √CATb)

let CATa = parseInt(prompt("Ingrese el lado triángulo rectángulo CATa"));
let CATb = parseInt(prompt("Ingrese el lado triángulo rectángulo CATb"));
console.log(`Hipotenusa : `,Math.sqrt(CATa) + Math.sqrt(CATb));