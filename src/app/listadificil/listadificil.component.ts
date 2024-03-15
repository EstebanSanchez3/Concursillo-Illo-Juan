import { Component, OnInit } from '@angular/core';
//Librería de JavaScript para crear alertas, para dar estilo a las alertas ya que mi logica al acertar preguntas es con alert
import Swal from 'sweetalert2';
//Paquete de Angular proporciona funcionalidades de enrutamiento, permite navegación entre vistas o sin necesidad de recargar la página
import { Router } from '@angular/router';
//Importacion de la clase padre
import { ListaFacilComponent } from '../listaFacil/listaFacil.component';
@Component({
  selector: 'app-listadificil',
  templateUrl: './listadificil.component.html',
  styleUrls: ['./listadificil.component.css']
})

export class ListadificilComponent extends ListaFacilComponent implements OnInit {
  //Sobrescribiendo router y llamando al constructor del padre
  constructor(protected override router: Router) {
    super(router);
  }
  override preguntasAcertadas = 10;

  //Sobrescribiendo metodo padre y llamada a clase padre
  override respuestaCorrecta(esCorrecta: boolean) {
    super.respuestaCorrecta(esCorrecta);
  }

  //Sobrescribiendo metodo padre y llamada a clase padre
  override cambiarPregunta() {
      super.cambiarPregunta();
          //cambio de logica en preguntasAcrtada y nueva url
    if (this.preguntasAcertadas >= 1) {
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
        mensaje = "Darth Vader solo tiene 8 minutos y 6 segundos de tiempo en su primera aparición.";
        imageUrl = '/assets/vader.jpg';
        break;
      case 2:
        mensaje = "En 16 años de historia es la única nominada a los Razzie, en las que se encuentra: Peor Actor de Reparto, Peor Director y Peor Secuela";
        imageUrl = '/assets/atman.jpg';
        break;
      case 3:
        mensaje = " Se estima que el tamaño del mapa es de alrededor de 161,600 kilómetros cuadrados, lo que lo convierte en el mapa más grande en un juego de un solo jugador.";
        imageUrl = '/assets/map.jpg';
        break;
      case 4:
        mensaje = "Sólo Resident Evil 4 tiene 7 versiones, el primer juego de la saga se lanzó en 1997";
        imageUrl = '/assets/resident.jpg';
        break;
      case 5:
        mensaje = "Gobernó desde el 27 a.C. hasta su muerte en el año 14 d.C. Augusto fue el fundador del Principado, el sistema político que sucedió a la República Romana";
        imageUrl = '/assets/cesar.jpg';
        break;
      case 6:
        mensaje = "Ortro u Orto era un perro de dos cabezas, hijo de Equidna y Tifón, y hermano de Cerbero.";
        imageUrl = '/assets/ortro.jpg';
        break;
      case 7:
        mensaje = "A pesar de su diminuto tamaño, el colibrí tiene un corazón proporcionalmente enorme, ocupando hasta un 2.5% de su masa corporal.";
        imageUrl = '/assets/corazon.jpg';
        break;
      case 8:
        mensaje = "Habita fundamentalmente en aguas costeras australianas. Es considerada la criatura viva más peligrosa, venenosa y letal del mundo.​​";
        imageUrl = '/assets/avispa.jpg';
        break;
      case 9:
        mensaje = "A pesar de ser unos de los años más disputados de la historia, God of War se postuló triunfador de la gala​​";
        imageUrl = '/assets/godgod.jpg';
        break;
      case 10:
        mensaje = "Sólo El Señor de los Anillos: El Retorno del Rey​ obtuve 11 Oscars";
        imageUrl = '/assets/godgod.jpg';
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
