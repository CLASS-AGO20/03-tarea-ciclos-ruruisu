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
    esPrimo(num){
        let isPrime;
        let i = 2;
        do {
            console.log(i);
        if (num % i === 0) {
            return false;
        }else if(num % num == 0){
            return true;
        }
        i++;
        } while (i < num);

    }

    //
    obtenerMultiplos(rangeStart, rangeEnd){
        let string = "";
        let i = rangeStart
        do {
            if(i % 3 === 0){
                string += i;
            }
            i++
        } while (i > rangeStart && i < rangeEnd);
        return string   ;
    }

    //
    obtenerImpares(num1, num2){
        let string = "";
        if(num1 > num2){
            for (let i = num1; i > num2; i--) {
                if(i % 2 != 0 && i != num1){
                    string = string.concat(i,",")
                }
            }
            string = string.concat(num2);   
        }else if(num2 > num1){
            for (let i = num2; i > num1; i--) {
                if(i % 2 != 0 && i != num2){
                    string = string.concat(i,",")
                }
            }
            string = string.concat(num1);
        }

        return string;

    }

}

let app = new App();

//Console testing
console.log(app.sumatoriaSerieUno(7));
console.log(app.sumatoriaSerieDos(6));
console.log(app.esPrimo(9));
console.log(app.obtenerMultiplos(10,25));
console.log(app.obtenerImpares(10));



