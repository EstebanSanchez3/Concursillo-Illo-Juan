import { Component, OnInit } from '@angular/core';
//Librería de JavaScript para crear alertas, para dar estilo a las alertas ya que mi logica al acertar preguntas es con alert
import Swal from 'sweetalert2';
//Paquete de Angular proporciona funcionalidades de enrutamiento, permite navegación entre vistas o sin necesidad de recargar la página
import { Router } from '@angular/router';
//Importacion de la clase padre
import { ListaFacilComponent } from '../listaFacil/listaFacil.component';
@Component({
  selector: 'app-lista-media',
  templateUrl: './lista-media.component.html',
  styleUrls: ['./lista-media.component.css']
})

export class ListaMediaComponent extends ListaFacilComponent implements OnInit {
  //Sobrescribiendo router y llamando al constructor del padre
  constructor(protected override router: Router) {
    super(router);
  }
  override preguntasAcertadas = 5;

  //Sobrescribiendo metodo padre y llamada a clase padre
  override respuestaCorrecta(esCorrecta: boolean) {
    super.respuestaCorrecta(esCorrecta);
  }

 //Sobrescribiendo metodo padre y llamada a clase padre
  override cambiarPregunta() {
      super.cambiarPregunta();
          //cambio de logica en preguntasAcrtada y nueva url
    if (this.preguntasAcertadas >= 10) {
      this.router.navigateByUrl('/listadificil');
    }
  }

  // Asignar el mensaje personalizado dependiendo de la pregunta actual
  //Sobreescribiendo metodo con nuevo contenido
  override mostrarMensajeCorrecto() {
    let mensaje;
    let imageUrl;
    switch (this.pregunta) {
      case 1:
        mensaje = "Es el máximo goleador de todos los tiempos con un total de 16 tantos.";
        imageUrl = '/assets/klose.jpg';
        break;
      case 2:
        mensaje = "Con fecha de estreno del 1937";
        imageUrl = '/assets/blancaNieves.jpg';
        break;
      case 3:
        mensaje = "Hugo Simpson es el hermano gemelo malvado de Bart Simpson. Sólo sale en un Especial de Halloween";
        imageUrl = '/assets/hugo.jpg';
        break;
      case 4:
        mensaje = "La Primera Guerra Mundial, fue un conflicto militar de carácter mundial que empezó el 28 de julio de 1914 y finalizó el 11 de noviembre de 1918";
        imageUrl = '/assets/guerraMundial.jpg';
        break;
      case 5:
        mensaje = "La señal de Igni es una de las cinco señales mágicas utilizadas por los brujos y provoca un estallido de fuego";
        imageUrl = '/assets/igni.jpg';
        break;
      case 6:
        mensaje = "En todas las plataformas a fecha de 2023, el número de ventas llega a 300 millones";
        imageUrl = '/assets/maincraf.jpg';
        break;
      case 7:
        mensaje = "ue un marino vasco que completó la primera vuelta a la Tierra de la historia de la humanidad en la Expedición de Magallanes-Elcano";
        imageUrl = '/assets/vuelta.jpg';
        break;
      case 8:
        mensaje = "Ganador de 2 premios Oscar, 3 Globos de Oro y 1 Bafta, con 38 nominacines en esas tres galas";
        imageUrl = '/assets/hanzzimer.jpg';
        break;
      case 9:
        mensaje = "Además de las ya mencionadas, también cuentan con Pepsi, Rufles, Chipicao y Churreria San Ana entre otras";
        imageUrl = '/assets/PepsiCo.jpg';
        break;
      case 10:
        mensaje = "Fue un deporte con connotaciones rituales y bélicas, jugado desde el año 1400 a. C.​ por los pueblos precolombinos de Mesoamérica";
        imageUrl = '/assets/juegoCadera.jpg';
        break;
      default:
        mensaje = '';
    }

    //Estilo de SweetAlert 
    //Mismo estilo
    Swal.fire({
      title: '¡Correto!',
      text: mensaje,
      imageUrl: imageUrl,
      imageWidth: 350,
      imageHeight: 200,
      imageAlt: 'Imagen de pregunta',
      confirmButtonText: '¡Siguiente!',
      //Clase para ccs para tener un estilo mas personalizado
      customClass: {
        popup: 'alerta',
        confirmButton: 'botonAlert'
      }
    });
  }

  //Inicializa toda la logica
  override ngOnInit(): void {
    super.ngOnInit();
  }
}




