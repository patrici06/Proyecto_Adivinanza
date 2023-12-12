
let random =  Math.floor(Math.random()*100)+1
let mensaje = document.getElementById('espacio');
function evaluar(){
    let num = document.getElementById("entrada").value;
    num = parseInt(num)
    if (num <1 || num >100 || isNaN(num)){
        mensaje.textContent = 'Porfavor Ingrese Un Numero Valido entre 1 y 100'
        return
    }else{
        if(num === random){
            mensaje.textContent = 'FELICIDADES GANASTE'
            return
        }else{
            mensaje.textContent = 'VUELVA  A INTENTAR'
            return
        }
    }
}