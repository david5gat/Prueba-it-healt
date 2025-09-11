import { Component, OnInit, output } from '@angular/core';
import { UsuarioInterface } from '../../../interfaces/usuarioInterface';
import { UsuarioService } from '../../../services/usuario';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { take } from 'rxjs';
import { Form } from "../../dialog/form/form";


@Component({
  selector: 'app-usuario',
  imports: [ButtonModule, CommonModule, InputTextModule, FormsModule, TableModule, Form],
  templateUrl: './usuario.html',
  styleUrl: './usuario.scss'
})
export class Usuario implements OnInit{

  constructor(private UsuarioServ : UsuarioService){
  }

  dialogVisible = false;

  usuarios! : UsuarioInterface[];

  valorId : number = 0;

  ngOnInit(): void {
    this.usuario();
  }


    usuario(){
        this.UsuarioServ.getUsuarios().pipe(take(1)).subscribe({
          next: (r: UsuarioInterface[]) => {
            this.usuarios = r;
            console.log(this.usuarios.slice(0,5)); 
          }
        })

        console.log(this.usuarios);
        
    }


    buscarUsuario(id : number){
      let usuarioEncontrado =  this.usuarios.find(x => x.id = id)
      console.log(usuarioEncontrado);
      
    }


}
