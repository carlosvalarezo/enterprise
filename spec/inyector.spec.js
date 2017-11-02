describe("Inyector",function(){


    describe ("Calcular tiempo de vuelo", function(){
        it("El tiempo de uso del inyector sin daño, con un flujo extra de 99mg/s es 1 minuto", function(){
            expect(new Inyector().tiempoVuelo(199,0)).toEqual(1);
        });

        it("El tiempo de uso del inyector sin daño  con un flujo extra de 42mg/s es de 58 minutos",function(){
            expect(new Inyector().tiempoVuelo(142,0)).toEqual(58);
        });

        it("El tiempo de uso del inyector sin daño  con un flujo extra de 29mg/s es de 71 minutos",function(){
            expect(new Inyector().tiempoVuelo(129,0)).toEqual(71);
        });

        it("El inyector con un flujo de 179mg/s, con 20% de daño puede volar 1 minuto",function(){
            expect(new Inyector().tiempoVuelo(179,20)).toEqual(1);
        });

        it("El inyector con un flujo de 101mg/s, con 99% de daño NO puede volar",function(){
            expect(new Inyector().tiempoVuelo(101,99)).toEqual(0);
        });

        it("El inyector con un flujo de 100mg/s, con 99% de daño puede volar 1 minuto ",function(){
            expect(new Inyector().tiempoVuelo(100,99)).toEqual(1);
        });

        it("El inyector con un flujo de 30mg/s, con 99% de daño puede volar 71 minutos ",function(){
            expect(new Inyector().tiempoVuelo(30,99)).toEqual(71);
        });

        it("El inyector con un flujo de 99mg/s, con 2% de daño puede volar 1 minuto ",function(){
            expect(new Inyector().tiempoVuelo(197,2)).toEqual(1);
        });
        it("El inyector sin daño y sin flujo NO puede volar",function(){
            expect(new Inyector().tiempoVuelo(0,0)).toEqual(200);
        });
    });

    describe("Calcular flujo extra", function(){

        it("El flujo extra de un inyector dañado al 99% y volando con 30mg/s es 29mg/s", function(){
            expect(new Inyector().flujoExtra(30,99)).toEqual(29);
        });

        it("El flujo extra de un inyector dañado al 25% y volando con 145mg/s es 70mg/s", function(){
            expect(new Inyector().flujoExtra(145,25)).toEqual(70);
        });

        it("No hay flujo extra para un inyector dañado al 25% y volando con 45mg/s", function(){
            expect(new Inyector().flujoExtra(45,25)).toBeLessThanOrEqual(0);
        });

        it("No hay flujo extra para un inyector dañado al 90% y volando con 10mg/s", function(){
            expect(new Inyector().flujoExtra(10,90)).toBeLessThanOrEqual(0);
        });

    });

});