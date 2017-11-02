describe("Reactor",function(){

    describe("Calcular flujo total", function(){

        it("El Enterprise vuela al 100% de la velocidad de la luz sin daños en los inyectores. NEcesita, 300mg/s",function(){
            expect(new Reactor().calcularFlujoTotal(100)).toEqual(300);
        });

        it("El Enterprise vuela al 110% de la velocidad de la luz sin daños en los inyectores. Necesita 330mg/",function(){
            expect(new Reactor().calcularFlujoTotal(110)).toEqual(330);
        });

        it("El Enterprise vuela a 50% de la velocidad de la luz sin daño en los inyectores. Necesita 150mg/s",function(){
            expect(new Reactor().calcularFlujoTotal(50)).toEqual(150);

        });

        it("El Enterprise vuela a 140% de la velocidad de la luz sin daño en los inyectores. Necesita 420mg/s",function(){
            expect(new Reactor().calcularFlujoTotal(140)).toEqual(420);

        });
    });

    describe("Calcular el flujo por inyector", function(){

        it("Para que el Enterprise vuele a 150% la velocidad de la luz, cada inyector necesita un flujo extra parcial de 50mg/s", function(){
            expect(new Reactor().calcularFlujoParcial(150,3)).toEqual(50);
        });

    });

    describe("Calcular flujo entre inyectores", function(){
        it("La suma del flujo de los tres inyectores cuando no tienen daño es de 300mg/s", function(){
            expect(new Reactor().calcularFlujoEntreInyectores(new Inyector().capacidadMaxima(0), new Inyector().capacidadMaxima(0), new Inyector().capacidadMaxima(0))).toEqual(300);
        });

        it("La suma del flujo de los tres inyectores con daño 20%, 10%, 0% respectivamente es 270mg/s si se desea llegar al 140% de la velocidad de la luz", function(){
            expect(new Reactor().calcularFlujoEntreInyectores(new Inyector().capacidadMaxima(20) + new Reactor().calcularFlujoParcial(100,3), new Inyector().capacidadMaxima(10) + new Reactor().calcularFlujoParcial(100,3), new Inyector().capacidadMaxima(0) + new Reactor().calcularFlujoParcial(100,3))).toEqual(270);
        });

        it("La suma del flujo de los tres inyectores con daño 0%, 0%, 30% respectivamente es 390mg/s si se desea llegar al 140% de la velocidad de la luz", function(){
            expect(new Reactor().calcularFlujoEntreInyectores(new Inyector().capacidadMaxima(0) + new Reactor().calcularFlujoParcial(140,3), new Inyector().capacidadMaxima(0) + new Reactor().calcularFlujoParcial(140,3), new Inyector().capacidadMaxima(30) + new Reactor().calcularFlujoParcial(140,3))).toEqual(390);
        });

        it("La suma del flujo de los tres inyectores con daño 0%, 0%, 0% respectivamente es 450mg/s si se desea llegar al 150% de la velocidad de la luz", function(){
            expect(new Reactor().calcularFlujoEntreInyectores(new Inyector().capacidadMaxima(0) + new Reactor().calcularFlujoParcial(150,3), new Inyector().capacidadMaxima(0) + new Reactor().calcularFlujoParcial(150,3), new Inyector().capacidadMaxima(0) + new Reactor().calcularFlujoParcial(150,3))).toEqual(450);
        });

        it("La suma del flujo de los tres inyectores con daño 0%, 0%, 100% respectivamente es 140mg/s si se desea llegar al 80% de la velocidad de la luz", function(){
            expect(new Reactor().calcularFlujoEntreInyectores(new Inyector().validarInyector(0,new Reactor().calcularFlujoParcial(80,2)), new Inyector().validarInyector(0, new Reactor().calcularFlujoParcial(80,2)), new Inyector().validarInyector(100, new Reactor().calcularFlujoParcial(80,2)))).toEqual(140);
        });

    });



});