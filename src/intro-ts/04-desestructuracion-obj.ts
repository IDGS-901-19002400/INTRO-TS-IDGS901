//Permite acceder a las propiedades de un objeto sin utilizar la jerarquia
// es decir el nombre del objeto y la propiedad

interface Alumno1{
    matricula1: number;
    nombre: string;
    edad: number;
    correo: string;
    grupo: Grupo;

}

interface Grupo{
    grupo : string;
    year : number;
}

const alumno2 : Alumno1={

    matricula1:1234,
    nombre: 'Juan',
    edad: 20,
    correo: 'mario@gmail.com',
    grupo: {
        grupo:'idgs',
        year: 2023
    }
}

console.log(`La matricula es: ${alumno2.matricula1}`)
console.log(`El nombre es: ${alumno2.nombre}`)
console.log(`El año del grupo es: ${alumno2.grupo.year}`)


//Desestructuracion de objetos

const {matricula1, nombre:nom, grupo:xx}= alumno2;
const {grupo , year:anio}= xx;

console.log(`La matricula es: ${matricula1}`)
console.log(`El nombre es: ${nom}`)
console.log(`El año del grupo es: ${anio}`)


//Arreglos

const gps:string[] = ['IDGS','IEVN','REDES'];

console.log(`El grupo 1: ${gps[0]}`)
console.log(`El grupo 2: ${gps[1]}`)
console.log(`El grupo 3: ${gps[2]}`)


//Desestructuracion de arreglos

const[a,,b] = gps;
console.log(`El grupo 1: ${a}`)





