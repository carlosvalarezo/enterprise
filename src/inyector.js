/**
 * Clase Inyector
 *
 * Incluye los métodos:
 *
 * */
var ENTERPRISE = ENTERPRISE || {}

function Inyector(){


    /*this.flujoExtra = function(flujo,dano){
        return flujo - this.capacidadMaxima(dano);
    }*/

    this.capacidadMaxima = function(dano){
        return 100 - dano;
    };

    this.validarInyector = function(dano, flujoParcial){
        return dano === 100 ? 0 : this.capacidadMaxima(dano) + flujoParcial;
    };

    this.flujoExtra = function(flujo,dano){
        return flujo - this.capacidadMaxima(dano);
    };

    this.tiempoVuelo = function(flujo,dano){
        return 100 - this.flujoExtra(flujo,dano);
    };

    this.flujoInyector = function(flujoParcial, flujoInyectores, flujoTotal, dano, inyectoresHabiles){
        return dano !== 100 ? this.capacidadMaxima(dano) + flujoParcial + ((flujoTotal - flujoInyectores)/inyectoresHabiles) : 0;
    };
}