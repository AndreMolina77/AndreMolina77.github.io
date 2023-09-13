function calcularBilletes()
{
    let CantidadARetirar = parseInt(document.getElementById("CantidadARetirar").value);
    let Nombre = document.getElementById("Nombre").value;

    if(isNaN(CantidadARetirar) || Nombre == "")
    {
        alert("Por favor, ingresa los datos necesarios para poder calcular la cantidad de billetes")
        return
    }


    if(CantidadARetirar <= 0)
    {
        alert("Ingrese un dato que no sea negativo, no es posible dar dinero negativo")
    }

    let cociente100 = 0
    let residuo100 = 0
    
    let cociente50 = 0
    let residuo50 = 0

    let cociente20 = 0
    let residuo20 = 0

    let cociente10 = 0
    let residuo10 = 0
    
    let cociente5 = 0
    let residuo5 = 0

    let cociente1 = 0
    let residuo1 = 0

    if(CantidadARetirar >= 100)
    {
    cociente100 = parseInt(CantidadARetirar / 100)
    residuo100 = CantidadARetirar % 100 
    cociente50 = parseInt(residuo100 / 50)
    residuo50 = CantidadARetirar % 50 
    cociente20 = parseInt(residuo50 / 20)
    residuo20 = CantidadARetirar % 20 
    cociente10 = parseInt(residuo20 /10)
    residuo10 = CantidadARetirar % 10 
    cociente5 = parseInt(residuo10 / 5)
    residuo5 = CantidadARetirar % 5 
    cociente1 = parseInt(residuo5 / 1)
    residuo1 = CantidadARetirar % 1 
    }

    else if(CantidadARetirar >= 50)
    {
    cociente100 = 0
    residuo100 = 0
    cociente50 = parseInt(CantidadARetirar / 50)
    residuo50 = CantidadARetirar % 50
    cociente20 = parseInt(residuo50/ 20)
    residuo20 = CantidadARetirar % 20 
    cociente10 = parseInt(residuo20 /10)
    residuo10 = CantidadARetirar % 10 
    cociente5 = parseInt(residuo10 / 5)
    residuo5 = CantidadARetirar % 5 
    cociente1 = parseInt(residuo5 / 1)
    residuo1 = CantidadARetirar % 1 
    }
   

    else if(CantidadARetirar >= 20)
    {
    cociente100 = 0
    residuo100 = 0
    cociente50 = 0
    residuo50 = 0
    cociente20 = parseInt(CantidadARetirar / 20)
    residuo20 = CantidadARetirar % 20 
    cociente10 = parseInt(residuo20 /10)
    residuo10 = CantidadARetirar % 10 
    cociente5 = parseInt(residuo10 / 5)
    residuo5 = CantidadARetirar % 5 
    cociente1 = parseInt(residuo5 / 1)
    residuo1 = CantidadARetirar % 1 
    }

    else if(CantidadARetirar >= 10)
    {
    cociente100 = 0
    residuo100 = 0
    cociente50 = 0
    residuo50 = 0
    cociente20 = 0
    residuo20 = 0
    cociente10 = parseInt(CantidadARetirar /10)
    residuo10 = CantidadARetirar % 10 
    cociente5 = parseInt(residuo10 / 5)
    residuo5 = CantidadARetirar % 5 
    cociente1 = parseInt(residuo5 / 1)
    residuo1 = CantidadARetirar % 1 
    }

    
    else if(CantidadARetirar >= 5)
    {
        cociente100 = 0
    residuo100 = 0
    cociente50 = 0
    residuo50 = 0
    cociente20 = 0
    residuo20 = 0
    cociente10 = 0
    residuo10 = 0
        cociente5 = parseInt(CantidadARetirar / 5)
        residuo5 = CantidadARetirar % 5 
        cociente1 = parseInt(residuo5 / 1)
        residuo1 = CantidadARetirar % 1 
    }

    else if(CantidadARetirar >= 1)
    {
        cociente100 = 0
        residuo100 = 0
        cociente50 = 0
        residuo50 = 0
        cociente20 = 0
        residuo20 = 0
        cociente10 = 0
        residuo10 = 0
        cociente5 = 0
        residuo5 = 0
        cociente1 = parseInt(CantidadARetirar / 1)
        residuo1 = CantidadARetirar % 1 
        
    }

    let bil100 = document.getElementById("b100");
    b100.innerHTML = cociente100 
    let bil50 = document.getElementById("b50");
    b50.innerHTML = cociente50 
    let bil20 = document.getElementById("b20");
    b20.innerHTML = cociente20 
    let bil10 = document.getElementById("b10")
    b10.innerHTML = cociente10 
    let bil5 = document.getElementById("b5");
    b5.innerHTML = cociente5 
    let bil1 = document.getElementById("b1");
    b1.innerHTML = cociente1


    let mensajeAUsuario = document.getElementById("msjUsuario");
    mensajeAUsuario.innerHTML = "La cantidad de dinero"+  ", " + " " + Nombre  + " " + ","+" a retirar es: " + CantidadARetirar + "$"
    
}

document.getElementById("calcular").addEventListener("click", calcularBilletes);