import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  categorias:any;

  constructor(
    private categoriaService:CategoriaService,
    private snack:MatSnackBar
  ) { }

  ngOnInit(): void {
  
  }

}
