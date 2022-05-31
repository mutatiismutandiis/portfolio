export class experiencia {
    id?: number;
    nombre: String;
    lugar: String;
    fechaInicio: String;
    fechaFin: String;

    constructor(nombre: String, apellido: String, fechaInicio: String, fechaFin: String){
        this.nombre = nombre;
        this.lugar = apellido;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}