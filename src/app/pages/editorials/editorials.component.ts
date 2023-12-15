import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-editorials',
  templateUrl: './editorials.component.html',
  styleUrls: ['./editorials.component.css']
})
export class EditorialsComponent  implements OnInit {
  listar: any[] = [];
  nuevoDato:  string='';
  correo:  string='';
  authService: any;
  constructor(private extraer: ServiceService) {}

  ngOnInit() {
    this.traer();
  }

  traer() {
    this.extraer.datos().subscribe(data => {
      this.listar = data;
      console.log(data);
    });
  }

  first: number = 0;

    rows: number = 10;

    onPageChange(event: any) {
      // Log the event to see its structure
      console.log(event);

      // Adjust this part based on the actual structure of the event
      this.first = event.first;
      this.rows = event.rows;
    }
 

    //Funcion para agregar datos:
    agregarDato(){
      const data = {
        nombre: this.nuevoDato,
        correoElectronico: this.correo
      };
    
      this.extraer.agregarDato(data).subscribe(response => {
        console.log('Dato agregado', response);
        // Puedes agregar lógica adicional aquí si es necesario
      });
    }

    //modal nuevo

    displayDialog: boolean = false;

    showDialog() {
    this.displayDialog = true;
    }

    hideDialog() {
    this.displayDialog = false;
    }


    //Funcion para eliminar datos
    eliminar(dato: any) {
      if (confirm('¿Elimina a joselito XD?')) {
        this.extraer.eliminar(dato.id).subscribe(response => {
          console.log('Libro eliminado', response);
          // Actualiza la lista después de eliminar
          this.traer();
        });
      }
    }

}

