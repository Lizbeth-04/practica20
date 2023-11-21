'use strict'
function validartaxi(vehiculo){
    let currenteyear=2023;
    let year=currenteyear-vehiculo.anio_de_fabricacion
    if(year <=10== true){
        return true
    }else{return false}
    }

let vehiculo={
    modelo:"camioneta 4x4",
     marca:"toyota ",
    color:"negra",
    placas:"ubx-371",
    anio_de_fabricacion: 2023

};


let result=validartaxi(vehiculo);
alert ("su vehiculo es :"+result+"para taxi")