import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Item } from '../../interfaces/Item.interface';
import { ItemsService } from '../../services/items.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  items: Item =
  {
    code: '',
    description: '',
    cost: 0,
    price: 0,
  };
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private itemsService: ItemsService){
              }
  

  ngOnInit(): void {
    
    if(this.router.url.includes('editar')){
      this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.itemsService.getById(id))
      )
      .subscribe(Items => this.items = Items)
    }
    
  }

  saveItem(){
    if(this.items.description.trim().length === 0){
      return;
    }

    if(this.items.id){
      this.itemsService.put(this.items)
        .subscribe(
          resp => {this.router.navigate(['items']);
        })
    }else{
      this.itemsService.post(this.items)
        .subscribe(resp => {
          this.router.navigate(['items']);
      })
    }
  }

}
