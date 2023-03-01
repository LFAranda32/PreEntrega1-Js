
function viajes(){


    let lugares = parseInt( 
        prompt(
                "A donde quiere Viajar? \n 1.ESPAÑA \n 2.PARIS \n 3.EGIPTO"
            )
    );

    let fechas=0 

    switch(lugares){
    case 1: alert("Usted selecciono ESPAÑA");
            fechas=0;
        break
    case 2: alert("Usted selecciono PARIS");
           fechas=0;
        break
    case 3: alert("Usted selecciono EGIPTO");
            fechas=0
        break
    default: alert("Seleccione un Lugar");
        break


    }
        
    let nombre= prompt("ingrese Su Nombre y Apellido")
    let mes=prompt( "ingrese su mes de Viaje")
    let dia=prompt( "Ingrese su Dia ")

    alert ("Hola "+ nombre + " Usted viajara el mes "+ mes +" del Dia " + dia )

    let equipaje= prompt(nombre +", Ingrese la cantidad de equipaje que decea llevar")
    
    let indicador =0

    if (equipaje >=1 && equipaje <=3){
        alert("su equipaje no tendra costo adicional ");
        indicador=1; 
    }else if (equipaje >3) {
        alert("su equipaje tendra un costo adicional de u$d 5");
        indicador=1;
    }
    if (equipaje){
        alert(" Datos Agendados ! Buen Viaje " + nombre + "!")
    }

}

viajes()





