export default class  App {


    //
    sumatoriaSerieUno(num){
        let serie = 0;
        for (let i = 1; i <= num; i++) {
            console.log(1/i)
            serie = serie + (1/i);
        }
        return serie;
    }

    //
    sumatoriaSerieDos(){

    }

    //
    esPrimo(){

    }

    //
    obtenerMultiplos(){

    }

    //
    obtenerImpares(){

    }

}

let app = new App();

//Console testing
console.log(app.sumatoriaSerieUno(7));



