// books.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ServiceService } from 'src/app/service/service.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [DialogService, MessageService]
})
export class BooksComponent  implements OnInit {

  listar: any[] = [];
  nuevoDato:  string='';
  correo:  string='';
  authService: any;
  constructor(private extraer: ServiceService) {}

  ngOnInit() {
    this.traer();
  }
    //Funcion para Enlistar datos
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
    exDialog: boolean = false;



    showDialog() {
    this.displayDialog = true;
    }
    hideDialog() {
      this.displayDialog = false;
      }

    //Formulario de editar
    EditDialog() {
      this.exDialog = true;
      }
    exitDialog() {
      this.exDialog = false;
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


