// 5."Desarrolle un algoritmo para la empresa Constructora Tecnovivir Casas C.A., 
// que le permita calcular e" imprimir la nómina para su cancelación a un total 
// de 50 obreros calificados a quienes debe cancelar por horas trabajadas. 
// La hora trabajada se pautó en 30.000 Bolívares.
let usuario = [], valor_hora = 30000.10, total_nomina = 0, decimal = new Intl.NumberFormat("de-DE", {style: "currency", currency: "VES"});
do{
    let salario = 0;
    let cliente = prompt("Ingrese su nombre");
    let numero_horas_trabajadas = parseInt(prompt("Horas trabajadas"));
    if(numero_horas_trabajadas>0){
        salario = numero_horas_trabajadas * valor_hora;
        total_nomina += salario;
        usuario.push({nombre : cliente, horas_trabajadas: numero_horas_trabajadas, cancelar : decimal.format(salario)});
    }else{
        usuario.push({nombre : cliente, valor : 0})
    }
}while(parseInt(prompt(`Deseas ingresar otra persona # ${usuario.length} \n 0. NO \n 1. SI`)))
console.log("Pagos a realizar, ",usuario,` Total de nomina ${decimal.format(total_nomina)}`);