import { Component, OnInit } from '@angular/core'; 
import { MenuController } from '@ionic/angular';  

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'] 
})
export class ProductosPage implements OnInit {

  constructor(private menu: MenuController) { }

  productos = [
    { nombre: 'Base Líquida', precio: 12000, imagen: '' },
    { nombre: 'Labial Mate', precio: 8500, imagen: '' },
    { nombre: 'Máscara de Pestañas', precio: 9000, imagen: '' },
    { nombre: 'Rubor en Polvo', precio: 7000, imagen: '' },
    { nombre: 'Sombra de Ojos', precio: 11000, imagen: '' },
    { nombre: 'Delineador Líquido', precio: 6500, imagen: '' },
  ];

  ngOnInit() {
    this.menu.close('mainMenu');
  }
}
