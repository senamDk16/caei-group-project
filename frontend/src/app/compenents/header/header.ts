import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  itemNav = [
    {
      "libelle": "Accueil",
      "path": "/"
    },
    {
      "libelle": "Client",
      "path": "/clients"
    }
  ]
}
