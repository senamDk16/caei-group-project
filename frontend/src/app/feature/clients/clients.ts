import { Component } from '@angular/core';

export interface Client {
  id: number;
  nom: string;
  prenom: string;
  telephone: string;
  adresse: string;
}


@Component({
  imports: [],
  selector: 'app-clients',
  styleUrl: './clients.css',
  templateUrl: './clients.html',
})

export class ClientComponent {

  clients: Client[] = [
    { id: 1, nom: 'Koffi', prenom: 'Jean', telephone: '+228 90 00 11 22', adresse: 'Lomé, Togo' },
    { id: 2, nom: 'Mensah', prenom: 'Abla', telephone: '+228 91 33 44 55', adresse: 'Atakpamé, Togo' },
    { id: 3, nom: 'Sow', prenom: 'Moussa', telephone: '+221 77 123 45 67', adresse: 'Dakar, Sénégal' }
  ];

  ajouterClient(): void {

    console.log('Ajouter un client');
  }

  editerClient(client: Client): void {

    console.log('Modifier client :', client);
  }

  supprimerClient(id: number): void {
    this.clients = this.clients.filter(c => c.id !== id);
  }
}
