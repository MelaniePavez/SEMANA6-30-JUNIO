import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { MenuController } from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: ActivatedRoute,   private menu: MenuController) {}

  email: string = '';
  password: string = '';
  bienvenidos: string='Bienvenid@';

  ngOnInit() {
    this.menu.close("mainMenu");
    // Obtener los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.password = params['password'];
    });
  }

  openWhatsApp() {
    const phoneNumber = "1234567890"; // Reemplaza con el número de WhatsApp
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank'); // Abre WhatsApp en una nueva pestaña o app
  }


}
