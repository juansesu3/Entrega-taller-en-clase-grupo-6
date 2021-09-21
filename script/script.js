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
//form.addEventListener('salida',
 

function AlmacenarLocalStorage(){
    //Captura de datos y almacenamiento en vairables
    let cantidadcamisas1= document.getElementById('cantidadCamisas').value;
    let presiocamisas1 = document.getElementById('costoCamisas').value;
    //let gender = document.getElementById('gender').value;
    //let msm = document.getElementById('msm').value;

    //|| gender==="" || msm ===""
    if(cantidadcamisas1==="" || presiocamisas1=== ""){
         alert('Ingresar todos los campos');
    }else{

        localStorage.setItem('cantidadCamisas2',cantidadcamisas1);
        localStorage.setItem('presioCamisa2',presiocamisas1);
        //localStorage.setItem('Género',gender);
        //localStorage.setItem('Mensaje',msm);
        
        ObtenerLocalStorage();
    }
 }
 //)

function ObtenerLocalStorage(){

    let cantidadCamisas3 = localStorage.getItem('cantidadCamisas2');
    let presioCamisas3 = localStorage.getItem('presioCamisa2');
    //let genero = localStorage.getItem('Género');
    //let mensaje = localStorage.getItem('Mensaje');
    alert(`La información almacenada es 
    ${cantidadCamisas3}
    ${presioCamisas3}
    `);
}