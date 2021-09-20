function calcular(){
    
    let totalcancelar = document.querySelector('#salida');
     
    //var monedaEntrada1=document.getElementById("monedaEntrada").value;
    //var monedaEntrada2=document.getElementById("monedaaConvertir").value;
   //cantidad=parseFloat(document.getElementById("CantDinero").value);
   let cantidadcamisas=document.getElementById("cantidadCamisas").value;
   let precioCamisas=document.getElementById("costoCamisas").value;

   
   let total_compra = (cantidadcamisas * precioCamisas);
   let descuento = 0;

 //total_pagar = total_compra - descuento

 if( cantidadcamisas>=3){
    descuento = (total_compra * 0.2); 
    total_pagar = total_compra - descuento;
   // document.write("El total a pagar es de: $"+total_pagar+". cop:")

 }else{
    if(cantidadcamisas<3){
        descuento = (total_compra * 0.1); 
        total_pagar = total_compra - descuento;

        //document.write("El total a pagar es de: $"+total_compra+". cop:"+ descuento)
    }
    }
    totalcancelar.value=total_pagar;
 }

// tenemos  un error que dice:  form no esta definido por ende no capturamos los datos en el localstorage
form.addEventListener('boton1', function AlmacenarLocalStorage(){
    
    //Captura de datos y almacenamiento en vairables
    let cantidadcamisas1 = document.getElementById('cantidadCamisas').value;
    let costocamisas1 = document.getElementById('costoCamisas').value;
    let salida = document.getElementById('salida').value;
    //let msm = document.getElementById('msm').value;

    if(cantidadcamisas1==="" || costocamisas1 === "" || salida===""){
         alert('Ingresar todos los campos');
    }else{

        localStorage.setItem('cantidadCamisas2',cantidadcamisas1);
        localStorage.setItem('costoCamisas2',costocamisas1);
        localStorage.setItem('salida2', salida);
        //localStorage.setItem('Mensaje',msm);
        
        ObtenerLocalStorage();
    }
})

function ObtenerLocalStorage(){

    let cantidadCamisas3 = localStorage.getItem('cantidadCamisas2');
    let costoCamisas3 = localStorage.getItem('costoCamisas2');
    let salida3 = localStorage.getItem('salida2');
    //let mensaje = localStorage.getItem('Mensaje');
    alert(`La información almacenada es 
    ${cantidadCamisas3 }
    ${costoCamisas3}
    ${salida3}`);
}