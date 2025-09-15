import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-form',
  imports: [DialogModule, ButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form implements OnInit {

  formUsuario! :FormGroup

  constructor(private fb : FormBuilder, private usuarioServ : UsuarioService){
    
  }

  @Input() Dvisible = false;
  @Output() Dnotvisible = new EventEmitter<boolean>();
  

  ngOnInit(): void {
    this.formUsuario = this.fb.group({
      name:[Validators.required,''],
      email:[Validators.required,''],
      phone:[Validators.required,''],
      address:[Validators.required,''],
    }) 
  }

  cambioDialog(){
    this.Dnotvisible.emit(false);
  }

  usuarioNuevo(){

    Swal.fire({
      title: 'Usuario enviado',
      timer: 2000
    });
    this.cambioDialog()
    this.usuarioServ.postUsuario({...this.formUsuario.value})
  }
}
