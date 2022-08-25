const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de campo",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "casa rodante",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
        name: "casa rodante",
        description: "Ten cerca de ti todo lo que necesitas",
        src:
          "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        rooms: 1,
        m: 80
      },
    {
      name: "casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
    
  ];
  
  const div_propiedades = document.querySelector(".propiedades");
  const boton= document.querySelector(".btn")
  const total= document.querySelector(".py-3");

  console.log(div_propiedades)
  let html = ``;
 
 
  console.log()
  function mostrar_todas_las_propiedades() {
  total.style.display="none"
  propiedadesJSON.forEach(valor => {
    html +=`
    <div class="propiedad  col-sm-12 col-md-4 col-lg-4 py-3">
    <div class="img" style="background-image: url('${valor.src}')"></div>
    <section>
        <h5 class="">${valor.name}</h5>
        <div >
            <p>Cuartos: ${valor.rooms}</p>
        
            <p>Metros: ${valor.m}</p>
        </div>
        <p class="my-3">${valor.description}</p>
        <button class="btn btn-info ">Ver más</button>
    </section>
</div>

    `;
  
  });
  }
  boton.addEventListener('click', function(){
    console.log("Evento submit capturado");

const desde = parseInt(document.querySelector(".desde").value);
const hasta =parseInt(document.querySelector(".hasta").value );
const Cuartos= parseInt(document.querySelector(".cuartos").value)
const tipo_de_vivienda=  document.querySelector(".tipo").value
const resultado=document.querySelector(".resultado")
console.log(tipo_de_vivienda)

console.log(Cuartos)
console.log(hasta)
console.log(desde)

    // funcion plantilla//
    var busqueda="";
    function plantilla(venta) {
      busqueda +=`
      <div class="propiedad  col-sm-12 col-md-4 col-lg-4 py-3 ">
      <div class="img" style="background-image: url('${venta.src}')"></div>
      <section>
          <h5 class="">${venta.name}</h5>
          <div >
              <p>Cuartos: ${venta.rooms}</p>
          
              <p>Metros: ${venta.m}</p>
          </div>
          <p class="my-3">${venta.description}</p>
          <button class="btn btn-info ">Ver más</button>
      </section>
  </div>
      `; 
    }
// fin plantilla//

// funcion validar campos//
var  validad_campos= function name() {
    mostrar_todas_las_propiedades();
    div_propiedades.innerHTML=html;
    resultado.style.display="block"
    i=0 // contador
    for (let venta of propiedadesJSON) {
  
    // validaciones para cuartos==1//
   if (venta.m>=6 & venta.m<=80 &(desde>=1 && hasta<=500 && Cuartos==1 && hasta>=80 &&desde<=6 &tipo_de_vivienda===venta.name)) {
       console.log(venta)
    resultado.style.display="none"
      total.style.display="block"
        i++
      total.innerHTML=i
     plantilla(venta)
     console.log("condicion1 ")
  
      }
   else  if (venta.m<=6 & (desde>=1 & hasta<=500 & Cuartos==1 & hasta<80 &desde<=6 &tipo_de_vivienda===venta.name)) {
    resultado.style.display="none"
      total.style.display="block"
      i++
      total.innerHTML=i
        plantilla(venta)
        console.log("condicion2 numero1")
         }
    else  if ( venta.m<130 & venta.m>=80 &(desde>=1 & hasta<=500 & Cuartos==1 & hasta>=80 &desde>6 &tipo_de_vivienda===venta.name)){
      resultado.style.display="none"
      total.style.display="block"
      i++
      total.innerHTML=i
        plantilla(venta)
        console.log("condicion3 numero1")
         }
          // validaciones para cuartos==2//
  
       
      else     if ( venta.m>=130 && venta.m<=170 &(desde<=130 & hasta<=500 & Cuartos==2 & hasta>=170&desde>=1 &tipo_de_vivienda===venta.name)){
        resultado.style.display="none"
          total.style.display="block"
          i++
          total.innerHTML=i
            plantilla(venta)
             console.log("condicion1 numero2")
             }
          else   if ( venta.m>=130 && venta.m<170 &(desde>=1 & hasta<=500 & Cuartos==2 & hasta<170& hasta>=130&desde>=1 &tipo_de_vivienda===venta.name )){
            resultado.style.display="none"
              total.style.display="block"
              i++
              total.innerHTML=i
              plantilla(venta)
               console.log("condicion2 numero2")
               }
            else    if ( venta.m>=170 & venta.m<200 &(desde>130 & hasta<=500 && Cuartos==2 & hasta>=170&desde>=1 &tipo_de_vivienda===venta.name)){
              resultado.style.display="none"
                total.style.display="block"
                i++
                total.innerHTML=i
                plantilla(venta)
                 console.log("condicion3 numero3")
                 }
                  // validaciones para cuartos==3//
            else     if ( Cuartos==3 & venta.m>=200 &venta.m<500 & hasta>=200 &tipo_de_vivienda===venta.name){
              resultado.style.display="none"
                    total.style.display="block"
                    i++
                    total.innerHTML=i
                    plantilla(venta)
                  console.log(venta.m)
                     }
                     // validaciones para cuartos==5//
               else   if ( Cuartos==5 & venta.m>200 &venta.m<=500 & hasta>=500 &tipo_de_vivienda===venta.name){
                resultado.style.display="none"
                    total.style.display="block"
                    i++
                    total.innerHTML= i
                    plantilla(venta)
                  console.log(venta.m)
                     }
       
              
    }
    
  }
  if (hasta>0 & Cuartos>0 &hasta>=6 ) {
    validad_campos();
    div_propiedades.innerHTML=busqueda
    if (busqueda==="") {
    resultado.innerHTML="no se encontro nada"
      
    }
          }
         else  if (tipo_de_vivienda!="") {
          if (busqueda==="") {
            alert(" no se ha encontrado un resultado verifique los datos de busqueda1");
            window.location.reload()
              
            }
    
            validad_campos();
    div_propiedades.innerHTML=busqueda
           }
    
    else{
      alert(" no se ha encontrado un resultado verifique los datos de busqueda2");
      window.location.reload()
  ; 
  
    }
    
})// fin de funcion click//

mostrar_todas_las_propiedades();
  div_propiedades.innerHTML=html;