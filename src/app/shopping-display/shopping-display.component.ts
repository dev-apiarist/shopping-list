import { Items } from './../Models/items';
import { Component, OnInit } from '@angular/core';
import { ShoppingListServiceService } from '../shopping-list-service.service';

@Component({
  selector: 'app-shopping-display',
  templateUrl: './shopping-display.component.html',
  styleUrls: ['./shopping-display.component.css']
})
export class ShoppingDisplayComponent implements OnInit {
  items: Items[] = []

  constructor(private shoppingListService:ShoppingListServiceService,) { }

  ngOnInit(): void {
    this.getlist();
  }
  getlist() {
    this.shoppingListService.getAllItems().subscribe(results=>{this.items = results.data})
  }

  deleteItem(itemId:string){
    if(confirm("Are you sure you want to delete this item?")){
      this.shoppingListService.deleteItem(itemId).subscribe(()=>{
        this.getlist();
      })
    }
  }
}
