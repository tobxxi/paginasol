let contenedor= document.querySelector (".contenedor")

let linkestado= document.querySelector ("#linkestado")
let linkcuerpo= document.querySelector ("#linkcuerpo")
let linkcasa= document.querySelector ("#linkcasa")
let linkflojus= document.querySelector ("#linkflojus")
let linklogica= document.querySelector ("#linklogica")

linkestado.addEventListener ("mouseenter", 
    function ( ){
     
        contenedor.style.backgroundImage= "url('./img/estadodeconexion6.jpg')"
    }
)

linkestado.addEventListener ("mouseleave", 
    function ( ){
      
        contenedor.style.backgroundImage= "url('./img/performancefondo.jpg')"
    }
)


linkcuerpo.addEventListener ("mouseenter", 
    function ( ){
     
        contenedor.style.backgroundImage= "url('./img/cuerpo1.jpg')"
    }
)

linkcuerpo.addEventListener ("mouseleave", 
    function ( ){
      
        contenedor.style.backgroundImage= "url('./img/performancefondo.jpg')"
    }
)


linkcasa.addEventListener ("mouseenter", 
    function ( ){
     
        contenedor.style.backgroundImage= "url('./img/casatransparente.jpg')"
    }
)

linkcasa.addEventListener ("mouseleave", 
    function ( ){
      
        contenedor.style.backgroundImage= "url('./img/performancefondo.jpg')"
    }
)


linkflojus.addEventListener ("mouseenter", 
    function ( ){
     
        contenedor.style.backgroundImage= "url('./img/flojus2.jpg')"
    }
)

linkflojus.addEventListener ("mouseleave", 
    function ( ){
      
        contenedor.style.backgroundImage= "url('./img/performancefondo.jpg')"
    }
)

linklogica.addEventListener ("mouseenter", 
    function ( ){
     
        contenedor.style.backgroundImage= "url('./img/logica2.jpg')"
    }
)

linklogica.addEventListener ("mouseleave", 
    function ( ){
      
        contenedor.style.backgroundImage= "url('./img/performancefondo.jpg')"
    }
)




