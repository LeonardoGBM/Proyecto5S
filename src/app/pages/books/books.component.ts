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
    // Formulario
    abrirModal() {
      const modal = document.querySelector("#modal") as HTMLDialogElement;
      modal.showModal();
    }
    cerrarModal() {
      const modal = document.querySelector("#modal") as HTMLDialogElement;
      modal.close();
    }

    // Buscador
    value: string | undefined;
    
    value2: string | undefined;
}
