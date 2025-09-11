import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioInterface } from '../interfaces/usuarioInterface';
import { Usuario } from '../features/component/usuario/usuario';
import { Observable, of } from 'rxjs';
import { setMaxListeners } from 'events';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http : HttpClient){

  }

  url="https://jsonplaceholder.typicode.com/"

  getUsuarios(): Observable<UsuarioInterface[]>{
    return this.http.get<UsuarioInterface[]>(this.url+'users')
  }

  postUsuario(Usuario:UsuarioInterface){
   return this.http.post<UsuarioInterface[]>(this.url+'user',Usuario).subscribe({
    next : r=> console.log(r)
   })
  }

}
