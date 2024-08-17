function encriptar() {
    let texto = document.getElementById('texto__a__modificar').value; // Texto de entrada del usuario
    let contenedorAModificar = document.querySelector('.contenedor__modificable'); // Contenedor con las imagenes y texto
    let hijoDelContenedor = contenedorAModificar.children; // Contenido del contenedor div
    let resultado = contenedorAModificar.querySelector('p'); // Parrafo donde se muestra el texto encriptado o desencriptado
    let estiloPlaceholder = document.createElement('style'); // Crear style para el placeholder del textarea

    
    if (texto.trim() === ""){
        // Inserción del estilo
        document.head.appendChild(estiloPlaceholder);
        
        // Recordar al usuario que agregue texto
        document.getElementById('texto__a__modificar').placeholder = "Por favor, ingrese un texto, no se admiten entradas sin texto"

        // Verificar si hay hidden o no
        Array.from(hijoDelContenedor).forEach(child => {
            child.style.display = '';
        })

        // Texto por defecto
        resultado.textContent = 'Ingresa el texto que desees encriptar o desencriptar.';

        // Boton de copiar
        let botonCopiar = contenedorAModificar.querySelector('.boton__copiar');

        // Crear boton de copiar si no existe aún
        if (botonCopiar){
            botonCopiar.classList.add('ocultar_boton_copiar');
        };

        // Cambio clases texto de resultado
        resultado.classList.remove('contenedor__presentacion__resultado');
        resultado.classList.add('contenedor__presentacion__sugerencia');
    }
    else if (!/^[a-z\s]+$/.test(texto)) {
        // Verificar si hay hidden o no
        Array.from(hijoDelContenedor).forEach(child => {
            child.style.display = '';
        })

        // Texto por defecto
        resultado.textContent = 'Ingresar solo carácteres en mínuscula y sin caracteres especiales.';

        // Boton de copiar
        let botonCopiar = contenedorAModificar.querySelector('.boton__copiar');

        // Crear boton de copiar si no existe aún
        if (botonCopiar){
            botonCopiar.classList.add('ocultar_boton_copiar');
        };

        // Cambio clases texto de resultado
        resultado.classList.remove('contenedor__presentacion__resultado');
        resultado.classList.add('contenedor__presentacion__sugerencia');
    }
    else {
                // Ocultar imagen y texto h2 dentro del div
        Array.from(hijoDelContenedor).forEach(child => {
            if(child.tagName !== 'P' && child.tagName !== 'BUTTON') {
                child.style.display = 'none';
            }
        })

        // Texto encriptado
        resultado.textContent = texto.replaceAll('e','enter').replaceAll('i','imes').replaceAll('o','ober').replaceAll('u','ufat').replaceAll('a','ai');
        resultado.classList.remove('contenedor__presentacion__sugerencia');
        resultado.classList.add('contenedor__presentacion__resultado');

        // Modificación del padding
        contenedorAModificar.style.padding = '10px';

        // Boton de copiar
        let botonCopiar = contenedorAModificar.querySelector('.boton__copiar');
        
        if (!botonCopiar){
            botonCopiar = document.createElement('button');
            botonCopiar.textContent = 'Copiar';
            botonCopiar.classList.add('boton', 'boton__copiar');

            // Funcion de copiar en el boton
            botonCopiar.onclick = function() {
                let copiarTexto = document.querySelector('.contenedor__presentacion__resultado').textContent;
                navigator.clipboard.writeText(copiarTexto);
            }

            // Agregar el boton en la pagina
            contenedorAModificar.appendChild(botonCopiar);
        }
        else {
            botonCopiar.classList.remove('ocultar_boton_copiar');
        };
    };
}
function desencriptar() {
    let texto = document.getElementById('texto__a__modificar').value; // Texto de entrada del usuario
    let contenedorAModificar = document.querySelector('.contenedor__modificable'); // Contenedor con las imagenes y texto
    let hijoDelContenedor = contenedorAModificar.children; // Contenido del contenedor div
    let resultado = contenedorAModificar.querySelector('p'); // Parrafo donde se muestra el texto encriptado o desencriptado
    let estiloPlaceholder = document.createElement('style'); // Crear style para el placeholder del textarea
    
    if (texto.trim() === ""){
        // Inserción del estilo
        document.head.appendChild(estiloPlaceholder);

        // Recordar al usuario que agregue texto
        document.getElementById('texto__a__modificar').placeholder = "Por favor, ingrese un texto, no se admiten entradas sin texto"

        // Verificar si hay hidden o no
        Array.from(hijoDelContenedor).forEach(child => {
            child.style.display = '';
        })

        // Texto por defecto
        resultado.textContent = 'Ingresa el texto que desees encriptar o desencriptar.';

        // Boton de copiar
        let botonCopiar = contenedorAModificar.querySelector('.boton__copiar');

        // Crear boton de copiar si no existe aún
        if (botonCopiar){
            botonCopiar.classList.add('ocultar_boton_copiar');
        };

        // Cambio clases texto de resultado
        resultado.classList.remove('contenedor__presentacion__resultado');
        resultado.classList.add('contenedor__presentacion__sugerencia');
    }
    else if (!/^[a-z\s]+$/.test(texto)) {

        // Verificar si hay hidden o no
        Array.from(hijoDelContenedor).forEach(child => {
            child.style.display = '';
        })
        
        // Texto por defecto
        resultado.textContent = 'Ingresar solo carácteres en mínuscula y sin caracteres especiales.';

        // Boton de copiar
        let botonCopiar = contenedorAModificar.querySelector('.boton__copiar');

        // Crear boton de copiar si no existe aún
        if (botonCopiar){
            botonCopiar.classList.add('ocultar_boton_copiar');
        };

        // Cambio clases texto de resultado
        resultado.classList.remove('contenedor__presentacion__resultado');
        resultado.classList.add('contenedor__presentacion__sugerencia');
    }
    else {
        // Ocultar imagen y texto h2 dentro del div
        Array.from(hijoDelContenedor).forEach(child => {
            if(child.tagName !== 'P'  && child.tagName !== 'BUTTON') {
                child.style.display = 'none';
            }
        })

        // Texto desencriptado
        resultado.textContent = texto.replaceAll('imes','i').replaceAll('enter','e').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
        resultado.classList.remove('contenedor__presentacion__sugerencia');
        resultado.classList.add('contenedor__presentacion__resultado');

        // Modificación del padding
        contenedorAModificar.style.padding = '10px';

        // Boton de copiar
        let botonCopiar = contenedorAModificar.querySelector('.boton__copiar');

        // Crear boton de copiar si no existe aún
        if (!botonCopiar){
            botonCopiar = document.createElement('button');
            botonCopiar.textContent = 'Copiar';
            botonCopiar.classList.add('boton', 'boton__copiar');

            // Funcion de copiar en el boton
            botonCopiar.onclick = function() {
                let copiarTexto = document.querySelector('.contenedor__presentacion__resultado');
                navigator.clipboard.writeText(copiarTexto);
            }

            // Agregar el boton en la pagina
            contenedorAModificar.appendChild(botonCopiar);
        }
        else {
            botonCopiar.classList.remove('ocultar_boton_copiar');
        };
    };
}