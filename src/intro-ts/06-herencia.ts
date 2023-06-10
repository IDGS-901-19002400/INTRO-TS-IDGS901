class Persona5{

    protected nombre:string;
    protected edad: number;

    constructor(nombre:string, edad:number){

        this.nombre = nombre;
        this.edad = edad;

    }

    impimir(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Edad : ${this.edad}`)
    }
}

class Empleado extends Persona5{

    private sueldo : number;

    constructor(nom:string, edad:number, sueldo:number){
            super(nom,edad);
            this.sueldo = sueldo;
    //super permite llamar al constructor de la clase padre
    }

    imprimir(){
    //en este caso el super llama al metodo imprimir de la clase padre
        super.impimir();
        console.log(`Sueldo: ${this.sueldo}`)
    }
    
}

const persona6 = new Persona5('Alan', 20);

persona6.impimir();


const empleado = new Empleado('Ana', 22, 2000);

empleado.imprimir();
