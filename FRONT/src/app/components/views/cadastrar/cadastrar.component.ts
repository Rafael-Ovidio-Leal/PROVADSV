import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  id!: number;
  titulo!: string;
  autor!: string;
  genero!: string;
  totalpaginas!: number;


  constructor(
    private service: LivroService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id = params.id;
      if(this.id != undefined){
        this.service.getById(this.id).subscribe((livro)=>{
          this.titulo = livro.titulo;
          this.autor = livro.autor;
          this.genero = livro.genero;
          this.totalpaginas = livro.totalpaginas;
        });
      }
    });
  }

  cadastrar(): void{
    let livro: Livro ={
        titulo: this.titulo,
        autor: this.autor,
        genero: this.genero,
        totalpaginas: this.totalpaginas
    };
    this.service.create(livro).subscribe((livro)=>{
      console.log(livro);
      this.router.navigate(["livro/listar"]);
    });
  }

}
