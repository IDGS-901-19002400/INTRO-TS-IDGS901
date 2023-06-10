function sumar(a: number,b: number) : void{

    console.log(a+b)

}

let num = sumar(3,5)

console.log(num);

function sumar2 (a: number, b:number): number{ 

    return a+b;
}

function operaBas(n1: number, n2:number, n3:number): number{

    let tem = n1 * n3;

    return tem;
}

console.log(operaBas(3,5,5))

interface Mascota{

    nombre : string;
    edad   : number;
    
    mostrarEdad : () => void;

}

function calcularEdad (mascota : Mascota, x: number): void{

    mascota.edad += x;
    console.log(mascota);
}

const nuevaMascota : Mascota ={

    nombre: 'Miau',
    edad: 3,
    mostrarEdad(){
        console.log('La edad es: ' ,this.edad)
    }
}

calcularEdad(nuevaMascota,2);

//funcion anonima
 
const funcSuar = function(n1: number, n2:number): number{

    return n1 + n2
}

console.log(funcSuar(4,9))

//Parametrs REST en funciones

function calcular2(...valores:number[]){

    let suma = 0;

    for(let x = 0; x < valores.length; x++){

        suma += valores[x];
        return suma;
    }
}
    console.log(calcular2(10,2,3,4));
    console.log(calcular2(1,2));


