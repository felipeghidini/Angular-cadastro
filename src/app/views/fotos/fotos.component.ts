import { Component, OnInit, ViewChild } from '@angular/core';
import { FotoService } from '../../services/foto.service';
import { Observable } from 'rxjs';
import { Foto } from '../../models/foto.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from "@angular/material/table";


@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})

export class FotosComponent implements OnInit  {

 
  public fotos: Foto[] = [];
  dataSource!: MatTableDataSource<Foto>;
  resultsLength: number = 0;
  obs!: Observable<any>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private fotoService: FotoService){}

  ngOnInit(): void{
    this.getFotos();   
  }

  getFotos(){
    this.fotoService.getPhotos()
      .subscribe(
        fotos => {
          this.fotos = fotos;
    
          this.dataSource = new MatTableDataSource(this.fotos);
          this.resultsLength = this.fotos.length;

          this.dataSource.paginator = this.paginator;
          this.obs = this.dataSource.connect();
        }
      );
  }
}


