
(function(){

    'use strict';
    document.addEventListener('DOMContentLoaded', function(){

        console.log('Gorriado')


        //datos_pantalla
        var numeros_tarjeta = document.getElementById('numeros-tarjeta');
        var nombre_usuario = document.getElementById('nombre-usuario');
        var mes_tarjeta = document.getElementById('mes-tarjeta');
        var año_tarjeta = document.getElementById('año-tarjeta');

        var tarjetaColor = document.getElementById('tarjeta');

        var imagenMarca = document.getElementById('imagen');

        var tarjeta = document.getElementById('tarjeta');
        var tarjetaAtras = document.getElementById('tarjeta-back');


        
        //inputs

        var nombre = document.getElementById('nombre');
        var mes = document.getElementById('mes');
        var año = document.getElementById('año');

        var color = document.getElementById('color');

        
        var boton_numeros = document.getElementById('boton-numeros');

        boton_numeros.addEventListener('click', numerosRandom);
        nombre.addEventListener('change', nombreTiempoReal);

        mes.addEventListener('click', mesEnTarjeta);
        año.addEventListener('click', añoEnTarjeta);

        color.addEventListener('change', colorEnTarjeta);

        var marcaTarjeta = document.getElementById('marca-tarjeta');
        marcaTarjeta.addEventListener('change', cambiarMarca);

        var voltear = document.getElementById('boton-turnback');
        voltear.addEventListener('click', voltearTarjeta);



        //Colocarle el nombre a la tarjeta
        function ponerNombreTarjeta(event){

            var poner_nombre = nombre.value;
            console.log(poner_nombre);
            nombre_usuario.style.textTransform = 'uppercase';
            nombre_usuario.innerText = poner_nombre;
        }

        //Colocarle el nombre en tiempo real
        
        function nombreTiempoReal(event){
            //var poner_nombre = nombre.value;
            nombre_usuario.style.textTransform = 'uppercase';
            nombre_usuario.textContent = nombre.value;
        }
        


        //generamos los numeros random al darle al boton
        function numerosRandom(event){
            var numeros = [];
            for(var i = 0; i < 16; i++){
                var numRandom = Math.floor(Math.random() * (9 - 0)) + 0;
                numeros.push(numRandom);
            }
            var numerosRandom = '';
            for(var i = 0; i < 16; i++){
                if(i != 4 && i != 8 && i != 12){
                    numerosRandom += numeros[i];
                }else{
                    numerosRandom += ' ';
                    numerosRandom += numeros[i];
                }
                
            }            
            numeros_tarjeta.innerText = numerosRandom;
        }

        function mesEnTarjeta(event){
            //var poner_mes = mes.value;
            mes_tarjeta.innerText = mes.value;
        }

        function añoEnTarjeta(event){
            //var poner_año = año.value;
            año_tarjeta.innerText = año.value;
        }

        function colorEnTarjeta(){
            tarjetaColor.style.backgroundImage = 'none';
            tarjetaColor.style.backgroundColor = color.value;
            tarjetaAtras.style.backgroundImage = 'none';
            tarjetaAtras.style.backgroundColor = color.value;
        }   

        function cambiarMarca(){
            //console.log(marcaTarjeta.value);
            //imagenMarca.src = 'img/visa.png';
            if(marcaTarjeta.value == 'Visa'){
                imagenMarca.src = 'img/visa.png';
            }else if(marcaTarjeta.value == 'American Express'){
                imagenMarca.src = 'img/american.jpg';
            }else{
                imagenMarca.src = 'img/mastercard.jpg';
            }
            
        }

        var backed = false;
        function voltearTarjeta(){
            
            if(backed == false){
                tarjeta.style.display = 'none';
                tarjetaAtras.style.display = 'block';
                backed = true;
            }else{
                tarjeta.style.display = 'block';
                tarjetaAtras.style.display = 'none';
                backed = false;
            }
            

        }



    });

})();