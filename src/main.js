export default class  App {


    //
    sumatoriaSerieUno(num){
        let serie = 0;
        for (let i = 1; i <= num; i++) {
            serie = serie + (1/i);
        }
        return serie;
    }

    //
    sumatoriaSerieDos(num){
        let serie = 0;  
        for (let i = 1; i <= num; i++) {
            if(i > 2 && i % 2 != 0){
            serie -= (1/i)
            }else{
            serie += (1/i)  
            };
        }
        return serie;   
    
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
console.log(app.sumatoriaSerieDos(6));



