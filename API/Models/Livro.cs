using System;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Livro
    {
        //Construtor
        public Livro() => CriadoEm = DateTime.Now;

        //Atributos ou propriedades
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public string Genero { get; set; }
        public int TotalPaginas { get; set; }
        public DateTime CriadoEm { get; set; }

        public override string ToString() =>
            $"Título: {Titulo} | Autor: {Autor} | Genero: {Genero} | Total de Páginas: {TotalPaginas} | Criado em: {CriadoEm}";

    }
}