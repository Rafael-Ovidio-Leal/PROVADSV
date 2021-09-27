import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  colunasLivros: string[] = ['id', 'titulo', 'autor', 'genero', 'totalpaginas'];
  livrosTable = new MatTableDataSource<Livro>();
  livros: Livro[] = [];

  id!: number;
  livro!: Livro;

  constructor(private service: LivroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.list().subscribe((livros) => {
      this.livros = livros;
      console.log(livros)
    });
  }

}
