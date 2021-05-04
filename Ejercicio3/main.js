// 3.Desarrolle un algoritmo que permita determinar el área y volumen 
// de un cilindro dado su radio {R) y altura (H). 
// Formula: (VOL = π * R^2 * H), (AREA_LATERAL = 2 * π * R * H)

let R = parseInt(prompt("Ingrese el radio"));
let H = parseInt(prompt("Ingrese la altura"));
let VOL = (Math.PI * (R**2)) * H;
let AREA_LATERAL = ((2 * Math.PI) * R) * H;
console.log(`El volumen es: `,VOL);
console.log(`El área es: `,AREA_LATERAL);