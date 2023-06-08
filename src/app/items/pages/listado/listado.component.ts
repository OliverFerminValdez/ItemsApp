import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Item } from '../../interfaces/Item.interface';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{

  items!: Item[];
  totalItems: number = 0;
  constructor(private itemsService: ItemsService){

  }
  
  ngOnInit(): void {
    this.itemsService.get()
      .subscribe(resp => this.items = resp)
  } 

  delete(id: string){

    Swal.fire({
    title: 'Esta seguro?',
    text: "Desea eliminar este registro",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
       }).then((result) => {
    if (result.isConfirmed) {
      
      this.itemsService.delete(id)
                .subscribe(resp =>{
                    this.itemsService.get()
                      .subscribe(resp => this.items = resp)
                });
      Swal.fire(
        'Eliminado!',
        'El registro se elimino correctamente.',
        'success'
      )
    }
    })
  }
}
