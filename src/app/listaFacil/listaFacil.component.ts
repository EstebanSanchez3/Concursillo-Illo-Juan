import { Component, OnInit } from '@angular/core';
//Librería de JavaScript para crear alertas, para dar estilo a las alertas ya que mi logica al acertar preguntas es con alert
import Swal from 'sweetalert2';
//Paquete de Angular proporciona funcionalidades de enrutamiento, permite navegación entre vistas o sin necesidad de recargar la página
import { Router } from '@angular/router';
@Component({
  selector: 'lista-facil',
  templateUrl: './listaFacil.component.html',
  styleUrls: ['./listaFacil.component.css']
})

export class ListaFacilComponent implements OnInit {
  //Inyecta el servicio Router
  constructor(protected router: Router) { }
  preguntasAcertadas: number = 0;
  pregunta: number;
  preguntasDisponibles: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  indice: number

  respuestaCorrecta(esCorrecta: boolean) {
    if (esCorrecta) {
      //LLama al metodo con el mensaje personalizado
      this.mostrarMensajeCorrecto();
      //Incrementa el numero para contabilizar las preguntas
      this.preguntasAcertadas++;
      this.cambiarPregunta();
      //Logica para pregunta erronea, de momento se quedara asi, devuelve Swal.fire simple y no leva a ninguna vista
    } else {
      Swal.fire("PREGUNTA FALLADA");
      return;
    }
  }

  cambiarPregunta() {
    //Encuentra el índice de la pregunta actual con indexOf
    const indice = this.preguntasDisponibles.indexOf(this.pregunta);
    // Elimina la pregunta actual (una) de las preguntas disponibles para que no se repitan con .splice
    this.preguntasDisponibles.splice(indice, 1);
    //Si aun quedan preguntas (indices, numeros)
    if (this.preguntasDisponibles.length > 0) {
      // Genera un nuevo índice aleatorio
      const nuevoIndice = Math.floor(Math.random() * this.preguntasDisponibles.length);
      // Asigna la nueva pregunta aleatoria
      this.pregunta = this.preguntasDisponibles[nuevoIndice];
      //Si el numero de preguntas acertadas incrementadas es igual a 5
      if (this.preguntasAcertadas >= 5) {
        //Se mueve a la vista de listaMedia
        this.router.navigateByUrl('/lista-media');
      }
    }
  }

  // Asignar el mensaje personalizado dependiendo de la pregunta actual
  mostrarMensajeCorrecto() {
    let mensaje;
    let imageUrl;
    switch (this.pregunta) {
      case 1:
        mensaje = "Esta etapa se caracteriza por el uso generalizado de herramientas y armas hechas de una aleación de cobre y estaño, conocida como bronce.";
        imageUrl = '/assets/EspañaCampeona10.jpg';
        break;
      case 2:
        mensaje = "El Hacha Leviatán fue creada por los hermanos huldra para Faye, y ésta se la entregó a Kratos al morir";
        imageUrl = '/assets/hachaKratos.jpg';
        break;
      case 3:
        mensaje = "Las seis gemas son mente, alma, espacio, poder, tiempo y realidad.";
        imageUrl = '/assets/gemas.jpg';
        break;
      case 4:
        mensaje = "La rosa encantada es un recordatorio de que la belleza está en el interior";
        imageUrl = '/assets/bellaBestia1.jpg';
        break;
      case 5:
        mensaje = "Los Lannister gobernaron como los Reyes de la Roca hasta que Aegon el Conquistador llegó a Poniente con sus dragones.";
        imageUrl = '/assets/lanister.jpg';
        break;
      case 6:
        mensaje = "Rusia, con 17.075.200 km² de superficie";
        imageUrl = '/assets/mapaMundi.jpg';
        break;
      case 7:
        mensaje = "Ha sido nominado a mejor actor hasta en seis ocasiones";
        imageUrl = '/assets/elRenacido.jpg';
        break;
      case 8:
        mensaje = "No en vano, los romanos, inspirados en la tradición religiosa de los griegos, importaron la figura de Dioniso";
        imageUrl = '/assets/dionisio.jpg';
        break;
      case 9:
        mensaje = "Los Aku-Aku son espíritus benévolos o malignos de clanes o familias según el lugar determinado de cada espíritu. Estos espíritus son manifestaciones espirituales de habitantes que violaron las normas sagradas (tapu en idioma rapanui)";
        imageUrl = '/assets/akuAku.jpg';
        break;
      case 10:
        mensaje = "El origen de la tecnología Wifi se remonta a la década de 1970, esto fue seguido por el desarrollo de los primeros dispositivos Wifi en 1997";
        imageUrl = '/assets/wifi.jpg';
        break;
      default:
        mensaje = '';
    }

    //Estilo de SweetAlert 
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
  ngOnInit(): void {
    this.pregunta = this.preguntasDisponibles[Math.floor(Math.random() * this.preguntasDisponibles.length)];
  }
}



