export class Restaurante {


    /*
        {
        "id": 1,
        "nombre": "La Trattoria",
        "direccion": "Calle Principal 123",
        "barrio": "Centro",
        "web": "http://www.latrattoria.com/",
        "fichaGoogle": "https://maps.google.com/restaurantes/1",
        "latitud": 40.1235,
        "longitud": -3.98765,
        "precioMedio": 3,
        "creadoEn": null,
        "especialiadad1": "Italiana",
        "especialiadad2": "Pizza",
        "especialiadad3": "Pasta"
    },
    */
    id:number;
    nombre:string;
    direccion:string;
    barrio:string;
    web:string;
    fichaGoogle:string;
    latitud:number;
    longitud:number;
    precioMedio:number;
    creadoEn:string;
    especialiadad1:string;
    especialiadad2:string;
    especialiadad3:string;


    constructor(){
        this.id = 0;
        this.nombre = "";
        this.direccion = "";
        this.barrio = "";
        this.web = "";
        this.fichaGoogle = "";
        this.latitud = 0;
        this.longitud = 0;
        this.precioMedio = 0;
        this.creadoEn = "";
        this.especialiadad1 = "";
        this.especialiadad2 = "";
        this.especialiadad3 = "";
    }
}
