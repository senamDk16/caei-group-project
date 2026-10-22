import { Component, Inject, OnInit, Service } from '@angular/core';
import { ClientResponse } from './interfaces/clients.response';
import { ClientRequest } from './interfaces/clients.request';
import { ClientService } from './service/clients';



@Component({
  imports: [],
  selector: 'app-clients',
  styleUrl: './clients.css',
  templateUrl: './clients.html',
})

export class ClientComponent implements OnInit{
  // service:ClientService = Inject(ClientService)

  constructor(private service:ClientService){}

  ngOnInit(): void {
      this.getAll()
  }

  clientsList:ClientResponse[] = []
  requestClient:ClientRequest = {}
  client:ClientResponse = {}

    ajouterClient(){

  }
  editerClient(){

  }

  getAll(){
    this.service.getAllClient().subscribe({
      next: (data)=>{
        this.clientsList = data
      }
    })
  }

  getOne(id:number){
    this.service.getOneClient(id).subscribe({
      next: (data) => this.client = data
    })
  }

  postClient(req:ClientRequest){
    this.service.postClient(req).subscribe({
      next: (data)=> this.client = data
    })
  }

  putClient(req:ClientRequest, id:number){
    this.service.putClient(id, req).subscribe({
      next: (data)=> this.client = data
    })
  }
  delete(id:number){
    this.service.delete(id).subscribe({
      next: ()=> console.log("delete")
    })
  }
}
