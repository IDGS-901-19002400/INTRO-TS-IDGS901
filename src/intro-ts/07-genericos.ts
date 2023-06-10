class PilaEnteros{

    private vec:number[]=[];
    insertar(x:number){

        this.vec.push(x);
    }

    extraer(){
        if(this.vec.length>0)

        return this.vec.pop();

        else

        return null;
    }
}

class PilaString{

    private vec : string[]=[];

    insertar(x:string){

        this.vec.push(x);

    }
    extraer(){
        if(this.vec.length>0)

        return this.vec.pop();

      else
      return null;
    }
}


let pila1 = new PilaEnteros();
pila1.insertar(23)
pila1.insertar(28)
pila1.insertar(2)

console.log(pila1.extraer())

//cadenas

let pila2 = new PilaString();
pila2.insertar('23')
pila2.insertar('28')
pila2.insertar('2')

console.log(pila2.extraer())


//Clase generica 

class PilaGenerica<T>{

    private vec:T[]=[];

    insertar(x:T){

        this.vec.push(x);

    }
    
    extraer(){

        if(this.vec.length>0)

          return this.vec.pop();

        else

        return null;
    }
}

let pila3 = new PilaGenerica<number>();
pila3.insertar(23)
pila3.insertar(28)
pila3.insertar(2)

console.log(pila3.extraer())

let pila4 = new PilaGenerica<string>();
pila4.insertar('23')
pila4.insertar('28')
pila4.insertar('2')

console.log(pila4.extraer())


//----------

interface Animal{

    nombre : string;
    edad : number;
}

class Contenedor <T extends Animal>{

    private elemento:T[]=[];

    agregar(e:T){

        this.elemento.push(e);
    }

obtenerTodos():T[]{

    return this.elemento;
 }

}

const contenedor = new Contenedor<Animal>();

contenedor.agregar({nombre: 'Perro', edad: 10});
contenedor.agregar({nombre: 'Gato', edad:20});

const animales = contenedor.obtenerTodos();