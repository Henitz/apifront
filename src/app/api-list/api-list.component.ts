import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {

  clientes: Cliente[] = [];
  idInformado!: number;
  nomeInformado!: string;


  constructor(private service: ApiService) { }

  ngOnInit(): void {
    }

    pesquisa(){
      this.service.getAll(this.idInformado, this.nomeInformado).subscribe((i)=>this.clientes=i)
    }

}
