for (var prop in datos) {

    let reactor = new Reactor();
    let inyectorA = new Inyector();
    let inyectorB = new Inyector();
    let inyectorC = new Inyector();

    console.log("VELOCIDAD " + datos[prop].velocidadLuz);
    let flujoParcial = reactor.calcularFlujoParcial(datos[prop].velocidadLuz,reactor.inyectoresHabilitados(datos[prop]));
    let flujoTotal = reactor.calcularFlujoTotal(datos[prop].velocidadLuz);
    let flujoEntreInyectores = reactor.calcularFlujoEntreInyectores(inyectorA.validarInyector(datos[prop].danoInyectorA,flujoParcial),
        inyectorB.validarInyector(datos[prop].danoInyectorB, flujoParcial),
        inyectorC.validarInyector(datos[prop].danoInyectorC,flujoParcial));


    console.log(flujoParcial);
    console.log(flujoTotal);
    console.log(flujoEntreInyectores);


    let a = inyectorA.flujoInyector(flujoParcial,flujoEntreInyectores, flujoTotal, datos[prop].danoInyectorA,reactor.inyectoresHabilitados(datos[prop]));
    let b = inyectorB.flujoInyector(flujoParcial,flujoEntreInyectores, flujoTotal, datos[prop].danoInyectorB, reactor.inyectoresHabilitados(datos[prop]));
    let c = inyectorC.flujoInyector(flujoParcial,flujoEntreInyectores, flujoTotal, datos[prop].danoInyectorC, reactor.inyectoresHabilitados(datos[prop]));


    console.log("A: "+a+"mg/s");
    console.log("B: "+b+"mg/s");
    console.log("C: "+c+"mg/s");

    console.log("----");
}