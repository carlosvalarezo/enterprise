/**
 * Clase Reactor
 *
 * Incluye los métodos: calcularFlujoTotal
 *
 * */
var ENTERPRISE = ENTERPRISE || {}


function Reactor(){    


    this.calcularFlujoTotal = function(velocidadLuz){
        return (velocidadLuz * 300) / 100;
    };

    /*this.calcularFlujoParcial = function(velocidadLuz){
        return (this.calcularFlujoTotal(velocidadLuz) - 300) / 3;
    };*/

    this.calcularFlujoParcial = function(velocidadLuz, inyectoresHabiles){
        return (this.calcularFlujoTotal(velocidadLuz) - 300) / inyectoresHabiles ;
    };

    this.calcularFlujoEntreInyectores = function(flujoInyectorA, flujoInyectorB, flujoInyectorC){
        return flujoInyectorA + flujoInyectorB + flujoInyectorC;
    };

    this.inyectoresHabilitados = function(inyectores){
        let cnt = 0;
        if(inyectores.danoInyectorA !== 100)cnt ++;
        if(inyectores.danoInyectorB !== 100)cnt ++;
        if(inyectores.danoInyectorC !== 100)cnt ++;
        return cnt;
    };

}


