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
    abrirModal() {
      const modal = document.querySelector("#modal") as HTMLDialogElement;
      modal.showModal();
    }
    cerrarModal() {
      const modal = document.querySelector("#modal") as HTMLDialogElement;
      modal.close();
    }
}

