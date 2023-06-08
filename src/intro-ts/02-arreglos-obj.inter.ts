let vector1 : Array <number> = [9876]

vector1.push(10);
vector1[1] = 22;

for (let tem of vector1)

console.log(tem);

let tem : (number|string)[]=[];

tem.push('mario')
tem.push(123)

interface Alumno {

    matricula : number;
    nombre : string;
    edad : number;
    email : string;
}



const alumno : Alumno = {
    matricula: 1234,
    nombre: 'mario',
    edad: 23,
    email: 'mario@gmail.com',
    
}

console.table(alumno);

