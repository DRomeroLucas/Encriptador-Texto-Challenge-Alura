document.addEventListener('DOMContentLoaded', function(){
    // Variables
    let textoAModificar = document.getElementById('texto__a__modificar');
    let resultado = document.querySelector('contenedor__presentacion');
    
})

function encriptar() {
    let texto = document.getElementById('texto__a__modificar').value.trim();
    let estiloPlaceholder = document.createElement('style');
    
    if (texto === ""){
        // Estilos placer holder (CAMBIAR MÁS ADELANTE)
        estiloPlaceholder.innerHTML = `
        textarea::placeholder {
            color: red;
            font-size: 2rem;
        }
        `

        // Inserción del estilo
        document.head.appendChild(estiloPlaceholder);
        
        // Recordar al usuario que agregue texto
        document.getElementById('texto__a__modificar').placeholder = "Por favor, ingrese un texto, no se admiten entradas sin texto"
    }
    else {
        
    }
}
function desencriptar() {
    let texto = document.getElementById('texto__a__modificar').value.trim();
    let estiloPlaceholder = document.createElement('style');
    
    if (texto === ""){
            // Estilos placer holder  (CAMBIAR MÁS ADELANTE)
            estiloPlaceholder.innerHTML = `
            textarea::placeholder {
                color: red;
                font-size: 2rem;
                }
            `
            // Inserción del estilo
            document.head.appendChild(estiloPlaceholder);

            // Recordar al usuario que agregue texto
            document.getElementById('texto__a__modificar').placeholder = "Por favor, ingrese un texto, no se admiten entradas sin texto"
        }
        else {
        
    }
}