import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Usuario } from './features/component/usuario/usuario';

export const routes: Routes = [
    {path:'usuario',title:'usuario', component:Usuario},
    {path:'**',component:Usuario}
];
