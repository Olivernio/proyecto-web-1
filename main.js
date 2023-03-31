const herramientasContenedor = document.getElementById("herramientas-contenedor");

// Obtener los datos de las herramientas
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        // Almacenar los datos en una variable global
        window.herramientas = data.herramientas;
        // Mostrar las herramientas en la página
        mostrarHerramientas();
    })
    .catch(error => console.error(error));

// Función para mostrar las herramientas en la página
function mostrarHerramientas() {
    const herramientasContenedor = document.getElementById("herramientas-contenedor");
    herramientasContenedor.innerHTML = "";

    // Obtener los valores seleccionados en los filtros
    const filtroFabricante = document.getElementById("filtro-fabricante").value;
    const filtroPrecio = parseFloat(document.getElementById("filtro-precio").value);
    
    console.log(filtroPrecio);

    // Recorrer cada herramienta
    window.herramientas.forEach(function (herramienta) {
        // Comprobar si la herramienta cumple con los criterios de los filtros
        if ((filtroFabricante === "" || herramienta.fabricante === filtroFabricante) && (filtroPrecio === 0 || herramienta.precio <= filtroPrecio)
        ) {
            // Crear un elemento div para la herramienta
            const herramientaDiv = document.createElement("div");
            herramientaDiv.classList.add("herramienta");
            // Crear una imagen para la herramienta
            var img_enlace = document.createElement("a");
            img_enlace.setAttribute("href", herramienta.link);
            const herramientaImg = document.createElement("img");
            herramientaImg.src = herramienta.img;
            herramientaImg.alt = herramienta.modelo;
            img_enlace.appendChild(herramientaImg);
            herramientaDiv.appendChild(img_enlace);



            // Crear un h3 para el nombre de la herramienta
            var nombre_enlace = document.createElement("a");
            nombre_enlace.setAttribute("href", herramienta.link);
            var nombre_titulo = document.createElement("h3");
            var herramientaNombre = document.createTextNode(herramienta.nombre);
            nombre_titulo.appendChild(herramientaNombre);
            nombre_enlace.appendChild(nombre_titulo);
            herramientaDiv.appendChild(nombre_enlace);
            
            // Crear un p para el modelo de la bicicleta
            const herramientaDescripcion = document.createElement("p");
            herramientaDescripcion.innerHTML = herramienta.descripcion;
            herramientaDiv.appendChild(herramientaDescripcion);

            // Crear un p para el modelo de la bicicleta
            const herramientaFabricante = document.createElement("p");
            herramientaFabricante.innerHTML = herramienta.fabricante;
            herramientaDiv.appendChild(herramientaFabricante);

            // Crear un p para el precio de la bicicleta
            const herramientaPrice = document.createElement("p");
            herramientaPrice.innerHTML = "$"+herramienta.precio;            
            herramientaDiv.appendChild(herramientaPrice);

            // Agregar el elemento div a la página
            herramientasContenedor.appendChild(herramientaDiv);
        }
    });
}

// Agregar eventos a los filtros para que al cambiar su valor, se vuelva a mostrar las bicicletas
document.getElementById("filtro-fabricante").addEventListener("change", mostrarHerramientas);
document.getElementById("filtro-precio").addEventListener("change", mostrarHerramientas);