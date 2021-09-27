import { Livro } from './../../../models/livro';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-listar',
  template: `
    <p>
      listar works!
    </p>
  `,
  styles: [
  ]
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
